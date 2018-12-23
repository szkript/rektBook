
def f(n):
    if n == 0: return 0
    elif n == 1: return 1
    else: return f(n-1)+f(n-2)

def SubFib(startNumber, endNumber, nums):
    x = 1
    n = 0
    cur = f(n)
    while cur <= endNumber:        
        if startNumber <= cur:
            print(x,cur)
        n += 1
        x += 1
        cur = f(n)
        if nums < x: break


if __name__ == "__main__":
    print("Fibonacci sequance: ")  
    nums = int(input('How many numbers want to see? '))
    try:
        for i in SubFib(0, 600000, nums):
            pass       
    except:
        print('done')
