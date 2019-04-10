import nltk
# from nltk.corpus import names
import random

fm = open("./f_n.txt", "r")
fem = fm.read()
f_n = fem.split()
fm.close()
mm = open("./f_n.txt", "r")
men = mm.read()
m_n = men.split()
mm.close()

l_n = (
    [(name, 'male') for name in m_n] + 
    [(name, 'female') for name in f_n] 
        )

random.shuffle(l_n)

def g_f(word):
    return{'l_l':word[-2:]}

print(g_f('fatiha'))

fs = [(g_f(n), gender) for (n, gender) in l_n]
tr, ts = fs[10:] , fs[:10]
clf = nltk.NaiveBayesClassifier.train(tr)

print(clf.classify(g_f('melek')))
