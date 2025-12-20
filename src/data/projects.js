// src/data/projects.js

const projects = [
  // ----------------------------------------------------
  // Project 1: Social AI
  // ----------------------------------------------------
  {
    id: 'social-ai', 
    title: 'Social AI',
    shortDescription: 'AI social media assistant for business growth.', 
    fullDescription: ` final project - an online system that serves as a social manager on the Instagram platform for small businesses using artificial intelligence.
The system analyzes the user's profile, identifies patterns that increase engagement on the page, and then makes content suggestions designed to increase engagement on the page.
The system automatically uploads content according to a pre-scheduled schedule made by the user, as well as collecting statistics and graphs from the user's page.`, 
    technologies: [ 'React', 
      'TypeScript', 
      'Node.js', 
 
      'OpenAI GPT-4', 
      'MongoDB', 
      'JWT + Google OAuth', 
      'Instagram Graph API', 
      'Google Analytics API', 
      'Swagger'], 
    github: 'https://github.com/sapirindig/Final-project.git',
    challenges: [
      {
        challenge: 'Instagram API limitations that prevent high-frequency automated posting.',
        solution: 'Developed a queuing system to schedule posts according to a pre-defined timeline, respecting API rate limits and ensuring stable automation.'
      },
      {
        challenge: 'Identifying engagement patterns and content types that increase interaction on user pages.',
        solution: 'Built a model to analyze content types and engagement patterns, providing content recommendations that maximize user interaction.'
      },
      {
        challenge: 'Smartly integrating AI-generated content for non-technical users.',
        solution: 'Utilized OpenAI GPT-4 to automatically generate personalized content suggestions in a clear and user-friendly way.'
      }
    ],
      keyFeatures: [
    'Automated Instagram content posting based on user schedule.',
    'Real-time analytics dashboard with charts.',
    'AI suggestions for engaging content.'
  ]
  },
  
  // ----------------------------------------------------
// Project 2: AdoptADog
// ----------------------------------------------------
{
  id: 'adopt-a-dog', 
  title: 'AdoptADog',
  shortDescription: 'Social platform for dog adoption with location-based search.', 
  fullDescription: `AdoptADog is a mobile Android application built in Kotlin that allows users to post and browse dogs available for adoption. 
Users can view nearby dogs on a Google Map, comment on posts, and connect with organizations to adopt a dog. 
The app features Firebase authentication for secure user login and profile management, as well as real-time updates for posts and comments.`, 
  technologies: ['Kotlin', 'Firebase Authentication', 'Google Maps API', 'REST API', 'Room Database'], 
  github: 'https://github.com/edenaharon1/Adopt-A-Dog.git',
  challenges: [
    {
      challenge: 'Displaying dogs accurately on the map based on location.',
      solution: 'Integrated Google Maps API with real-time location data and filters to show dogs available nearby.'
    },
    {
      challenge: 'Implementing secure and smooth user authentication.',
      solution: 'Used Firebase Authentication for email/password and social logins, ensuring secure and seamless access.'
    },
    {
      challenge: 'Caching data locally for offline usage.',
      solution: 'Used Room Database to store posts and images locally, allowing users to browse even when offline.'
    }
  ],
   keyFeatures: [
    'Browse nearby dogs on Google Map.',
    'Post and comment on adoption listings.',
    'Secure authentication via Firebase.',
    'Offline caching of posts with Room Database.'
  ],
}
,
  // ----------------------------------------------------
// Project 3: Hobiz
// ----------------------------------------------------
{
  id: 'hobiz',
  title: 'Hobiz',
  shortDescription: 'Social platform for sharing hobbies with AI-powered content.',
  fullDescription: `Hobiz is a full web application built with React and Node.js (TypeScript) that allows users to share hobbies, post content, comment, like, and interact with other users.
The platform integrates CHAT with AI from available AI APIs.
It also includes a secure user authentication system with JWT, third-party providers (Google/Facebook), and refresh tokens.`,
  technologies: [
    'React', 
    'Node.js', 
    'Express.js', 
    'TypeScript', 
    'MongoDB', 
    'JWT + OAuth (Google/Facebook)', 
    'OpenAI API', 
    'Swagger', 
    'Unit Testing'
  ],
  github: 'https://github.com/edenaharon1/Hobiz.git',

  challenges: [
    {
      challenge: 'Implementing secure user authentication and session management with JWT and external providers.',
      solution: 'Integrated JWT with refresh tokens and OAuth login (Google/Facebook), ensuring secure login and persistent sessions.'
    },
    {
      challenge: 'Managing large volumes of posts and paginated content efficiently.',
      solution: 'Implemented server-side pagination and optimized MongoDB queries to load posts smoothly with minimal delay.'
    },
    {
      challenge: 'Allowing users to comment, like, and edit/delete their posts safely.',
      solution: 'Implemented REST APIs with proper authentication checks and efficient database updates to handle user interactions.'
    },
  ],

  keyFeatures: [
    'Secure login with JWT and external providers (Google/Facebook)',
    'Create, edit, delete, and like posts',
    'Unit-tested APIs and documented with Swagger',

  ]
},

];

export default projects;
