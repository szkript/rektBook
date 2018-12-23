a = list(range(1, 7, 2))    # Create a list a which contains the first three odd positive integers 
b = list(range(2, 8, 2))    # and a list b which contains the first three even positive integers.
c = a + b
d = c[:]    # and a list b which contains the first three even positive integers.
d.sort(reverse=True)    # Create a new list d which is a sorted copy of c, leaving c unchanged.
c[3] = 42   # Set the fourth element of c to 42.
d.append(10)    # Append 10 to the end of d.
for x in (7, 8, 9):
    c.append(x)    # Append 7, 8 and 9 to the end of c.
for x in range(3):
    print(c[x])    # Print the first three elements of c.
print(d[-1])    # Print the last element of d without using its length.
print(len(d))    # Print the length of d.

