import React, { useReducer } from 'react';

const initialState = {
  input: ''
};

function safeCalculate(expression) {
  // Vérifie si l'expression contient un opérateur.
  const operatorMatch = expression.match(/[\+\-\*\/]/);
  if (!operatorMatch) return '0'; // Si aucun opérateur n'est trouvé, retourner '0'.

  const operator = operatorMatch[0];
  const operands = expression.split(/[\+\-\*\/]/).map(Number); // Convertir les chaînes en nombres.

  // Vérifier qu'il y a deux opérandes avant de continuer.
  if (operands.length === 2) {
    const [a, b] = operands;
    
    // Effectuer le calcul en fonction de l'opérateur.
    switch (operator) {
      case '+':
        return (a + b).toString();
      case '-':
        return (a - b).toString();
      case '*':
        return (a * b).toString();
      case '/':
        return b !== 0 ? (a / b).toString() : 'Error'; // Vérifier la division par zéro.
      default:
        return 'Error';
    }
  }
  return 'Error'; // Retourner une erreur si l'expression n'est pas valide.
}


function reducer(state, action) {
  switch (action.type) {
    // Concatène la valeur actuelle de l'entrée avec la valeur de l'action.
    case 'addInput':
      return { ...state, input: state.input + action.value };
    // Tente de calculer l'expression saisie par l'utilisateur.
    case 'calcul':
      return { ...state, input: safeCalculate(state.input) };
    case 'reset':
      return { ...state, input: '' };
    default:
      return state;
  }
}

// Composant fonctionnel DemoReducer qui utilise le hook useReducer.
const DemoReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input type="text" value={state.input} readOnly />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {'1234567890'.split('').map((number) => (
          <button
            onClick={() => dispatch({ type: 'addInput', value: number })}
            key={number}
            style={{ width: '33%', flex: '1 0 auto' }}
          >
            {number}
          </button>
        ))}
      </div>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <div>
        {['+', '-', '*', '/'].map((operator) => (
          <button
            onClick={() => dispatch({ type: 'addInput', value: operator })}
            key={operator}
          >
            {operator}
          </button>
        ))}
      </div>
      <button onClick={() => dispatch({ type: 'calcul' })}>=</button>
    </div>
  );
};

export default DemoReducer;
