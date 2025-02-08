import React, { useState, useRef } from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});

  const scrollToSection = (sectionId) => {
    sectionsRef.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <div ref={el => sectionsRef.current['home'] = el}>
              <Hero scrollToSection={scrollToSection} />
            </div>
            <div ref={el => sectionsRef.current['projects'] = el}>
              <Projects />
            </div>
            <div ref={el => sectionsRef.current['experience'] = el}>
              <Experience />
            </div>
            <div ref={el => sectionsRef.current['skills'] = el}>
              <Skills />
            </div>
            <div ref={el => sectionsRef.current['contact'] = el}>
              <Contact />
            </div>
          </>
        );
      case 'projects':
        return <div ref={el => sectionsRef.current['projects'] = el}><Projects /></div>;
      case 'experience':
        return <div ref={el => sectionsRef.current['experience'] = el}><Experience /></div>;
      case 'skills':
        return <div ref={el => sectionsRef.current['skills'] = el}><Skills /></div>;
      case 'contact':
        return <div ref={el => sectionsRef.current['contact'] = el}><Contact /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="website-container">
      <nav className="navbar">
        <div className="nav-brand">Dinesh T</div>
        <div className="nav-links">
          {['home', 'projects', 'experience', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(section);
                if (section === 'home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
};

export default Profile; 