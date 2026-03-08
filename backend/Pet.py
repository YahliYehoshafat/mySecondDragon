from Properties import Properties
from typing import List, Dict


class Pet(object):
    def __init__(self, name: str, pet_type: str):
        self._name: str = name
        self._pet_type: str = pet_type
        self._hunger: int = 50
        self._happiness: int = 50
        self._energy: int = 50
        self._points: int = 0
        self._history: List[str] = []
        self._pet_profile = self.calculate_pet_profile()

    @property
    def pet_profile(self) -> float:
        return self._pet_profile

    @property
    def name(self) -> str:
        return self._name
    
    @name.setter
    def name(self, name: str) -> None:
        self._name = name

    @property
    def pet_type(self) -> str:
        return self._pet_type
    
    @pet_type.setter
    def pet_type(self, pet_type: str) -> None:
        self._pet_type = pet_type

    @property
    def hunger(self) -> int:
        return self._hunger
    
    def change_property(self, prop: str, level: int) -> None:
        """
        
        Changes property score
        :param level: How much do you want to reduce/add to your property param
        :param prop: property name
        :param property_name: property name with "_" char
        """
        property_name = "_" + prop
        setattr(self, property_name, getattr(self, property_name) + level)
        if getattr(self, property_name) > 100:
            setattr(self, property_name, 100)
        elif getattr(self, property_name) <= 0:
            setattr(self, property_name, 0)
        self.calculate_pet_profile()
    
    @property
    def happiness(self) -> int:
        return self._happiness
    
    @property
    def energy(self) -> int:
        return self._energy
    
    @property
    def points(self) -> int:
        return self._points
    
    def change_points(self, points: int) -> None:
        """
        
        Changes points param
        :param points: How much do you want to reduce/add to your points param
        """
        self._points = self._points + points
        if self._points < 0:
            self._points = 0

    @property
    def history(self) -> List[str]:
        return self._history 
    
    def add_history_action(self, new_item: str) -> None:
        """
        
        Adding a new element to the list of actions performed in the game
        :param new_item: New element to the list
        """
        self._history.append(new_item)
    
    def eat(self) -> None:
        """
        
        Update pet parameters according to the eating actions
        """
        self.change_property(Properties.HUNGER.value, 10)
        self.change_property(Properties.ENERGY.value, 5)
        self.change_property(Properties.HAPPINESS.value, 5)
        self.change_points(10)
        self.add_history_action("eat")

    def sleep(self) -> None:
        """
        
        Update pet parameters according to the sleeping actions
        """
        self.change_property(Properties.ENERGY.value, 10)
        self.change_property(Properties.HAPPINESS.value, 5)
        self.change_points(10)
        self.add_history_action("sleep")

    def play(self) -> None:
        """
        
        Update pet parameters according to the playing actions
        """
        self.change_property(Properties.HUNGER.value, -3)
        self.change_property(Properties.ENERGY.value, -7)
        self.change_property(Properties.HAPPINESS.value, 10)
        self.change_points(10)
        self.add_history_action("play")

    def calculate_pet_profile(self) -> float:
        """
        
        Calculate animal state
        """
        self._pet_profile =  (self.energy + self.happiness + self.hunger) / 3
        return self._pet_profile

    def to_dict(self) -> Dict:
        return {
            "name": self._name,
            "pet_type": self._pet_type,
            "hunger": self.hunger,
            "happiness": self.happiness,
            "energy": self.energy,
            "points": self.points,
            "history": str(self.history),
            "pet_profile": self._pet_profile
        }
