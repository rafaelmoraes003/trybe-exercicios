def intersection_in_lists(nums1, nums2):
    frequency = {}

    for i in range(len(nums1)):
        if nums1[i] not in frequency:
            frequency[nums1[i]] = 1
        else:
            frequency[nums1[i]] += 1

        if nums2[i] not in frequency:
            frequency[nums2[i]] = 1
        else:
            frequency[nums2[i]] += 1

    frequecy_list = []

    for num in frequency:
        if frequency[num] > 1:
            frequecy_list.append(num)

    return frequecy_list


nums1 = [1, 2, 3, 4, 5, 6]
nums2 = [4, 5, 6, 7, 8, 9]

print(intersection_in_lists(nums1, nums2))