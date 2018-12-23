from sys import argv as args
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('-n', '--name', help="input your name if u wanna see magix")
args = parser.parse_args()


def handleName(given):
    if not(given):
        x = "World"
        return x
    else:
        x = given
        return x


if __name__ == "__main__":
    name = handleName(args.name)
    print("Hello " + name + " ! ")
