import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectDetail = ({ project, onBack }) => {
  useEffect(() => {
    // Scroll to top of window on component load
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  return (
    <div style={{ padding: 'clamp(85px, 14vw, 120px) 0 60px 0', minHeight: '100vh', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="btn-secondary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
            fontSize: '0.88rem',
            padding: '8px 16px',
            borderRadius: '12px'
          }}
        >
          <ArrowLeft size={16} /> Back to Projects
        </button>

        {/* Detail Container Card */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(18px, 4vw, 48px)',
            borderRadius: '20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-accent)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          {/* Cover Image */}
          <div style={{ width: '100%', borderRadius: '14px', overflow: 'hidden', maxHeight: '380px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Heading */}
          <div>
            <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
              {project.title}
            </h1>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: 'clamp(0.92rem, 3vw, 1.05rem)' }}>
              {project.detailedDescription}
            </p>
          </div>

          {/* Call to Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }} className="project-detail-actions">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary project-action-btn"
              style={{ fontSize: '0.9rem', padding: '12px 20px' }}
            >
              <ExternalLink size={16} /> Live Project Demo
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary project-action-btn"
              style={{ fontSize: '0.9rem', padding: '12px 20px' }}
            >
              <GithubIcon size={16} /> Client GitHub Repository
            </a>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-light)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={18} /> Technology Stack Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.stack.map((tech, idx) => (
                <span key={idx} style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--text-main)',
                  padding: '5px 12px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Grid of Challenges & Improvements */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            {/* Key Challenges */}
            <div style={{ background: 'rgba(239, 68, 68, 0.04)', border: '1px solid rgba(239, 68, 68, 0.15)', padding: '18px 20px', borderRadius: '14px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f87171', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} /> Technical Challenges Faced & Solved
              </h4>
              <ul style={{ paddingLeft: '18px', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                {project.challenges.map((c, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Improvements */}
            <div style={{ background: 'rgba(168, 85, 247, 0.04)', border: '1px solid rgba(168, 85, 247, 0.15)', padding: '18px 20px', borderRadius: '14px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#c084fc', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lightbulb size={18} /> Potential Future Enhancements
              </h4>
              <ul style={{ paddingLeft: '18px', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                {project.futurePlans.map((p, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 576px) {
          .project-action-btn { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
