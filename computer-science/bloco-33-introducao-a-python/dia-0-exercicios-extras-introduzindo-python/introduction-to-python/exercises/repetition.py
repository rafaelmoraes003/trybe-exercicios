def append_each_letter_of_the_word_in_a_list(word):
  list = list()

  for i in word:
    list.append(i)

  return list


def return_index_of_the_uppercase_letter(word = str):
  for i in word:
    if i.isupper(): return word.index(i)


def return_element_from_list_that_is_string(input_list = list):
  for i in input_list:
    if isinstance(i, str): return i
