# Name :        MHD KHALED MAEN
# MATRCI NO.:   1523591 

import re
f = open("log.xml","rt")
clients= f.read()
f.close()

host_addr = re.findall(r"[a-zA-Z0-9]{4}::[a-zA-Z0-9]{4}:[a-zA-Z0-9]{4}:[a-zA-Z0-9]{4}:[a-zA-Z0-9%]{6}", clients)
date = re.findall(r"[0-9]{4}-[0-9]{2}-[0-9]{2}", clients)
time = re.findall(r"[0-9]{2}:[0-9]{2}:[0-9]{2}", clients)

print host_addr
print date
print time

with open('results.txt', 'w') as r:
    r.write("MAC Address\n")
    for item in host_addr:
        r.write("%s\n" % item)
    r.write("Date of Access\n")
    for item in date:
        r.write("%s\n" % item)
    r.write("Time of access\n")
    for item in time:
        r.write("%s\n" % item)



