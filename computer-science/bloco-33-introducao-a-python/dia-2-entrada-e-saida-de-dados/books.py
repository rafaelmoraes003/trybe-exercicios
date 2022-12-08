import json
import csv

with open("books.json", mode="r") as file:
    books = json.load(file)

total_books = len(books)

categories = {}
for book in books:
    for category in book["categories"]:
        if category not in categories:
            categories[category] = 0
        categories[category] += 1


percentage_of_categories = {}

for category in categories:
    percentage = (categories[category] / total_books) * 100
    percentage_of_categories[category] = percentage


def create_percentage_report_file(path):
    with open(path, mode="w", encoding="utf-8") as file:
        writer = csv.writer(file)
        headers = ["category", "percentage"]
        writer.writerow(headers)
        for category in percentage_of_categories:
            writer.writerow([category, percentage_of_categories[category]])

create_percentage_report_file("report.csv")
