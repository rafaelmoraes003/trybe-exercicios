# import statistics

# class Statistic:

#     def __init__(self, numbers_list: list[int]):
#         self.numbers_list =  numbers_list

#     def arithmetic_average(self):
#         return sum(self.numbers_list) / len(self.numbers_list)

#     def median(self):
#         return statistics.median(self.numbers_list)

#     def mode(self):
#         return statistics.mode(self.numbers_list)

from collections import Counter

class Estatistica:
    
    @classmethod
    def media(cls, numbers: list[int]):
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers: list[int]):
        numbers.sort()
        i = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[i] + numbers[i - 1]) / 2
        return numbers[i]
        
    @classmethod
    def moda(cls, numbers: list[int]):
        return Counter(numbers).most_common()[0][0]
