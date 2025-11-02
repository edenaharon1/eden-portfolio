import React from 'react';
import './ContactCard.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function ContactCard() {
  return (
    <section className="contact-card" id="contact">
      <div className="contact-card-content">
        <h2>Contact Me</h2>

        <div className="contact-buttons">
          {/* Email */}
          <a
            href="mailto:edenah9@gmail.com"
            className="contact-btn"
          >
            <FaEnvelope className="icon" /> Email
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/edenaharon1"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaGithub className="icon" /> GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/eden-aharon-418226329/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
