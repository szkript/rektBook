image = pyautogui.screenshot()
image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
cv2.imwrite("in_memory_to_disk.png", image)

# alternative way (not tested)
def save():
    os.system("ffmpeg -r 1 -i img%01d.png -vcodec mpeg4 -y movie.mp4")