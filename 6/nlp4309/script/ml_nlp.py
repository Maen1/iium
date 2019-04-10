import nltk
from nltk.corpus import names
import random

l_n = (
    [(name, 'male') for name in names.words('male.txt')] + 
    [(name, 'female') for name in names.words('female.txt')] 
        )

random.shuffle(l_n)

def g_f(word):
    return{'l_l':word[-1]}


print(g_f('khaled'))

fs = [(g_f(n), gender) for (n, gender) in l_n]
tr, ts = fs[2000:] , fs[:2000]
clf = nltk.NaiveBayesClassifier.train(tr)

print(clf.classify(g_f('memo')))
