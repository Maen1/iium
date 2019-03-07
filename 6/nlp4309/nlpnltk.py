# example that uses the nltk_contrib FST class
import nltk
# from nltk_contrib.fst.draw_graph import *
from nltk_contrib.fst.fst import *

class myFST(FST):    
    def recognize(self, iput, oput):

        # insert your codes here
        #self.inp = iput.split()
        #self.outp = oput.split()
        self.inp = list(iput)
        self.outp = list(oput)
        #f.transduce("abc")        
        
        if list(oput) == f.transduce(list(iput)):
            #print(" ".join(f.transduce(iput.split())))        
            return True
        else:
            return False

# you can define an FST either this way:
#f = myFST.parse("example", """
#-> 1
#1 -> 2 [a:1]
#2 -> 2 [a:0]
#2 -> 2 [b:1]
#2 -> 3 [:1]
#3 -> 4 [b:1]
#4 -> 5 [b:]
#5 ->
#""")

# or this more verbose way
f = myFST('example')
# first add the states in the FST
for i in range(1,6):
    f.add_state(str(i)) # add states '1' .. '5'

# add one initial state
f.initial_state = '1' # -> 1

# add all transitions
f.add_arc('1', '2', ('a'), ('1')) # 1 -> 2 [a:1]
f.add_arc('2', '2', ('a'), ('0')) # 2 -> 2 [a:0]
f.add_arc('2', '2', ('b'), ('1')) # 2 -> 2 [b:1]
f.add_arc('2', '3', ('#'), ('1')) # 2 -> 3 [#:1]
f.add_arc('3', '4', ('b'), ('1')) # 3 -> 4 [b:1]
f.add_arc('4', '5', ('b'), ('#')) # 4 -> 5 [b:#]

# add final/accepting state(s)
#f.set_final('3') # 5 ->
f.set_final('5') # 5 ->

# use the nltk transduce function
#print(" ".join(f.transduce("a b a b b".split())))

# use the recognize function defined in myFST
#if f.recognize("a b a b b", "1 1 - 1 1"):
inp = "aab#bb"
outp = "10111#"
print(inp)

if f.recognize(inp, outp):
    print(outp)
    print("accept")
else:    
    print("reject")

disp = FSTDisplay(f)