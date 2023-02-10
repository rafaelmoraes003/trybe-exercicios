def get_repeated(nums):
    seen_before = set()
    repeated = set()

    for num in nums:
        if num not in seen_before:
            seen_before.add(num)
        else:
            repeated.add(num)

    return repeated

nums = [1, 6, 3, 9, 6, 6, 3, -1, 4, 5, 7, 1]
print(get_repeated(nums))