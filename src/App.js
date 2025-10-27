import React from 'react';
import EdenImage from './assets/eden.jpeg';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  // רק 2-3 פרויקטים נבחרים להצגה בסקשן קטן למטה
  const recentProjects = [
    {
      title: 'Project One',
      description: 'A short description of project one.',
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Project Two',
      description: 'A short description of project two.',
      image: 'https://via.placeholder.com/300',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <div>
      <Header />

      {/* Home Section */}
      <section id="home" className="home-section">
  <img src={EdenImage} alt="Eden" className="home-image" />
  <h1 className="home-name">Eden Aharon</h1>
  <p className="home-description">
    I am a passionate software developer specialized in Frontend development with React and JavaScript. 
    I love building clean, modern, and user-friendly web applications.
  </p>
</section>

      {/* Recent Projects Section */}
      <section id="recent-projects">
        <h2>Recent Projects</h2>
        <div className="projects-container">
          {recentProjects.map((proj, index) => <ProjectCard key={index} {...proj} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
