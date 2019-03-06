from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize

ps = PorterStemmer()

words = ["python", "pythoner", "pythoning", "pythoned", "pythonly"]

for w in words:
    print(ps.stem(w))

text = "it's so important to be pythonly while you are pythoning in python. All pythoners had pythoned poorly at least once."
tk_words = word_tokenize(text)
for w in tk_words:
    print(ps.stem(w))