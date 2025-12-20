// ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ id, title, shortDescription, image, github, technologies, keyFeatures }) {
  // רשימת הטכנולוגיות הבולטות בלבד להצגה בכרטיס
  const mainTech = technologies ? technologies.slice(0, 5) : [];

  return (
    <div className="project-card-container">
      <div className="project-card-header">
        <div className="project-title-role">
          <Link to={`/projects/${id}`} className="project-card-title-link">
            <h3>{title}</h3>
          </Link>
          <span className="project-type-badge">Personal Project</span>
        </div>
      </div>

      <div className="project-card-body">
        <p>{shortDescription}</p>
        <ul className="project-key-features">
          {keyFeatures && keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="project-card-footer">
        {mainTech.length > 0 && (
          <div className="project-tech-tags">
            <span className="tech-label">TECH:</span>
            {mainTech.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}

        <div className="project-card-buttons">
          <Link to={`/projects/${id}`} className="project-btn-primary">
            View project overview
          </Link>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-btn-secondary" title="GitHub">
              See more on github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
