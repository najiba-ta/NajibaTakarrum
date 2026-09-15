import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section id="education" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: '20px', color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <GraduationCap size={14} /> ACADEMIC BACKGROUND
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
            Educational <span className="text-gradient">Qualifications</span>
          </h2>
        </div>

        {/* Education Timeline Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
          {data.map((edu, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '36px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>
                    <Award size={24} />
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-purple)', background: 'rgba(168, 85, 247, 0.1)', padding: '4px 12px', borderRadius: '20px', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={12} /> {edu.passingYear}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {edu.degree}
                </h3>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-indigo)', marginBottom: '16px' }}>
                  {edu.institution}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {edu.description}
                </p>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: 600 }}>
                <span>✓ Completed Higher Education</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
