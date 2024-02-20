const livresRedcers = (state, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return [...state, { title: action.title, stock: action.stock }];
      case 'INCREMENT_STOCK':
        return state.map(book =>
          book.title === action.title ? { ...book, stock: book.stock + 1 } : book
        );
      case 'DECREMENT_STOCK':
        return state.map(book =>
          book.title === action.title ? { ...book, stock: Math.max(book.stock - 1, 0) } : book
        );
      default:
        return state;
    }
  };
  
  export default livresRedcers;
  