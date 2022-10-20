import os
from counter import counter_wrapper
external = False
video = "USB2.0 VGA UVC WebCam"
if external:
    video = "USB Camera"

for i in range(100):
    if os.path.exists("data\pic.png"):
        os.remove("data\pic.png")
    os.system('ffmpeg -f dshow -i "video='+video+'" -frames:v 1 data/pic.png -hide_banner -loglevel error')
    print(counter_wrapper())