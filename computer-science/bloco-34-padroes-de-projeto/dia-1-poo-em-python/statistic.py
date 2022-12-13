import statistics

class Statistic:

    def __init__(self, numbers_list: list[int]):
        self.numbers_list =  numbers_list

    def arithmetic_average(self):
        return sum(self.numbers_list) / len(self.numbers_list)

    def median(self):
        return statistics.median(self.numbers_list)

    def mode(self):
        return statistics.mode(self.numbers_list)

