from abc import ABC, abstractmethod
from datetime import datetime

class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(self, msg):
        raise NotImplementedError


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(self, msg):
        print(msg)


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(self, msg):
        with open("logs.txt", mode="a") as file:
            print(f"{msg}\n", file=file)

class Log:
    def __init__(self, manipuladores: list[ManipuladorDeLog]):
        self.manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.manipuladores.add(manipulador)

    def __log(self, nivel, msg):
        for manipulador in self.manipuladores:
            manipulador.log(self.__formatar(nivel, msg))

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{nivel} - {data}]: {msg}"

    def info(self, msg):
        self.__log("INFO", msg)

    def alerta(self, msg):
        self.__log("ALERTA", msg)

    def erro(self, msg):
        self.__log("ERRO", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)

log_em_tela = LogEmTela()
log_em_arquivo = LogEmArquivo()
log = Log([log_em_tela, log_em_arquivo])
log.erro("OSError - file not found.")

