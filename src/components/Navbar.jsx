import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme, isDetailView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  if (isDetailView) return null;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid var(--border-color)',
        padding: scrolled ? '10px 0' : '14px 0'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Code2 size={20} color="#ffffff" />
          </div>
          <span style={{ fontSize: 'clamp(1.05rem, 4vw, 1.25rem)', fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--text-main)' }}>
            Najiba<span className="text-gradient">.Dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--primary-light)' : 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                  position: 'relative'
                }}
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    borderRadius: '2px',
                    background: 'linear-gradient(90deg, var(--primary), var(--secondary))'
                  }} />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions Row: Dark/Light Mode Toggle + Hire Me CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* Dark / Light Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark and light theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            style={{ width: '38px', height: '38px', borderRadius: '10px' }}
          >
            {theme === 'dark' ? <Sun size={18} color="#fbbf24" /> : <Moon size={18} color="#6366f1" />}
          </button>

          <a href="#contact" className="btn-primary desktop-hire-btn" style={{ padding: '7px 16px', fontSize: '0.85rem' }}>
            <Sparkles size={14} /> Hire Me
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              display: 'flex',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              color: 'var(--text-main)',
              cursor: 'pointer',
              padding: '7px'
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay & Drawer Menu */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: '100%',
              left: 0,
              right: 0,
              bottom: '-100vh',
              height: '200vh',
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 90
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-modal)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              borderBottom: '1.5px solid var(--border-accent)',
              boxShadow: 'var(--shadow-card)',
              padding: '20px 20px 24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              zIndex: 99
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--primary-light)' : 'var(--text-main)',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: isActive ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                    border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && <span style={{ fontSize: '0.8rem', color: 'var(--primary-light)' }}>●</span>}
                </a>
              );
            })}

            <div style={{ paddingTop: '8px', borderTop: '1px solid var(--border-color)', marginTop: '4px' }}>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '0.95rem' }}
              >
                <Sparkles size={18} /> Hire Me Direct
              </a>
            </div>
          </div>
        </>
      )}

      {/* Responsive Inline CSS adjustments */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
          .desktop-hire-btn { display: inline-flex !important; }
        }
        @media (max-width: 767px) {
          .desktop-hire-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
