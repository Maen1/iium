# Machine learning tool box

RMSE

```R
# Fit lm model: model


# Predict on full data: p
model <- lm(price ~., diamonds)

p <- predict(model, diamonds)

# Compute errors: error
error <- p - diamonds$price

# Calculate RMSE
RMSE <- sqrt(mean(error^2))
RMSE
```

### Suffle the dataset

```R
# Set seed
set.seed(42)

# Shuffle row indices: rows
rows <- sample(nrow(diamonds))

# Randomly order data
diamonds <- diamonds[rows, ]
 
```

### Split the data

```R
# Determine row to split on: split
split <- round(nrow(diamonds) * .80)

# Create train
train <- diamonds[1: split, ]

# Create test
test <- diamonds[(split +1) : nrow(diamonds), ]
```

### Fit model

```R
# Fit lm model on train: model
model <- lm(price~., train)

# Predict on test: p

p <- predict(model, test)

# Compute errors: error
error <- p - test$price

# Calculate RMSE
RMSE <- sqrt(mean(error^2))
RMSE

```

### Cross-validation

```R
# Fit lm model using 10-fold CV: model
model <- train(
  price~., diamonds,
  method = "lm",
  trControl = trainControl(
    method = "cv", number = 10,
    verboseIter = TRUE
  )
)

# Print model to console
model
```

```R
# Fit lm model using 5 x 5-fold CV: model
model <- train(
  medv ~ ., Boston,
  method = "lm",
  trControl = trainControl(
    method = "cv", number = 5,
    repeats = 5, verboseIter = TRUE
  )
)

# Print model to console
model

pred <- predict(model, Boston)
pred
```

---



## Classification models: fitting them and evaluating their performance

```R
# Shuffle row indices: rows
rows <- sample(nrow(Sonar))

# Randomly order data: Sonar
Sonar <- Sonar[rows, ]

# Identify row to split on: split
split <- round(nrow(Sonar) * .60)

# Create train
train <- Sonar[1: split,]

# Create test

test <- Sonar[(split +1): nrow(Sonar), ]
```

### logistic regression

```R
# Fit glm model: model
model <- glm(Class~., family = "binomial", train)

# Predict on test: p

p <- predict(model, test, type = "response")
p
```

## Confusion matrix

```R
# If p exceeds threshold of 0.5, M else R: m_or_r
m_or_r <- ifelse(p > .5, "M", "R")

# Convert to factor: p_class
p_class <- factor(m_or_r, levels = levels(test[["Class"]]))

# Create confusion matrix
confusionMatrix(p_class, test$Class)

```

### ROC curve

```R
# Predict on test: p

p <- predict(model, test, type = "response")

# Make ROC curve
colAUC(p, test$Class, plotROC = TRUE)
```

### Train control

```R
# Create trainControl object: myControl
myControl <- trainControl(
  method = "cv",
  number = 10,
  summaryFunction = twoClassSummary,
  classProbs = TRUE, # IMPORTANT!
  verboseIter = TRUE
)

# Train glm with custom trainControl: model

model <- train(Class ~ ., Sonar,
  method="glm", trControl = myControl)

# Print model to console
model

```
