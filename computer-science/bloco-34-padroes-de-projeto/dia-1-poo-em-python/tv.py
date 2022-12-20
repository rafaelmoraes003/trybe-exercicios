class TV:
    
    @property
    def volume(self):
        return self.__volume
        
    @property
    def canal(self):
        return self.__canal
    
    @volume.setter
    def volume(self, valor):
        if 0 <= valor <= 99:
            self.__volume = valor
        else: raise ValueError(f"volume {valor} não está entre 0 e 99")
        
    @canal.setter
    def canal(self, valor):
        if 1 <= valor <= 99:
            self.__canal = valor
        else: raise ValueError(f"canal {valor} não está entre 1 e 99")
    
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1 
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        self.volume += 1

    def diminuir_volume(self):
        self.volume -= 1

    def modificar_canal(self, valor):
        self.canal = valor

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
        
    def __str__(self):
        return f"""
            volume: {self.__volume},
            canal: {self.__canal},
            tamanho: {self.__tamanho},
            ligada: {self.__ligada}
        """
        

tv = TV(50)
tv.modificar_canal(102)
print(tv)
