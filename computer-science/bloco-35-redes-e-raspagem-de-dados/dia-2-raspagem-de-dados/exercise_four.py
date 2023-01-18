# Baseando-se em uma página contendo detalhes sobre um 
# livro (http://books.toscrape.com/catalogue/the-grand-design_405/index.html), 
# faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.

import requests
from parsel import Selector

url = "http://books.toscrape.com/catalogue/"
book_url = "the-grand-design_405/index.html"

response = requests.get(url + book_url)

selector = Selector(text=response.text)

title = selector.css(".col-sm-6 h1::text").get()
price = selector.css(".col-sm-6 .price_color::text").re_first(r"£\d+\.\d{2}").split("£")[1]
description = selector.css("#product_description ~ p::text").get()
cover_url = selector.css("#product_gallery img::attr(src)").get()
available_books = selector.css(".product_main .availability::text").re_first("\d")

suffix = "...more"

if description.endswith(suffix):
    description = description[:-len(suffix)]

page_cover_url = url + cover_url

print(title, price, description, page_cover_url, available_books, sep=",")