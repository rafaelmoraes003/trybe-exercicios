class Set:
    def __init__(self):
        self.set = [False for _ in range(1001)]
        self.biggest = 0
        self.length = 0

    def __str__(self):
        string = "{"

        for i in range(len(self.set)):
            if self.set[i]:
                string += str(i)
                if i < self.biggest:
                    string += ", "

        string += "}"
        return string

    def __len__(self):
        return self.length

    def __contains__(self, item):
        return self.set[item]

    def add(self, item):
        self.set[item] = True
        if item > self.biggest:
            self.biggest = item
        self.length += 1

    def union(self, set_B):
        union_set = Set()

        for i in range(1001):
            if self.set[i] or set_B.set[i]:
                union_set.add(i)

        return union_set

    def intersection(self, set_B):
        intersection_set = Set()

        for i in range(1001):
            if self.set[i] and set_B.set[i]:
                intersection_set.add(i)

        return intersection_set

    def difference(self, set_B):
        difference_set = Set()

        for i in range(1001):
            if self.set[i] and not set_B.set[i]:
                difference_set.add(i)

        return difference_set

    def issubset(self, set_B):

        for i in range(1001):
            if self.set[i]:
                if i not in set_B:
                    return False

        return True

    def issuperset(self, set_B):

        for i in range(1001):
            if set_B[i]:
                if i not in self.set:
                    return False

        return True



if __name__ == "__main__":
    # set_A = Set()

    # for i in range(1, 4):
    #     set_A.add(i)

    # set_B = Set()

    # for i in range(3, 6):
    #     set_B.add(i)

    # union_AB = set_A.union(set_B)
    # intersection_AB = set_A.intersection(set_B)
    # difference_AB = set_A.difference(set_B)

    # print(union_AB)
    # print(intersection_AB)
    # print(difference_AB)

    # QUESTÃO ESTUDANTES 

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    students_set = Set()
    list1_set = Set()
    list2_set = Set()

    for student in estudantes:
        students_set.add(student)

    for student in lista1_entregues:
        list1_set.add(student)

    for student in lista2_entregues:
        list2_set.add(student)

    # 1. Quem ainda não entregou a lista1?

    ans = students_set.difference(list1_set)
    print(ans)

    # 2. Quem já entregou as duas listas?

    ans = list1_set.intersection(list2_set)
    print(ans)

    # 3. Quem já entregou qualquer uma das duas listas?

    ans = list1_set.union(list2_set)
    print(ans)

    # 4. Quem ainda não entregou nenhuma das listas?

    ans = students_set.difference(list1_set.union(list2_set))
    print(ans)