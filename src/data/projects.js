// src/data/projects.js
import socialAI from '../assets/social.ai.png';
import socialVideo from '../assets/videos/social.ai.mp4';

const projects = [
  // ----------------------------------------------------
  // Project 1: Social AI
  // ----------------------------------------------------
  {
    // *** חובה: לוודא ש-id זה ייחודי ***
    id: 'social-ai', 
    title: 'Social AI',
    shortDescription: 'AI social media assistant for business growth.', 
    fullDescription: `My final project - an online system that serves as a social manager on the Instagram platform for small businesses using artificial intelligence.
The system analyzes the user's profile, identifies patterns that increase engagement on the page, and then makes content suggestions designed to increase engagement on the page.
The system automatically uploads content according to a pre-scheduled schedule made by the user, as well as collecting statistics and graphs from the user's page.`, 
    // ה-Technologies מוגדר נכון כ-Array של מחרוזות.
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'], 
    image: socialAI,
    video: socialVideo,
    github: 'https://github.com/sapirindig/Final-project.git',
  },
  
  // ----------------------------------------------------
  // Project 2: (דוגמה לפרויקט נוסף שלך)
  // ----------------------------------------------------
  {
    // *** חובה: לוודא ש-id זה שונה מהפרויקט הקודם ***
    id: 'ecommerce-platform', 
    title: 'Modern E-commerce Platform',
    shortDescription: 'Responsive and fast e-commerce site with full checkout flow.', 
    fullDescription: `A full-stack project simulating a modern online store. Features include user authentication, product search, shopping cart functionality, and a simulated payment process.`, 
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'], // טכנולוגיות שונות
    image: socialAI, // השתמש בנתיב תמונה שונה
    video: socialVideo, // השתמש בנתיב סרטון שונה
    github: 'https://github.com/yourusername/ecommerce-project.git',
  },
  
  // ניתן להוסיף פרויקטים נוספים כאן...
];

export default projects;