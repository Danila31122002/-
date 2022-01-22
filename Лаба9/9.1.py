t = [1, 2, 3, 4]
it = iter(t)
print(next(it))
t.append(5)
print(next(it))
print(next(it))
print(next(it))
print(next(it))
