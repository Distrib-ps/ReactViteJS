
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddBookPage from './components/AddLivre';
import { LivresProvider } from './context/GestionLivres';

function App() {
  return (
    <LivresProvider>
      <Router>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/add">Ajouter un livre</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddBookPage />} />
        </Routes>
      </Router>
    </LivresProvider>
  );
}

export default App;
