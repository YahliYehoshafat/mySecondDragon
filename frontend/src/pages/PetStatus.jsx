import Image from 'react-bootstrap/Image';
import goatImg from "../Images/Goat.png";
import koalaImg from "../Images/Koala.png";
import squirrelImg from "../Images/Squirrel.png";
import { useLocation } from "react-router-dom";


function PetStatus() {
  const location = useLocation();
  const { pet_type, name, points, history } = location.state || {};
  console.log("pet type = "+name)
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
          alt={name}
          style={{
            position: "fixed",  
            left: "10px",          
            top: "140px",      
            width: "580px",
            height: "auto",
          }}
        />
        <h1>Pet Name: {name}</h1>
    </>
  );
}

export default PetStatus;