import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="row">
        <ul className="col s7">
          <Link to="/" className="left brand-logo">
            API MARVEL
          </Link>
        </ul>
        <ul className="nav-right col s5 right">
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/comics">comics</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
