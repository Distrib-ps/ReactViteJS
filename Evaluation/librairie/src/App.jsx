
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AddLivrePage from './components/AddLivre';
import { LivresProvider } from './context/GestionLivres';

function App() {
  return (
    <LivresProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddLivrePage />} />
        </Routes>
      </Router>
    </LivresProvider>
  );
}

export default App;
