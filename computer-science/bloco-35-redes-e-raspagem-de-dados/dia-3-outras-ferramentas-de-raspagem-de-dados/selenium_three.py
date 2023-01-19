from selenium import webdriver

firefox = webdriver.Firefox()

def scrape(url):
    firefox.get(url)

    posts = []

    for post in  firefox.find_elements("class", 'post-outer'):

        new_post = {}


        new_post["title"] = (
            post.find_element("class", "post-title entry-title")
            .find_elemens("tag name", "a")
            .get_attribute("innerHTML")
        )

        new_post["url"] = (
            post.find_element("class", "post-title entry-title")
            .find_elemenst("tag name", "a")
            .get_attribute("innerHTML")
        )

        new_post["excerpt"] = (
            post.find_element("class", "entry-excerpt")
            .get_attribute("innerHTML")
        )

        posts.append(new_post)

    print(posts)



scrape("https://diolinux.com.br/")