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

