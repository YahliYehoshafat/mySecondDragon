from TypesOfPets import TypesOfPets
from Properties import Properties
from typing import List


class Pet(object):
    def __init__(self, name: str, pet_type: TypesOfPets):
        self._name: str = name
        self._pet_type: str = pet_type
        self._hunger: int = 50
        self._happiness: int = 50
        self._energy: int = 50
        self._points: int = 0
        self._history: List[str] = []

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
    def pet_type(self, pet_type: TypesOfPets) -> None:
        self._pet_type = pet_type

    @property
    def hunger(self) -> int:
        return self._hunger
    
    def change_property(self, property: str, level: int) -> None:
        """
        
        Changes property score
        :param level: How much do you want to reduce/add to your property param
        :param property: property name
        :param property_name: property name with "_" char
        """
        property_name = "_" + property
        setattr(self, property_name, getattr(self, property_name) + level)
        if getattr(self, property_name) > 100:
            setattr(self, property_name, 100)
        elif getattr(self, property_name) <= 0:
            self.change_points(-30)
            setattr(self, property_name, 0)
    
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
        self.print_pet_health("Your animal ate food!")

    def sleep(self) -> None:
        """
        
        Update pet parameters according to the sleeping actions
        """
        self.change_property(Properties.ENERGY.value, 10)
        self.change_property(Properties.HAPPINESS.value, 5)
        self.change_points(10)
        self.add_history_action("sleep")
        self.print_pet_health("Your animal went to sleep!")

    def play(self) -> None:
        """
        
        Update pet parameters according to the playing actions
        """
        self.change_property(Properties.HUNGER.value, -3)
        self.change_property(Properties.ENERGY.value, -7)
        self.change_property(Properties.HAPPINESS.value, 10)
        self.change_points(10)
        self.add_history_action("play")
        self.print_pet_health("Your animal played!")

    @staticmethod
    def print_pet_health(data):
        print(data)
