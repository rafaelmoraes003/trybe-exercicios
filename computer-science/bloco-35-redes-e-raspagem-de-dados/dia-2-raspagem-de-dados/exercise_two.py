# Faça uma requisição ao recurso usuários da API do Github 
# (https://api.github.com/users), exibindo o username e url de todos os usuários retornados.

import requests

response = requests.get("https://api.github.com/users")
users = response.json()

for user in users:
    username = user["login"]
    url = user["url"]
    print(f"username - {username}\n url - {url}\n")