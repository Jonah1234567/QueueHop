from PIL import Image
import numpy as np
print(":")
# creating a object
im = Image.open(r"data/pic.png")
im = im.resize((640, 640))
im.show()
