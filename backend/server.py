from flask import Flask

app = Flask(__name__)

@app.route('/home')
def home():
    return 'Hello World'


@app.route('/pet_status')
def pet_status():
    return 'Hello World'


@app.route('/pet_properties')
def pet_properties():
    return 'Hello World'


@app.route('/create_an_new_pet')
def create_an_new_pet():
    return 'Hello World'


if __name__ == '__main__':
    app.run()