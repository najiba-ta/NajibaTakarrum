import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Trash2, X } from 'lucide-react';

const DevTerminal = ({ personalData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: 'Najiba.Dev interactive terminal initialized.', type: 'system' },
    { text: 'Type "help" to inspect list of dynamic commands.', type: 'system' }
  ]);
  const consoleEndRef = useRef(null);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    // Append user input to terminal logs
    setHistory(prev => [...prev, { text: `najiba-user@portfolio:~$ ${inputVal}`, type: 'user' }]);
    setInputVal('');

    // Parse commands
    setTimeout(() => {
      let replyText = '';
      switch (cmd) {
        case 'help':
          replyText = `Supported CLI Commands:\n  - bio             Prints Najiba's background bio info\n  - skills          Lists full MERN technical expertise stack\n  - contact         Shows direct WhatsApp, GitHub and socials\n  - download-resume Automatically triggers resume download\n  - clear           Purges terminal logs history\n  - exit            Closes interactive developer terminal console`;
          break;
        case 'bio':
          replyText = `Najiba Takarrum:\n - Goal: Top-tier Software Engineer (স্বপ্নে অটল!)\n - Home: Kandipara, Brahmanbaria, Bangladesh\n - Journey: Fall in love with full-stack through Programming Hero\n - Experience: Jan 2026 - Present (Self-Employed) & Codeonix (6 Months)`;
          break;
        case 'skills':
          replyText = `Frontend:\n - React.js, Next.js, JS (ES6+), TS, HTML5, CSS3, Tailwind CSS\nBackend & Tools:\n - Node.js, Express.js, MongoDB, Firebase Auth, Git/GitHub, Vercel`;
          break;
        case 'contact':
          replyText = `Direct Channels:\n - WhatsApp: +8801997182130\n - Email: shahidnajiba@gmail.com\n - GitHub: github.com/najiba-ta\n - LinkedIn: linkedin.com/in/najiba-webdev`;
          break;
        case 'download-resume':
          replyText = `Executing print action... Triggering Najiba's PDF download resume.`;
          window.open('/resume.html?print=true', '_blank');
          break;
        case 'clear':
          setHistory([]);
          return;
        case 'exit':
          setIsOpen(false);
          return;
        default:
          replyText = `Command "${cmd}" not recognized. Type "help" to see valid commands.`;
          break;
      }
      setHistory(prev => [...prev, { text: replyText, type: 'bot' }]);
    }, 150);
  };

  return (
    <>
      {/* Floating CLI Terminal Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle developer terminal console"
        style={{
          position: 'fixed',
          bottom: 'clamp(16px, 4vw, 24px)',
          left: 'clamp(16px, 4vw, 24px)',
          width: 'clamp(48px, 11vw, 56px)',
          height: 'clamp(48px, 11vw, 56px)',
          borderRadius: '14px',
          background: 'rgba(11, 15, 25, 0.9)',
          backdropFilter: 'blur(10px)',
          color: '#10b981',
          border: '1.5px solid var(--border-accent)',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-glow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1400,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) translateY(0)')}
      >
        <Terminal size={22} />
      </button>

      {/* Terminal Modal Window console */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 'clamp(76px, 16vw, 92px)',
            left: 'clamp(12px, 3vw, 24px)',
            width: 'min(480px, calc(100vw - 24px))',
            height: 'min(350px, calc(100vh - 120px))',
            borderRadius: '16px',
            background: '#070a13',
            border: '1.5px solid var(--border-accent)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), var(--shadow-glow)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1400,
            overflow: 'hidden',
            fontFamily: 'var(--font-mono)'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '10px 16px',
              background: 'rgba(125, 125, 125, 0.05)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={14} color="#10b981" />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>najiba@portfolio: ~</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setHistory([])}
                aria-label="clear logs"
                style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <Trash2 size={14} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="close terminal"
                style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Console logs body */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontSize: '0.82rem',
              lineHeight: 1.5,
              color: '#34d399'
            }}
          >
            {history.map((log, idx) => (
              <div
                key={idx}
                style={{
                  color: log.type === 'user' ? '#38bdf8' : log.type === 'system' ? '#9ca3af' : '#34d399',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {log.text}
              </div>
            ))}
            <div ref={consoleEndRef} />
          </div>

          {/* Prompt line input */}
          <form
            onSubmit={handleCommandSubmit}
            style={{
              padding: '12px 16px',
              borderTop: '1px solid var(--border-color)',
              background: 'rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span style={{ color: '#818cf8', fontSize: '0.85rem' }}>$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type help..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{ background: 'transparent', border: 'none', color: '#10b981', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <Send size={14} />
            </button>
          </form>

        </div>
      )}
    </>
  );
};

export default DevTerminal;
