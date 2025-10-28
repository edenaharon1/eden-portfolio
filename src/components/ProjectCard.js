import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { FaGithub, FaVideo, FaImage } from 'react-icons/fa'; // אייקונים מוכנים

function ProjectCard({ id, title, description, image, github, video, demo }) {
  return (
    <Link to={`/projects/${id}`} className="project-card-link">
      <div className="project-card">
        <img src={image} alt={title} />
        <div className="project-card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        {/* שורת אייקונים בתחתית הכרטיס */}
        <div className="project-card-icons">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          )}
          {video && (
            <a href={video} target="_blank" rel="noopener noreferrer">
              <FaVideo />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <FaImage />
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
