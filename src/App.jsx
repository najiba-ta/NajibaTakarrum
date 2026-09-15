import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ProjectDetail from './components/ProjectDetail';
import DevTerminal from './components/DevTerminal';

import { portfolioData } from './data';

function App() {
  // Theme state: default to 'dark' or stored user preference
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  // Track selected project for dedicated full-page view details
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Track cursor position to dynamically shift the background ambient radial light spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Animated Ambient Glowing Glass Orbs */}
      <div style={{
        position: 'fixed',
        top: '-15%',
        left: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(2, 132, 199, 0.15) 50%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none',
        zIndex: 0
      }} className="animate-orb-1" />

      <div style={{
        position: 'fixed',
        bottom: '-15%',
        right: '-10%',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.35) 0%, rgba(244, 63, 94, 0.2) 50%, transparent 70%)',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 0
      }} className="animate-orb-2" />

      <Navbar theme={theme} toggleTheme={toggleTheme} isDetailView={!!activeProject} />
      
      <main style={{ position: 'relative', zIndex: 1 }}>
        {activeProject ? (
          <ProjectDetail 
            project={activeProject} 
            onBack={() => {
              setActiveProject(null);
              // Scroll back to projects showcase section
              setTimeout(() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'instant' });
              }, 50);
            }} 
          />
        ) : (
          <>
            <Hero data={portfolioData.personal} />
            <About data={portfolioData.about} />
            <Skills categories={portfolioData.skills} />
            <Experience data={portfolioData.experiences} />
            <Projects 
              projects={portfolioData.projects} 
              onViewProject={(proj) => setActiveProject(proj)} 
            />
            <Contact data={portfolioData.personal} />
          </>
        )}
      </main>
      
      <Footer name={portfolioData.personal.name} socials={portfolioData.personal.socials} />
      <DevTerminal personalData={portfolioData.personal} />
      <Chatbot personalData={portfolioData.personal} />
    </div>
  );
}

export default App;
