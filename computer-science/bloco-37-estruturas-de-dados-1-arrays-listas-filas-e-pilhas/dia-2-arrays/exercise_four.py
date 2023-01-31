# Assumindo que entradas e saidas sempre terão o mesmo tamanho

def get_students_in_interval(entradas, saidas, instante):
    students = 0

    for i in range(len(entradas)):
        if entradas[i] <= instante <= saidas[i]:
            students += 1

    return students
    # Complexity O(n)

entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4
resultado = 1

print(get_students_in_interval(entradas, saidas, instante_buscado) == resultado)

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.