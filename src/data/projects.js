// src/data/projects.js
import socialAI from '../assets/social.ai.png';
import socialVideo from '../assets/videos/social.ai.mp4';
const projects = [
    {
    id: 'social-ai',
    title: 'Social AI',
    shortDescription: 'AI social media assistant for business growth.', // זה שמופיע בכרטיס
    fullDescription: `My final project - an online system that serves as a social manager on the Instagram platform for small businesses using artificial intelligence.
The system analyzes the user's profile, identifies patterns that increase engagement on the page, and then makes content suggestions designed to increase engagement on the page.
The system automatically uploads content according to a pre-scheduled schedule made by the user, as well as collecting statistics and graphs from the user's page.`, // זה שמופיע בפרטי הפרויקט
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'], // באנגלית
    image: socialAI,
   video: socialVideo,
    github: 'https://github.com/sapirindig/Final-project.git',
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description: 'Full description for Project Two.',
    image: 'https://via.placeholder.com/300',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

export default projects;
