import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions';
import './Header.css';

const Header = props => (
  <header>
    <nav>
      <ul className="col s7">
        <li>
          <Link to="/" className="left brand-logo">
            API MARVEL
          </Link>
        </li>
      </ul>
      {/* {props.auth.user && ( */}
      <ul className="nav-right col s5 right">
        {/* <li>
          <Link to="/add">Add new</Link>
        </li> */}
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/comics">Comics</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li onClick={props.logoutUser}>Logout</li>
      </ul>
      {/* )} */}
    </nav>
  </header>
);

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { logoutUser })(Header);
