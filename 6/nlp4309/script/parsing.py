import nltk

sent = ['I', 'shot', 'an', 'elephant', 'in', 'my', 'pajamas']
grammar = nltk.CFG.fromstring("""
S -> NP VP
PP -> P NP
NP -> Det N | Det N PP | 'I'
VP -> V NP | VP PP
Det -> 'an' | 'my'
N -> 'elephant' | 'pajamas'
V -> 'shot'
P -> 'in'
""")
parser = nltk.ChartParser(grammar)
for tree in parser.parse(sent):
    print(tree)