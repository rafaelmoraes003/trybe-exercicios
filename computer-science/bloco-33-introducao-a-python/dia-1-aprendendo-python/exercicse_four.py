def get_name_with_more_characters(name_list):
  return max(name_list, key=len)

print(get_name_with_more_characters(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))