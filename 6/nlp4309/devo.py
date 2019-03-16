# import the fst module
from nltk.draw import *
from nltk.nltk_contrib.fst.fst import *
# import the string module
import string

# Define a list of all vowels for convenience
vowels = ['a', 'e', 'i', 'o', 'u']

# Instantiate an FST object with some name
f = FST('devowelizer')

# All we need is a single state ...
f.add_state('1')
# and this same state is the initial and the final state
f.initial_state = '1'
f.set_final('1')

# Now, we need to add an arc for each letter; if the letter is a vowel
# then transition outputs nothing but otherwise it outputs the same
# letter that it consumed.
for letter in string.ascii_lowercase:

    if letter in vowels:
        f.add_arc('1', '1', (letter), ())
        
    else:
        f.add_arc('1', '1', (letter), (letter))
        

# Evaluate it on some example words (.join is the reverse of split(), it joins two items together)
# Outputs 'vwl'
print(''.join(f.transduce(['v', 'o', 'w', 'e', 'l'])))

#without join : output is a separate characters in a list
print(f.transduce(['v', 'o', 'w', 'e', 'l']))

# Outputs 'xcptn'
print(''.join(f.transduce('e x c e p t i o n'.split())))

# Outputs 'cnsnnt'
print(''.join(f.transduce('c o n s o n a n t'.split())))

disp = FSTDisplay(f)
#disp.transduce("e x c e p t i o n".split())
#disp.loop()
