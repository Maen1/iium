from __future__ import division
from collections import Counter, defaultdict
from functools import partial
import math, random

def entropy(class_probabilities):
    return sum(-p * math.log(p, 2) for p in class_probabilities if p)

def class_probabilities(labels):
    total_count = len(labels)
    return [count / total_count
            for count in Counter(labels).values()]

def data_entropy(labeled_data):        
    labels = [label for _, label in labeled_data]
    probabilities = class_probabilities(labels)
    return entropy(probabilities)


# find the entropy from this partition of data into subsets
def partition_entropy(subsets):
    total_count = sum(len(subset) for subset in subsets)
    
    return sum( data_entropy(subset) * len(subset) / total_count
                for subset in subsets )

# return default dictionary
def group_by(items, key_fn):
    groups = defaultdict(list)
    for item in items:
        key = key_fn(item)
        groups[key].append(item)
    return groups

# parition input by attribute
def partition_by(inputs, attribute):
    return group_by(inputs, lambda x: x[0][attribute])    

# computes the entropy of the given partition
def partition_entropy_by(inputs,attribute):
    partitions = partition_by(inputs, attribute)
    return partition_entropy(partitions.values())        


# classify the input using the given decision tree
def classify(tree, input):    
    # if this is a leaf node, return its value
    if tree in [True, False]:
        return tree
   
    # otherwise find the correct subtree
    attribute, subtree_dict = tree
    
    subtree_key = input.get(attribute)

    if subtree_key not in subtree_dict:
        subtree_key = None              
    
    subtree = subtree_dict[subtree_key] 
    return classify(subtree, input)   

def build_tree_id3(inputs, split_candidates=None):

    if split_candidates is None:
        split_candidates = inputs[0][0].keys()

    # count how many true and false
    num_inputs = len(inputs)
    num_trues = len([label for item, label in inputs if label])
    num_falses = num_inputs - num_trues
    
    if num_trues == 0:                  
        return False                    
        
    if num_falses == 0:                 
        return True                    

    if not split_candidates:           
        return num_trues >= num_falses 
                            
    # split to the best attribute
    best_attribute = min(split_candidates,
        key=partial(partition_entropy_by, inputs))

    partitions = partition_by(inputs, best_attribute)
    new_candidates = [a for a in split_candidates 
                      if a != best_attribute]
    
    # build the subtrees recursive
    subtrees = { attribute : build_tree_id3(subset, new_candidates)
                 for attribute, subset in partitions.iteritems() }

    subtrees[None] = num_trues > num_falses 

    return (best_attribute, subtrees)

def forest_classify(trees, input):
    votes = [classify(tree, input) for tree in trees]
    vote_counts = Counter(votes)
    return vote_counts.most_common(1)[0][0]
