# Dado um array de números de tamanho n, escreva um algoritmo que 
# retorna true se há no array um número duplicado e false caso contrário. 
# Analise a solução abaixo e diga qual é a ordem de complexidade desse 
# algoritmo para o melhor caso, pior caso e caso médio.

def check_duplicates(numbers):
    numbers.sort()

    for i in range(len(numbers)):
        if numbers[i] == numbers[i + 1]:
            return True
    return False

# MÉTODO SORT - O(n log n) TimSort