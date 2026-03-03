from flask import Flask, request, jsonify
from flask_cors import CORS
from TypesOfPets import TypesOfPets
from Pet import Pet
from Pets import pets


app = Flask(__name__)
CORS(app)


@app.route('/pet_status')
def pet_status():
    return jsonify(pets)


@app.route('/pet_properties')
def pet_properties():
    return jsonify(pets)


@app.route('/create_an_new_pet', methods=['POST'])
def create_an_new_pet():
    pet_data = request.get_json()
    pet_name = pet_data.get("name")
    pet_type = pet_data.get("type")
    match (pet_type):
        case 1:
            pet_type = TypesOfPets.DOLPHIN.value
        case 2:
            pet_type = TypesOfPets.DOG.value
        case 3: 
            pet_type = TypesOfPets.CAT.value
    pets.append(Pet(pet_name, pet_type))
    return jsonify({"message": "Data received"})


if __name__ == '__main__':
    app.run(debug=True)