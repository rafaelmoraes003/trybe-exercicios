def count_words_by_letter(text):
    words_by_letter = {}

    for word in text:
        first_letter = word[0].lower()

        if first_letter not in words_by_letter:
            words_by_letter[first_letter] = []

        words_by_letter[first_letter].append(word)

    return words_by_letter

text = ["Ana", "ama", "João", "que", "ama", "José", "mas", "Jose", "não", "ama", "Ana"]

print(count_words_by_letter(text))