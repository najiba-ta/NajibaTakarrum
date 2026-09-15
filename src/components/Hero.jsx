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

    // Open clean PDF-formatted Resume in a new tab with print trigger
    window.open('/resume.html?print=true', '_blank');

    const alertBox = document.createElement('div');
    alertBox.innerHTML = `
      <div style="position: fixed; bottom: 24px; right: 24px; z-index: 1000; background: var(--bg-modal); border: 1px solid var(--primary-light); color: var(--text-main); padding: 16px 24px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 12px; font-family: sans-serif;">
        <span style="font-size: 20px;">📄</span>
        <div>
          <h4 style="margin: 0; font-size: 14px; font-weight: 700; color: var(--primary-light);">Resume Download / Print Opened</h4>
          <p style="margin: 0; font-size: 12px; color: var(--text-muted);">Opening Najiba Takarrum's PDF Resume...</p>
        </div>
      </div>
    `;
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 4000);
  };

  return (
    <section id="hero" style={{ minHeight: '100vh', paddingTop: 'clamp(95px, 14vw, 130px)', paddingBottom: 'clamp(40px, 8vw, 80px)', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }} className="hero-grid">
          
          {/* Hero Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Status Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '30px', width: 'fit-content' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981', flexShrink: 0 }}></span>
              <span style={{ fontSize: 'clamp(0.75rem, 3.2vw, 0.85rem)', fontWeight: 600, color: 'var(--primary-light)' }}>Available for Hire & Dynamic Projects</span>
            </div>

            {/* Main Greeting & Designation */}
            <div>
              <h1 style={{ fontSize: 'clamp(2rem, 7.5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
                Hi, I'm <span className="text-gradient">{data.name}</span>
              </h1>
              <div style={{ minHeight: '44px', marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: 'clamp(1.1rem, 4.5vw, 2rem)', fontWeight: 700, color: 'var(--text-main)' }}>
                  A Creative{' '}
                  <span className="text-gradient-alt" style={{ display: 'inline-block', transition: 'all 0.4s ease' }}>
                    {data.designations[designationIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Short Bio */}
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.7 }}>
              {data.bio}
            </p>

            {/* Resume Download & Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '4px' }} className="hero-btn-group">
              <button
                onClick={async () => {
                  confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                  });
                  setDownloaded(true);

                  try {
                    // Fetch clean ATS resume HTML content
                    const res = await fetch('/resume.html');
                    const htmlText = await res.text();

                    // Create hidden container for PDF rendering
                    const element = document.createElement('div');
                    element.innerHTML = htmlText;
                    
                    // Remove action bar button from PDF render
                    const actionBar = element.querySelector('.action-bar');
                    if (actionBar) actionBar.remove();

                    document.body.appendChild(element);

                    const html2pdf = (await import('html2pdf.js')).default;
                    const opt = {
                      margin:       [6, 10, 6, 10],
                      filename:     'Najiba_Takarrum_Full_Stack_Developer_Resume.pdf',
                      image:        { type: 'jpeg', quality: 0.98 },
                      html2canvas:  { scale: 2, useCORS: true, logging: false },
                      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
                    };

                    await html2pdf().set(opt).from(element).save();
                    document.body.removeChild(element);
                  } catch (err) {
                    console.error('PDF generation failed, opening printable resume view:', err);
                    window.open('/resume.html?print=true', '_blank');
                  } finally {
                    setTimeout(() => setDownloaded(false), 3000);
                  }
                }}
                className="btn-primary hero-action-btn"
                id="download-resume-btn"
                style={{ fontSize: '0.95rem', padding: '12px 24px' }}
              >
                {downloaded ? <CheckCircle size={18} /> : <Download size={18} />}
                {downloaded ? 'Generating PDF...' : 'Download Resume (PDF)'}
              </button>

              <a href="#projects" className="btn-secondary hero-action-btn" style={{ fontSize: '0.95rem', padding: '12px 24px' }}>
                Explore Projects <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Social Profile Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '12px' }} className="hero-social-container">
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600, letterSpacing: '0.5px' }}>CONNECT:</span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { icon: <GithubIcon size={18} />, href: data.socials.github, label: 'GitHub' },
                  { icon: <LinkedinIcon size={18} />, href: data.socials.linkedin, label: 'LinkedIn' },
                  { icon: <InstagramIcon size={18} />, href: data.socials.instagram, label: 'Instagram' },
                  { icon: <FacebookIcon size={18} />, href: data.socials.facebook, label: 'Facebook' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: '40px',
                      height: '40px',
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

          {/* Hero Right Avatar Visual */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '10px' }}>
            
            {/* Glowing accent circle behind headshot */}
            <div style={{
              position: 'absolute',
              width: 'min(280px, 68vw)',
              height: 'min(280px, 68vw)',
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
                width: 'min(300px, 72vw)',
                height: 'min(300px, 72vw)',
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
              <div
                className="hero-mern-badge"
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  right: '-4px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-accent)',
                  padding: '8px 14px',
                  borderRadius: '14px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backdropFilter: 'blur(12px)',
                  maxWidth: '90%'
                }}
              >
                <Sparkles size={18} color="var(--primary-light)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontWeight: 600 }}>SPECIALTY</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', whiteSpace: 'nowrap' }}>MERN Stack Solutions</div>
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
        @media (max-width: 576px) {
          .hero-action-btn { width: 100% !important; justify-content: center !important; }
          .hero-social-container { flex-direction: column !important; align-items: flex-start !important; }
          .hero-mern-badge { right: 50% !important; transform: translateX(50%) !important; bottom: -12px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
