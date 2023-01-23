# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).

def count_even_numbers(n):
    even_numbers = 0

    for i in range(1, n + 1):
        if i % 2 == 0:
            even_numbers += 1

    return even_numbers


# Transforme o algoritmo criado acima em recursivo.

def count_even_numbers_recursive(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_even_numbers_recursive(n - 1)
    else:
        return count_even_numbers_recursive(n - 1)

