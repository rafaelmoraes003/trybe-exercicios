# Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, 
# inversamente ordenadas e aleatórias. Em seguida, compare-os. Faça testes para 
# entradas de tamanho 10.000, 100.000, 1.000.000.

from random import shuffle
from cronometro import Cronometro

def selection_sort(array):
    n = len(array)

    for i in range(n):
        min_idx = i

        for j in range(i + 1, n):
            if array[j] > array[min_idx]:
                min_idx = j

        array[i], array[min_idx] = array[min_idx], array[i]

    return array


def insertion_sort(array):
    n = len(array)

    for i in range(1, n):
        key = array[i]
        new_position = i - 1

        while new_position >= 0 and array[new_position] > key:
            array[new_position + 1] = array[new_position]

        array[new_position + 1] = key

    return array



for algorithm in (insertion_sort, selection_sort):
    algorithm_name = algorithm.__name__

    for input in (10_000, 100_000, 1_000_000):

        sorted_numbers = list(range(input))
        reversed_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]
        shuffle(random_numbers)

        with Cronometro(f"{algorithm_name} com entrada" +
                        f"ordenada de {input} números"):
            algorithm(sorted_numbers)

        with Cronometro(f"{algorithm_name} com entrada" +
                        f"inversamente ordenada de {input} números"):
            algorithm(reversed_sorted_numbers)

        with Cronometro(f"{algorithm_name} com entrada" +
                        f"aleatória de {input} números"):
            algorithm(random_numbers)

        print("*" * 50)