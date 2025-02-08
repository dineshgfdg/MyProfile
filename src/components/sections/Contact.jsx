import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>email@example.com</p>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <p>github.com/username</p>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <p>linkedin.com/in/username</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 