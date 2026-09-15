import React, { useState } from 'react';
import { ExternalLink, ArrowRight, X, CheckCircle2, AlertTriangle, Lightbulb, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const Projects = ({ projects, onViewProject }) => {
  return (
    <section id="projects" style={{ padding: 'clamp(60px, 10vw, 100px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid var(--border-accent)', borderRadius: '20px', color: 'var(--accent-indigo)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <Code2 size={14} /> PORTFOLIO SHOWCASE
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text-main)' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: 'clamp(0.88rem, 3vw, 1rem)' }}>
            Click on any project to inspect technical details, challenges, stack & repositories.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Project Preview Image */}
              <div style={{ position: 'relative', height: 'clamp(180px, 25vw, 220px)', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(9, 13, 22, 0.9) 100%)'
                }} />
              </div>

              {/* Project Content */}
              <div style={{ padding: 'clamp(18px, 4vw, 28px)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: 'clamp(1.15rem, 4vw, 1.35rem)', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.88rem, 3vw, 0.95rem)', lineHeight: 1.6, marginBottom: '18px' }}>
                    {project.shortDescription}
                  </p>

                  {/* Stack Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'var(--accent-indigo)',
                        background: 'rgba(99, 102, 241, 0.12)',
                        border: '1px solid var(--border-accent)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', padding: '3px 6px' }}>
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onViewProject(project)}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '10px 16px' }}
                >
                  View Details & Stack <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
