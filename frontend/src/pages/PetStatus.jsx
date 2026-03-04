import goatImg from "../Images/Goat.png";
import koalaImg from "../Images/Koala.png";
import squirrelImg from "../Images/Squirrel.png";
import { useLocation } from "react-router-dom";


function PetStatus() {
  //Pet status page - here we can receive data about the status of our pet.
  const location = useLocation();
  //Information about the pet whose status is being requested is received from the PetInfo file.
  const { pet_type, pet_name, points, history, pet_profile } = location.state || {};
  const petTypeImages = {
    goat: goatImg,
    koala: koalaImg,
    squirrel: squirrelImg,
  };
  const typeKey = pet_type.toLowerCase(); 
  const imgSrc = petTypeImages[typeKey];
  return (
    <>
        <img
          src={imgSrc || "/default-pet.png"}
          alt={pet_type}
          style={{
            position: "fixed",  
            left: "10px",          
            top: "140px",      
            width: "580px",
            height: "auto",
          }}
        />
        <h1>Pet Name: {pet_name}</h1>
        <h1>Pet Type: {pet_type}</h1>
        <h1>Points: {points}</h1>
        <h1>Action History: {history}</h1>
        <h1>Pet Profile: {pet_profile}</h1>
    </>
  );
}

export default PetStatus;