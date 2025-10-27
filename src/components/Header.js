import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Eden Aharon</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#recent-projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
