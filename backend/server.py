from flask import Flask, request, jsonify
from flask.wrappers import Response
from flask_cors import CORS
from pets_db import insert_to_db
from TypesOfPets import TypesOfPets
from Pet import Pet
from Pets import pets


app = Flask(__name__)
CORS(app)


@app.route('/pet_info')
def pet_info():
    return jsonify([pet.to_dict() for pet in pets])


@app.route('/performing_an_action/<index>/<action>')
def performing_an_action(index: int, action: str) -> Response:
    pet = pets[int(index)]
    match action:
        case "sleep":
            pet.sleep()
        case "play":
            pet.play()
        case "eat":
            pet.eat()
    return jsonify(pet.to_dict())


@app.route('/pet_properties')
def pet_properties() -> Response:
    return jsonify([pet.to_dict() for pet in pets])


@app.route('/create_an_new_pet', methods=['POST'])
def create_an_new_pet() -> Response:
    """

    Creates a new pet and adds it to the pets array.
    """
    pet_data = request.get_json()
    pet_name = pet_data.get("name")
    pet_type = pet_data.get("type")
    pets.append(Pet(pet_name, pet_type))
    return jsonify({"message": "Data received"})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
