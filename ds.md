# Data science
## Explanatory Data Analysis
 row data => organize => frequency distrubution => visualizing => EDA (checkout what missed and outliers)

 data:  22, 23, 25 , 25 ...... 
 |steam|leaf|
  |--|--|
  |2|2,3,5,5

 ## Data science process
 * Random (whatever)
 * Cluster ( 1 huge group)
 * Stratified (male and female)
 * Systematic (k = #p / #s,  select every $ k^th $ elemet)

## Data Science Roadmap
* frame the problem 
    *  is about asking the right questions.
    *  understaing the problem
* Understand the data
    * data size
    * combine and join data ...., sql stuff :)
* Extract Features
    * characteristic of the data
* Model Analyses
* Present Results
* Iteration 
    * reframing the problem to get better results 
> machine learning is predicting, descripting, classification
> zero in = focus

Here's what the program will have to do:
Create an Interactive Session

1. Load the content image 
2. Load the style image
3. Randomly initialize the image to be generated 
4. Load the VGG16 model
5. Build the TensorFlow graph:
    - Run the content image through the VGG16 model and compute the content cost
    - Run the style image through the VGG16 model and compute the style cost
    - Compute the total cost
    - Define the optimizer and the learning rate
6. Initialize the TensorFlow graph and run it for a large number of iterations, updating the generated image at every step.

----

* Data collection : all inof about product A

* Feature Extraction: choose features realted to the ouput t (reduce time, cost ...)

* Cleaning & Integration: 
  * keep/ measure/ delete missing data
  * remove outliers
  * if there is more than one dataset 

  ---


| TD   | -                                   |
| ---- | ----------------------------------- |
| 1    | sode , milk , diapers, baby food    |
| 2    | Fruite juice, soda, didpers         |
| 3    | Cigarettes, diapers, baby food      |
| 4    | chocolates, diapers, mile, apples   |
| 5    | tomatoes, water , apples, soda      |
| 6    | spaghetti, diapers, baby food, soda |
| 7    | water, soda, baby food              |
| 8    | diapers, baby food, spaghetti       |
| 9    | baby food, soda , diapers, mile     |
| 10   | apples, yogurt, baby food           |



## support

$support (XUY) = \frac{num of transacation supporting (XUY)}{num oftransacation}$ 

$support (X) = \frac{num of transacation supporting (X)}{num oftransacation}$ 

S(soda) = 60 %

### Confidence

$C(x -> y) = p(X|Y) = \frac{S(XUY)}{S(X)}$

C([baby food, diapers],soda) = 3/5 = 60%

### Lift

$L(x->y) = \frac{S(XUY)}{S(X) * S(Y)}$

L([baby food, diapers],soda) = .3/(.5*.6) = 100%





## 2. Data Collection, Sampling and Pre-Processing



> If we have data, let’s look at data. If all we have
> are opinions, let’s go with mine.

### Types of Data source

* Transaction data : it is usually stored in a massive on-line transaction processing (OLTP) relational databases.
* Unstructured Data: Embedded in text documents(emails, web pages, files...) or multimedia content.
* Qualitative / expert-based data: 
* Publicly available data: Government data , Social data

## Sampling

### Types of Data Elements

* Continuous : defined on an interval that can be limited or unlimited (sales, income ..)

* Categorical:

  * Nominal

  * Ordinal
  * Binary

### Visual Data Exploration

Histogram , Ogives , Frequency polygon , Pie chart

### Missing Values

most popular schemes to deal with missing values

* Replace 
* Delete
* Keep

testing whether missing information is related to target variable (chi-squared test) 

if yes keep it else delete or impute

### Outlier Detection and Treatment

well it is out of range :frog:

### Variable Selection

### Standardizing Data

* Min/max standardiztion

  ​	$ X_{new} = \frac{X_{old} - min(X_{old})}{max(X_{old}) -  min(X_{old})} (\text{new max} - \text{new min}) + \text{new min}$

* z-score

  $ z_i = \frac{x_i - \mu }{\sigma}$

* Decimal scaling

  ​	$X_{new} = \frac{X_{old}}{10^n}$

### Gategorization

* Equal interval binning: create bins with the same range.
* Equal frequency binning: create bins with the same number of observation.

---

---



##  3. Machine learning

> Artificial Intelligence, deep learning, machine
> learning - whatever you’re doing if you don’t
> understand it - learn it. Because otherwise
> you’re going to be a dinosaur within 3 years. 

#### Predict , Classify and Cluster

Three Basic Algorithms

* Linear Regression: 
  * $ y = mx + b$
  * Resiual Sum of squares : $\beta = \sum i(y_i - \beta x_i)^2$ 
* K- Nearest Neighbors (clustering)
* K-means(classification)



---



## Data wrangling and munging

