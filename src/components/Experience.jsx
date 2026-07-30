import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: '20px', color: '#f472b6', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <Briefcase size={14} /> CAREER TRAJECTORY
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {data.map((exp, index) => (
            <div key={index} className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f472b6' }}>
                    <Building2 size={24} />
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(6, 182, 212, 0.1)', padding: '4px 12px', borderRadius: '20px', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={12} /> {exp.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f3f4f6', marginBottom: '6px' }}>
                  {exp.role}
                </h3>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#c084fc', marginBottom: '16px' }}>
                  {exp.company}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {exp.description}
                </p>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>
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
