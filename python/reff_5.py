import os


dir_path = r'content/posts'

res = []

# Iterate directory
for path in os.listdir(dir_path):
    print(path)
    # check if current path is a file
    if os.path.isfile(os.path.join(dir_path, path)):
        res.append(path)

print(res)


a = [1, 3, 6, 10, 11]
print(a)
c = [x*2 for x in a]
print(c)
