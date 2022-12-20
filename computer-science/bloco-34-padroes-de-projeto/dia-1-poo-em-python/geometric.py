from abc import ABC
from math import pi

class FiguraGeometrica(ABC):
    def area(self):
        raise NotImplementedError

    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado
    
    def area(self):
        return self.lado ** 2

    def perimetro(self):
        return self.perimetro * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base + self.altura) * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return pi * (self.raio ** 2)

    def perimetro(self):
        return 2 * pi * self.raio
