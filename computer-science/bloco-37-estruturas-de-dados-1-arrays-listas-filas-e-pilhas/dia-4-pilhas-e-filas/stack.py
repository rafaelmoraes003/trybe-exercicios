from linked_list import LinkedList

class Stack:
    def __init__(self):
        self.stack = LinkedList()

    def __str__(self):
        return f"Stack({self.stack.head})"

    def push(self, value):
        self.stack.insert_last(value)

    def pop(self):
        self.stack.remove_last()

    def peek(self):
        return self.stack.get_node_at(len(self.stack) - 1)

    def is_empty(self):
        return self.stack.is_empty()

stack = Stack()
stack.push(0)
stack.push(1)
stack.push(2)
stack.pop()
print(stack.peek())
print(stack)