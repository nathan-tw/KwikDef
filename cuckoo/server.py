from flask import Flask, render_template, request, redirect, url_for
import static_model

app = Flask(__name__)
app.config["DEBUG"] = True
ALLOWED_EXTENSIONS = {'json'}


@app.route('/', methods=['GET'])
def index():
    return {'Hello, World!'}


@app.route('/predict/dynamic', methods=['POST'])
def uploadDynamic():
    file = request.files['file']
    return 'Hello, World1'

@app.route('/predict/static', methods=['POST'])
def uploadStatic():
    file = request.files['file']
    data = file.read()
    hash = file.filename
    static_model.static_main(file, hash)
    return 'success'

app.run(host="140.119.19.46")

