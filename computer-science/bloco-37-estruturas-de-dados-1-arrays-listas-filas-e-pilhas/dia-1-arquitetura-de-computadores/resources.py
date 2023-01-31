from subprocess import check_output

cpu_information = check_output("lscpu").decode("UTF-8").split("\n")

desired_cpu_information = {
    "model name": "Modelo",
    "cpu(s)": "Cores",
    "cpu mhz": "Velocidade (MHz)",
    "l1d": "Cache L1d",
    "l1i": "Cache L1i",
    "l2": "Cache L2",
    "l3": "Cache L3",
}

for desired_name, desired_description in desired_cpu_information.items():
    for information in cpu_information:
        if information.lower().startswith(desired_name):
            information = information.split("  ")
            information = information[-1].strip()
            print(f"{desired_description}: {information}")

ram_information = [
    information
    for information in check_output("free")
    .decode("UTF-8")
    .split("\n")[1]
    .split(" ")
    if information != ""
]

total_memory = int(ram_information[1]) / 1000
used_memory = int(ram_information[2]) / 1000

print(ram_information)
