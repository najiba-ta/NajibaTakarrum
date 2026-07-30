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
    <div className="portfolio-app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
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
