import os
import sys
import numpy as np
from util import base64_to_pil

# Flask
from flask import Flask, redirect, url_for, request, render_template, Response, jsonify, redirect
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

# TensorFlow and Keras
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.applications.imagenet_utils import preprocess_input, decode_predictions
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Declare a flask app
app = Flask(__name__)


# Model saved with Keras model.save()
MODEL_PATH = 'models/TimberTrackerModel.h5'

model = load_model('models/TimberTrackerModel.h5')
print('Model Loaded')
    
def model_predict(img_array, model, filepath):
    IMG_SIZE = 50
    img_array = cv2.imread(filepath, cv2.IMREAD_GRAYSCALE)
    IMG_SIZE = IMG_SIZE/255.0
    new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
    new_array = new_array.reshape(-1, IMG_SIZE, IMG_SIZE, 1)

    new_array = preprocess_input(x=new_array, mode='tf')
    CATEGORIES = ["Afzelia Africana","Kohomba"]
    preds = model.predict(new_array)
    return preds
    
@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('Predict_Function.html')


@app.route('/predict', methods=['GET', 'POST'])
def predict(CATEGORIES):

    if request.method == 'POST':
        # Get the image from post request
        new_array= base64_to_pil(request.json)

        # Make prediction
        preds = model_predict(new_array, model)

        #result = CATEGORIES[int(preds[0][0])]

        result = str(pred_class[0][0][1])               # Convert to string
        result = result.replace('_', ' ').capitalize()

        return jsonify(result=result)

    return None
