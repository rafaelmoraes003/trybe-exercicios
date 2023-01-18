# Vá ao site https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags 
# e recupere as imagens de todas as bandeiras.

import requests
from parsel import Selector

response = requests.get("https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags")
selector = Selector(text=response.text)

flags = selector.css("ul.gallery img::attr(src)").getall()

for flag in flags:
    img_url = flag.split("/")[-1]
    print("https:" + img_url)