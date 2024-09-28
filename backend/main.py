from flask import Flask, request, jsonify
import bedrocktest.py

app = Flask(__name__)

emails = {}




@app.route('/')
def hello_world():
    return 'Hello World'



@app.route('/makeemail')
def make_email():
    data = request.get_json()
    print(data)

    # json should have a rand int and the message you want to add
    emails[data['id']].append(data['message'])
    
    response = generate_conversation(
        bedrock_client, model_id, system_prompts, emails[data['id']])
 
    output_message = response['output']['message']
    messages.append(output_message)





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

