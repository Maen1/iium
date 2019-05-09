import string 
import tweepy  
import matplotlib.pyplot as plt
from textblob import TextBlob, Word, Blobber
from textblob.classifiers import NaiveBayesClassifier
from textblob.taggers import NLTKTagger
import sys


#  here to convert it to percentage
def percentage (part , whole ) :
    return 100 * float(part)/float (whole)


#  here for authantication 
consumerKey="#"
consumerSecret="#"
acessToken="#"
acessTokenSecret="#"
auth = tweepy.OAuthHandler(consumerKey, consumerSecret)
auth.set_access_token(acessToken, acessTokenSecret)
api = tweepy.API(auth)
 
# here user searchs tweets using keyword
searchTerm =raw_input("Enter keyword/hashtag to search about : ")  
numberOfSearch = int(input("Enter Number of tweets to analyse: "))
# from here u retrive tweets 
tweets =tweepy.Cursor(api.search, q=searchTerm , lang ="English").items(numberOfSearch)

postive = 0 
negative = 0 
neutral = 0
polarity = 0 
# analysis
for tweet in tweets :
    print(tweet.text)
    analysis = TextBlob(tweet.text)
    polarity += analysis.sentiment.polarity

    if (analysis.sentiment.polarity == 0):
        neutral +=1
    elif (analysis.sentiment.polarity < 0):
        negative +=1
    elif (analysis.sentiment.polarity > 0):
        postive +=1

postive  = percentage(postive, numberOfSearch)
negative = percentage(negative, numberOfSearch)
neutral = percentage(neutral, numberOfSearch)

postive = format(postive, '.2f')
negative = format(negative, '.2f')
neutral = format(neutral, '.2f')


if(polarity == 0):
    print("Neutral")
elif(polarity < 0):
    print("Negtive")
elif(polarity > 0):
    print("postve")
# pie chart 
labels = ['postive [' + str(postive) + '%]'],['Neutral [' + str(neutral) + '%]'],['Negtive [' + str(negative) + '%]'],
sizes = [postive,neutral,negative]
colors = ['yellowgreen', 'gold', 'red']
patches , text = plt.pie(sizes, colors=colors, startangle=90)
plt.legend(patches, labels, loc="best")
plt.title ("How people reacting on" + searchTerm + "by analyzing" + str(numberOfSearch) + "tweets.")
plt.axis('equal')
plt.tight_layout()
plt.show()