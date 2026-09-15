import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

const Footer = ({ name, socials }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--nav-bg)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--border-color)',
      padding: '40px 0 28px 0',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', paddingBottom: '24px', borderBottom: '1px solid var(--border-color)' }} className="footer-inner">
          
          {/* Footer Logo & Tagline */}
          <div className="footer-brand">
            <a href="#hero" style={{ textDecoration: 'none', fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Najiba<span className="text-gradient">.Dev</span>
            </a>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '4px' }}>
              Architecting full-stack web applications with modern design & precision.
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '10px' }} className="footer-socials">
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
                  background: 'rgba(125, 125, 125, 0.08)',
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
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
              border: 'none',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Copyright notice */}
        <div style={{ paddingTop: '20px', textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-dim)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <span>© {new Date().getFullYear()} {name}. Built with</span>
          <Heart size={13} color="#ec4899" fill="#ec4899" />
          <span>using MERN & React Technologies.</span>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-inner { flex-direction: column !important; text-align: center !important; }
          .footer-brand { display: flex; flex-direction: column; align-items: center; }
          .footer-socials { justify-content: center !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
