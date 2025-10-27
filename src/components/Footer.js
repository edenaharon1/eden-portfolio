import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact">
      <p>Contact me: <a href="mailto:eden@example.com">eden@example.com</a></p>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Eden Aharon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
