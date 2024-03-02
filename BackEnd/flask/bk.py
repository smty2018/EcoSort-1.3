from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.resnet import preprocess_input
import numpy as np
from PIL import Image
from flask_cors import CORS
import io
import os

app = Flask(__name__)
CORS(app)
model_path = "./abc.h5"
# current_directory = os.getcwd()
# model_pathrel = "../..//EcoSort//BackEnd//flask//abc.h5"
# absmodel_path = os.path.join(current_directory, model_pathrel)
labels = ["battery", "glass", "metal", "organic", "paper", "plastic"]
loaded_model = load_model(model_path)

def preprocesss_input(image):
    img = image.resize((224, 224)) 
    img = np.array(img)
    img = np.expand_dims(img, axis=0)
    img = preprocess_input(img)
    return img

def make_prediction(image):
    img_array = preprocesss_input(image)
    predictions = loaded_model.predict(img_array)
    predicted_label = labels[np.argmax(predictions)]
    accuracy = round(np.max(predictions) * 100, 2)
    return predicted_label, accuracy

@app.route('/predict', methods=['POST'])
def predict():
    
    file = request.files['image']

  
    img = Image.open(io.BytesIO(file.read()))
    predicted_label, accuracy = make_prediction(img)

    response = {'prediction': predicted_label, 'accuracy': accuracy}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
