import React, { useState } from "react";


const petImages = {
  goat: "../images/Goat.png",
  koala: "../images/Koala.png",
  squirrel: "../images/Squirrel.png",
};

function SelectPetType({ onSelect }) {
  const [selectedPetType, setSelectedPetType] = useState(null);

  const handleClick = (type) => {
    setSelectedPetType(type);  
    if (onSelect) onSelect(type); 
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {Object.entries(petImages).map(([type, url]) => (
        <div
          key={type}
          onClick={() => handleClick(type)}
          style={{
            cursor: "pointer",
            border: selectedPetType === type ? "3px solid #007bff" : "2px solid #ccc",
            borderRadius: "8px",
            padding: "4px",
            transition: "all 0.2s",
          }}
        >
          <img
            src={url}
            alt={type}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              display: "block",
              borderRadius: "6px",
            }}
          />
          <p style={{ textAlign: "center", marginTop: "4px" }}>{type}</p>
        </div>
      ))}
    </div>
  );
}

export default SelectPetType;