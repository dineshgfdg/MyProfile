import React from 'react';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Senior Software Engineer</h3>
            <p className="company">Tech Company Inc.</p>
            <p className="period">2020 - Present</p>
            <ul className="responsibilities">
              <li>Led development of microservices architecture</li>
              <li>Implemented CI/CD pipelines using Jenkins and Docker</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Optimized application performance resulting in 40% faster load times</li>
            </ul>
          </div>
        </div>
        {/* Add more timeline items */}
      </div>
    </section>
  );
};

export default Experience; 