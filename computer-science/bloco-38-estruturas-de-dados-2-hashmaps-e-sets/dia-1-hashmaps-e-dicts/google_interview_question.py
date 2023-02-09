# Uma certa empresa tem uma estrutura hierarquizada onde cada 
# pessoa reporta a uma única outra pessoa. 
# Cada pessoa tem um score que é o total de pessoas que estão abaixo dela,
# incluindo subordinados de seus subordinados, além dela própria. 
# Isso significa que uma pessoa que não tem nenhuma equipe tem score 1. 
# Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.

# Escreva um método que calcule o score de uma determinada pessoa.

# GOOGLE INTERVIEW QUESTION

def score(subordinates, person):
    scores_person = 1

    for person_under in subordinates[person]:
        scores_person += score(subordinates, person_under)

    return scores_person

subordinates = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: [],
}

print(score(subordinates, 1))
print(score(subordinates, 2))
print(score(subordinates, 3))
print(score(subordinates, 4))
print(score(subordinates, 5))
print(score(subordinates, 6))
print(score(subordinates, 7))