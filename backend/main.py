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
#system_prompts = [{"text": "You are an app that creates playlists for a radio station that plays rock and pop music."}]


@app.route('/')
def hello_world():
    return 'Hello World'



@app.route('/makeemail', methods=['GET'])
def make_email():
    data = request.get_json()
    system_prompts = [{"text": "You are a app that writes start ups emails"}]
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


@app.route('/clremail', methods=['DELETE'])
def clr_email():
    emails=[]


@app.route('/makeSlides', methods=['GET'])
def mk_slides():
    data = request.get_json()
    system_prompts = [{"text": '''You are a helpful, intelligent assistant. You are experienced with PowerPoint.

Create the slides for a presentation on the given topic.
Include main headings for each slide, detailed bullet points for each slide.
Add relevant, detailed content to each slide. When relevant, add one or two EXAMPLES to illustrate the concept.
For two or three important slides, generate the key message that those slides convey.

Identify if a slide describes a step-by-step/sequential process, then begin the bullet points with a special marker >>.
Limit this to max two or three slides.

Also, add at least one slide with a double column layout by generating appropriate content based on the description in the JSON schema provided below.
In addition, for each slide, add image keywords based on the content of the respective slides.
These keywords will be later used to search for images from the Web relevant to the slide content.

In addition, create one slide containing 4 TO 6 icons (pictograms) illustrating some key ideas/aspects/concepts relevant to the topic.
In this slide, each line of text will begin with the name of a relevant icon enclosed between [[ and ]].
Select appropriate and exact icon names from the <ICONS> section provided below.

<ICONS>
{icons_list}
</ICONS>

The content of each slide should be VERBOSE, DESCRIPTIVE, and very DETAILED. Each bullet point should be detailed and explanatory, not just short phrases.

ALWAYS add a concluding slide at the end, containing a list of the key takeaways and an optional call-to-action if relevant to the context.
Unless explicitly instructed with the topic, create 10 TO 12 SLIDES in total. You must never create more tha 15 slides.


### Topic:
{question}


The output must be only a valid and syntactically correct JSON adhering to the following schema:
{{
    "title": "Presentation Title",
    "slides": [
        {{
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
            "img_keywords": "a few keywords"
        }},
        {{
            "heading": "Heading for the Second Slide",
            "bullet_points": [
                "First bullet point",
                "Second bullet item",
                "Third bullet point"
            ],
            "key_message": "The key message conveyed in this slide",
            "img_keywords": "some keywords for this slide"
        }},
        {{
            "heading": "A slide illustrating key ideas/aspects/concepts (Hint: generate an appropriate heading)",
            "bullet_points": [
                "[[icon name]] Some text",
                "[[another icon name]] Some words describing this aspect",
                "[[icon]] Another aspect highlighted here",
                "[[an icon]] Another point here",
            ],
            "key_message": "",
            "img_keywords": ""
        }},
        {{
            "heading": "A slide that describes a step-by-step/sequential process",
            "bullet_points": [
                ">> The first step of the process (begins with special marker >>)",
                ">> A second step (begins with >>)",
                ">> Third step",
            ],
            "key_message": "",
            "img_keywords": ""
        }},
        {{
            "heading": "A slide with a double column layout (useful for side-by-side comparison/contrasting of two related concepts, e.g., pros & cons, advantages & risks, old approach vs. modern approach, and so on)",
            "bullet_points": [
                {{
                    "heading": "Heading of the left column",
                    "bullet_points": [
                        "First bullet point",
                        "Second bullet item",
                        "Third bullet point"
                    ]
                }},
                {{
                    "heading": "Heading of the right column",
                    "bullet_points": [
                        "First bullet point",
                        "Second bullet item",
                        "Third bullet point"
                    ]
                }}
            ],
            "key_message": "",
            "img_keywords": ""
        }}
    ]
}}


### Output:
```json'''}]
    tmp = []
    datastr = "Make a pitchdeck based off of this info about the bussness" + json_to_string(data)
    print(system_prompts)
    message = {
        "role": "user",
        "content": [{"text": datastr}]
    }
    tmp.append(message)

    response = bed.generate_conversation(
        bedrock_client, model_id, system_prompts, tmp)
    print(response)
    output_message = response['output']['message']





    return output_message


@app.route('/inj/add', methods=['POST'])
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


if __name__ == '__main__':

    app.run()
