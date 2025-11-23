import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 
import './ProjectDetail.css';

function ProjectDetail({ projects }) {
  const { id } = useParams();

  // ⭐ גלילה מיידית לראש הדף בלי אנימציה
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
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
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

      {/* ⭐ Challenges & Solutions */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="project-section challenges-section">
          <h2>Challenges & Solutions</h2>
          <ul>
            {project.challenges.map((item, index) => (
              <li key={index}>
                <strong>Challenge:</strong> {item.challenge}<br />
                <strong>Solution:</strong> {item.solution}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.video && (
        <section className="project-section video-section">
          <h2>Video Demo</h2>
          <div className="project-video-embed">
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
    </div>
  );
}

export default ProjectDetail;
