from abc import ABC, abstractmethod

class ImpostoStrategy(ABC):
    @classmethod
    @abstractmethod
    def taxa(cls, valor):
        raise NotImplementedError()


class ISS(ImpostoStrategy):
    @classmethod
    def taxa(cls, valor):
        return 0.1 * valor

class ICMS(ImpostoStrategy):
    @classmethod
    def taxa(cls, valor):
        return 0.06 * valor

class PIS(ImpostoStrategy):
    @classmethod
    def taxa(cls, valor):
        return 0.0065 * valor

class COFINS(ImpostoStrategy):
    @classmethod
    def taxa(cls, valor):
        return 0.03 * valor

class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto: ImpostoStrategy):
        return imposto.taxa(self.valor)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(ISS())}")
print(f"ICMS: {orcamento.calcular_imposto(ICMS())}")
print(f"PIS: {orcamento.calcular_imposto(PIS())}")
print(f"COFINS: {orcamento.calcular_imposto(COFINS())}")