class TV:

    @property
    def volume(self):
        return self.__volume

    @volume.setter
    def volume(self, new_volume):
        if 0 <= new_volume <= 99:
            self.__volume = new_volume
        else: raise ValueError(f"Invalid volume {new_volume}, not in [0, 99]")

    @property
    def channel(self):
        return self.__channel

    @channel.setter
    def channel(self, new_channel):
        if 1 <= new_channel <= 99:
            self.__channel = new_channel
        else: raise ValueError(f"Invalid channel {new_channel}, not in [1, 99]")

    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__turned_on = False

    def increase_volume(self):
        self.volume += 1

    def decrease_volume(self):
        self.volume -= 1

    def change_channel(self, new_channel):
        self.channel = new_channel

    def turn_on_turn_down(self):
        self.__turned_on = not self.__turned_on

    def __str__(self):
        return f"""
            volume: {self.volume}
            channel: {self.channel}
            size: {self.__size}
            turned_on: {self.__turned_on}
        """

tv = TV(60)
tv.turn_on_turn_down()
tv.change_channel(99)
tv.increase_volume()
print(tv)