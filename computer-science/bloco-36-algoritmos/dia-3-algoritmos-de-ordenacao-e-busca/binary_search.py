def binary_search(array, target):
    start = 0
    end = len(array) - 1

    while start <= end:
        mid = (start + end) // 2

        if array[mid] == target:
            return mid

        if array[mid] > target:
            end = mid - 1
        else:
            start = mid + 1

    return -1