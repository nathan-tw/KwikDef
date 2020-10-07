from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
app.config["DEBUG"] = True
ALLOWED_EXTENSIONS = {'json'}    


@app.route('/', methods=['GET'])
def index():
    return 'Hello, World!'


@app.route('/predict', methods=['POST'])
def upload():
    file = request.files['file']
    return 'Hello, World'

app.run(host='140.119.19.46')
