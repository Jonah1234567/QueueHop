import os
import time
from computer_vision.counter import counter_wrapper
import yaml
import pyautogui
import gc
from datetime import date
from data_management.database_writing import write_to_database


def load_config():
    stream = open("configs/config.yaml", 'r')
    dictionary = yaml.load(stream)
    return dictionary


yaml_presets = load_config()
operating_system = yaml_presets["os"]
video_source = yaml_presets["video"]
buffer_time = yaml_presets["buffer_time"]
data_path = yaml_presets["data_path"]

for i in range(100):
    t0 = time.time()
    if os.path.exists(data_path):
        os.remove(data_path)

    myScreenshot = pyautogui.screenshot()
    myScreenshot.save(data_path)

    #os.system('ffmpeg -f dshow -i "video=' + video_source + '" -frames:v 1 ' + data_path + ' -hide_banner -loglevel error')
    num_people = counter_wrapper()
    print("Number of people detected: ", num_people)
    today = date.today()
    dt_string = today.strftime("%m/%Y")
    writing_time = today.strftime("%m/%d/%Y %H:%M:%S")
    creds = yaml_presets["oauth_creds"]
    scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
    gc.collect()
    write_to_database(num_people, writing_time, dt_string, creds, scope)
    t = time.time()
    total_time = t - t0
    print("Time for detection and cloud upload: ", total_time)
    if buffer_time - total_time > 0:
        time.sleep(buffer_time - total_time)


