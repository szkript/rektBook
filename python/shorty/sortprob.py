usrinput = input("give as much number as you want,separated with space: ")
usrlen = len(usrinput)

nums = []

print(nums)
iters = 1
N = len(nums)

while iters < N:    
    j = 0
    while j <= N-2:
        if nums[j] > nums[j+1]:
            temp = nums[j+1]
            nums[j+1] = nums[j]
            nums[j] = temp
        else:
            j += 1
    else:
        iters += 1
else:
    print(nums)
    