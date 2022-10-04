import os
import cv2 as cv
import numpy as np
import time


def init_dl():
    # Load names of classes and get random colors
    classes = open('DL/coco.names').read().strip().split('\n')
    np.random.seed(42)
    # Give the configuration and weight files for the model and load the network.
    net = cv.dnn.readNetFromDarknet('DL/yolov3.cfg', 'DL/yolov3.weights')
    net.setPreferableBackend(cv.dnn.DNN_BACKEND_OPENCV)
    # determine the output layer
    ln = net.getLayerNames()
    ln = [ln[i[0] - 1] for i in net.getUnconnectedOutLayers()]
    return classes, net, ln


def init_image():
    img = cv.imread('data/pic.png')
    cv.waitKey(1)
    # construct a blob from the image
    blob = cv.dnn.blobFromImage(img, 1 / 255.0, (416, 416), swapRB=True, crop=False)
    cv.waitKey(1)
    return blob, img


def run_dl(net, blob, ln):
    net.setInput(blob)
    t0 = time.time()
    outputs = net.forward(ln)
    t = time.time()
    total_time = t-t0
    return outputs, total_time


def post_processing(outputs, img):
    boxes = []
    confidences = []
    classIDs = []
    h, w = img.shape[:2]
    for output in outputs:
        for detection in output:
            scores = detection[5:]
            classID = np.argmax(scores)
            confidence = scores[classID]
            if confidence > 0.5:
                box = detection[:4] * np.array([w, h, w, h])
                (centerX, centerY, width, height) = box.astype("int")
                x = int(centerX - (width / 2))
                y = int(centerY - (height / 2))
                box = [x, y, int(width), int(height)]
                boxes.append(box)
                confidences.append(float(confidence))
                classIDs.append(classID)
    return boxes, confidences, classIDs


def count_people(boxes, confidences, classIDs, classes):
    indices = cv.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
    people_count = 0
    if len(indices) > 0:
        for i in indices.flatten():
            if classes[classIDs[i]] == "person":
                people_count += 1
    return people_count


def counter_wrapper():
    classes, net, ln = init_dl()
    blob, img = init_image()
    outputs, total_time = run_dl(net, blob, ln)
    boxes, confidences, classIDs = post_processing(outputs, img)
    people_count = count_people(boxes, confidences, classIDs, classes)
    return people_count, total_time


