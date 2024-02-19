import React from 'react';
import penduImage from '../assets/pendu.jpg';

const Accueil = () => {
  return (
    <div className='hero'>
      <h1>Le pendu !</h1>
      <p className='regles'>Le but du jeu est simple : deviner toute les lettres qui doivent composer un mot, 
        éventuellement avec un nombre limité de tentatives et des thèmes fixés à l'avance.
         A chaque fois que le joueur devine une lettre, celle-ci est affichée. Dans le cas contraire, le dessin d'un pendu se met à apparaître...</p>
      <img src={penduImage} alt="Le Pendu" width="300" heigh="300" />
      {/* Ajoutez d'autres éléments que vous trouvez intéressants */}
    </div>
  );
};

export default Accueil;
