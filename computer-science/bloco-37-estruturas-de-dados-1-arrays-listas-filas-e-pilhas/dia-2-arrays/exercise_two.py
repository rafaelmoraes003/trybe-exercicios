def shuffle(cards):
    shuffled = []
    mid = len(cards) // 2
    for i in range(mid):
        shuffled.extend(cards[i::mid])
    return shuffled
    # Complexity O(n)

# Exemplo 1:
cartas = [2, 6, 4, 5]
cartas_por_parte = 2
resultado = [2, 4, 6, 5]

print(shuffle(cartas) == resultado)

# Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
cartas_por_parte = 3

resultado = [1, 7, 4, 6, 4, 6]

print(shuffle(cartas) == resultado)

