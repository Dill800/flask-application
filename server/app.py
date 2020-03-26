from flask import Flask, Response
import requests

app = Flask(__name__)

@app.route('/')

@app.route('/pokemon-img/<name>', methods=['GET'])
def firstMethod(name):
    
    print(name)
    x = requests.get('https://pokeapi.co/api/v2/pokemon/' + name).json()['sprites']['front_default']
    return x

if __name__ == '__main__':
    app.run(debug=True)