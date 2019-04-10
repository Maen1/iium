
def italianRecipes():
  # read recipe_ital_115.txt content 
    f = open("a1.txt")

    #save file contet in a temporary variable
    temp = f.read()
    print(temp)

    # split the content into words
    words = temp.split()
    #close input file
    f.close()
    # create result file
    result = open("result.txt",'w') 

    # make an empty dictionary and count
    dic = {}
    count = 0
    ly= []
    for word in words:
      # unique words
      if word not in dic:
          dic[word] = 1
      else:
          dic[word] +=1

      #times the word of occurs
      if word == "of":
        count +=1
      # words end with ly
      if word.endswith("ly"):
          ly.append(word)
          

      
    print(dic) 
    print("the word of has occured "+ str(count))
    print(ly)
    result.write(str(dic)+'\n\n')
    result.write("the word of has occured "+ str(count)+'\n\n')
    result.write(str(ly)+'\n')
    #close result
    result.close() 
        

italianRecipes()