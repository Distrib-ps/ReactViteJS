import { useState } from 'react';
import { useLivres } from '../context/GestionLivres';

// Fonction pour ajouter un livre
const AddLivrePage = () => {
    // Nous allons mettre le title, stock et le message de confirmation dans le state ainsi que le dispatch pour ajouter un livre
  const [title, setTitle] = useState('');
  const [stock, setStock] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { dispatch } = useLivres();

  // quand le formulaire est soumis
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || stock === '') return;
    // on dispatch l'action pour ajouter un livre
    dispatch({ type: 'ADD_LIVRE', title, stock: parseInt(stock, 10) });
    setTitle(''); // on vide le champ titre
    setStock(''); // on vide le champ stock
    setShowConfirmation(true); // le msg en vert s'affiche
    setTimeout(() => setShowConfirmation(false), 3000); // le msg en vert disparait après 3 secondes
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="title">Titre du livre: </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Entrez le titre du livre"
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="stock">Stock initial: </label>
          <input
            id="stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Quantité en stock"
            style={{ marginLeft: '10px' }}
          />
        </div>
        <button type="submit" style={{ cursor: 'pointer' }}>Ajouter le livre</button>
      </form>
      {showConfirmation && <div style={{ color: 'green' }}>Livre ajouté avec succès !</div>}
    </div>
  );
};

export default AddLivrePage;
