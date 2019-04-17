import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
X = np.array([[1, 2], [1, 4], [1, 0],
    [10, 2], [10, 4], [10, 0]])

df = pd.read_csv('./food_coded.csv')
print(df.head())

kmeans = KMeans(n_clusters=2, random_state=0).fit(X)
print(kmeans.labels_)

kmeans.predict([[0, 0], [12, 3]])
print(kmeans.cluster_centers_)