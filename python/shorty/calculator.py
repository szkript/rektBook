oprators = ["/","*","-","+"]


def calculator():
    num1 = input('Enter a number (or a letter to exit): ')
    num1 = inputCheck(num1)
    operator = input('Enter an operation: ')
    operator = inputCheck(operator)
    num2 = input('Enter another number: ')
    num2 = inputCheck(num2)
    calculate(num1,num2,operator)



def calculate(a,b,x):
    if x == oprators[0]: # /
        print("result: ",a / b)
    elif x == oprators[1]: # *
        print("result: ",a * b)
    elif x == oprators[2]: # -
        print("result: ",a - b)
    elif x == oprators[3]: # +
        print("result: ",a + b)
    else:
        print("error")


def inputCheck(x):
    if x in oprators:        
        return x      
    try:
        x = int(x)        
        return x
    except ValueError:
        print('Calculator closed.')
        exit()
        


if __name__ == "__main__":
    while True:
        calculator()