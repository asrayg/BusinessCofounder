from flask import Flask, request, jsonify
import bedrocktest as bed
import logging
import boto3
from flask_cors import CORS, cross_origin
import json
import os
import base64


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


emails = []

bedrock_client = boto3.client(
    service_name='bedrock-runtime',
    region_name='us-west-2'
    )

model_id = "anthropic.claude-3-sonnet-20240229-v1:0"
#system_prompts = [{"text": "You are an app that creates playlists for a radio station that plays rock and pop music."}]


@app.route('/')
@cross_origin()
def hello_world():
    return 'Hello World'



@app.route('/makeemail', methods=['POST'])
@cross_origin()
def make_email():
    data = request.get_json()
    emails = []
    system_prompts = [{"text": "You are a app that writes emails for start ups, only output in the form of a formal email, the startup you are writing for is" + json_to_string(data['about'])}]
    message = {
        "role": "user",
        "content": [{"text": data['text']}]
    }
    emails.append(message)
    response = bed.generate_conversation(
        bedrock_client, model_id, system_prompts, emails)
    print(response)
    output_message = response['output']['message']
    emails.append(output_message)
    
    return response['output']['message']['content']


@app.route('/clremail', methods=['DELETE'])
@cross_origin()
def clr_email():
    emails=[]





@app.route('/qPitch', methods=['POST'])
@cross_origin()
def quick_pitch():
    data = request.get_json()
    print("------------------------------------------------------------")
    ret = {
        "15": generic_gen("make a 15 second pitch for this startup", json_to_string(data)),
        "90": generic_gen("make a 90 second pitch for this startup", json_to_string(data)),
        "4": generic_gen("make a 4 min pitch for this startup", json_to_string(data))
    }
    return ret




@app.route('/bmc', methods=['POST'])
@cross_origin()
def bmc():
    data = request.get_json()
    pmt = "I am making a business model canvas for this startup, what is/are the: "
    ret = {
        "Key Partners": generic_gen(pmt + "Key Partners",json_to_string(data)),
        "Key Activities": generic_gen(pmt+ "Key Activities",json_to_string(data)),
        "Key Resources":generic_gen(pmt+ "Key Resources",json_to_string(data)),
        "Value Propositions":generic_gen(pmt+ "Value Propositions",json_to_string(data)),
        "Customer Relationships":generic_gen(pmt+ "Customer Relationships",json_to_string(data)),
        "Customer Segments":generic_gen(pmt+ "Customer Segments",json_to_string(data)),
        "Channels":generic_gen(pmt+ "Channels",json_to_string(data)),
        "Cost Structure":generic_gen(pmt+ "Cost Structure",json_to_string(data)),
        "Revenue Streams":generic_gen(pmt+ "Revenue Streams",json_to_string(data))
    }
    return ret




@app.route('/pros', methods=['POST'])
@cross_origin()
def pros():
    data = request.get_json()

    pmt = "make a prospectus for this startup"
    return generic_gen(pmt,json_to_string(data))  





@app.route('/lgegal', methods=['POST'])
@cross_origin()
def legal():
    data = request.get_json()

    pmt = "make a legal framework for this startup"
    return generic_gen(pmt,json_to_string(data))  



@app.route('/tnc', methods=['POST'])
@cross_origin()
def tnc():
    data = request.get_json()

    pmt = "make a T&C for this startup"
    return generic_gen(pmt,json_to_string(data))  











def generic_gen(prompt, sys_prompt):
    data = request.get_json()
    tmp = []
    print("1111111111111111111111111111111111111111111111111111111111111111111")
    message = {
        "role": "user",
        "content": [{"text": prompt}]
    }
    tmp.append(message)


    system_prompt = [{"text": sys_prompt}]
    print("222222222222222222222222222222222222222222222222222222222222222222")
    response = bed.generate_conversation(
        bedrock_client, model_id, system_prompt, tmp)
    print(response)
    return response['output']['message']
    









@app.route('/makeSlides', methods=['POST'])
@cross_origin()
def mk_slides():
    data = request.get_json()
    system_prompts = [{"text": '''You are a helpful, intelligent assistant. You are experienced with PowerPoint.

Create the slides for a presentation on the given topic.
Include main headings for each slide, detailed bullet points for each slide.
Add relevant, detailed content to each slide, add one background image to illustrate the concept.



<ICONS>
{icons_list}
</ICONS>

The content of each slide should be VERBOSE, DESCRIPTIVE, and very DETAILED. Each bullet point should be detailed and explanatory, not just short phrases.

ALWAYS add a concluding slide at the end, containing a list of the key takeaways and an optional call-to-action if relevant to the context.
Unless explicitly instructed with the topic, create 5 SLIDES EXACTLY in total. You must never create more than 6 slides.


### Topic:
{question}


The output must be only a valid and syntactically correct JSON adhering to the following schema, do not output anything esle:
{
    "title": "Presentation Title",
    "slides": [
        {
            "heading": "Heading for the First Slide",
            "bullet_points": [
                "First bullet point",
                [
                    "Sub-bullet point 1",
                    "Sub-bullet point 2"
                ],
                "Second bullet point"
            ],
            "key_message": "",
            "img_keywords": "a Background image"
        },
        {
            "heading": "Heading for the Second Slide",
            "bullet_points": [
                "First bullet point",
                "Second bullet item",
                "Third bullet point"
            ],
            "key_message": "The key message conveyed in this slide",
            "img_keywords": "some keywords for this slide"
        },
        {
            "heading": "A slide illustrating key ideas/aspects/concepts (Hint: generate an appropriate heading)",
            "bullet_points": [
                "[[icon name]] Some text",
                "[[another icon name]] Some words describing this aspect",
                "[[icon]] Another aspect highlighted here",
                "[[an icon]] Another point here",
            ],
            "key_message": "",
            "img_keywords": ""
        },
        {
            "heading": "A slide that describes a step-by-step/sequential process",
            "bullet_points": [
                ">> The first step of the process (begins with special marker >>)",
                ">> A second step (begins with >>)",
                ">> Third step",
            ],
            "key_message": "",
            "img_keywords": ""
        },
        {
            "heading": "A slide with a double column layout (useful for side-by-side comparison/contrasting of two related concepts, e.g., pros & cons, advantages & risks, old approach vs. modern approach, and so on)",
            "bullet_points": [
                {
                    "heading": "Heading of the left column",
                    "bullet_points": [
                        "First bullet point",
                        "Second bullet item",
                        "Third bullet point"
                    ]
                },
                {
                    "heading": "Heading of the right column",
                    "bullet_points": [
                        "First bullet point",
                        "Second bullet item",
                        "Third bullet point"
                    ]
                }
            ],
            "key_message": "",
            "img_keywords": ""
        }
    ]
}'''}]


    tmp = []
    datastr = "Make a pitchdeck based off of this info about the bussness" + json_to_string(data)

    # datastr = "Make a pitchdeck based off of this info about the bussness: \n" + json_to_string(json.loads('''{"startupName":"HealthMate","missionStatement":"To empower individuals to take control of their health by providing accessible, real-time personalized insights and connections to health professionals.","problem":"HealthMate simplifies health tracking and symptom diagnosis, connecting users with medical professionals and creating a seamless bridge between patients and health services.\n","uniqueFeature":"We combine AI-powered symptom analysis with direct communication to healthcare providers, allowing users to get instant insights and professional consultations in one app.\n","targetCustomer":"Health-conscious individuals and families, people managing chronic conditions, and healthcare professionals.","marketSize":"$10 billion growing telehealth market.","competitors":"WebMD, ZocDoc, BetterHelp.","revenueModel":"Subscription-based service for premium features, referral fees from healthcare providers.","pricingStrategy":"Freemium model with a $9.99/month premium plan offering unlimited consultations and in-depth reports.","channels":"Social media advertising, partnerships with medical professionals, app stores, and healthcare blogs.","product":"A mobile app offering symptom analysis, real-time health tracking, and direct consultation with healthcare professionals.","keyFeatures":"AI-based symptom checker, health insights, appointment scheduling, health tracking dashboard, 24/7 chat with healthcare providers.\n","startupStage":"Pre-revenue, beta-testing phase.","keyMilestones":"Beta version launched with over 5,000 downloads, partnerships with 20 local clinics.\n","userBase":"Currently 3,000 active users; ideal userbase includes 50,000 users within the first year.","founders":"John Doe (CEO): Background in AI and telemedicine. Jane Smith (CTO): Expert in app development with experience in health-tech. Mark Lee (COO): Healthcare operations expert.","advisors":"Dr. Sarah Patel, leading telehealth practitioner; Dr. Evan Green, AI health diagnostics researcher","financialMetrics":"Burn rate of $15,000/month, $500,000 in total raised capital, aiming for $10,000 MRR after launch.","currentRunway":"12 months","fundsRaised":"Yes, raised $500,000 in seed funding.","fundingSought":"Seeking an additional $1 million.","fundingUse":"Product development, customer acquisition, and expanding partnerships with healthcare providers.\n","longTermVision":"To be the go-to app for personal health management and to integrate deeply into global healthcare systems.\n","risks":"Regulatory hurdles, ensuring data privacy, and competition from well-established healthcare apps.\n","scalability":"AI-based diagnosis allows for rapid scaling, and partnerships with clinics and hospitals will drive user growth.\n"}'''.replace('\n', '')))
    print(datastr)
    message = {
        "role": "user",
        "content": [{"text": datastr}]
    }
    tmp.append(message)
    response = bed.generate_conversation(
        bedrock_client, model_id, system_prompts, tmp)
    output_message = response['output']['message']['content']

    #tmp2 = []
    #tmp2.append(output_message)
    #tmp2[0][0]['text'] = "remove all new lines from this: " +  tmp2[0][0]['text']
    #tmp33 = tmp2[0][0]['text']
    #
    #print("00000000000000----------------------------------------------------------------------------------------------")
    #print(tmp33)
    #tmp3 = {
        #"role": "user",
        #"content": [{"text": tmp33}]
    #}
    #print("-1111---------------------------------------------------------------------------------------------1111")
    #print(tmp3)
    #tmp4 = []
    #tmp4.append(tmp3)
    #response = bed.generate_conversation(
        #bedrock_client, model_id, system_prompts, tmp4)
#
    #print("--222-------------------------------------------------------------------------------------------22222-")
    #print(response)
    #output_message = response['output']['message']
    print("--3333-------------------------------------------------------------------------------------------33333-")
    imgs = imageGen(output_message[0]['text'].replace('```json','').replace('\n', ''))   
    return imgs


def imageGen(jsn): 
    print("how how are you")
    print(remove_before_first_brace(jsn))
    thefuckingjson = json.loads(remove_before_first_brace(jsn))

    retobj = thefuckingjson
    print(thefuckingjson)
    
    for i in range(len(thefuckingjson['slides'])):
            # Create a Bedrock Runtime client in the AWS Region of your choice.
        client = boto3.client("bedrock-runtime", region_name="us-west-2")

# Set the model ID, e.g., Titan Image Generator G1.
        img_model_id = "stability.stable-diffusion-xl-v1"


# Format the request payload using the model's native structure.
        native_request = {"text_prompts":[{"text":"bakgorund image:" + thefuckingjson['slides'][i]['img_keywords'],"weight":1}],"cfg_scale":10,"steps":50,"seed":0,"width":1344,"height":768,"samples":1}

# Convert the native request to JSON.
        request = json.dumps(native_request)

# Invoke the model with the request.
        response = client.invoke_model(modelId=img_model_id, body=request)

# Decode the response body.
        model_response = json.loads(response["body"].read())

# Extract the image data.
        base64_image_data = model_response["artifacts"][0]["base64"]

# Save the generated image to a local folder.
        w = 1
        while os.path.exists(os.path.join("../imgs/", f"image_{w}.png")):
            w+=1

        image_data = base64.b64decode(base64_image_data)
        image_path = os.path.join("../imgs/", f"image_{w}.png")
        thefuckingjson['slides'][i]['img_keywords'] = f"127.0.0.1:8000/image_{w}.png"
        with open(image_path, "wb") as file:
            file.write(image_data)

        print(f"The generated image has been saved to {image_path}.")
    

    return thefuckingjson











@app.route('/inj/add', methods=['POST'])
@cross_origin()
def hello_worldpt2():
    
    data = request.get_json()


    print(data)
    if 'injured' in data and isinstance(data['injured'], list):
        # Process the list (for example, just return it)
        return jsonify({"status": "success", "data": data['injured']}), 200
    else:
        return jsonify({"status": "error", "message": "Invalid input, expected a list under 'injured'"}), 400






def json_to_string(json_obj):
    return '\n'.join([f"{key}: {value}" for key, value in json_obj.items()])

def remove_before_first_brace(s):
    return s[s.index('{'):] if '{' in s else s

if __name__ == '__main__':

    app.run()
