import React, { useState } from 'react';
import { Cpu, Code2, Server, Terminal, Layers, FileCode, Layout, Palette, Database, ShieldCheck, GitBranch, Send, Globe, CloudCog } from 'lucide-react';

const iconMap = {
  Code2: <Code2 size={20} />,
  FileCode: <FileCode size={20} />,
  Layout: <Layout size={20} />,
  Palette: <Palette size={20} />,
  Layers: <Layers size={20} />,
  Server: <Server size={20} />,
  Cpu: <Cpu size={20} />,
  Database: <Database size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  GitBranch: <GitBranch size={20} />,
  Terminal: <Terminal size={20} />,
  Send: <Send size={20} />,
  Globe: <Globe size={20} />
};

const Skills = ({ categories }) => {
  const [activeTab, setActiveTab] = useState('All');

  const tabList = ['All', ...categories.map(c => c.category)];

  const filteredCategories = activeTab === 'All'
    ? categories
    : categories.filter(c => c.category === activeTab);

  return (
    <section id="skills" style={{ padding: 'clamp(60px, 10vw, 100px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid var(--border-accent)', borderRadius: '20px', color: 'var(--accent-indigo)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <Cpu size={14} /> TECHNICAL EXPERTISE
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text-main)' }}>
            Skills & <span className="text-gradient">Proficiencies</span>
          </h2>
        </div>

        {/* Category Tabs (Scrollable on mobile) */}
        <div
          className="no-scrollbar"
          style={{
            display: 'flex',
            justify: 'flex-start',
            gap: '8px',
            marginBottom: '32px',
            overflowX: 'auto',
            paddingBottom: '6px',
            maxWidth: '100%'
          }}
        >
          {tabList.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  border: isActive ? 'none' : '1px solid var(--border-color)',
                  padding: '8px 18px',
                  borderRadius: '30px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? 'var(--shadow-glow)' : 'none'
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '24px' }}>
          {filteredCategories.map((cat, catIdx) => (
            <div key={catIdx} className="glass-panel" style={{ padding: 'clamp(20px, 5vw, 32px)' }}>
              <h3 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.25rem)', fontWeight: 700, marginBottom: '20px', color: 'var(--text-main)', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                {cat.category}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cat.items.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontWeight: 600, fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--primary-light)', display: 'flex', alignItems: 'center' }}>{iconMap[skill.icon] || <Code2 size={16} />}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-light)', fontFamily: 'var(--font-mono)' }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill Graphical Progress Bar */}
                    <div style={{ width: '100%', height: '7px', background: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
                          borderRadius: '4px',
                          transition: 'width 1s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
