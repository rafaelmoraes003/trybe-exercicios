def get_sum(n):
  sum = 0
  for i in range(n, 0, -1):
    sum += i
  return sum

print(get_sum(2))
