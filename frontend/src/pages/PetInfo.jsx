import '../App.css';
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from 'react-router-dom';
import goatImg from "../Images/Goat.png";
import koalaImg from "../Images/Koala.png";
import squirrelImg from "../Images/Squirrel.png";

function PetInfo() {
  const [pets, setPets] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null); 
  const navigate = useNavigate();


  const handleSelect = (pet, index) => {
    setSelectedPet(pet);
    setSelectedIndex(index)
  };

  const PetProperties = () => {
    if (selectedPet) {
      console.log("energy = " + selectedIndex.energy);
      navigate('/PetProperties', 
        {state: {pet_index: selectedIndex, pet_type: selectedPet.pet_type, pet_name: selectedPet.name, happiness: selectedPet.happiness, energy: selectedPet.energy, hunger: selectedPet.hunger}});
    } 
  };

  const PetStatus = () => {
    console.log("pet type = "+selectedPet.name)
    if (selectedPet) {
      navigate('/PetStatus', 
        {state: {pet_type: selectedPet.pet_type, pet_name: selectedPet.name, points: selectedPet.points, history: selectedPet.history}});
    } 
  };

  const petTypeImages = {
    goat: goatImg,
    koala: koalaImg,
    squirrel: squirrelImg,
  };

  useEffect(() => {
    fetch("http://localhost:5000/pet_info")
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <NavBar/>
      {pets.length === 0 && <p>You don't have any pets right now :( Create your own pet :)</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {pets.map((pet, index) => {
          const typeKey = pet.pet_type.toLowerCase(); 
          const imgSrc = petTypeImages[typeKey];

          if (!imgSrc) {
            console.warn(`No image found for pet type: ${pet.pet_type}`);
          }

          const isSelected = selectedPet === pet;

          return (
            <div
              key={index} 
              onClick={() => handleSelect(pet, index)}
              style={{
                cursor: "pointer",
                width: "auto",
                textAlign: "center",
                border: isSelected ? "4px solid #007bff" : "2px solid #ccc",
                borderRadius: "12px",
                padding: "4px",
                transition: "all 0.2s",
              }}
            >
              <img
                src={imgSrc || "/default-pet.png"}
                alt={pet.name}
                style={{
                  width: "100%",
                  height: "190px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                }}
              />
              <p style={{ marginTop: "8px", fontWeight: "bold" }}>{pet.name}</p>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "20px" }}>
      <button 
        onClick={PetProperties} 
        style={{ padding: "10px 20px", marginRight: "100px", marginTop: "50px", fontSize: "16px", cursor: "pointer" }}
      >
        Pet Properties
      </button>

      <button 
        onClick={PetStatus} 
        style={{ padding: "10px 20px", marginLeft: "100px", marginTop: "50px", fontSize: "16px", cursor: "pointer" }}
      >
        Pet Status
      </button>
      </div>
    </>
  );
}

export default PetInfo;