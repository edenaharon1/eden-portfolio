import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  const config = {
    background: {
      color: { value: '#0b0b15' },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        onClick: {
          enable: true,
          mode: 'repulse', // גם נגיעה יוצרת דחייה
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: { value: ['#0ff', '#ff73d9'] },
      links: {
        color: { value: '#0ff' },
        distance: 120, // הפחתה קלה עבור ביצועים טובים יותר
        enable: true,
        opacity: 0.7,
        width: 1.2,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 0.8, // קצת איטי יותר -> פחות עומס
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60, // פחות חלקיקים -> ביצועים טובים יותר בסמארטפון
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
      shadow: { enable: true, blur: 10, color: '#0ff' },
    },
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
