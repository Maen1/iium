import nltk

# tokenizing words seprate by words sentences by sentences 
# corpora: body of the text
# lexicon: words and their means

from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords

text = "Hello World..., it's nice to see you? it's been a long time"

print(sent_tokenize(text))
print(word_tokenize(text))

stop = "This sentence should have some of stop words like and , next and so on."

stop_words = set(stopwords.words('english'))
print(stop_words)
words = word_tokenize(stop)
filtered_words =[w for w in words if not w in stop_words]

print(filtered_words)

