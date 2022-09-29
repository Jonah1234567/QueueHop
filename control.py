import os
os.system('ffmpeg -f dshow -i "video=USB Camera" -frames:v 1 data/pic.png')
os.system('python preprocessing.py')