from flask import Flask, request, jsonify
import bedrocktest as bed
import logging
import boto3

app = Flask(__name__)

emails = []

bedrock_client = boto3.client(
    service_name='bedrock-runtime',
    region_name='us-west-2'
    )

model_id = "anthropic.claude-3-sonnet-20240229-v1:0"
system_prompts = [{"text": "You are an app that creates playlists for a radio station that plays rock and pop music."
                   }]


@app.route('/')
def hello_world():
    return 'Hello World'



@app.route('/makeemail', methods=['GET'])
def make_email():
    data = request.get_json()
    
    message = {
        "role": "user",
        "content": [{"text": data['message']}]
    }
    emails.append(message)
    response = bed.generate_conversation(
        bedrock_client, model_id, system_prompts, emails)
    print(response)
    output_message = response['output']['message']
    emails.append(output_message)




    return response['output']['message']['content']






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

