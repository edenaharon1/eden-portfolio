import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EdenImage from './assets/eden2.jpeg';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import projects from './data/projects'; // מייבאים את כל הפרויקטים
import './App.css';

function App() {

  return (
    <Router>
      <Header />

      <Routes>
        {/* דף הבית */}
        <Route
          path="/"
          element={
            <div>
              <section id="home" className="home-section">
                <img src={EdenImage} alt="Eden" className="home-image" />
                <h1 className="home-name">Eden Aharon</h1>
                <p className="home-description">
                  I am a passionate software developer specialized in Frontend development with React and JavaScript.
                  I love building clean, modern, and user-friendly web applications.
                </p>
              </section>

              {/* כל הפרויקטים */}
              <section id="projects">
                <h2>Projects</h2>
                <div className="projects-container">
                  {projects.map((proj) => (
                    <ProjectCard key={proj.id} {...proj} />
                  ))}
                </div>
              </section>
            </div>
          }
        />

        {/* דף פרויקט בודד */}
        <Route
          path="/projects/:id"
          element={<ProjectDetail projects={projects} />} // מעבירים את כל הרשימה ל-ProjectDetail
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
