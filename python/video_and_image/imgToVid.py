import cv2
import numpy as np
import os

# video creation from a colleciton of images

"""
# alternative way (not tested)
def save():
    os.system("ffmpeg -r 1 -i img%01d.png -vcodec mpeg4 -y movie.mp4")
"""
# simple version for working with CWD
imgPath = "video/imgs/"
output = "video/vids/test.avi"
imgs = os.listdir(imgPath)
img = []
for i in range(len(imgs)):
    img.append(cv2.imread("{0}{1}.png".format(imgPath, i)))

# get info from first pic
height, width, channels = img[0].shape

# Define the codec and create VideoWriter object
fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # Be sure to use lower case
out = cv2.VideoWriter(output, fourcc, 20.0, (width, height))

for image in img:
    out.write(image)

cv2.destroyAllWindows()
out.release()
