letter_number = {
  '1': 1,
  'ABC': 2,
  'DEF': 3,
  'GHI': 4,
  'JKL': 5,
  'MNO': 6,
  'PQRS': 7,
  'TUV': 8,
  'WXYZ': 9,
  '0': 0,
  '-': '-'
}

def decode_expression(expression: str):
  final_message = ''

  for i in expression:
    for j in letter_number:
      if i in j:
        final_message += str(letter_number[j])

  return final_message
