import os
for i in range(100):
    os.system('ffmpeg -f dshow -i "video=USB Camera" -frames:v 1 data/pic.png -hide_banner -loglevel error')
    os.system('python preprocessing.py')