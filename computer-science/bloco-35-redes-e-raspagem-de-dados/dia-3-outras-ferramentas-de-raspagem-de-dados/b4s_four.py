import requests
from b4s import BeautifulSoup

def scrape(url):
    response = requests.get(url)
    html_content = response.text
    soup = BeautifulSoup(html_content, "html.parser")

    links = []

    for link in soup.findAll("a"):
        links.append(link.get("href"))

    print(links)

scrape("https://pt.wikipedia.org/wiki/Rock_in_Rio")