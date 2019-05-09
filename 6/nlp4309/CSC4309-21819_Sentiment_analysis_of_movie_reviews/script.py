import re
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression, Ridge
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split, learning_curve, validation_curve

# retrive data
reviews_train = []
for line in open('./movie_data/full_train.txt', 'r'):
    reviews_train.append(line.strip())
    
reviews_test = []
for line in open('./movie_data/full_test.txt', 'r'):
    reviews_test.append(line.strip())



# clean the data (pre processing)
REPLACE_NO_SPACE = re.compile("[.;:!\'?,\"()\[\]]")
REPLACE_WITH_SPACE = re.compile("(<br\s*/><br\s*/>)|(\-)|(\/)")

def preprocess_reviews(reviews):
    reviews = [REPLACE_NO_SPACE.sub("", line.lower()) for line in reviews]
    reviews = [REPLACE_WITH_SPACE.sub(" ", line) for line in reviews]
    
    return reviews

reviews_train_clean = preprocess_reviews(reviews_train)
reviews_test_clean = preprocess_reviews(reviews_test)

print("Data before cleaning: ")
print(reviews_train[0])

print("Data after cleaning: ")
print(reviews_train_clean[0])



# Vectorization
cv = CountVectorizer(binary=True)
cv.fit(reviews_train_clean)
X = cv.transform(reviews_train_clean)
X_test = cv.transform(reviews_test_clean)



target = [1 if i < 12500 else 0 for i in range(25000)]

X_train, X_val, y_train, y_val = train_test_split(
    X, target, train_size = 0.75
)

# check best accuracy 
# for c in [0.01, 0.05, 0.25, 0.5, 1]:
    
#     lr = LogisticRegression(C=c)
#     lr.fit(X_train, y_train)
#     print ("Accuracy for C=%s: %s" 
#            % (c, accuracy_score(y_val, lr.predict(X_val))))

model = LogisticRegression(C=0.05)
model.fit(X, target)
print ("Accuracy: %s" 
       % accuracy_score(target, model.predict(X_test)))

sen = ["it's the worst movie ever", "it was an amazing video to watch", "bromwell high is a cartoon comedy it ran at the same time as some other programs about school life such as teachers my 35 years in the teaching profession lead me to believe that bromwell highs satire is much closer to reality than is teachers the scramble to survive financially the insightful students who can see right through their pathetic teachers pomp the pettiness of the whole situation"]
sen = cv.transform(sen)
print(model.predict(sen))

feature_to_coef = {
    word: coef for word, coef in zip(
        cv.get_feature_names(), model.coef_[0]
    )
}


for best_positive in sorted(
    feature_to_coef.items(), 
    key=lambda x: x[1], 
    reverse=True)[:5]:
    print (best_positive)
#     plt.bar(best_positive[0],best_positive[1])
# plt.ylabel('weight')



for best_negative in sorted(
    feature_to_coef.items(), 
    key=lambda x: x[1])[:5]:
    print (best_negative)
#     plt.bar(best_negative[0],best_negative[1])
# plt.ylabel('weight')
# plt.show()
