// App.js
import React, { useState } from 'react';
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
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// -------------------------
// קומפוננטת אייקון מייל עם tooltip
// -------------------------
function EmailIcon() {
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "edenah9@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email); // מעתיק את המייל
    alert("Email copied to clipboard!"); // הודעה קצרה
  };

  return (
    <div
      className="email-icon-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleCopy} // לחיצה תעתיק את המייל
      style={{ position: "relative", cursor: "pointer" }}
    >
      <FaEnvelope className="icon" />

      {showTooltip && (
        <div
          className="tooltip"
          style={{
            position: "absolute",
            bottom: "120%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            fontSize: "14px",
            zIndex: 1000,
          }}
        >
          {email} (Click to copy)
        </div>
      )}
    </div>
  );
}

// -------------------------
// קומפוננטת האפליקציה הראשית
// -------------------------
function App() {
  return (
    <Router>
      <Header />

      <div className="fixed-social-sidebar">
        <a href="https://www.linkedin.com/in/eden-aharon-418226329/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/edenaharon1" target="_blank" rel="noopener noreferrer" className="social-icon-link">
          <FaGithub className="icon" />
        </a>
        <EmailIcon />
      </div>

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
                  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet"></link>
                  <div className="hero-content">
                    <h1 className="hero-title-wrapper animate-slide">
                      <span className="hero-title">
                        Hi, I'm Eden Aharon and Welcome to my portfolio
                      </span>
                    </h1>
                    <h2 className="hero-title-2 animate-slide">Software Developer</h2>
                    <p className="hero-text animate-fade">
                      I don't just write code; I <span className="keyword-highlight-secondary">engineer solutions</span>. Exploring the intersection of <span className="keyword-highlight-secondary">backend logic</span> and <span className="keyword-highlight-secondary">stunning frontend design</span> to solve <span className="keyword-highlight-secondary">real-world challenges</span>.
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
                  <h1 className="section-title">ABOUT ME</h1>
                  <img src={EdenImage} alt="Eden" />
                  <h1>Eden Aharon</h1>
                  <p>
                    A Bachelor's degree in <span className="keyword-highlight-secondary">Computer Science</span> with practical specialization in <span className="keyword-highlight-secondary">Full Stack</span> development. I bring practical experience from developing <span className="keyword-highlight-secondary">significant technological projects</span>, demonstrating advanced capabilities on both the client and server sides.
                  </p>

                  <p>
                    My academic background and specialized courses include introductory courses and projects in <span className="keyword-highlight-secondary">Cloud Services (Cloud)</span> and <span className="keyword-highlight-secondary">DevOps</span> (such as CI/CD and automation).
                  </p>

                  <p>
                    I am driven by a passion to delve into the depths of <span className="keyword-highlight-secondary">complex technological problems</span> and formulate creative and elegant solutions. I am constantly seeking the next professional challenge where I can apply my knowledge to create efficient and high-quality products.
                  </p>
                </section>
              </FadeInSection>

              {/* --- Skills Section --- */}
              <FadeInSection>
                <section id="skills">
                  <h1 className="section-title">SKILLS & TECHNOLOGIES</h1> 

                  {/* --- Core Technologies --- */}
                  <h2 className="skills-subtitle tech-sub">💻 Core Technologies</h2>
                  <div className="skills-grid tech-grid"> 
                    <div className="skill-item tech primary"><span>React</span></div>
                    <div className="skill-item tech primary"><span>Python (Flask)</span></div>
                    <div className="skill-item tech"><span>JavaScript (TS)</span></div>
                    <div className="skill-item tech"><span>Node.js / Express</span></div>
                    <div className="skill-item tech"><span>HTML5 / CSS3</span></div>
                    <div className="skill-item tech"><span>Git / GitHub</span></div>
                  </div>

                  {/* --- Concepts & Expertise --- */}
                  <h2 className="skills-subtitle concept-sub">💡 Concepts & Expertise</h2>
                  <div className="skills-grid concept-grid"> 
                    <div className="skill-item concept primary"><span>Problem Solving</span></div>
                    <div className="skill-item concept"><span>OOP</span></div>
                    <div className="skill-item concept"><span>Self-Learning</span></div>
                    <div className="skill-item concept"><span>Accessible UI</span></div>
                    <div className="skill-item concept"><span>Teamwork</span></div>
                  </div>

                  <p className="skills-description">
                    Continuously learning and exploring new technologies to build better solutions.<br />
                    From frontend frameworks to backend systems, I love working across the full stack.
                  </p>
                </section>
              </FadeInSection>

              {/* --- Projects Section --- */}
              <FadeInSection>
                <section id="projects">
                  <h1 className="section-title">PROJECTS</h1>
                  <div className="projects-list">
                    {projects.map((proj) => (
                      <ProjectCard key={proj.id} {...proj} technologies={proj.technologies} />
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
