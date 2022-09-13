# File System Handling
import os

# ================================== 1. File Modes =================================
"""
# w => write mode, file create, Cver write
# r => read mode, simple possible
# a => Append Mode, additional data
# x => File Create if not exists, other error

# b - Binary Mode (images)
# t - Text Mode (Text Files)
"""

# ======== x mode ===========
# f = open('example.txt', 'x')

# ======== w mode ===========
# f = open('new.txt', 'w')
# f.write("Hai hello world")
# f.close()

# ========= a mode ==========
f = open('new.txt', 'a')
f.write("Hai hello world \n")
content = """Lorem ipsum dolor sit amet consectetur adipisicing elit. 
A illo nemo repellendus debitis sint harum."""
f.write(content)
f.close()


# ========= r mode ==========
f = open('new.txt', 'r')
text = f.read()
text_list = f.readlines()
print(text)
print(text_list)
f.close()


# with stmt
with open('new.txt', 'r') as my_file:
    # text = my_file.read()
    # print(text)
    for text in my_file:
        print(text)

# ====== Delete File =======
# print(dir(os))
os.remove('example.txt')