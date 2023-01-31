def get_combinations(arr):
    combinations = []

    for i in range(len(arr)):
        for j in range(len(arr)):
            if i != j:
                if arr[i] == arr[j] and j > i:
                    combinations.append(tuple((i, j)))

    return combinations
    # Complexity O(n²)

# Exemplo 1:
produtos = [1, 3, 1, 1, 2, 3]
resultado = 4
combinations = [(0, 2), (0, 3), (1, 5), (2, 3)]

print(get_combinations(produtos) == combinations)

# Exemplo 2:
produtos = [1, 1, 2, 3]
resultado = 1
combinations = [(0, 1)]

print(get_combinations(produtos) == combinations)