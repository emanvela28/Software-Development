from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/trucks', methods=['GET'])
def get_trucks():
    trucks = [
        {"id": 1, "license_plate": "ABC123", "status": "processing"},
        {"id": 2, "license_plate": "XYZ456", "status": "completed"},
    ]
    return jsonify(trucks)

if __name__ == '__main__':
    app.run(debug=True)
