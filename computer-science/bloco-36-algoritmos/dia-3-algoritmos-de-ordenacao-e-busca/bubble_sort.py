# Dado um array com os seguintes elementos ["zebra", "macaco", "elefante", "arara", "javali"], 
# após duas iterações utilizando bubble sort, como estaria este array?

def bubble_sort(array):
    for i in range(len(array) - 1):
        for j in range(len(array) - i - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
        print(array)


animals = ["zebra", "macaco", "elefante", "arara", "javali"]
bubble_sort(animals)

# ['elefante', 'arara', 'javali', 'macaco', 'zebra']
