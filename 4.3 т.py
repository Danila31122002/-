def decorator_maker():
    def my_decorator(func):
        def wrapped(*function_arg):
            function_arg = function_arg[::-1]
            return func(*function_arg)
        return wrapped
    return my_decorator

@decorator_maker()
def decorated_function_with_arguments(*f_args):
    for i in f_args:
        print('#' * i)


decorated_function_with_arguments(1, 2, 3, 4)
