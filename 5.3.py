class Animal:
    __name = ""
    __type = ""
    __age = 0
    
    def __init__(self, name, age):
        self.__name = name
        self.__age = age
        self.__type = "Animal"
    
    def get_name(self):
        return self.__name
    
    def get_age(self):
        return self.__age
    
    def get_type(self):
        return self.__type
    
    def __str__(self):
        return self.get_str()
    
    def get_str(self):
        return " ".join(["Type:", self.get_type(), "\n",
                        "Name:", self.get_name(), "\n",
                        "Age:", str(self.get_age()), "\n",
                        "------------------------------------------------\n"])
  
    
class Zebra(Animal):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.__type = "Zebra"
        
class Dolphin(Animal):
    def __init__(self, name, age):
        Animal.__init__(self, name, age)
        self.__type = "Dolphin"




if __name__ == "__main__":
   
    
  
    
    z = Zebra("vlad", 22)
    print(z)
    d = Dolphin("Danila", 50)
    print(d)
