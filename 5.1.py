class Shape:
    __width = 0
    __height = 0
    def __init__(self, width, height):
        self.__width = width
        self.__height = height
        
    def get_width(self):
        return self.__width
    
    def get_height(self):
        return self.__height
    
    def space(self):
        return self.get_width() * self.get_height()
        
class Triangle(Shape):
    def __init__(self, width, height):
        super().__init__(width, height)
        
    def space(self):
        return self.get_width() * self.get_height() / 2
    
class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__(width, height)
if __name__ == "__main__":
    t = Triangle(152, 343)
    r = Rectangle(10,84)
    print(t.area(), r.area())
    print()
    
