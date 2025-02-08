import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skill-items">
            <div className="skill-item">React</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">CSS3</div>
          </div>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skill-items">
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Python</div>
            <div className="skill-item">MongoDB</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 