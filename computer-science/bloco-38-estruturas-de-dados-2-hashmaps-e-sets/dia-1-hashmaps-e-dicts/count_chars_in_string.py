def count_chars_in_string(string):
    chars = {}

    for char in string:
        if char not in chars:
            chars[char] = 1
        else:
            chars[char] += 1

    return chars

print(count_chars_in_string("bbbbaaaacccaaaaaaddddddddccccccc"))