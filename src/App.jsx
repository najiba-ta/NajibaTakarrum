import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { portfolioData } from './data';

function App() {
  // Theme state: default to 'dark' or stored user preference
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Animated Ambient Glowing Glass Orbs */}
      <div style={{
        position: 'fixed',
        top: '-10%',
        left: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(2, 132, 199, 0.08) 50%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        zIndex: 0
      }} className="animate-orb-1" />

      <div style={{
        position: 'fixed',
        bottom: '10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.18) 0%, rgba(244, 63, 94, 0.1) 50%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }} className="animate-orb-2" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.about} />
        <Skills categories={portfolioData.skills} />
        <Experience data={portfolioData.experiences} />
        <Projects projects={portfolioData.projects} />
        <Contact data={portfolioData.personal} />
      </main>
      <Footer name={portfolioData.personal.name} socials={portfolioData.personal.socials} />
    </div>
  );
}

export default App;
