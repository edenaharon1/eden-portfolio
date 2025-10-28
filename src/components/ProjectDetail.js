import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <p>Project not found</p>;

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      {project.video && (
        <div className="project-video">
          <iframe
            width="560"
            height="315"
            src={project.video}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>

      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default ProjectDetail;
