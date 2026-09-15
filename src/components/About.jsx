import React, { useState } from 'react';
import { User, Compass, Heart, Terminal, Play, RotateCcw, ShieldCheck } from 'lucide-react';

const About = ({ data }) => {
  const codePresets = {
    javascript: `// MERN Stack Developer Mindset
const developer = {
  name: "Najiba Takarrum",
  role: "MERN Stack Specialist",
  passion: "To become a Software Engineer",
  hardWorker: true,
  neverGiveUp: true
};

function checkSuccess(dev) {
  if (dev.hardWorker && dev.neverGiveUp) {
    return "Najiba is unstoppable! success in sha Allah! ✨🚀";
  }
  return "Keep learning!";
}

console.log(checkSuccess(developer));`,
    react: `// Simplified React state logger simulation
const [projects, setProjects] = useState(10);
const [experience, setExperience] = useState("6 Months");

console.log(\`Najiba built \${projects}+ MERN applications with \${experience} at Codeonix!\`);`,
    datastructures: `// Filtering blood requests simulation (LifeFlow)
const requests = [
  { area: "Brahmanbaria", group: "A+", urgent: true },
  { area: "Dhaka", group: "O-", urgent: false },
  { area: "Brahmanbaria", group: "B+", urgent: false }
];

const urgentInHometown = requests.filter(
  r => r.area === "Brahmanbaria" && r.urgent
);

console.log("Urgent blood seekers found in Brahmanbaria:", urgentInHometown.length);`
  };

  const [activeTab, setActiveTab] = useState('javascript');
  const [code, setCode] = useState(codePresets.javascript);
  const [consoleOutput, setConsoleOutput] = useState('Click "Run Code" to inspect output logs...');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCode(codePresets[tab]);
  };

  const runCode = () => {
    setConsoleOutput('Executing...');
    let logs = [];
    const customConsole = {
      log: (...args) => {
        logs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg).join(' '));
      },
      error: (...args) => {
        logs.push("[ERROR]: " + args.join(' '));
      }
    };

    try {
      // Safely evaluate simple JS simulations
      const runFn = new Function('console', 'useState', code);
      // Dummy useState mockup to support react snippet without breaking
      const mockUseState = (init) => [init, () => {}];
      
      runFn(customConsole, mockUseState);
      
      if (logs.length === 0) {
        setConsoleOutput('Code executed successfully but returned no logs.\nUse console.log() to print.');
      } else {
        setConsoleOutput(logs.join('\n'));
      }
    } catch (err) {
      setConsoleOutput(`[Execution Error]: ${err.message}`);
    }
  };

  return (
    <section id="about" style={{ padding: 'clamp(60px, 10vw, 100px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '20px', color: '#c084fc', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <User size={14} /> GET TO KNOW ME
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800 }}>
            About <span className="text-gradient">My Journey & Passion</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="about-grid">
          
          {/* Programming Journey Card */}
          <div className="glass-panel" style={{ padding: 'clamp(20px, 5vw, 36px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8', flexShrink: 0 }}>
                <Compass size={22} />
              </div>
              <h3 style={{ fontSize: 'clamp(1.15rem, 4vw, 1.4rem)', fontWeight: 700 }}>My Programming Journey</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: 'clamp(0.92rem, 3vw, 1.02rem)' }}>
              {data.journey}
            </p>
          </div>

          {/* Work Preference Card */}
          <div className="glass-panel" style={{ padding: 'clamp(20px, 5vw, 36px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', flexShrink: 0 }}>
                <Terminal size={22} />
              </div>
              <h3 style={{ fontSize: 'clamp(1.15rem, 4vw, 1.4rem)', fontWeight: 700 }}>Work I Love & Enjoy</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: 'clamp(0.92rem, 3vw, 1.02rem)' }}>
              {data.workPreference}
            </p>
          </div>

        </div>

        {/* Interactive Code Playground (MERN Dev mindset) */}
        <div className="glass-panel" style={{ marginTop: '24px', padding: 'clamp(20px, 5vw, 36px)', border: '1px solid var(--border-accent)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)', flexShrink: 0 }}>
                <Terminal size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: 700, margin: 0 }}>Interactive Code Editor</h3>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>Run real Javascript to inspect my developer logic</p>
              </div>
            </div>

            {/* Presets Selectors */}
            <div className="no-scrollbar" style={{ display: 'flex', gap: '6px', background: 'rgba(125, 125, 125, 0.08)', padding: '4px', borderRadius: '10px', overflowX: 'auto', maxWidth: '100%' }}>
              {[
                { id: 'javascript', label: 'Developer.js' },
                { id: 'react', label: 'StateLogger.jsx' },
                { id: 'datastructures', label: 'LifeFlowQuery.js' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  style={{
                    background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
                    color: activeTab === tab.id ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Editor Sandbox Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="playground-grid">
            
            {/* Input Editor */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(125,125,125,0.05)', padding: '8px 14px', borderRadius: '8px 8px 0 0', borderBottom: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>source_file.js</span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{
                  width: '100%',
                  height: '210px',
                  background: 'rgba(10, 15, 25, 0.95)',
                  color: '#a7f3d0',
                  border: '1px solid var(--border-color)',
                  borderRadius: '0 0 12px 12px',
                  padding: '14px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  lineHeight: 1.5,
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            {/* Run Panel Console */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '14px', background: 'rgba(125, 125, 125, 0.03)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '16px' }}>
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Console Output
                </h4>
                <pre
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#38bdf8',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    minHeight: '100px',
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.5
                  }}
                >
                  {consoleOutput}
                </pre>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={runCode}
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.85rem', gap: '6px', flex: '1 1 auto', justifyContent: 'center' }}
                >
                  <Play size={14} /> Run Code
                </button>
                <button
                  onClick={() => setCode(codePresets[activeTab])}
                  className="btn-secondary"
                  style={{ padding: '8px 18px', fontSize: '0.85rem', gap: '6px', flex: '1 1 auto', justifyContent: 'center' }}
                >
                  <RotateCcw size={14} /> Reset
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Hobbies & Interests Section */}
        <div className="glass-panel" style={{ marginTop: '24px', padding: 'clamp(20px, 5vw, 36px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f472b6', flexShrink: 0 }}>
              <Heart size={22} />
            </div>
            <h3 style={{ fontSize: 'clamp(1.15rem, 4vw, 1.4rem)', fontWeight: 700 }}>Beyond the Code (Hobbies & Interests)</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '12px' }}>
            {data.hobbies.map((hobby, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
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
                <span style={{ color: '#818cf8', fontSize: '1.1rem' }}>✦</span>
                {hobby}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
          .playground-grid { grid-template-columns: 1.2fr 0.8fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
