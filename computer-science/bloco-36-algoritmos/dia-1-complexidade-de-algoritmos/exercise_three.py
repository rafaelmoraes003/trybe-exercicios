# Utilize o módulo random da linguagem Python para gerar um array com 100 números. 
# Cada um desses números deve ser a média de n números gerados aleatoriamente. 
# Qual é a ordem de complexidade de tempo e de espaço deste programa?

import random

def random_averages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average = random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages
    
# 1. O(n)
# 2. O(1)