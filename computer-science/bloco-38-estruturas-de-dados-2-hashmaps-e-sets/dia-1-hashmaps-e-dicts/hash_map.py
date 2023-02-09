class Employee:
    def __init__(self, id, name):
        self.id = id
        self.name = name

    def __str__(self):
        return f"Employee(id={self.id}, name={self.name})"

class HashMap:
    def __init__(self):
        self.buckets = [[] for _ in range(10)]

    def __str__(self):
        return f"HashMap({self.buckets})"

    def get_address(self, id):
        return id % 10

    def insert(self, employee: Employee):
        address = self.get_address(employee.id)
        self.buckets[address].append(employee)

    def get_value(self, id):
        address = self.get_address(id)
        if len(self.buckets[address]):
            for employee in self.buckets[address]:
                if employee.id == id:
                    return employee.name
        return None

    def has(self, id):
        address = self.get_address(id)
        if len(self.buckets[address]):
            for employee in self.buckets[address]:
                if employee.id == id:
                    return True
        return False

    def update_value(self, id, new_name):
        if self.has(id):
            address = self.get_address(id)
            for employee in self.buckets[address]:
                if employee.id == id:
                    employee.name = new_name

hash_map = HashMap()

mario = Employee(14, "Mario")
yoshi = Employee(24, "Yoshi")

hash_map.insert(mario)
hash_map.insert(yoshi)

print(hash_map.get_value(14)) # Mario
print(hash_map.get_value(5)) # None

luigi = Employee(24, "Luigi")

hash_map.update_value(24, luigi.name)

print(hash_map)
