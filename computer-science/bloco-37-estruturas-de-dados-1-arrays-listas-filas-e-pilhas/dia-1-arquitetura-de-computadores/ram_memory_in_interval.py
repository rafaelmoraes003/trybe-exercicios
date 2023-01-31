from subprocess import check_output
from time import sleep

while True:
    ram_information = [
        information
        for information in check_output("free")
        .decode("UTF-8")
        .split("\n")[1]
        .split(" ")
        if information != ""
    ]

    print(f"Total Memory: {int(ram_information[1]) / 1000}")
    print(f"Used Memory: {int(ram_information[2]) / 1000}")
    sleep(1)
