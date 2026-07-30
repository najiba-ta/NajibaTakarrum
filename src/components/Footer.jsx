import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

const Footer = ({ name, socials }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#060911',
      borderTop: '1px solid var(--border-color)',
      padding: '48px 0 32px 0',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px', paddingBottom: '32px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          
          {/* Footer Logo & Tagline */}
          <div>
            <a href="#hero" style={{ textDecoration: 'none', fontSize: '1.4rem', fontWeight: 800, color: 'white' }}>
              Najiba<span className="text-gradient">.Dev</span>
            </a>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '6px' }}>
              Architecting full-stack web applications with modern design & precision.
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { icon: <GithubIcon size={18} />, href: socials.github, label: 'GitHub' },
              { icon: <LinkedinIcon size={18} />, href: socials.linkedin, label: 'LinkedIn' },
              { icon: <InstagramIcon size={18} />, href: socials.instagram, label: 'Instagram' },
              { icon: <FacebookIcon size={18} />, href: socials.facebook, label: 'Facebook' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease'
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to Top Floating Action Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              border: 'none',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.3)'
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Copyright notice */}
        <div style={{ paddingTop: '24px', textAlign: 'center', fontSize: '0.88rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <span>© {new Date().getFullYear()} {name}. Built with</span>
          <Heart size={14} color="#ec4899" fill="#ec4899" />
          <span>using MERN & React Technologies.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
