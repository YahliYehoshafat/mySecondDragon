from flask import Flask, request, jsonify
from flask_cors import CORS
from TypesOfPets import TypesOfPets
from Pet import Pet
from Pets import pets


app = Flask(__name__)
CORS(app)


@app.route('/pet_info')
def pet_info():
    return jsonify([pet.to_dict() for pet in pets])


@app.route('/performing_an_action/<index>/<action>')
def performing_an_action(index: int, action: str):
    match action:
        case "sleep":
            pets[int(index)].sleep()
        case "play":
            pets[int(index)].play()
        case "eat":
            pets[int(index)].eat()
    return jsonify(pets[int(index)].to_dict())


@app.route('/pet_properties')
def pet_properties():
    return jsonify([pet.to_dict() for pet in pets])


@app.route('/create_an_new_pet', methods=['POST'])
def create_an_new_pet():
    pet_data = request.get_json()
    pet_name = pet_data.get("name")
    pet_type = pet_data.get("type")
    pets.append(Pet(pet_name, pet_type))
    return jsonify({"message": "Data received"})


if __name__ == '__main__':
    app.run(debug=True)