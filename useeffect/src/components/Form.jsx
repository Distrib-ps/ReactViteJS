import { useEffect, useState } from 'react'

function Form({ randomNumber }) {
  // Proposition de l'utilisateur
  const [userGuess, setUserGuess] = useState('');
  // Nombre minimum affiché
  const [min, setMin] = useState(1);
  // Nombre maximum affiché
  const [max, setMax] = useState(100);
  // Nombre de tentatives
  const [tentatives, setTentatives] = useState(0);
  // Nombre trouvé
  const [found, setFound] = useState(false);
  // Soumission du formulaire
  const [isSubmited, setIsSubmited] = useState(false);
  
  // Gère le nombre de tentatives à chaque soumission du formulaire
  useEffect(() => {
    if (isSubmited) {
      setTentatives(tentatives + 1);
      setIsSubmited(false);
      }
    }, [isSubmited]);


  const onSubmit = (e) => {
    e.preventDefault();
    // On passe isSubmited à true pour déclencher le useEffect
    setIsSubmited(true);
    // parseInt permet de convertir une chaîne de caractères en nombre
    const guess = parseInt(userGuess, 10);
    if (guess === randomNumber) {
      setFound(true);
    } else if (guess < randomNumber) {
      setMin(guess);
    } else {
      setMax(guess);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
      />
      <button type="submit">Ok</button>
      <p>Le nombre est compris entre {min} et {max}</p>
      {found && <p>Bravo vous avez trouvé en {tentatives} essais</p>}
    </form>
  );
}

export default Form;
