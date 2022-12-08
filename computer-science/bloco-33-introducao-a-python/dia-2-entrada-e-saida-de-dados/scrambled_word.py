import random

with open("words.txt", mode="r") as file:
    content = file.read().split("\n")
    
random_word = random.choice(content)
random_word_scrambeld = "".join(random.sample(random_word, len(random_word)))

i = 0

guess = ""

player_won = False

while i < 3:
    guess = input(f"ADIVINHE A PALAVRA EMBARALHADA: {random_word_scrambeld}: ")

    if (guess == random_word):
        player_won = True
        break

    i += 1

print("VOCÊ GANHOU!") if player_won else print(f"VOCÊ PERDEU! A PALAVRA ERA -- {random_word} --")
