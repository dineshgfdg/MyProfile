import React from 'react';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img src="/project1.jpg" alt="Project 1" />
          </div>
          <h3>Project One</h3>
          <p>Full-stack web application built with React and Node.js</p>
          <div className="project-links">
            <a href="#" className="project-link">View Live</a>
            <a href="#" className="project-link">GitHub</a>
          </div>
        </div>
        {/* Add more project cards */}
      </div>
    </section>
  );
};

export default Projects; 