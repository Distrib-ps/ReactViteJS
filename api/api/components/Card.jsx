import React, { useState } from 'react';

const Card = ({ animal }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div onClick={toggleDetails} style={{ cursor: 'pointer', border: '1px solid black', margin: '10px', padding: '10px' }}>
      {showDetails ? (
        <div>
          <h3>{animal.name}</h3>
          <p>Taille: {animal.length}</p>
          <p>Origine: {animal.origin}</p>
          <p>Intelligence: {animal.intelligence}</p>
          <p>Famille Amicale: {animal.family_friendly}</p>
          <p>Max. Espérance de Vie: {animal.max_life_expectancy} ans</p>
        </div>
      ) : (
        <div>
          <h3>{animal.name}</h3>
          <img src={animal.image_link} alt={animal.name} style={{ width: '100px', height: '100px' }} />
        </div>
      )}
    </div>
  );
};

export default Card;
