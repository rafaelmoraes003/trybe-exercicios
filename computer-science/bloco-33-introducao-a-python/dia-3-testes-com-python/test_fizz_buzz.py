from fizz_buzz import fizz_buzz

def test_with_interval_of_one_to_three():
  assert fizz_buzz(3) == [1, 2, 'Fizz']

def test_with_interval_of_one_to_five():
  assert fizz_buzz(5) == [1, 2, 'Fizz', 4, 'Buzz']

def test_with_interval_of_one_to_ten():
  assert fizz_buzz(10) == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']

def test_if_dont_return_wrong_list():
  assert fizz_buzz(3) != [1, 2, 3]