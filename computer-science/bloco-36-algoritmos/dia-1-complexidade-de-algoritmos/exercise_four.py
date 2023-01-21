# Dado um array de doces candies e um valor inteiro extra_candies, 
# onde o candies[i] representa o número de doces que a enésima criança possui. 
# Para cada criança, verifique se há uma maneira de distribuir doces extras 
# entre as crianças de forma que ela possa ter o maior número de doces entre elas. 
# Observe que várias crianças podem ter o maior número de doces. 
# Analise o código abaixo para o melhor, pior caso e caso médio. 
# Faça a análise de complexidade de espaço também.

def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))

# 1. O(n) (max)
# 2. O(n)