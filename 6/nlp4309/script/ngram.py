import nltk
from nltk.stem import WordNetLemmatizer
import re
from collections import defaultdict
from itertools import count
from collections import Counter
from nltk import word_tokenize

def ngram():
    unid = {}
    bid = {}
    trid = {}
    #using "with" will close the file immediately after last call
    with open("./text-ngram.dat","r") as rfile:
        infile = rfile.readlines()

    unifile = open("./unigram.dat","w")
    bifile = open("./bigram.dat","w")
    trifile = open("./trigram.dat","w")   
    
    sent = [s for s in infile[0].split(".")]
   
    for line in sent:        
        for j in range(len(line.split())-1):
            uni = line.split()[j]
            bi = line.split()[j]+" "+line.split()[j+1]
            
            for word in line.split()[j]:
                if word not in unid:
                    unid[word] = 1
                else:
                    unid[word] +=1
            for word in line.split()[j]+" "+line.split()[j+1]:
                print(word)                
                if word not in bid:
                    bid[word] = 1
                else:
                    bid[word] +=1

            unifile = open("./unigram.dat","a")
            bifile = open("./bigram.dat","a")            
            unifile.write(str(uni)+"\n")
            bifile.write(str(bi)+"\n")            
            unifile.close()
            bifile.close()

        for k in range(len(line.split())-2):
            trifile = open("./trigram.dat","a")            
            tri = line.split()[k]+" "+line.split()[k+1]+" "+line.split()[k+2]
            trifile.write(str(tri)+"\n")
            trifile.close()
            for word in line.split()[k]+" "+line.split()[k+1]+" "+line.split()[k+2]:
                if word not in trid:
                    trid[word] = 1
                else:
                    trid[word] += 1

    # print(bid)
    # print(trid)

def ncount():
    unid    = {}
    bid     = {}
    trid    = {}
    uniprob    = []
    biprob     = []
    triprob   = [] 
    ctruni  = 0
    ctrbi   = 0
    ctrtri  = 0
    i = 0
    for line in open("./unigram.dat"):
        sline = line.replace('\n','')
        if sline not in unid:
            unid[sline] = 1
        else:
            unid[sline] +=1

        uniprob.append(unid[sline]/136)
        i+=1 
    uniprob.append(0)

    i = 1
    for line in open("./bigram.dat"):
        sline = line.replace('\n','')
        a,b =sline.split(' ')

        if sline not in bid:
            bid[sline] = 1
        else:
            bid[sline] +=1
        ctrbi +=1
        biprob.append((uniprob[i-1] + uniprob[i]) / 136)
        i+=1

    i = 1
    for line in open("./trigram.dat"):
        sline = line.replace('\n','')
        if sline not in trid:
            bid[sline] = 1
        else:
            bid[sline] +=1
        ctrtri+=1
        triprob.append((biprob[i-1] + biprob[i])/130)
        i+=1
               
    print(ctruni)
    print(ctrbi)
    print(ctrtri)
    print(uniprob)


ncount()


