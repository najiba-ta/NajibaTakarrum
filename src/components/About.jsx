import React from 'react';
import { User, Compass, Heart, Terminal } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '20px', color: '#c084fc', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <User size={14} /> GET TO KNOW ME
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
            About <span className="text-gradient">My Journey & Passion</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="about-grid">
          
          {/* Programming Journey Card */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>My Programming Journey</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.02rem' }}>
              {data.journey}
            </p>
          </div>

          {/* Work Preference Card */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc' }}>
                <Terminal size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Work I Love & Enjoy</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.02rem' }}>
              {data.workPreference}
            </p>
          </div>

        </div>

        {/* Hobbies & Interests Section */}
        <div className="glass-panel" style={{ marginTop: '32px', padding: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f472b6' }}>
              <Heart size={24} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Beyond the Code (Hobbies & Interests)</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {data.hobbies.map((hobby, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#c084fc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <span style={{ color: '#818cf8', fontSize: '1.2rem' }}>✦</span>
                {hobby}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
