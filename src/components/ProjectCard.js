import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ id, title, description, image }) {
  return (
    <Link to={`/projects/${id}`} className="project-card-link">
      <div className="project-card">
        <img src={image} alt={title} />
        <div className="project-card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
