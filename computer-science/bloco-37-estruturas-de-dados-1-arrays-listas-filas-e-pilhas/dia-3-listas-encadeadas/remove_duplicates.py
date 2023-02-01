from node import Node
from linked_list import LinkedList

def remove_duplicates(linked_list: LinkedList):
    nodes = set()

    i = 0
    while i < len(linked_list):
        current_value = linked_list.get_node_at(i).value
        nodes.add(current_value)
        i += 1

    new_linked_list = LinkedList()

    for node in nodes:
        new_linked_list.insert_last(node)

    return new_linked_list

linked_list = LinkedList()
linked_list.insert_last(1)
linked_list.insert_last(1)
linked_list.insert_last(2)
linked_list.insert_last(3)
linked_list.insert_last(3)

print(remove_duplicates(linked_list))