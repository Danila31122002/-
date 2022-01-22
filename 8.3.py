def zip1(*iterables):
    l  = []
    c = []
    f = []
    for elem in iterables:
        l.append(iter(elem))
    while True:
        try:
            for i in l:
                c.append(i.__next__())
            f.append(tuple(c))
            c.clear()
        except StopIteration:
            break
    return f


#print(zip1([1, 2, 3], ["F", "D"], (1 for i in range(5))))


def map1(func, *iters):
    l = []
    c = []
    for elem in iters:
        l.append(iter(elem))
    while True:
        try:
            for i in l:
                c.append(func(i.__next__()))
        except StopIteration:
            break
    return c


#print(map1(abs, [-1, 2, - 4]))


def enumerate1(iters, start = 0):
    it = iter(iters)
    ans = []
    while True:
        try:
            for i in range(start, len(iters) + start):
                c = (i ,next(it))
                yield c

        except StopIteration:
            break



#for i in enumerate1([2, 4, 7, -1], 1):
    print(i)

