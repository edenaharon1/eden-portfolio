import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 
import './ProjectDetail.css';

function ProjectDetail({ projects }) {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const project = projects.find(p => p.id === id);
  if (!project) return <p>Project not found</p>;

  return (
    <div className="project-detail">

      <button className="close-window-btn" onClick={() => window.history.back()}>
        ✕
      </button>

      <header className="project-header">
        {project.image && (
          <div className="project-logo">
            <img src={project.image} alt={`${project.title} logo`} />
          </div>
        )}

        <div className="project-summary">
          <h1>{project.title}</h1>

          <div className="project-links-icons">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub className="link-icon" /> GitHub
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="Live Demo">
                <FaExternalLinkAlt className="link-icon" /> Live Demo
              </a>
            )}
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="project-detail-tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          )}
        </div>
      </header>

      {project.fullDescription && (
        <section className="project-section about-section">
          <h2>Project Overview</h2>
          <p>{project.fullDescription}</p>
        </section>
      )}

      {/* --- הסקשן המעודכן של האתגרים והפתרונות --- */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="challenges-section">
          <h2>Challenges & Solutions</h2>
          
          {project.challenges.map((item, index) => (
            <div key={index} className="challenge-card">
              <div className="challenge-header">
                {item.challenge}
              </div>
              <div className="solution-box">
                <strong>The Solution:</strong>
                <p>{item.solution}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default ProjectDetail;