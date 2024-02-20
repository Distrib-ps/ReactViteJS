// Ici on gère le reducers de l'application, on a 3 cas, ajouter un livre, augmenter le stock et diminuer le stock
const livresReducers = (state, action) => {
    switch (action.type) {
      case 'ADD_LIVRE':
        return [...state, { title: action.title, stock: action.stock }];
      case 'INCREMENT_STOCK':
        return state.map(livre =>
          livre.title === action.title ? { ...livre, stock: livre.stock + 1 } : livre
        );
      case 'DECREMENT_STOCK':
        return state.map(livre =>
          livre.title === action.title ? { ...livre, stock: Math.max(livre.stock - 1, 0) } : livre
        );
      default:
        return state;
    }
  };
  
  export default livresReducers;
  