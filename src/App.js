import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EdenImage from './assets/eden.jpeg';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function App() {
  // כל הפרוייקטים שיתופיעו בדף הבית
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A short description of project one.',
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com',
      demo: 'https://example.com',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // דוגמה
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A short description of project two.',
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com',
      demo: 'https://example.com',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  return (
    <Router>
      <Header />

      <Routes>
        {/* דף הבית */}
        <Route path="/" element={
          <div>
            <section id="home" className="home-section">
              <img src={EdenImage} alt="Eden" className="home-image" />
              <h1 className="home-name">Eden Aharon</h1>
              <p className="home-description">
                I am a passionate software developer specialized in Frontend development with React and JavaScript.
                I love building clean, modern, and user-friendly web applications.
              </p>
            </section>

            {/* כל הפרוייקטים */}
            <section id="projects">
              <h2>Projects</h2>
              <div className="projects-container">
                {projects.map(proj => (
                  <ProjectCard key={proj.id} {...proj} />
                ))}
              </div>
            </section>
          </div>
        } />

        {/* דף פרויקט בודד */}
        <Route path="/projects/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
