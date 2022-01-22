def decorator_maker_with_arguments():
    def my_decorator(func):
        def wrapped(function_arg):
            if not func(function_arg):
                print('NO')
            elif func(function_arg) > 10:
                print('o4en` mnogo')
            return func(function_arg)
        return wrapped
    return my_decorator

@decorator_maker_with_arguments()
def decorated_function_with_arguments(function_arg):
    counter = 0
    for i in function_arg:
        if not i % 2:
            counter += 1
    return counter


arr = list(map(int, input().split()))
print(decorated_function_with_arguments(arr))
