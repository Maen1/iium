import nltk
import random
from nltk.corpus import names

labeled_names = ([(name, 'male') for name in names.words('male.txt')] +
            [(name, 'female') for name in names.words('female.txt')])

random.shuffle(labeled_names)

def gender_feature(word):
    return{'last_letter': word[-1]}
    
print(labeled_names[0])
features = [(gender_feature(name), gender) for (name, gender) in labeled_names]

train_set, test_set = features[500:], features[:500] 

classifier = nltk.NaiveBayesClassifier.train(train_set)

print(classifier.classify(gender_feature('abdo')))


