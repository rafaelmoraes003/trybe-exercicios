from node import Node

class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        new_last_value = Node(value)
        old_last_value = self.get_node_at(len(self) - 1)
        old_last_value.next = new_last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.get_node_at(position - 1)
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        if self.head_value:
            self.head_value = self.head_value.next
            self.__length -= 1

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        prev_to_remove = self.get_node_at(len(self) - 2)
    
        prev_to_remove.next = None
        self.__length -= 1

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        prev_to_removed = self.get_node_at(position - 1)        
        prev_to_removed.next = prev_to_removed.next.next
        self.__length -= 1

    def get_element_at(self, position):
        value_to_be_returned = self.get_node_at(position)
        return Node(value_to_be_returned.value)

    def is_empty(self):
        return not self.__length

    def clear(self):
        self.head_value = None
        self.__length = 0

    def get_node_at(self, position):
        current_value = self.head_value
        if current_value:
            while position > 0 and current_value.next:
                current_value = current_value.next
                position -= 1
        return current_value

    def index_of(self, value):
        i = 0
        while i < len(self):
            current_value = self.get_node_at(i)
            if current_value.value == value:
                return i
            i += 1
        return -1

