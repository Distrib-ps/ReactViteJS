import { useState } from 'react';
import { useBooks } from '../context/GestionLivres';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [stock, setStock] = useState(0);
  const { dispatch } = useBooks();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', title, stock: parseInt(stock, 10) });
    setTitle('');
    setStock(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre du livre" />
      <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddBookPage;
