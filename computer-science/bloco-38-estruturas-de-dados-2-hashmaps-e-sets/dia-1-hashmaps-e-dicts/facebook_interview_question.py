# Você receberá uma lista de palavras e uma string. 
# Escreva uma função que decida quais palavras podem ser formadas 
# com os caracteres da string (cada caractere só pode ser utilizado uma vez). 
# Retorne a soma do comprimento das palavras escolhidas.

# FACEBOOK INTERVIEW QUESTION

def facebook(words: list, string: str):
    string_letters = {}

    for letter in string:
        if letter not in string_letters:
            string_letters[letter] = 1
        else:
            string_letters[letter] += 1

    possible_words_length = 0

    for word in words:
        string_letters_helper = string_letters
        should_add = False
        for letter in word:
            if letter in string_letters_helper and string_letters_helper[letter] > 0:
                string_letters_helper[letter] -= 1
                should_add = True
            else:
                break

        if should_add:
            possible_words_length += len(word)


    return possible_words_length

words = ["hello", "world", "students"]
chars = "welldonehoneyr"

print(facebook(words, chars))
