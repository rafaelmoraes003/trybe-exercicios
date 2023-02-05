from extended_stack import Stack

garage = Stack()

option = 0

while option != 4:
    print('Operations: ')
    print('1. Add vehicle')
    print('2. Remove a vehicle')
    print('3. Parked vehicles')
    print('4. Close the program')
    option = int(input('Option: '))

    if option == 1:
        plate_number = input("plate number: ")
        garage.push(plate_number)
        print(f"Vehicle {plate_number} parked")

    if option == 2:
        plate_number = input("plate number: ")

        street = Stack()

        vehicle_removed = False

        while not garage.is_empty():
            parked_plate = garage.pop()
            if parked_plate == plate_number:
                print(f"Vehicle {plate_number} removed")
                vehicle_removed = True
            else:
                street.push(parked_plate)

        while not street.is_empty():
            street_car = street.pop()
            garage.push(street_car)

        if not vehicle_removed:
            print("There is no vehicle parked with this plate")


    elif option == 3:
        print(f"{len(garage)} vehicles parked")

    else:
        print("Closing program")

