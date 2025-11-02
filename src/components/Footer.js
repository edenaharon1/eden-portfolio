import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <p>Crafted with passion &nbsp;💻 &nbsp;| &nbsp; © {new Date().getFullYear()} Eden Aharon</p>
      <div className="social-links">
        <a 
          href="https://github.com/edenaharon1/eden-portfolio.git" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-github"
        >
          🐱 View Source
        </a>
      </div>
    </footer>
  );
}

export default Footer;
