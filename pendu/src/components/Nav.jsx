import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to="/"  className={({ isActive }) => isActive ? 'activeNavLink navlink' : 'navlink'}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/jouer" className={({ isActive }) => isActive ? 'activeNavLink navlink' : 'navlink'}>
            Jouer
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistiques" className={({ isActive }) => isActive ? 'activeNavLink navlink' : 'navlink'}>
            Statistiques
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
