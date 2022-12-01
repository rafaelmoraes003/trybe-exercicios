import pytest
from get_valid_emails import get_valid_emails

all_valid_emails = ["nome@dominio.com", "fulano@dominio.com", "outro@dominio.com"]
half_valid_emails = ["nome@dominio.com", "errad%@dominio.com", "outro@dominio.com"]
invalid_emails = ['123@gmail.com', 'as%$@hotmail.commm', 'asde@12!3.com']

def test_with_all_emails_valid():
  assert get_valid_emails(all_valid_emails) == all_valid_emails

def test_with_half_valid_emails():
    assert get_valid_emails(half_valid_emails) == ["nome@dominio.com", "outro@dominio.com"]

def test_with_all_emails_invalid():
    assert get_valid_emails(invalid_emails) == []