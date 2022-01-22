class Mother:
    def __str__(self):
        return "object Mother"

class Daughter(Mother):
    def __str__(self):
        return "object Daughter"
if __name__ == "__main__":
m = Mother()
dt = Daughter()
print(m, dt)
print()
