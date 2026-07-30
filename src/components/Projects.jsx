import React, { useState } from 'react';
import { ExternalLink, ArrowRight, X, CheckCircle2, AlertTriangle, Lightbulb, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '20px', color: '#818cf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <Code2 size={14} /> PORTFOLIO SHOWCASE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '1rem' }}>
            Click on any project to inspect technical details, challenges, stack & repositories.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Project Preview Image */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
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
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {project.shortDescription}
                  </p>

                  {/* Stack Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#818cf8',
                        background: 'rgba(99, 102, 241, 0.1)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', padding: '3px 6px' }}>
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem' }}
                >
                  View Details & Stack <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(5, 8, 15, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '24px',
              background: '#0d1322',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              position: 'relative',
              padding: '32px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', borderRadius: '16px', maxHeight: '360px', objectFit: 'cover' }}
              />

              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f3f4f6', marginBottom: '8px' }}>
                  {selectedProject.title}
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem' }}>
                  {selectedProject.detailedDescription}
                </p>
              </div>

              {/* Links Action Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.9rem' }}
                >
                  <ExternalLink size={18} /> Live Project Demo
                </a>

                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.9rem' }}
                >
                  <GithubIcon size={18} /> Client GitHub Repository
                </a>
              </div>

              {/* Main Tech Stack */}
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#818cf8', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} /> Main Technology Stack Used
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProject.stack.map((tech, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      color: 'white',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges Faced */}
              <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '20px', borderRadius: '14px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f87171', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertTriangle size={18} /> Key Technical Challenges Faced
                </h4>
                <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {selectedProject.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Future Improvements */}
              <div style={{ background: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.2)', padding: '20px', borderRadius: '14px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#c084fc', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Lightbulb size={18} /> Potential Improvements & Future Plans
                </h4>
                <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {selectedProject.futurePlans.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
