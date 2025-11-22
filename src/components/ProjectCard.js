// ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { FaGithub } from 'react-icons/fa';

// הוספתי technologies ל-props, נדרש לוודא שזה מגיע מ projects.map ב-App.js
function ProjectCard({ id, title, shortDescription, image, github, technologies }) {
  return (
    <div className="project-card-container"> {/* עוטף עבור אפקט ה-Link כולו */}
      <div className="project-card-header">
        <div className="project-title-role">
          <Link to={`/projects/${id}`} className="project-card-title-link">
            <h3>{title}</h3>
          </Link>
          {/* בתוך המודל הנוכחי, אין לנו שדה 'Role' או 'Context' כפי שבתמונה המקורית.
              אני מוסיף Placeholder ל'סוג הפרויקט' (כמו 'Industrial Project' בתמונה). */}
          <span className="project-type-badge">Personal Project</span>
        </div>
      </div>
      
      {/* תיאור הפרויקט - גוף הכרטיס */}
      <div className="project-card-body">
        {/* התיאור המלא צריך להיות זמין כאן. משתמשים ב-shortDescription כרגע */}
        <p>{shortDescription}</p> 
        {/* אם היית רוצה להוסיף רשימת תכונות קטנה כפי שבתמונה, זה המקום */}
        <ul className="project-key-features">
          <li>Built a responsive UI to showcase services.</li>
          <li>Implemented core backend features.</li>
          <li>Handled overall site architecture.</li>
        </ul>
      </div>

      <div className="project-card-footer">
        {/* הצגת הטכנולוגיות כ-Tags */}
        {technologies && technologies.length > 0 && (
          <div className="project-tech-tags">
            <span className="tech-label">TECH:</span>
            {technologies.slice(0, 4).map((tech, index) => ( // מציגים עד 4 טכנולוגיות
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}

        {/* כפתורי צפייה - כמו בתמונה, View Project Overview ו-GitHub */}
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