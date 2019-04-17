import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
X = np.array([[1, 2], [1, 4], [1, 0],
    [10, 2], [10, 4], [10, 0]])

## data cleaning
df = pd.read_csv('./food_coded.csv')
print(df.head())

drop_cols = ['comfort_food', 'comfort_food_reasons',
'diet_current', 'eating_changes', 'father_profession',
'fav_cuisine', 'food_childhood','healthy_meal', 'ideal_diet',
'meals_dinner_friend','mother_profession','type_sports']

df.drop(drop_cols, inplace=True, axis=1)
print(df.head())


## end data cleaning

kmeans = KMeans(n_clusters=2, random_state=0).fit(X)
print(kmeans.labels_)

kmeans.predict([[0, 0], [12, 3]])
print(kmeans.cluster_centers_)