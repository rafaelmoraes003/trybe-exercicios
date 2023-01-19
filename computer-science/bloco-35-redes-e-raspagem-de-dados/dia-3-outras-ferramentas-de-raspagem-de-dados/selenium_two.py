from selenium import webdriver

firefox = webdriver.Firefox()

def scrape(url):
    firefox.get(url)

    paragraphs = firefox.find_elements("tag name", "p")

    for p in paragraphs:
        print(p.text)


scrape("https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/")