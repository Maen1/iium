# Name :        MHD KHALED MAEN
# MATRCI NO.:   1523591 
# Name :        Mohammad Alrefaei
# MATRCI NO.:   1617111 

import re
f = open("clients.dat","rt")
clients= f.read()
f.close()

websites = re.findall(r"http://\S+", clients)
emails = re.findall(r"\S+@\S+", clients)
phones = re.findall(r"\S+-\S+[0-9]", clients)

print websites
print emails
print phones

with open('results.txt', 'w') as r:
    r.write("Company website\n")
    for item in websites:
        r.write("%s\n" % item)
    r.write("Email address\n")
    for item in emails:
        r.write("%s\n" % item)
    r.write("Phone numbers\n")
    for item in phones:
        r.write("%s\n" % item)





