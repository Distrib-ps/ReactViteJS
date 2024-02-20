import { useBooks } from '../context/GestionLivres';

const HomePage = () => {
    const { books, dispatch } = useBooks();
  
    return (
      <div style={{ padding: '20px' }}>
        {books.map((book, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '10px 0',
            padding: '10px',
            background: book.stock === 0 ? 'grey' : 'lightblue',
            color: book.stock === 0 ? 'white' : 'black',
            borderRadius: '5px'
          }}>
            <span>{book.title} - Stock: {book.stock}</span>
            <div>
              <button onClick={() => dispatch({ type: 'INCREMENT_STOCK', title: book.title })} style={{ marginRight: '5px' }}>+</button>
              <button onClick={() => dispatch({ type: 'DECREMENT_STOCK', title: book.title })}>-</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default HomePage;
