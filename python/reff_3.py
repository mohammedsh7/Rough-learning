# OS MODULE
from operator import eq
import os

print(os.getcwd()) # get current working dir
print(os.listdir()) # list all datas & files in my current working dir

# change current working dir (cwd)
os.chdir(r"/home/mohammed/Documents/Ruff/JavaScript")
print(os.getcwd())
print(os.listdir())

# get all the files and dir's into a single list
for root, dir, file in os.walk(os.getcwd()):
    print(root)


print("===================")
for root, dir, file in os.walk(os.getcwd()):
    if len(file) != 0:
        print(dir)


print("===================")
for root, dir, file in os.walk(os.getcwd()):
    for f in file:
        if ".js" in f:
            print(f)


print("===================")
for root, dir, file in os.walk(os.getcwd()):
    for f in file:
        print(root + "\\" + f)


os.chdir(r"/home/mohammed/Documents/Ruff/test")
items = os.listdir()
if 'hai' not in items:
    os.mkdir("hai")
elif 'hello' not in items:
    os.mkdir('hello')


# delete a dir
path = r"/home/mohammed/Documents/Ruff/ded"
os.rmdir(path)