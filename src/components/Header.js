import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="left brand-logo">API MARVEL</li>
        </ul>
        <ul className="right">
          <li>Movies</li>
          <li style={{ margin: '0 10px' }}>Series</li>
          <li>Characters</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
