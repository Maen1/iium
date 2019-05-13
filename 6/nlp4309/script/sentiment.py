import nltk.classify.util as nu
from nltk.corpus import movie_reviews
from nltk.classify import NaiveBayesClassifier

def word_feats(words):
    return dict([(word, True) for word in words ])

neg = movie_reviews.fileids('neg')
pos = movie_reviews.fileids('pos')

negFeats = [(word_feats(movie_reviews.words(fileids=[f])), 'neg') for f in neg]
posFeats = [(word_feats(movie_reviews.words(fileids=[f])), 'pos') for f in pos]

print(int(len(negFeats) * 3/4))
negCutOff = int(len(negFeats) * 3/4)
posCutOff = int(len(posFeats) * 3/4)

trainFeats = negFeats[:negCutOff] + posFeats[:posCutOff]
testFeats = negFeats[negCutOff:] + posFeats[posCutOff:]

print('train on %d , and test on %d' %(len(trainFeats) , len(testFeats)))

clf = NaiveBayesClassifier.train(trainFeats)

print('accuracy:', nu.accuracy(clf, testFeats))
clf.show_most_informative_features()
