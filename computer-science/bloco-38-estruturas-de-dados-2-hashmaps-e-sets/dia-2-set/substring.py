def substring(string):
    biggest_substrig = set()
    biggest = 0

    for char in string:
        if char not in biggest_substrig:
            biggest_substrig.add(char)
        else:
            if len(biggest_substrig) > biggest:
                biggest = len(biggest_substrig)
            biggest_substrig.clear()
            biggest_substrig.add(char)

    return biggest

string = "serdevemuitolegalmasehprecisoestudarbastante"

print(substring(string))