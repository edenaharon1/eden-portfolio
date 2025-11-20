import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // או loadFull אם תרצה אפקטים מורכבים יותר

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    // טוען רק את הדרוש לאפקט קלאסי וקל
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container); // לבדיקה
  }, []);

  const config = {
    // הגדרות הרקע: נשתמש בצבעי המעבר (Gradient) הקיימים שלך
    background: {
      color: {
        value: '#0b0b15', // רקע כהה מאוד שמתאים למראה הרשתי
      },
    },
    // הגדרות FPS
    fpsLimit: 60,
    interactivity: {
      events: {
        // מגיב לתנועת העכבר
        onHover: {
          enable: true,
          mode: 'repulse', // דוחה את הנקודות
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100, // מרחק הדחייה
          duration: 0.4,
        },
      },
    },
    // הגדרות הנקודות והקווים (הליבה של האפקט)
    particles: {
      color: {
        // הצבעוניות שאתה אוהב: טורקיז וורוד
        value: ['#0ff', '#ff73d9'], 
      },
      links: {
        // הגדרת הקווים המקשרים
        color: {
          value: '#4c4c99', // צבע הקווים, פחות חזק מהנקודות
        },
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        // תנועה איטית וטבעית
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        // כמות הנקודות
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    // הגדרות נוספות ל-retina (מסכי רזולוציה גבוהה)
    detectRetina: true,
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={config}
      />
    </div>
  );
};

export default BackgroundParticles;