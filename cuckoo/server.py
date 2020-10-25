from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
app.config["DEBUG"] = True
ALLOWED_EXTENSIONS = {'json'}    


@app.route('/', methods=['GET'])
def index():
    return {'Hello, World!'}


@app.route('/predict/dynamic', methods=['POST'])
def uploadDynamic():
    file = request.files['file']
    return file

@app.route('/predict/static', method=['POST'])
def uploadStatic():
    file = request.files['file']
    return 'Hello, World2'

app.run(host='140.119.19.46')
