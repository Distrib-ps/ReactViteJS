import { createContext, useReducer, useContext } from 'react';
import livresReducers from '../reducers/livresReducer.js';

const LivresContext = createContext();

export const LivresProvider = ({ children }) => {
  const [books, dispatch] = useReducer(livresReducers, []);

  return (
    <LivresContext.Provider value={{ books, dispatch }}>
      {children}
    </LivresContext.Provider>
  );
};

export const useBooks = () => useContext(LivresContext);
