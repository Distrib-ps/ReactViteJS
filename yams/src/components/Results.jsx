// Results.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Results = () => {
  const { pairs } = useParams();

  return (
    <div>
      <h2>Résultats du Yams</h2>
      <p>Nombre de paires trouvées : {pairs}</p>
    </div>
  );
};

export default Results;
