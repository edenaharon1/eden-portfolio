import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { FaGithub, FaVideo, FaImage } from 'react-icons/fa'; // אייקונים מוכנים

function ProjectCard({ id, title, shortDescription, image, github, video, demo }) {
  return (
    <Link to={`/projects/${id}`} className="project-card-link">
      <div className="project-card">
        <img src={image} alt={title} />
        <div className="project-card-content">
          <h3>{title}</h3>
          <p>{shortDescription}</p>
        </div>

        {/* שורת אייקונים בתחתית הכרטיס */}
        <div className="project-card-icons">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
          )}
          {video && (
            <a href={video} target="_blank" rel="noopener noreferrer" title="Video">
              <FaVideo />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" title="Demo">
              <FaImage />
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
