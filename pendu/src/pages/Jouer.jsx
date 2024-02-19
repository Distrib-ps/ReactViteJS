// Jouer.jsx
import React, { useState, useEffect } from 'react';
import pendu0 from '../assets/0.jpg';
import pendu1 from '../assets/1.jpg';
import pendu2 from '../assets/2.jpg';
import pendu3 from '../assets/3.jpg';
import pendu4 from '../assets/4.jpg';
import pendu5 from '../assets/5.jpg';
import pendu6 from '../assets/6.jpg';
import pendu7 from '../assets/7.jpg';
import victoire from '../assets/victoire.jpg';

import Jouer from '../components/Jouer';
import { PenduProvider } from '../context/PenduContext';

function App() {
  return (
    <div className="App">
      <PenduProvider>
        <Jouer />
      </PenduProvider>
    </div>
  );
}

export default App;
