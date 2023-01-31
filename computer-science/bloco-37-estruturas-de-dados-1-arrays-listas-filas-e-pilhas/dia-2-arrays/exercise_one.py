# 1 - OK
# 0 - Instabilidades

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1] # 3
valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1] # 4

def time_without_instabilities(collected_values):
    max_time = 0
    current = 0

    for value in collected_values:
        if value == 1:
            current += 1
        else:
            current = 0
        if current >= max_time:
            max_time = current

    return max_time
    # Complexity O(n)

print(time_without_instabilities(valores_coletados1))
print(time_without_instabilities(valores_coletados2))
