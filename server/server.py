from flask import Flask, request, jsonify
import util

app = Flask(__name__)


@app.route('/')
def home():
    return "Bangalore House Price Prediction API Running"


@app.route('/get_location_names', methods=['GET'])
def get_location_names():

    response = jsonify({
        'locations': util.get_location_names()
    })

    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():

    try:

        print("FORM DATA:", request.form)

        total_sqft = request.form.get('total_sqft')
        bhk = request.form.get('bhk')
        bath = request.form.get('bath')
        location = request.form.get('location')

        print("total_sqft =", total_sqft)
        print("bhk =", bhk)
        print("bath =", bath)
        print("location =", location)

        if not total_sqft:
            return jsonify({
                "error": "total_sqft is missing"
            })

        if not bhk:
            return jsonify({
                "error": "bhk is missing"
            })

        if not bath:
            return jsonify({
                "error": "bath is missing"
            })

        if not location:
            return jsonify({
                "error": "location is missing"
            })

        estimated_price = util.get_estimated_price(
            location,
            float(total_sqft),
            int(bhk),
            int(bath)
        )

        response = jsonify({
            "estimated_price": estimated_price
        })

        response.headers.add(
            "Access-Control-Allow-Origin",
            "*"
        )

        return response

    except Exception as e:

        print("ERROR:", str(e))

        return jsonify({
            "error": str(e)
        })


if __name__ == "__main__":

    print("Starting Python Flask Server...")

    util.load_saved_artifacts()

    app.run(
        host='127.0.0.1',
        port=5000,
        debug=True
    )