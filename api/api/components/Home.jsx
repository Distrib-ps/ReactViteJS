import React, { useState, useEffect } from 'react';
import Card from './Card';

const Home = () => {
  const [animals, setAnimals] = useState([]);

  const catRace = ['abyssinian', 'bengal', 'siamese', 'persian'];

  useEffect(() => {
    catRace.forEach(race => {
      fetch(`https://api.api-ninjas.com/v1/cats?name=${race}`, {
        method: 'GET',
        headers: { 
          'X-Api-Key': '9D88uDyrJ76YTT1fyttlIQ==792s4bc6d6kW7QpS',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.length > 0) {
          const newAnimal = data[0];
          setAnimals(prevAnimals => {
            // Si l'animal est déjà dans la liste, on ne l'ajoute pas
            if (prevAnimals.some(animal => animal.name === newAnimal.name)) {
              return prevAnimals;
            }
            return [...prevAnimals, newAnimal];
          });
        }
      })
      .catch(error => console.error('err ', error));
    });
  }, []);

  return (
    <div>
      {animals.map((animal, index) => <Card key={index} animal={animal} />)}
    </div>
  );
};

export default Home;
