import React, { useState } from 'react';
import { Cpu, Code2, Server, Terminal, Layers, FileCode, Layout, Palette, Database, ShieldCheck, GitBranch, Send, Globe } from 'lucide-react';

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
    <section id="skills" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '20px', color: '#818cf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <Cpu size={14} /> TECHNICAL EXPERTISE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
            Skills & <span className="text-gradient">Proficiencies</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
          {tabList.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? 'white' : 'var(--text-muted)',
                  border: isActive ? 'none' : '1px solid var(--border-color)',
                  padding: '10px 22px',
                  borderRadius: '30px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 20px rgba(99, 102, 241, 0.3)' : 'none'
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {filteredCategories.map((cat, catIdx) => (
            <div key={catIdx} className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: '#f3f4f6', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                {cat.category}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {cat.items.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)', fontWeight: 600 }}>
                        <span style={{ color: '#818cf8' }}>{iconMap[skill.icon] || <Code2 size={18} />}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#c084fc', fontFamily: 'var(--font-mono)' }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill Graphical Progress Bar */}
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #38bdf8 100%)',
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
