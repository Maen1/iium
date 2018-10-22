# Computation and complexity

## DFA

 * Need to check all input possibility. 
 * We may have a trap state.

## NFA 

* Our concern is the accepted language.
* Using $\lambda$ when we get stuck 🤪.

## Equivalence of DFA and NFA

* Make a table with the all state and input
* Construct the new state output.
* Delete the ones who has no connections with the root.
* BTW you should write the new state with mostach brackets {🐸}.

## Regular Expression

* $ + $ => U
* . => .
* nothing concatinating with anything is nothing 🧐 

## Regular Grammers

* right just go baby.
* S -> abA empty state between S and A
* left is sucks:
  * S -> Aa => A -> a // we delete S I have to idea why? 
  * B -> A => B -> A
  * B -> Aa => A -> aB
  * A -> a => S -> aA // S came again 🤦🏻‍♂️