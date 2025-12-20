import React, { useState } from 'react';
import './ContactCard.css'; 

function ContactCard() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch('https://formspree.io/f/mzdpeayg', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    })
      .then(() => setSubmitted(true))
      .catch(() => alert('Oops! Something went wrong. Please try again.'));
  };

  return (
    <section id="contact">
      {/* ⬅️ הכותרת הראשית תעוצב כ-section-title ב-App.css */}
      <h1 className="section-title">CONTACT ME</h1> 
      
      <p className="contact-subtitle">
        Feel free to reach out — I'm always happy to connect!
      </p>

      {/* ⬅️ הקלף המרכזי המכיל את הטופס */}
      <div className="contact-card">
        {submitted ? (
          <p className="success-message">
            ✅ Your message has been sent successfully!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
            
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
            
            {/* ⬅️ כפתור השליחה */}
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactCard;
