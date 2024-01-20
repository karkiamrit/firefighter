from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np

import firebase_admin
from firebase_admin import credentials, db

app = Flask(__name__)

model = pickle.load(open('model.pkl', 'rb'))


@app.route('/predict', methods=['POST', 'GET'])
def predict():
    if request.method == 'POST':
        try:
            if request.is_json:
                # If the request contains JSON data
                data = request.get_json()
                float_features = [float(data[key]) for key in ['temperature', 'oxygen', 'humidity']]
            else:
                # If the request contains form data
                float_features = [float(x) for x in request.form.values()]

            final = [np.array(float_features)]

            prediction = model.predict_proba(final)
            probability_of_fire = prediction[0][1]

            response = {
                "prediction": probability_of_fire,
                "message": "Your Forest is in Danger." if probability_of_fire > 0.5 else "Your Forest is safe.",
                "probability_message": "Probability of fire occurring is {:.2f}".format(probability_of_fire)
            }

            if request.is_json:
                # If the request wants JSON response
                return jsonify(response)
            else:
                # If the request wants HTML response
                return render_template('forest_fire.html', pred=response["probability_message"])

        except Exception as e:
            return jsonify({"error": str(e)})

    # Handle GET request
    return render_template("forest_fire.html")

# cred = credentials.Certificate("./credentials.json")
# firebase_admin.initialize_app(cred, {"databaseURL": "https://firefighter-e0a95-default-rtdb.firebaseio.com"})
# db_ref = db.reference('/')

# @app.route('/get_data', methods=['GET'])
# def get_data():
#     # Assuming you have a 'data' node in your Realtime Database
#     data_node = db_ref.get('data')

#     # Query the data
#     data = data_node.get()

#     return jsonify(data)

cred = credentials.Certificate("credentials.json")

firebase_admin.initialize_app(cred, {"databaseURL": "https://esp8266-data-transfer-default-rtdb.firebaseio.com/"})
db_ref = db.reference('/')

@app.route('/get_data', methods=['GET'])
def get_data():
    variables = ['a', 'b', 'c', 'd']
    data = {}

    for var in variables:
        # Fetch each variable and add it to the data dictionary
        data[var] = db_ref.child(var).get()

    return jsonify(data)

@app.route('/get_firebase_data', methods=['GET'])
def get_test_data():
    variables = ['humidity', 'soilMoisture', 'temp']
    data = {}

    try:
        # Assuming you have a 'test' node in your Realtime Database
        test_node = db_ref.child('test')

        for var in variables:
            # Fetch each variable under 'test' node and add it to the data dictionary
            data[var] = test_node.child(var).get()

        return jsonify(data)

    except Exception as e:
        return jsonify({"error": str(e)})

# @app.route('/test', methods=['GET'])
# def test_route():
#     try:
#         # Assuming you have a 'test' node in your Realtime Database
#         test_node = db_ref.child('test')

#         # Retrieve humidity, soil_moisture, and temp from Firebase
#         humidity = float(test_node.child('humidity').get())
#         soil_moisture = float(test_node.child('soilMoisture').get())
#         temp = float(test_node.child('temp').get())

#         # Your further processing logic here

#         response = {
#             "humidity": humidity,
#             "soil_moisture": soil_moisture,
#             "temp": temp,
#             # Include other response data as needed
#         }

#         return jsonify(response)

#     except ValueError:
#         return jsonify({"error": "Invalid parameter values. Please provide numeric values for humidity, soilMoisture, and temp."})



if __name__ == '__main__':
    app.run(debug=True)
