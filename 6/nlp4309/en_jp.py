# MHD KHALED MAEN 1523591
# Mohammad Alrefaei 1617111

from nltk.nltk_contrib.fst.fst import *

class myFST(FST):    
    def recognize(self, iput, oput):
        self.inp = list(iput)
        self.outp = list(oput)
        
        if list(oput) == f.transduce(list(iput)):
            return True
        else:
            return False


# or this more verbose way
f = myFST('example')
# first add the states in the FST
for i in range(1,3):
    f.add_state(str(i)) # add states '1' .. '5'

# add one initial state
f.initial_state = '1' # -> 1

words = {
    'com'       : 'kon',
    'pu'        : 'pyu',
    'ra'        : 'ra',
    'dia'       : 'dio',
    'computer'  : 'konpyutaa',
    'radio'     : 'rajio',
    'game'      : 'gemu',
    'friend'    : 'friendo',
    'film'      : 'firumu',
    'rap'       : 'rappu',
    'bus'       : 'basu',
}


for key, value in words.items():
    f.add_arc('1', '2', key, value) 

f.set_final('2') 


inp = input("English word: ")

outp = words[inp]

if f.recognize(inp, outp):
    print("japanese word: " + outp)
else:    
    print("reject")

FSTDisplay(f)
