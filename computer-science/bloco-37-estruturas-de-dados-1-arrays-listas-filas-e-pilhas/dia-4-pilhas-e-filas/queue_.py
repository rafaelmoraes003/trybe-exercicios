from linked_list import LinkedList

class Queue:
    def __init__(self):
        self.queue = LinkedList()

    def __str__(self):
        return f"Queue({self.queue.head})"

    def enqueue(self, value):
        self.queue.insert_last(value)
    
    def dequeue(self):
        self.queue.remove_first()

    def peek(self):
        return self.queue.get_node_at(0)

    def is_empty(self):
        return self.queue.is_empty()


queue = Queue()
queue.enqueue(5)
queue.enqueue(1)
queue.enqueue(10)
print(queue.peek())
print(queue)