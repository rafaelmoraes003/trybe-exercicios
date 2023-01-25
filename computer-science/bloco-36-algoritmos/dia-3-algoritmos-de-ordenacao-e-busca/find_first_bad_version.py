# Para descobrirmos qual commit introduziu um erro no sistema, 
# precisamos voltar no tempo verificando os commits antigos, 
# de modo a descobrir um commit em que os testes falham. Supondo 
# que isto será representado como um array de booleanos, descubra 
# o índice onde o erro ocorreu pela primeira vez.

def find_first_bad_version(array):
    start = 0
    end = len(array) - 1

    while end >= end:
        mid = (start + end) // 2

        if array[mid] is False:
            end = mid - 1
        else:
            start = mid + 1