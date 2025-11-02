// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EdenImage from './assets/eden2.jpeg';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import ContactCard from './components/ContactCard';
import projects from './data/projects';
import cv from './assets/Eden_Aharon_CV.pdf';
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* --- Home Page --- */}
        <Route
          path="/"
          element={
            <div>
              {/* --- Hero Section --- */}
              <section id="hero">
                <div className="hero-content">
                  <h2 className="hero-subtitle">Welcome!</h2>
                  <h1 className="hero-title">Hi, I'm Eden</h1>
                  <p className="hero-text">
                    I'm a passionate frontend developer building clean and modern web applications.
                  </p>
                  <a href={cv} download className="hero-btn">
                    <span class="btn-icon">⬇️</span>
                    Download My Resume
                  </a>
                </div>
              </section>

              {/* Home Section */}
              <section id="home">
                <img src={EdenImage} alt="Eden" />
                <h1>Eden Aharon</h1>
                <p>
                  I am a passionate software developer specialized in Frontend
                  development with React and JavaScript.
                  I love building clean, modern, and user-friendly web applications.
                </p>
              </section>

              {/* Skills Section */}
              <section id="skills">
                <div className="skills-card">
                  <h2>My Skills</h2>
                  <p>
                    JavaScript • React • HTML • CSS • Node.js • TypeScript • Git • Redux •
                    REST APIs • Responsive Design
                  </p>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects">
                <div className="projects-list">
                  {projects.map((proj) => (
                    <ProjectCard key={proj.id} {...proj} />
                  ))}
                </div>
              </section>

              {/* Contact Card Section */}
              <ContactCard />
            </div>
          }
        />

        {/* --- Project Detail --- */}
        <Route
          path="/projects/:id"
          element={<ProjectDetail projects={projects} />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
