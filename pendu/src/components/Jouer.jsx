import React, { useEffect } from "react";
import { usePenduContext } from "../context/PenduContext";

// Composant du Pendu
const Pendu = () => {
  const { wrongGuesses } = usePenduContext();
  const penduImages = [
    "../src/assets/0.jpg",
    "../src/assets/1.jpg",
    "../src/assets/2.jpg",
    "../src/assets/3.jpg",
    "../src/assets/4.jpg",
    "../src/assets/5.jpg",
    "../src/assets/6.jpg",
    "../src/assets/7.jpg",
  ];

  return <img src={penduImages[wrongGuesses]} alt={`Pendu ${wrongGuesses}`} />;
};

// Composant de la liste des lettres
const AlphabetList = () => {
  const { guessedLetters, victory, defeat, alphabet, tryLetter } =
    usePenduContext();

  return (
    <div>
      {alphabet.map((letter, index) => (
        <button
          key={index}
          onClick={() => tryLetter(letter)}
          disabled={guessedLetters.includes(letter) || victory || defeat}
          className={`letter-button ${
            guessedLetters.includes(letter) ? "guessed" : ""
          }`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

// Composant du mot mystère
const MysteryWord = () => {
  const { word, guessedLetters } = usePenduContext();

  return (
    <div className="mysteryWord">
      {word.split("").map((char, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(char) ? char : "_"}
        </span>
      ))}
    </div>
  );
};

// Composant principal Jouer
const Jouer = () => {
  const {
    word,
    guessedLetters,
    wrongGuesses,
    score,
    userGuess,
    setUserGuess,
    maxWrongGuesses,
    victory,
    defeat,
    tryLetter,
    setWord,
    alphabet,
    setVictory,
    setDefeat,
  } = usePenduContext();

  // Charger un mot aléatoire au montage du composant
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/nmondon/mots-frequents/master/data/frequence.json"
    )
      .then((response) => response.json())
      .then((words) => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setWord(words[randomIndex].label.toUpperCase());
      });
  }, [setWord]);

  console.log(word);
  console.log(guessedLetters.join(""));

  const handleKeyPress = (event) => {
    const letter = event.key.toUpperCase();
    if (alphabet.includes(letter)) {
      tryLetter(letter);
    }
  };

  const handleGuess = () => {
    if (word === guessedLetters.join("")) {
        console.log('Victoire !');
      // Victoire
      setVictory(true);
    } else if (wrongGuesses >= maxWrongGuesses) {
        console.log('Défaite !');
      // Défaite
      setDefeat(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);
    return () => window.removeEventListener("keyup", handleKeyPress);
  }, [guessedLetters, wrongGuesses, alphabet]);

  return (
    <div className="hero">
      <h1>Votre score : {score} point(s)</h1>
      <div className="heroPlay">
        <Pendu />
        <div className="rightPlay">
          {victory && (
            <>
              <h2>Victoire !</h2>
              <button className="buttonPrimary">Rejouer</button>
              <p>ou</p>
              <input
                type="text"
                className="guessInput"
                placeholder="Votre pseudo..."
              />
              <button className="buttonPrimary">Terminer la partie</button>
            </>
          )}
          {defeat && <h2>Défaite ! Le mot était : {word}</h2>}
          {!victory && !defeat && (
            <div>
              <MysteryWord />
              <AlphabetList />
              <div>
                <input
                  type="text"
                  className="guessInput"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  disabled={victory || defeat}
                />
                <button
                  className="buttonPrimary"
                  onClick={handleGuess}
                  disabled={victory || defeat}
                >
                  Proposer ce mot
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jouer;
