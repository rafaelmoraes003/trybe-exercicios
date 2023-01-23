# Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro

def find_biggest_int(list, list_length):
    if list_length == 1:
        return list[0]

    biggest = find_biggest_int(list, list_length - 1)

    if biggest > list[list_length - 1]:
        return biggest
    else:
        return list[list_length - 1]

def biggest_int(numbers):
    return find_biggest_int(numbers, len(numbers))

print(biggest_int([1,2,5,7,8,9,65]))