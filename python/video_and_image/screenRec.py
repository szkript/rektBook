import cv2
import numpy as np
import pyautogui
from importlib.machinery import SourceFileLoader

funs = SourceFileLoader("funs.py", "/").load_module()
"""
Rec screen imgs into video without img save

"""
# simple version for working with CWD


def main():
    path = "video/vids/"
    vid_count = funs.saveLoad(path, "load")
    funs.saveLoad(path)
    # Define the codec and create VideoWriter object
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    output = path+"output"+str(vid_count)+".avi"
    out = cv2.VideoWriter(output, fourcc, 20.0, (640, 480))

    # get info from pic
    image = pyautogui.screenshot()
    image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
    height, width, channels = image.shape

    # Define the codec and create VideoWriter object
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # Be sure to use lower case
    out = cv2.VideoWriter(output, fourcc, 20.0, (width, height))

    while(True):
        try:
            image = pyautogui.screenshot()
            image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
            out.write(image)
            StopIteration(0.5)
        except KeyboardInterrupt:   # ctrl+c
            print("stop recording")
            break

    out.release()
    cv2.destroyAllWindows()
    pass


if __name__ == "__main__":
    main()
