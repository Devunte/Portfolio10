// src/components/Nav/Nav.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
