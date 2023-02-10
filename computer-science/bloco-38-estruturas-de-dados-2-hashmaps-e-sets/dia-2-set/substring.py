def substring(string):
    biggest = 0
    
    for i in range(len(string)):
        biggest_substring = set()
        for j in range(i, len(string)):
            if string[j] in biggest_substring:
                break
            biggest_substring.add(string[j])
        if len(biggest_substring) > biggest:
            biggest = len(biggest_substring)
     
    return biggest

string = "serdevemuitolegalmasehprecisoestudarbastante"

print(substring(string))
