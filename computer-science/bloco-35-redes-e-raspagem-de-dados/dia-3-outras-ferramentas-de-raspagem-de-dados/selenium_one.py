from selenium import webdriver

firefox = webdriver.Firefox()

def scrape(url):
    firefox.get(url)

    quote = (
        firefox.find_element("class", "quote")
        .find_element("class", "text")
        .get_attribute("innerHTML")
    )

    print(quote)

scrape("https://quotes.toscrape.com/")