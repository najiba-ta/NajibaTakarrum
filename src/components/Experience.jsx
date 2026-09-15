import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" style={{ padding: 'clamp(60px, 10vw, 100px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: '20px', color: '#f472b6', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <Briefcase size={14} /> CAREER TRAJECTORY
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800 }}>
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '24px' }}>
          {data.map((exp, index) => (
            <div key={index} className="glass-panel" style={{ padding: 'clamp(20px, 5vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f472b6', flexShrink: 0 }}>
                    <Building2 size={22} />
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(6, 182, 212, 0.1)', padding: '4px 10px', borderRadius: '20px', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={12} /> {exp.period}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.15rem, 4vw, 1.3rem)', fontWeight: 700, color: '#f3f4f6', marginBottom: '6px' }}>
                  {exp.role}
                </h3>
                <h4 style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)', fontWeight: 600, color: '#c084fc', marginBottom: '14px' }}>
                  {exp.company}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.9rem, 3vw, 0.95rem)', lineHeight: 1.7 }}>
                  {exp.description}
                </p>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontSize: '0.82rem', fontWeight: 600 }}>
                <span>● Active Contribution</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
