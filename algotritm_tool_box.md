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
```

