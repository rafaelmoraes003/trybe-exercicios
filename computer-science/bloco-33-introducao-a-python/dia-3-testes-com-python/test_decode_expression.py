from decode_expression import decode_expression

def test_with_1_home_sweet_home():
  assert decode_expression('1-HOME-SWEET-HOME') == '1-4663-79338-4663'

def test_with_my_miserable_job():
  assert decode_expression('MY-MISERABLE-JOB') == '69-647372253-562'

def test_with_wxyz():
  assert decode_expression('WXYZ') == '9999'

def test_with_empty_string():
  assert decode_expression('') == ''