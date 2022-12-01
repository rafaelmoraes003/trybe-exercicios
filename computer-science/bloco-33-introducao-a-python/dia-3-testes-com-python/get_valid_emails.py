from validate_email import validate_email

def get_valid_emails(emails_list: list):
  valid_emails = list()

  for email in emails_list:
    try:
      validate_email(email)
    except ValueError as exc:
      print(exc)
    else:
      valid_emails.append(email)

  return valid_emails
