import json
import random

with open("pokemons.json", mode="r") as file:
    pokemons = json.load(file)["results"]

pokemons_names = [pokemon["name"] for pokemon in pokemons]

random_pokemon = random.choice(pokemons_names)

guess = ""

i = 1

while i <= len(random_pokemon):
    guess = input("DESCUBRA O POKÉMON ESCOLHIDO: ")
    if guess == random_pokemon:
        break
    pokemon_guess = ""
    for x in range(i):
        pokemon_guess += random_pokemon[x]
    print(pokemon_guess)
    i += 1

print(f"FIM DE JOGO - O POKÉMON ERA -- {random_pokemon} --")

