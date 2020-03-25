from flask import Flask

app = Flask(__name__)

@app.route('/endpoint')
def firstMethod():
    print('endpoint hit')
    return 'hi there'