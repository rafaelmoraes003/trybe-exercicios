# Compare o tempo de execução do algoritmo merge_sort e bubble_sort para uma 
# entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.

from cronometro import Cronometro
from random import shuffle

def bubble_sort(array):
    for i in range(len(array) - 1):
        for j in range(0, len(array) - i - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]


def merge_sort(array, start, end):
    if (end - start) > 1:
        mid = (start + end) // 2
        merge_sort(array, start, mid)
        merge_sort(array, mid, end)
        merge(array, start, mid, end)

def merge(array, start, mid, end):
    left = array[start:mid]
    right = array[mid:end]

    left_index, right_index = 0, 0

    for i in range(start, end):
        if left_index >= len(left):
            array[i] = right[right_index]
            right_index += 1
        elif right_index >= len(right):
            array[i] = left[left_index]
            left_index += 1
        elif left[left_index] < right[right_index]:
            array[i] = left[left_index]
            left_index += 1
        else:
            array[i] = right[right_index]
            right_index += 1



numbers = list(range(10_000))
shuffle(numbers)

with Cronometro("bubble sort"):
        bubble_sort(numbers)

with Cronometro("merge sort"):
        merge_sort(numbers, 0, len(numbers))


# bubble sort tem complexidade de tempo O(n²), ou seja, para um número n de elementos do
# array, ele precisa fazer n² operações 

# merge sort tem complexidade O(n log n) por usar a técnica de dividir e conquistar,
# tornando-se mais rápido