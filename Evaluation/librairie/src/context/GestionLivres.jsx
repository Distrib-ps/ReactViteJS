/* eslint-disable react-refresh/only-export-components */
// Ici on gère tout le context de l'application, on va aussi inséré les données dans le localStorage pour les garder même si on rafraichit la page
import { createContext, useReducer, useContext, useEffect } from 'react';
import livresReducers from '../reducers/livresReducer.js';

const initialState = JSON.parse(localStorage.getItem('livres')) || []; // on récupère les données du localStorage
const LivresContext = createContext(); // on crée le context

export const LivresProvider = ({ children }) => {
  const [livres, dispatch] = useReducer(livresReducers, initialState);

  useEffect(() => {
    localStorage.setItem('livres', JSON.stringify(livres)); // on met à jour le localStorage
  }, [livres]);

  return (
    <LivresContext.Provider value={{ livres, dispatch }}>
      {children}
    </LivresContext.Provider>
  );
};

export const useLivres = () => useContext(LivresContext);
