import React, { useReducer } from 'react';

const initialState = {
  input: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'addInput':
      return { ...state, input: state.input + action.value };
    case 'calcul':
        return { ...state, input: eval(state.input).toString() };
    case 'reset':
      return { ...state, input: '' };
    default:
      return state;
  }
}

const DemoReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input type="text" value={state.input} readOnly />
      <div>
        {'1234567890'.split('').map((number) => (
          <button
            onClick={() => dispatch({ type: 'addInput', value: number })}
            key={number}
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
