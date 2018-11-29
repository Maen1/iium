## SVM

#### Separating Hyperplane

 sperate the data into classes.

- in one dimension, an hyperplane is called a point
- in two dimensions, it is a line
- in three dimensions, it is a plane
- in more dimensions you can call it an hyperplane

the objective of a SVM is to **find the optimal separating hyperplane**:

- because it correctly classifies the training data
- and because it is the one which will generalize better with unseen data

#### Margin

Given a particular hyperplane, we can compute the distance between the hyperplane and the closest data point. Once we have this value, if we double it we will get what is called the **margin**.

This means that **the optimal hyperplane will be the one with the biggest margin.**

the objective of the SVM **is to find  the optimal separating hyperplane which maximizes the margin of the training data.**

#### Vector

##### The magnitude

For our vector →OA,   ‖OA‖ is the length of the segment OA

calculate the distance OA using [Pythagoras' theorem](http://en.wikipedia.org/wiki/Pythagorean_theorem):

$OA^2=OB^2+AB^2$

##### The direction

 The **direction** of a vector $u(u1,u2)$ is the vector  $w(\frac{u1}{‖u‖},\frac{u2}{‖u‖})$; u1: x projection , u2 is for y.

​	$cos(θ)=\frac{u1}{‖u‖}$

​	$cos(a)=\frac{u2}{‖u‖}$



### The dot product

​	$ x⋅y=‖x‖‖y‖cos(θ)$ 

**the algebraic definition of the dot product** 

​	$ x⋅y=x1y1+x2y2=\sum_{i=1} ^2=1(x_iy_i)$



### The SVM hyperplane

$ y = ax + b$ or $ w^Tx = 0$



# Regression

### Formulas

$a = (\sum{y}) (\sum{x^2}) - (\sum{x}) (\sum{x y}) / n(\sum{x^2} ) - (\sum{x})^2)  $

$ a = \bar{y} - b \bar{x}$

$ b = n(\sum{x y}) -(\sum{x})(\sum{y})  /  n(\sum{x^2}) - (\sum{x})^2 $

$S_{x y} = \sum{x y} - \frac{\sum{x} \sum{y}}{n}$

$ S_{x x} = \sum{x^2} - \frac{(\sum{x})^2}{n}$

$ b = \frac{S_{x y}}{S_{x x}}​$

$ RMSE = \sqrt{\sum{(y_i - f(x_i))^2}}$  

# Boosting

there is nothing interesting in slides 