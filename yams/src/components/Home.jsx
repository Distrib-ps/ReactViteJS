// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [dice, setDice] = useState([]);
  const [pairs, setPairs] = useState(0);
  const navigate = useNavigate();

  const rollDice = () => {
    // Création d'un tableau de 5 nombres aléatoires, chacun représentant un dé (de 1 à 6).
    const newDice = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    setDice(newDice); // Mise à jour de l'état avec les nouveaux dés.
  
    // Création d'un objet pour compter la fréquence de chaque valeur de dé.
    const counts = newDice.reduce((acc, val) => {
      // Pour chaque valeur de dé, augmenter son compteur dans l'objet 'counts'.
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  
    // Calcul du nombre de paires.
    const pairsCount = Object.values(counts).filter((count) => count === 2).length;
    // 'Object.values(counts)' transforme les valeurs de l'objet 'counts' en un tableau.
    // '.filter((count) => count === 2)' conserve uniquement les valeurs qui sont exactement 2 (paires).
    // '.length' compte le nombre de paires.
  
    setPairs(pairsCount); // Mise à jour de l'état avec le nombre de paires.
  };
  

  const showResults = () => {
    navigate(`/results/${pairs}`);
  };

  return (
    <div>
      <button onClick={rollDice}>Jouer</button>
      {dice.length > 0 && <button onClick={showResults}>Résultats</button>}
      {dice.map((die, index) => <div key={index}>Dé {index + 1}: {die}</div>)}
    </div>
  );
};

export default Home;
