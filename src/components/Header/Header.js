import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="col s7">
          <Link to="/" className="left brand-logo">
            API MARVEL
          </Link>
        </ul>
        <ul className="nav-right col s5 right">
          <li>
            <Link to="/comics">Comics</Link>
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
