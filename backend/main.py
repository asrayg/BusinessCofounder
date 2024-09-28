from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World'


@app.route('/inj/add', methods=['POST'])
def hello_worldpt2():
    
    data = request.get_json()


    print(data)
    if 'injured' in data and isinstance(data['injured'], list):
        # Process the list (for example, just return it)
        return jsonify({"status": "success", "data": data['injured']}), 200
    else:
        return jsonify({"status": "error", "message": "Invalid input, expected a list under 'injured'"}), 400









if __name__ == '__main__':

    app.run()

