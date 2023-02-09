dict_comprehension = {
    number: (number * 2 if number % 2 == 0 else number * 3)
    for number in range(3, 21)
}

print(dict_comprehension)