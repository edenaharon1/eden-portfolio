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
import BackgroundParticles from './components/BackgroundParticles';
import FadeInSection from './components/FadeInSection';

// Icons
import { FaReact } from 'react-icons/fa';

function App() {
return ( <Router> <Header />

<BackgroundParticles />
  <Routes>
    {/* --- Home Page --- */}
    <Route
      path="/"
      element={
        <div>
          <FadeInSection>
          {/* --- Hero Section --- */}
          <section id="hero">
           
            <div className="hero-visuals"></div>

            <div className="hero-content">
              <h2 className="hero-subtitle animate-fade">Welcome!</h2>
              <h1 className="hero-title animate-slide">Hi, I'm Eden</h1>
              <p className="hero-text animate-fade">
                A creative frontend developer passionate about crafting
                elegant, fast and accessible digital experiences.
              </p>

              <div className="hero-buttons animate-slide">
                <a href={cv} download className="hero-btn primary">
                  <span className="btn-icon">⬇️</span>
                  Download My Resume
                </a>

                <a href="#projects" className="hero-btn secondary">
                  🚀 View My Projects
                </a>
              </div>
            </div>
          </section>
          </FadeInSection>

          {/* --- About Section --- */}
          <FadeInSection>
            <section id="home">
              <img src={EdenImage} alt="Eden" />
              <h1>Eden Aharon</h1>
              <p>
                I'm a frontend developer specializing in React and JavaScript.
                I focus on clean code, modern UI/UX and smooth user experiences.
              </p>
            </section>
          </FadeInSection>

          {/* --- Skills Section --- */}
          <FadeInSection>
            <section id="skills">
              <div className="skills-card">
                <h2>Skills & Technologies</h2>

                <div className="skills-grid">
                  <div className="skill-item react">
                    <div className="icon-bg"><FaReact /></div>
                    <span>React</span>
                  </div>
                  <div className="skill-item js">
                    <div className="icon-bg"></div>
                    <span>JavaScript</span>
                  </div>
                  <div className="skill-item ts">
                    <div className="icon-bg"></div>
                    <span>TypeScript</span>
                  </div>
                  <div className="skill-item html">
                    <div className="icon-bg"></div>
                    <span>HTML5</span>
                  </div>
                  <div className="skill-item css">
                    <div className="icon-bg"></div>
                    <span>CSS3</span>
                  </div>
                  <div className="skill-item node">
                    <div className="icon-bg"></div>
                    <span>Node.js</span>
                  </div>
                  <div className="skill-item git">
                    <div className="icon-bg"></div>
                    <span>Git</span>
                  </div>
                  <div className="skill-item python">
                    <div className="icon-bg"></div>
                    <span>Python</span>
                  </div>
                </div>

                <p className="skills-description">
                  Continuously learning and exploring new technologies to build better solutions.<br />
                  From frontend frameworks to backend systems, I love working across the full stack.
                </p>
              </div>
            </section>
          </FadeInSection>

          {/* --- Projects Section --- */}
          <FadeInSection>
            <section id="projects">
              <div className="projects-list">
                {projects.map((proj) => (
                  <ProjectCard key={proj.id} {...proj} />
                ))}
              </div>
            </section>
          </FadeInSection>

          {/* --- Contact --- */}
          <FadeInSection>
            <ContactCard />
          </FadeInSection>
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
