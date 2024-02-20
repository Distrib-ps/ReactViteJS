import { useLivres } from '../context/GestionLivres';

// Fonction pour afficher la liste des livres et pour augmenter ou diminuer le stock
const HomePage = () => {
    const { livres, dispatch } = useLivres();
  
    return (
      <div style={{ padding: '20px' }}>
        {livres.map((livre, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '10px 0',
            padding: '10px',
            background: livre.stock === 0 ? 'grey' : 'lightblue',
            color: livre.stock === 0 ? 'white' : 'black',
            borderRadius: '5px'
          }}>
            <span>{livre.title} - Stock: {livre.stock}</span>
            <div>
              <button onClick={() => dispatch({ type: 'INCREMENT_STOCK', title: livre.title })} style={{ marginRight: '5px' }}>+</button>
              <button onClick={() => dispatch({ type: 'DECREMENT_STOCK', title: livre.title })}>-</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default HomePage;
