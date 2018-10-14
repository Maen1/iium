

# Decision Trees

Punning

* number of nodes influence chance on overfit
* Restrict size => higher bais
  * Decrease chance of overfit

```R
# Ex1
# The train and test set are loaded into your workspace.

# Set random seed. Don't remove this line
set.seed(1)

# Load the rpart, rattle, rpart.plot and RColorBrewer package
library(rpart)
library(rpart.plot)
library(rattle)
library(RColorBrewer)



# Fill in the ___, build a tree model: tree
tree <- rpart(Survived ~.,data=train, method="class")

# Draw the decision tree
fancyRpartPlot(tree)

# Ex 2
# The train and test set are loaded into your workspace.

# Code from previous exercise
set.seed(1)
library(rpart)
tree <- rpart(Survived ~ ., train, method = "class")

# Predict the values of the test set: pred
pred <- predict(tree, test,type="class")

# Construct the confusion matrix: conf
conf <- table(test$Survived, pred)

conf
# Print out the accuracy
acc <- sum(diag(conf)) / sum(conf)
acc

# Ex 3
# All packages are pre-loaded, as is the data

# Calculation of a complex tree
set.seed(1)
tree <- rpart(Survived ~ ., train, method = "class", control = rpart.control(cp=0.00001))

# Draw the complex tree
fancyRpartPlot(tree)

# Prune the tree: pruned
pruned <- prune(tree, cp=0.01)

# Draw pruned
fancyRpartPlot(pruned)

# EX 3
# All packages, emails, train, and test have been pre-loaded

# Set random seed. Don't remove this line.
set.seed(1)

# Train and test tree with gini criterion
tree_g <- rpart(spam ~ ., train, method = "class")
pred_g <- predict(tree_g, test, type = "class")
conf_g <- table(test$spam, pred_g)
acc_g <- sum(diag(conf_g)) / sum(conf_g)

# Change the first line of code to use information gain as splitting criterion
tree_i <- rpart(spam ~ ., train, method = "class", parms = list(split = "information"))
pred_i <- predict(tree_i, test, type = "class")
conf_i <- table(test$spam, pred_i)
acc_i <- sum(diag(conf_i)) / sum(conf_i)

# Draw a fancy plot of both tree_g and tree_i
fancyRpartPlot(tree_g)
fancyRpartPlot(tree_i)


# Print out acc_g and acc_i
acc_g
acc_i


```



## K-Nearst Neighbors

```R
# EX 1

# Store the Survived column of train and test in train_labels and test_labels
train_labels <- train$Survived
test_labels  <- test$Survived

# Copy train and test to knn_train and knn_test
knn_train <- train
knn_test  <- test


# Drop Survived column for knn_train and knn_test

knn_train$Survived <- NULL
knn_test$Survived  <- NULL

# Normalize Pclass
min_class <- min(knn_train$Pclass)
max_class <- max(knn_train$Pclass)
knn_train$Pclass <- (knn_train$Pclass - min_class) / (max_class - min_class)
knn_test$Pclass <- (knn_test$Pclass - min_class) / (max_class - min_class)

# Normalize Age
min_age <- min(knn_train$Age)
max_age <- max(knn_train$Age)
knn_train$Age <- (knn_train$Age - min_age)/(max_age - min_age)
knn_test$Age <- (knn_test$Age - min_age)/(max_age - min_age)
```

```R
# EX 2 
# knn_train, knn_test, train_labels and test_labels are pre-loaded

# Set random seed. Don't remove this line.
set.seed(1)

# Load the class package
library(class)

# Fill in the ___, make predictions using knn: pred
pred <- knn(train = knn_train, test = knn_test, cl = train_labels, k =5)

# Construct the confusion matrix: conf
conf <- table(test_labels, pred)
# Print out the confusion matrix
conf

```

```R
# EX 3
# knn_train, knn_test, train_labels and test_labels are pre-loaded

# Set random seed. Don't remove this line.
set.seed(1)

# Load the class package, define range and accs
library(class)
range <- 1:round(0.2 * nrow(knn_train))
accs <- rep(0, length(range))

for (k in range) {

  # Fill in the ___, make predictions using knn: pred
  pred <- knn(knn_train, knn_test, train_labels, k = k)

  # Fill in the ___, construct the confusion matrix: conf
  conf <- table(test_labels, pred)

  # Fill in the ___, calculate the accuracy and store it in accs[k]
  accs[k] <- sum(diag(conf)) / sum(conf)
}

# Plot the accuracies. Title of x-axis is "k".
plot(range, accs, xlab = "k")

# Calculate the best k
which.max(accs)
```



## The ROC curve

* true positive rate : TPR = TP / (TP + FN) = recall  H 
* false positive rate: FPR = FP / (FP + TN) V
* curve is closer to left upper corner = better
* AUC area under the curve /some how its the accuracy  🐸

```R
#EX 1
# train and test are pre-loaded

# Set random seed. Don't remove this line
set.seed(1)

# Build a tree on the training set: tree
tree <- rpart(income ~ ., train, method = "class")

# Predict probability values using the model: all_probs
all_probs <- predict(tree, test, type="prob")

# Print out all_probs

all_probs
# Select second column of all_probs: probs
probs <- all_probs[,2]

```



```R
# Ex 2
# train and test are pre-loaded

# Code of previous exercise
set.seed(1)
tree <- rpart(income ~ ., train, method = "class")
probs <- predict(tree, test, type = "prob")[,2]

# Load the ROCR library
library(ROCR)

# Make a prediction object: pred
pred <- prediction(probs, test$income)


# Make a performance object: perf
perf<- performance(pred,"tpr", "fpr")

# Plot this curve
plot(perf)

```



```R
#EX 3
# test and train are loaded into your workspace

# Build tree and predict probability values for the test set
set.seed(1)
tree <- rpart(income ~ ., train, method = "class")
probs <- predict(tree, test, type = "prob")[,2]

# Load the ROCR library
library(ROCR)

# Make a prediction object: pred
pred <- prediction(probs, test$income)

# Make a performance object: perf
perf <- performance(pred,"auc")

# Print out the AUC
perf@y.values[[1]]
```

```R
# Ex 3
# Load the ROCR library
library(ROCR)

# Make the prediction objects for both models: pred_t, pred_k
pred_k <- prediction(probs_k, test$spam)
pred_t <- prediction(probs_t, test$spam)


# Make the performance objects for both models: perf_t, perf_k
perf_k <- performance(pred_k,"tpr", "fpr")
perf_t <- performance(pred_t,"tpr", "fpr")



# Draw the ROC lines using draw_roc_lines()
draw_roc_lines(perf_k, perf_t)


```

## Regression

```R
#EX1
# The kang_nose dataset and nose_width_new are already loaded in your workspace.

# Plot nose length as function of nose width.
plot(kang_nose, xlab = "nose width", ylab = "nose length")

# Fill in the ___, describe the linear relationship between the two variables: lm_kang
lm_kang <- lm(nose_length ~ nose_width, data = kang_nose)

# Print the coefficients of lm_kang
lm_kang$coefficients

# Predict and print the nose length of the escaped kangoroo
predict(lm_kang, nose_width_new)

```

```R
#EX2
# kang_nose is pre-loaded in your workspace

# Build model and make plot
lm_kang <- lm(nose_length ~ nose_width, data=kang_nose)
plot(kang_nose, xlab = "nose width", ylab = "nose length")
abline(lm_kang$coefficients, col = "red")

# Apply predict() to lm_kang: nose_length_est
nose_length_est <-predict(lm_kang, kang_nose)

# Calculate difference between the predicted and the true values: res
res <- kang_nose$nose_length - nose_length_est

# Calculate RMSE, assign it to rmse and print it
rmse <- sqrt(sum(res^2)/nrow(kang_nose))
rmse
```

```R
#Ex3
# kang_nose, lm_kang and res are already loaded in your workspace
summary(kang_nose)
# Calculate the residual sum of squares: ss_res
nose_length_est <- predict(lm_kang,kang_nose )

ss_res <-  sum(lm_kang$residuals^2)

# Determine the total sum of squares: ss_tot
ss_tot <- sum((kang_nose$nose_length - (sum(kang_nose$nose_length))/nrow(kang_nose))^2)
# Calculate R-squared and assign it to r_sq. Also print it.
r_sq <- 1 - (ss_res/ss_tot)
r_sq


# Apply summary() to lm_kang
summary(lm_kang)
```

```R
# EX4
# world_bank_train and cgdp_afg is available for you to work with
str(world_bank_train)
str(cgdp_afg)
# Plot urb_pop as function of cgdp
plot(world_bank_train$urb_pop, world_bank_train$cgdp)
# Set up a linear model between the two variables: lm_wb
lm_wb = lm(urb_pop ~ cgdp, data=world_bank_train)

# Add a red regression line to your scatter plot
abline(coef(lm_wb), col = "red")

# Summarize lm_wb and select R-squared
summary(lm_wb)$r.squared

# Predict the urban population of afghanistan based on cgdp_afg
predict(lm_wb, cgdp_afg)

```

```R
# EX 5
# world_bank_train and cgdp_afg is available for you to work with

# Plot: change the formula and xlab
plot(urb_pop ~ log(cgdp), data = world_bank_train,
     xlab = "log(GDP per Capita)",
     ylab = "Percentage of urban population")

# Linear model: change the formula
lm_wb <- lm(urb_pop ~ log(cgdp), data = world_bank_train)

# Add a red regression line to your scatter plot
abline(lm_wb$coefficients, col = "red")

# Summarize lm_wb and select R-squared
summary(lm_wb)$r.squared

# Predict the urban population of afghanistan based on cgdp_afg
predict(lm_wb, cgdp_afg)


```

### Multi-linear regression

```R
# EX 1
# shop_data has been loaded in your workspace

# Add a plot: sales as a function of inventory. Is linearity plausible
plot(shop_data$sales, shop_data$inv)
plot(sales ~ sq_ft, shop_data)
plot(sales ~ size_dist, shop_data)


# Build a linear model for net sales based on all other variables: lm_shop
lm_shop = lm(sales ~ ., shop_data)

# Summarize lm_shop

summary(lm_shop)
```

```R
# EX 2
# shop_data, shop_new and lm_shop have been loaded in your workspace
# str(shop_data)
# str(shop_new)
# str(lm_shop)
# Plot the residuals in function of your fitted observations

plot(lm_shop$fitted.values,lm_shop$residuals)
# Make a Q-Q plot of your residual quantiles
qqnorm(lm_shop$residuals,
ylab= "Residual Quantiles")

# Summarize your model, are there any irrelevant predictors?
summary(lm_shop)
# Predict the net sales based on shop_new.
predict(lm_shop, shop_new)

```

```R
# EX 4
# choco_data has been loaded in your workspace

# Add a plot:  energy/100g as function of total size. Linearity plausible?
plot(energy ~ protein, choco_data)
plot(energy ~ fat, choco_data)
plot(energy ~ size, choco_data)

# Build a linear model for the energy based on all other variables: lm_choco

lm_choco = lm(energy ~ .,choco_data)
lm_choco
# Plot the residuals in function of your fitted observations

plot(lm_choco$fitted.values, lm_choco$residuals)
# Make a Q-Q plot of your residual quantiles

qqnorm(lm_choco$residuals)
# Summarize lm_choco
summary(lm_choco)

```



## K-Nearst Neighbors and generalisation

```R
# EX 1
# world_bank_train, world_bank_test and lm_wb_log are pre-loaded

# Build the log-linear model
lm_wb_log <- lm(urb_pop ~ log(cgdp), data = world_bank_train)

# Calculate rmse_train
rmse_train <- sqrt(mean(lm_wb_log$residuals ^ 2))

# The real percentage of urban population in the test set, the ground truth
world_bank_test_truth <- world_bank_test$urb_pop

# The predictions of the percentage of urban population in the test set
world_bank_test_input <- data.frame(cgdp = world_bank_test$cgdp)
world_bank_test_output <- predict(lm_wb_log, world_bank_test_input)

# The residuals: the difference between the ground truth and the predictions
res_test <- world_bank_test_output - world_bank_test_truth


# Use res_test to calculate rmse_test
rmse_test = sqrt(mean(res_test ^ 2))

# Print the ratio of the test RMSE over the training RMSE
rmse_test / rmse_train

```

```R
# EX 2
###
# You don't have to change this!
# The algorithm is already coded for you;
# inspect it and try to understand how it works!
my_knn <- function(x_pred, x, y, k){
  m <- length(x_pred)
  predict_knn <- rep(0, m)
  for (i in 1:m) {

    # Calculate the absolute distance between x_pred[i] and x
    dist <- abs(x_pred[i] - x)

    # Apply order() to dist, sort_index will contain
    # the indices of elements in the dist vector, in
    # ascending order. This means sort_index[1:k] will
    # return the indices of the k-nearest neighbors.
    sort_index <- order(dist)

    # Apply mean() to the responses of the k-nearest neighbors
    predict_knn[i] <- mean(y[sort_index[1:k]])

  }
  return(predict_knn)
}
###

# world_bank_train and world_bank_test are pre-loaded

# Apply your algorithm on the test set: test_output
test_output = my_knn(world_bank_test$cgdp,
world_bank_train$cgdp,
world_bank_train$urb_pop,
30)

# Have a look at the plot of the output
plot(world_bank_train,
     xlab = "GDP per Capita",
     ylab = "Percentage Urban Population")
points(world_bank_test$cgdp, test_output, col = "green")
```

```R
# EX 3
# world_bank_train and world_bank_test are pre-loaded
# lm_wb and lm_wb_log have been trained on world_bank_train
# The my_knn() function is available

# Define ranks to order the predictor variables in the test set
ranks <- order(world_bank_test$cgdp)

# Scatter plot of test set
plot(world_bank_test,
     xlab = "GDP per Capita", ylab = "Percentage Urban Population")

# Predict with simple linear model and add line
test_output_lm <- predict(lm_wb, data.frame(cgdp = world_bank_test$cgdp))
lines(world_bank_test$cgdp[ranks], test_output_lm[ranks], lwd = 2, col = "blue")

# Predict with log-linear model and add line

test_output_lm_log = predict(lm_wb_log, data.frame(cgdp = world_bank_test$cgdp))
lines(world_bank_test$cgdp[ranks], test_output_lm_log[ranks], lwd=2, col="red")

# Predict with k-NN and add line
test_output_knn = my_knn(world_bank_test$cgdp, world_bank_train$cgdp, world_bank_train$urb_pop, 30)

lines(world_bank_test$cgdp[ranks], test_output_knn[ranks], lwd=2, col="green")



# Calculate RMSE on the test set for simple linear model
sqrt(mean( (test_output_lm - world_bank_test$urb_pop) ^ 2))

# Calculate RMSE on the test set for log-linear model

sqrt(mean( (test_output_lm_log - world_bank_test$urb_pop) ^ 2))
# Calculate RMSE on the test set for k-NN technique
sqrt(mean( (test_output_knn - world_bank_test$urb_pop) ^ 2))
```

---

# Clustring with k-means

```R
# EX1
# seeds and seeds_type are pre-loaded in your workspace

# Set random seed. Don't remove this line.
set.seed(100)

# Do k-means clustering with three clusters, repeat 20 times: seeds_km

seeds_km = kmeans(seeds, 3,nstart= 20)
# Print out seeds_km

seeds_km
# Compare clusters with actual seed types. Set k-means clusters as rows
table(seeds_km$cluster, seeds_type)

# Plot the length as function of width. Color by cluster
plot(seeds$width,seeds$length, col=seeds_km$cluster )
```

```R
# EX2
# seeds is pre-loaded in your workspace

# Set random seed. Don't remove this line.
set.seed(100)

# Apply kmeans to seeds twice: seeds_km_1 and seeds_km_2

seeds_km_1 = kmeans(seeds, 5, nstart = 1)
seeds_km_2 = kmeans(seeds, 5, nstart = 1)


# Return the ratio of the within cluster sum of squares
seeds_km_1$tot.withinss / seeds_km_2$tot.withinss

# Compare the resulting clusters
table(seeds_km_1$cluster, seeds_km_2$cluster)

```

```R
# EX3
# The dataset school_result is pre-loaded

# Set random seed. Don't remove this line.
set.seed(100)

# Explore the structure of your data
str(school_result)

# Initialise ratio_ss 
ratio_ss = rep(0,7)
ratio_ss
# Finish the for-loop. 
for (k in 1:7) {
  
  # Apply k-means to school_result: school_km
  school_km = kmeans(school_result, k, nstart = 20)
  
  # Save the ratio between of WSS to TSS in kth element of ratio_ss
  ratio_ss[k] = school_km$tot.withinss / school_km$totss
  
}

# Make a scree plot with type "b" and xlab "k"
plot(ratio_ss, type="b", xlab="k")
```

## Performance and scaling issues

```R
# EX 1
# The dataset run_record has been loaded in your workspace

# Set random seed. Don't remove this line.
set.seed(1)

# Explore your data with str() and summary()
str(run_record)
summary(run_record)

# Cluster run_record using k-means: run_km. 5 clusters, repeat 20 times
run_km = kmeans(run_record, 5, nstart=20)

# Plot the 100m as function of the marathon. Color using clusters
plot(run_record$marathon, run_record$X100m, col=run_km$cluster)

# Calculate Dunn's index: dunn_km. Print it.
dunn_km = dunn(clusters = run_km$cluster, Data=run_record)
dunn_km
```

```R
# Ex 2
# The dataset run_record as well as run_km are available

# Set random seed. Don't remove this line.
set.seed(1)

# Standardize run_record, transform to a dataframe: run_record_sc
run_record_sc =as.data.frame(scale(run_record))
# Cluster run_record_sc using k-means: run_km_sc. 5 groups, let R start over 20 times
run_km_sc = kmeans(run_record_sc, 5, nstart=20)



# Plot records on 100m as function of the marathon. Color using the clusters in run_km_sc
plot(run_record_sc$marathon, run_record_sc$X100m, col=run_km_sc$cluster)



# Compare the resulting clusters in a nice table
table(run_km$cluster,run_km_sc$cluster)

# Calculate Dunn's index: dunn_km_sc. Print it.
dunn_km_sc = dunn(clusters = run_km_sc$cluster, Data = run_record_sc)
dunn_km_sc

```

## Hierarchial Clustring

```R
#Ex 1
# The dataset run_record_sc has been loaded in your workspace

# Apply dist() to run_record_sc: run_dist
run_dist = dist(run_record_sc)

# Apply hclust() to run_dist: run_single
run_single = hclust(run_dist,method= "single")

# Apply cutree() to run_single: memb_single
memb_single = cutree(run_single,5)

# Apply plot() on run_single to draw the dendrogram
plot(run_single)

# Apply rect.hclust() on run_single to draw the boxes
rect.hclust(run_single, 5, border = 2:6)
```

```R
# EX 2
# run_record_sc is pre-loaded

# Code for single-linkage
run_dist <- dist(run_record_sc, method = "euclidean")
run_single <- hclust(run_dist, method = "single")
memb_single <- cutree(run_single, 5)
plot(run_single)
rect.hclust(run_single, k = 5, border = 2:6)

# Apply hclust() to run_dist: run_complete
run_complete = hclust(run_dist, method ="complete")

# Apply cutree() to run_complete: memb_complete
memb_complete = cutree(run_complete,5)

# Apply plot() on run_complete to draw the dendrogram
plot(run_complete)

# Apply rect.hclust() on run_complete to draw the boxes
rect.hclust(run_complete,5, border= 2:6)

# table() the clusters memb_single and memb_complete. Put memb_single in the rows
table(memb_single, memb_complete)
```

```R
# EX 3
# run_record_sc, run_km_sc, memb_single and memb_complete are pre-calculated

# Set random seed. Don't remove this line.
set.seed(100)

# Dunn's index for k-means: dunn_km

dunn_km = dunn(clusters = run_km_sc$cluster, Data = run_record_sc)
# Dunn's index for single-linkage: dunn_single
dunn_single = dunn(clusters = memb_single, Data = run_record_sc)


# Dunn's index for complete-linkage: dunn_complete
dunn_complete = dunn(clusters = memb_complete, Data = run_record_sc)


# Compare k-means with single-linkage

table(run_km_sc$cluster, memb_single)

# Compare k-means with complete-linkage
table(run_km_sc$cluster, memb_complete)


```

