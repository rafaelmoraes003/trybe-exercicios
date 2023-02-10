def match_note(choices, riddles):
    return max(choices.difference(riddles))

def reducer_note(choices, riddles):
    return min(choices.difference(riddles))

def single_note(choices, riddles):
    set_choices = set(choices)
    set_riddles = set(riddles)

    return match_note(set_choices, set_riddles) - reducer_note(set_choices, set_riddles)

def blefe(moves: dict):
    players = moves.keys()

    first_note = single_note(moves[players[0]], moves[players[1]])
    second_note = single_note(moves[players[1]], moves[players[0]])

    if first_note > second_note:
        return players[0]
    elif second_note > first_note:
        return players[1]
    return None

entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

print(blefe(entrada))