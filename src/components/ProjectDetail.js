import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import './ProjectDetail.css';

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p>Project not found</p>;

  return (
    <div className="project-detail">

      {/* לוגו הפרויקט */}
      {project.image && (
        <div className="project-logo">
          <img src={project.image} alt={`${project.title} logo`} />
        </div>
      )}

      {/* שם הפרויקט */}
      <h1>{project.title}</h1>

      {/* About */}
      {project.fullDescription && (
        <section className="project-section">
          <h2>About</h2>
          <p>{project.fullDescription}</p>
        </section>
      )}

      {/* Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="project-section">
          <h2>Technologies Used</h2>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Video */}
      {project.video && (
        <section className="project-section">
          <h2>Video Demo</h2>
          <div className="project-video">
            <iframe
              src={project.video}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* GitHub */}
      {project.github && (
        <div className="project-detail-icons">
          <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
        </div>
      )}

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}

export default ProjectDetail;
