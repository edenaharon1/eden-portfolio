import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="side-nav right">
      <div className="logo">Eden Aharon</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
