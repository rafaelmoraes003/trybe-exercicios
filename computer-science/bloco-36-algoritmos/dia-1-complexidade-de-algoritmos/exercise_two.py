# Suponha que se está escrevendo uma função para um jogo de batalha naval. 
# Dado um array bidimensional com n linhas e m colunas, e um par de 
# coordenadas x para linhas e y para colunas, o algoritmo verifica se há 
# um navio na coordenada alvo. Por exemplo:

grid = [ 
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
]

# resultado para (0, 4) = True
# resultado para (1, 1) = False

# Qual seria a ordem de complexidade da solução para este problema? E a complexidade de espaço?

# 1. O(1)
# 2. O(1)

def battleship(line, column):
    return grid[line][column] == 1