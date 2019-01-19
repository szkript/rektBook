import os

"""
win 10 , execute command line arguments in terminal
"""

path = r"C:\Users\szkri\justcode\expense-manager"   # r prefix for unicode error
command = "npm start --prefix "+ path
os.system(command)