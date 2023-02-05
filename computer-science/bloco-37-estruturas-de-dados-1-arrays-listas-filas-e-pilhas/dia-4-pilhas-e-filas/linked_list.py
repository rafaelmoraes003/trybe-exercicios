from node import Node

class LinkedList:
    def __init__(self):
        self.head = None
        self.__length = 0

    def __len__(self):
        return self.__length

    def __str__(self):
        return f"LinkedList(len={self.__length}, head={self.head})"

    def is_empty(self):
        return not self.__length

    def get_node_at(self, position):
        current_value = self.head

        while position > 0 and current_value.next:
            current_value = current_value.next
            position -= 1

        return current_value

    def insert_first(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        last_node = self.get_node_at(len(self) - 1)
        last_node.next = Node(value)
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        new_node = Node(value)
        prev_node = self.get_node_at(position - 1)
        new_node.next = prev_node.next
        prev_node.next = new_node
        self.__length += 1

    def remove_first(self):
        if self.head:
            new_first_node = self.head.next
            self.head = new_first_node
            self.__length -= 1

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        last_node = self.get_node_at(len(self) - 2)
        last_node.next = None
        self.__length -= 1

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        last_node = self.get_node_at(position - 1)
        last_node.next = last_node.next.next
        self.__length -= 1

    def clear(self):
        self.head = None
        self.__length = 0
