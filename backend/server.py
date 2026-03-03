from flask import Flask, jsonify
from Pets import pets


app = Flask(__name__)


@app.route('/pet_status')
def pet_status():
    return jsonify(pets)


@app.route('/pet_properties')
def pet_properties():
    return jsonify(pets)


@app.route('/create_an_new_pet')
def create_an_new_pet():
    return 'Hello World'


if __name__ == '__main__':
    app.run()