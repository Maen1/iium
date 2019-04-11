

| ID   | ONION | POATATO | BURGER | MILK | BEER |
| ---- | ----- | ------- | ------ | ---- | ---- |
| t2   | 1     | 1       | 1      | 0    | 0    |
| t2   | 0     | 1       | 1      | 1    | 0    |
| t3   | 0     | 0       | 0      | 1    | 1    |
| t4   | 1     | 1       | 0      | 1    | 0    |
| t5   | 1     | 1       | 1      | 0    | 1    |
| t6   | 1     | 1       | 1      | 1    | 1    |
|      | 4     | 5       | 4      | 4    | 2    |



$ suport(x U y) = \frac{\text{number of transaction s supporting (x U y)}}{\text{total number of transaction}}​$



Transaction  Identifier Items
1	 Soda, milk, diapers, baby food
2	 Fruit juice, soda, diapers
3	 Cigarettes, diapers, baby food
4	 Chocolates, diapers, milk, apples
5	 Tomatoes, water, apples, soda
6	 Spaghetti, diapers, baby food, soda
7	 Water, soda, baby food
8	 Diapers, baby food, spaghetti
9	 Baby food, soda, diapers, milk
10       Apples, yogurt, baby food 



$ confidence (\text{x -> y }) = \frac{support(x U y)}{support(x)}$



$\text{lift(x->y)} =  \frac{\text{number of transaction s supporting (x U y)}}{\text{support(x) * support(y)}}$

lift = 1 => no association

 

delete values under threshold

use combinatioin to get number of pais = $ \frac{n!}{r!(n-r)!}​$

then delete values under threshold

