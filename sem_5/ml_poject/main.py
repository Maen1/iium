from __future__ import division, print_function
#from utils import train_test_split, accuracy_score
from utils.loss_functions import CrossEntropy
from utils import Plot
import numpy as np
import pandas as pd
from sklearn import datasets
import matplotlib.pyplot as plt
from sklearn import datasets
from gradient_boosting import GradientBoostingClassifier
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

def main():

    print ("-- Gradient Boosting Classification --")

    df = pd.read_csv("cancer_o.csv")
    y = df.level
    X = df.drop(['level', 'patient_id'], axis=1)
    data_classes = ["Low", "Medium", "High"]

    y = df['level'].apply(data_classes.index)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    clf = GradientBoostingClassifier()
    clf.fit(X_train, y_train)
    y_pred = clf.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)

    print ("Accuracy:", accuracy)



if __name__ == "__main__":
    main()