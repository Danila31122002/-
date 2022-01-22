
def print_map1(function, iterable):
    elem = iter(iterable)
    while True:
        try:
            print(function(next(elem)))
        except StopIteration:
            break


print_map1(lambda x: x**2, [1, 3, 5, 7])
