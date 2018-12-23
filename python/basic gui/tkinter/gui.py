from tkinter import *

def clicked():
    msg.configure(text="Button was clicked !!")

# talks itself
mainFrame = Tk() 

# main menu panel
menu_bar = Menu(mainFrame)

# Create the submenu (tearoff is if menu can pop out)
file_menu = Menu(menu_bar, tearoff=0)

# Add commands to submenu
file_menu.add_command(label="Quit!", command=mainFrame.destroy)
file_menu.add_command(label="Exit!", command=mainFrame.destroy)
file_menu.add_command(label="End!", command=mainFrame.destroy)

# Add the "File" drop down sub-menu in the main menu bar
menu_bar.add_cascade(label="File", menu=file_menu)

mainFrame.config(menu=menu_bar)

# get screen width /height
screen_width = mainFrame.winfo_screenwidth()
screen_height = mainFrame.winfo_screenheight()
# frame title
mainFrame.title("Experimental gui")
# frame width, height and position
mainFrame.geometry('{}x{}+10+50'.format(int(screen_width/4), int(screen_height/3)))

# Create a label as a child of root window
msg = Message(mainFrame, text='Hello, world!')
# Font is a tuple of (font_family, size_in_points, style_modifier_string)
msg.config(font=('times', 12, 'italic bold underline'))
msg.grid(column=3, row=0)
lbl = Label(mainFrame, text="tools of ai") 
lbl.grid(column=0, row=0)


btn = Button(mainFrame, text="select vid", command=clicked)
btn.grid(column=0, row=1)
btn = Button(mainFrame, text="select img", command=clicked)
btn.grid(column=1, row=1)
btn = Button(mainFrame, text="rec", command=clicked)
btn.grid(column=2, row=1)



mainFrame.mainloop()

