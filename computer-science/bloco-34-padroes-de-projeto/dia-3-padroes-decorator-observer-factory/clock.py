from abc import ABC, abstractmethod

class ObservadorRotina(ABC):
    @abstractmethod
    def acionar(self):
        pass


class Alarme:
    def __init__(self):
        self.rotinas = []
        self.despertado = False

    def add_rotina(self, rotina: ObservadorRotina):
        self.rotinas.append(rotina)

    def despertar(self):
        print("Alarme acionado")
        for rotina in self.rotinas:
            rotina.acionar()
        self.despertado = True


    def exibe_rotinas(self):
        return self.rotinas


class Luzes(ObservadorRotina):
    def __init__(self, alarme: Alarme):
        self.alarme = alarme
        self.esta_ligada: False
        self.alarme.add_rotina(self)

    def acionar(self):
        self.esta_ligada = True
        print("As luzes estão acesas")


class Cafe(ObservadorRotina):
    def __init__(self, alarme: Alarme):
        self.esta_preparado: False
        self.alarme = alarme
        self.alarme.add_rotina(self)

    def acionar(self):
        self.esta_preparado = True
        print("O café está pronto")


class Computador(ObservadorRotina):
    def __init__(self, alarme: Alarme):
        self.esta_ligado: False
        self.alarme = alarme
        self.alarme.add_rotina(self)

    def acionar(self):
        self.esta_ligado = True
        print("O computador foi ligado")


alarme = Alarme()

Luzes(alarme)
Cafe(alarme)
Computador(alarme)


alarme.despertar()

