import React from 'react';
import { Link } from 'react-router-dom';
import { faSearch, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = props => {
  return (
    <nav>
      <div className="nav-container">
        <h1>Shopmate</h1>
        <ul>
          <li>
            <Link to='/'>women</Link>
          </li>
          <li>
            <Link to='/'>men</Link>
          </li>
          <li>
            <Link to='/'>children</Link>
          </li>
          <li>
            <Link to='/'>shoes</Link>
          </li>
          <li>
            <Link to='/'>bags</Link>
          </li>
        </ul>
        <div className="search-wrapper">
          <FontAwesomeIcon id="search-icon" icon={faSearch} />
          <input type="text" placeholder="search anything"/>
          <FontAwesomeIcon id="close-icon" icon={faTimes} />
        </div>
        <div className="shopping-bag">
          <FontAwesomeIcon id="shopping-bag-icon" icon={faShoppingCart} />
          <span>6</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
