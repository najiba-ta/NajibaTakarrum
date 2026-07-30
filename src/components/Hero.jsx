import React, { useState, useEffect } from 'react';
import { Download, ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

const Hero = ({ data }) => {
  const [designationIndex, setDesignationIndex] = useState(0);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDesignationIndex((prev) => (prev + 1) % data.designations.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [data.designations]);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);

    const alertBox = document.createElement('div');
    alertBox.innerHTML = `
      <div style="position: fixed; bottom: 24px; right: 24px; z-index: 1000; background: var(--bg-modal); border: 1px solid var(--primary-light); color: var(--text-main); padding: 16px 24px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 12px; font-family: sans-serif;">
        <span style="font-size: 20px;">📄</span>
        <div>
          <h4 style="margin: 0; font-size: 14px; font-weight: 700; color: var(--primary-light);">Resume Download Requested</h4>
          <p style="margin: 0; font-size: 12px; color: var(--text-muted);">Downloading Najiba Takarrum's CV...</p>
        </div>
      </div>
    `;
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 4000);
  };

  return (
    <section id="hero" style={{ minHeight: '100vh', paddingTop: '130px', paddingBottom: '80px', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Hero Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Status Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '30px', width: 'fit-content' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-light)' }}>Available for Hire & Dynamic Projects</span>
            </div>

            {/* Main Greeting & Designation */}
            <div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--text-main)' }}>
                Hi, I'm <span className="text-gradient">{data.name}</span>
              </h1>
              <div style={{ height: '50px', marginTop: '12px', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-main)' }}>
                  A Creative{' '}
                  <span className="text-gradient-alt" style={{ display: 'inline-block', transition: 'all 0.4s ease' }}>
                    {data.designations[designationIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Short Bio */}
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.7 }}>
              {data.bio}
            </p>

            {/* Resume Download & Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', paddingTop: '8px' }}>
              <button
                onClick={handleResumeDownload}
                className="btn-primary"
                id="download-resume-btn"
                style={{ fontSize: '1rem' }}
              >
                {downloaded ? <CheckCircle size={20} /> : <Download size={20} />}
                {downloaded ? 'Resume Ready!' : 'Download Resume'}
              </button>

              <a href="#projects" className="btn-secondary" style={{ fontSize: '1rem' }}>
                Explore Projects <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Social Profile Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '16px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontWeight: 600 }}>CONNECT:</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { icon: <GithubIcon size={20} />, href: data.socials.github, label: 'GitHub' },
                  { icon: <LinkedinIcon size={20} />, href: data.socials.linkedin, label: 'LinkedIn' },
                  { icon: <InstagramIcon size={20} />, href: data.socials.instagram, label: 'Instagram' },
                  { icon: <FacebookIcon size={20} />, href: data.socials.facebook, label: 'Facebook' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(125, 125, 125, 0.05)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-light)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(125, 125, 125, 0.05)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Hero Right Avatar Visual (Clean shoulder-up cut-out like FB/WhatsApp profile avatar without background card/frame) */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            
            {/* Glowing accent circle behind headshot */}
            <div style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(2, 132, 199, 0.15) 60%, transparent 100%)',
              filter: 'blur(30px)',
              zIndex: 0
            }} />

            <div
              className="animate-float"
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Profile Avatar Headshot Cutout */}
              <div style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                border: '4px solid var(--primary-light)',
                background: 'transparent'
              }}>
                <img
                  src={data.avatar}
                  alt={data.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Floating MERN badge */}
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                right: '0px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-accent)',
                padding: '10px 18px',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backdropFilter: 'blur(12px)'
              }}>
                <Sparkles size={20} color="var(--primary-light)" />
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: 600 }}>SPECIALTY</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>MERN Stack Solutions</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.2fr 0.8fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
