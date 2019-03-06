import nltk

# tokenizing words seprate by words sentences by sentences 
# corpora: body of the text
# lexicon: words and their means

from nltk.tokenize import sent_tokenize, word_tokenize

text = "Hello World..., it's nice to see you? it's been a long time"

print(sent_tokenize(text))
print(word_tokenize(text))