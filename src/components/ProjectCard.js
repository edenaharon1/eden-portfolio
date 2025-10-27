import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, image, github, demo }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;
