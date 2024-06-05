// src/components/Nav/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/about">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
