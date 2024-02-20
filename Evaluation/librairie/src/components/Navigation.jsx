import { Link, useLocation } from 'react-router-dom';

// Fonction qui s'occupe de la Navigation entre les pages et qui permet aussi de les souligner si on est sur la page
function Navigation() {
    const location = useLocation();
  
    const isActive = (path) => location.pathname === path; // on vérifie si on est sur la page
  
    return (
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={isActive('/') ? { textDecoration: 'underline' } : {}}>Accueil</Link> |{' '}
        <Link to="/add" style={isActive('/add') ? { textDecoration: 'underline' } : {}}>Ajouter un livre</Link>
      </nav>
    );
  }
  
export default Navigation;
  