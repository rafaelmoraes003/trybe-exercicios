from abc import ABC, abstractmethod

class GeometricFigure(ABC):

    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Square(GeometricFigure):
    
    def __init__(self, side):
        self.side = side

    def area(self, side):
        return side ** 2

    def perimeter(self, side):
        return side * 4

class Rectangle(GeometricFigure):

    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return self.base * self.height

    def perimeter(self):
        return (self.base + self.height) * 2

class Circle(GeometricFigure):

    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * (self.radius ** 2)

    def perimeter(self):
        return 2 * 3.14 * self.radius 
