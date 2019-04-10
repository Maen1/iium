
#open the file 
file = open("./a1.txt", "r")

# save file contet in a temporary variable
temp = file.read()

# split the content into words
words = temp.split()

#close the file 
file.close()

# initialize empty dictionary 
dic={}

# loop through the word and add new word into dictionary 
# or increase the occurace by 1 if it's exists
for word in words:
    if word not in dic:
        dic[word] = 1
    else:
        dic[word] +=1

print dic
