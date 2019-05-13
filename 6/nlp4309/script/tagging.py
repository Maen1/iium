import nltk
from nltk.corpus import brown

bts = brown.tagged_sents(categories='news')
bs = brown.sents(categories='news')
uni_tagger = nltk.UnigramTagger(bts)
print(uni_tagger.tag(bs[2007]))

print(uni_tagger.evaluate(bts))

sz = int(len(bts) * 0.9)
print(sz)

train_sents = bts[:sz]
test_sents = bts[sz:]
uni_tagger = nltk.UnigramTagger(train_sents)
print(uni_tagger.evaluate(test_sents))

#Bigram tagging
bi_tagger = nltk.BigramTagger(train_sents)
unseen_sents = bs[4203]
print(bi_tagger.tag(unseen_sents))
print(bi_tagger.evaluate(test_sents))