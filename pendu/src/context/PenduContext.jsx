import React, { createContext, useContext, useState } from 'react';

const PenduContext = createContext();

export const usePenduContext = () => {
  return useContext(PenduContext);
};

export const PenduProvider = ({ children }) => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [score, setScore] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [victory, setVictory] = useState(false); // Nouvelle variable d'état
  const [defeat, setDefeat] = useState(false); // Nouvelle variable d'état
  const maxWrongGuesses = 7;


  // Définition de l'alphabet
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const tryLetter = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);

      if (!word.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
      }
    }
  };

  const contextValue = {
    word,
    setWord,
    guessedLetters,
    setGuessedLetters,
    wrongGuesses,
    setWrongGuesses,
    score,
    setScore,
    userGuess,
    setUserGuess,
    maxWrongGuesses,
    alphabet,
    tryLetter,
    victory,
    defeat,
  };

  return (
    <PenduContext.Provider value={contextValue}>
      {children}
    </PenduContext.Provider>
  );
};
