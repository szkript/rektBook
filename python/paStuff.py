import random


def range_of_list():
    empty_list = []  # empty list
    for nums in range(10):
        empty_list.append(random.randrange(1, 10, 2))
    return empty_list


def nums_divided_by_3(numbers):
    numbcount = 0
    for count in range(10):
        if numbers[count] % 3 == 0:  # divided by 2 equals 0
            numbcount += 1
        else:
            numbcount -= 1
    return numbcount


def conclusions(amountofnumbers):
    if not amountofnumbers:
        print('Half of the numbers are fully divisibly by 3.')
    elif amountofnumbers < 0:
        print('We have ' + str(abs(amountofnumbers)) + ' numbers which are not fully divisible by 3.')
    else:
        print('We have ' + str(abs(amountofnumbers)) + ' numbers which are fully divisible by 3.')

 
def main():
    conclusions(nums_divided_by_3(range_of_list()))

    
main()