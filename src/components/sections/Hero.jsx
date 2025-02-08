import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Software Engineer</h1>
        <h2 className="hero-subtitle">Building Digital Experiences</h2>
        <p className="hero-text">
          Passionate about creating innovative solutions through code
        </p>
        <div className="hero-buttons">
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            Let's Connect
          </button>
          <button className="scroll-button" onClick={() => scrollToSection('projects')}>
            Scroll to See More ↓
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/your-profile-photo.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default Hero; 