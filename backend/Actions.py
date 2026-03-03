from Pet import Pet


def get_pet_state(pet: Pet) -> None:
    """
    
    Prints pet's state
    """
    print(f"animal name = {pet.name}\nanimal type = {pet.pet_type}\nanimal hunger = {pet.hunger}\npoints = {pet.points}")
    print(f"animal energy = {pet.energy}\nanimal happiness = {pet.happiness}\nanimal history = {str(pet.history)}")


def calculate_pet_profile(pet: Pet) -> float:
    """
    
    Calculate animal state
    """
    return (pet.energy + pet.happiness + pet.hunger) / 3