import math

class Complex():
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def __add__(self, other):
        return Complex(self.a + other.a, self.b + other.b)

    def __sub__(self, other):
        return Complex(self.a - other.a, self.b - other.b)

    def __mul__(self, other):
        return Complex(self.a * other.a - self.b * other.b,self.a * other.b + self.b * other.a )

    def __truediv__(self, other):
        if other.a != 0 and other.b != 0:
            return Complex((self.a * other.a + self.b * other.b)/ ((other.a)**2 + (other.b)**2), (self.b * other.a - self.a * other.b)/((other.a)**2 + (other.b)**2))
        else: return "Нельзя делить на нуль"

    def __abs__(self):
        return Complex(math.sqrt((self.a)**2 +(self.b)**2))

    def __str__(self):
        return 'complex number: {} + {}i'.format(self.a, self.b)

if __name__ == "__main__":
    C = Complex(2, 4)
    B = Complex(3, 2)
    A = C + B
    D = C * B
    F = C / B
    print(C)
    print(A)
    print(D)
    print(F)
