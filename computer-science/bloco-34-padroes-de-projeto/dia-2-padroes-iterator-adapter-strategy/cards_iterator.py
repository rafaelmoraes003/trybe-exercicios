from collections.abc import Iterator, Iterable

class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)



# class IteradorBaralhoInverso(Iterator):
#     def __init__(self, cartas):
#         self.cartas = cartas
#         self.index = len(cartas) - 1

#     def __next__(self):
#         try:
#             carta = self.cartas[self.index]
#         except IndexError:
#             raise StopIteration()
#         else:
#             self.index -= 1
#             return carta


class IteradorBaralho(Iterator):
    def __init__(self, cartas, metodo):
        self.cartas = cartas
        self.index = 0 if metodo == "asc" else len(cartas) - 1
        self.metodo = metodo

    def __next__(self):
        try:
            carta = self.cartas[self.index]
        except IndexError:
            raise StopIteration()
        else:
            if self.metodo == "asc": self.index += 1
            else: self.index -= 1
            return carta


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.index = 0

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorBaralho(self._cartas, "asc")


class BaralhoInverso(Baralho):

    def __iter__(self):
        return IteradorBaralho(self._cartas, "desc")



baralho = BaralhoInverso()
baralho_iter = iter(baralho)

while True:
    try:
        print(next(baralho_iter))
    except StopIteration:
        break