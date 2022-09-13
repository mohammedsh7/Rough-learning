# List Comprehensions

a = [1, 3, 5, 7, 9, 11]

b = []

for x in a:
    b.append(x * 2)

print(b) # [2, 6, 10, 14, 18, 22]


# List Comprehensions
c = [x*2 for x in a]
print(c) # [2, 6, 10, 14, 18, 22]

new_list = []
for x in range(1, 7):
    new_list.append(x ** 2) # ** means squre of x

print("New list values:",new_list) # [1, 4, 9, 16, 25, 36]

my_list = [x**2 for x in range(1, 7)]
print("My list values:", my_list)

another_list = [x**2 for x in range(6, 0, -1)]
print(another_list)