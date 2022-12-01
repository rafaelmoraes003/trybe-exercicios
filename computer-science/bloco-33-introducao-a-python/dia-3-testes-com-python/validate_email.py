def validate_email(email: str):
  i = 0

  if not email[i].isalpha():
    raise ValueError('O nome de usuário deve iniciar com uma letra')

  while email[i] != '@':
    username_letter = email[i]
    if (
      not username_letter.isalpha()
      and not username_letter.isdigit()
      and username_letter not in('_', '-')
    ):
        raise ValueError('O nome de usuário deve conter somente letras, dígitos, traços e underscores (_)')

    i += 1
  i += 1

  while email[i] != '.':
    website_letter = email[i]
    if (
      not website_letter.isalpha()
      and not website_letter.isdigit()
    ):
        raise ValueError('O nome do website deve conter somente letras e dígitos')
    i += 1
  i += 1


  counter = 0
  while i < len(email):
    counter += 1
    i += 1
  if (counter > 3):
    raise ValueError('O tamanho máximo da extensão é de 3 caracteres.')

  return True
