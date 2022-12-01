def fizz_buzz(n):
  fizz_buzz_list = list()

  for i in range(1, n + 1):
    if i % 5 == 0 and i % 3 == 0:
      fizz_buzz_list.append('FizzBuzz')
    elif i % 5 == 0:
      fizz_buzz_list.append('Buzz')
    elif i % 3 == 0:
      fizz_buzz_list.append('Fizz')
    else:
      fizz_buzz_list.append(i)

  return fizz_buzz_list
