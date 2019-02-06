import numpy as np
from sklearn import svm
import matplotlib
matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
from mlxtend.plotting import plot_decision_regions

X = [[3,3], [3,-3] , [-3,-3], [-3,3],
     [1,1], [1,-1],[2,1],[1,-2]]
y = [1, 1, 1, 1, -1, -1, -1, -1]

clf = svm.SVC(kernel='linear')
clf.fit(X,y)

print(clf.predict([[2., 2.]]))

plot_decision_regions(X=X,[-1:-1] y=y[-1:-1], clf=clf, legend=2)

plt.xlabel(X.columns[0], size=14)
plt.ylabel(X.columns[1], size=14)
plt.title('SVM Decision Region Boundary', size=16)