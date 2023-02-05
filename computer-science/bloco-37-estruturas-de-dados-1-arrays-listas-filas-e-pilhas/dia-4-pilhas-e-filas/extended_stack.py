class Stack:
    def __init__(self, stack_limit):
        self._data = list()
        self.stack_limit = stack_limit

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            item = self._data[i]
            str_items += str(item)
            if i + 1 < self.size():
                str_items += ", "

        return f"Stack({self._data})"

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        if len(self._data) < self.stack_limit:
            self._data.append(value)
        else:
            raise OverflowError()

    def pop(self):
        if self.is_empty():
            return None

        return self._data.pop()

    def peek(self):
        if self.is_empty():
            return None
        return self._data[-1]

    def min_value(self):
        return min(self._data)

    def clear(self):
        self._data.clear()


# content_stack = Stack()
# content_stack.push(1)
# content_stack.push(-2)
# content_stack.push(3)
# print(content_stack.min_value()) # saída: -2

content_stack = Stack(2)
content_stack.push(1)
content_stack.push(-2)

try:
    content_stack.push(3)
except OverflowError:
    print("Não é possível adicionar outro item à pilha")
