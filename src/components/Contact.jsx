import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Build the mailto URL with form details
    const subjectLine = `${formData.subject || 'Portfolio Direct Message'} - From ${formData.name}`;
    const bodyContent = `Hello Najiba,\n\nYou have received a new message from your portfolio website:\n\nSender Name: ${formData.name}\nSender Email: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form.`;
    
    const mailtoUrl = `mailto:${data.contact.email || 'shahidnajiba@gmail.com'}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    
    // Redirect browser to send prefilled email
    window.location.href = mailtoUrl;

    setLoading(false);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: 'clamp(60px, 10vw, 100px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '20px', color: 'var(--accent-indigo)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <Mail size={14} /> GET IN TOUCH
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800 }}>
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: 'clamp(0.88rem, 3vw, 1rem)' }}>
            Have a project in mind or want to discuss full-stack developer opportunities? Reach out directly!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="contact-grid">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Email Card */}
            <a
              href={`mailto:${data.contact.email}`}
              className="glass-panel"
              style={{ padding: 'clamp(16px, 4vw, 24px)', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-indigo)', flexShrink: 0 }}>
                <Mail size={22} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600 }}>EMAIL ADDRESS</div>
                <div style={{ fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)', fontWeight: 700, color: 'var(--text-main)', wordBreak: 'break-all', overflowWrap: 'anywhere' }}>{data.contact.email}</div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${data.contact.phone}`}
              className="glass-panel"
              style={{ padding: 'clamp(16px, 4vw, 24px)', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', flexShrink: 0 }}>
                <Phone size={22} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600 }}>PHONE NUMBER</div>
                <div style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', fontWeight: 700, color: 'var(--text-main)' }}>{data.contact.phone}</div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${data.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{ padding: 'clamp(16px, 4vw, 24px)', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)', flexShrink: 0 }}>
                <MessageSquare size={22} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600 }}>WHATSAPP CHAT</div>
                <div style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', fontWeight: 700, color: 'var(--text-main)' }}>{data.contact.whatsapp}</div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-panel" style={{ padding: 'clamp(16px, 4vw, 24px)', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)', flexShrink: 0 }}>
                <MapPin size={22} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600 }}>LOCATION</div>
                <div style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', fontWeight: 700, color: 'var(--text-main)' }}>{data.contact.location}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="glass-panel" style={{ padding: 'clamp(20px, 5vw, 36px)' }}>
            <h3 style={{ fontSize: 'clamp(1.15rem, 4vw, 1.4rem)', fontWeight: 700, marginBottom: '20px', color: 'var(--text-main)' }}>
              Send Me a Direct Message
            </h3>

            {submitted ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '24px', borderRadius: '14px', textAlign: 'center' }}>
                <CheckCircle2 size={42} color="#34d399" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>Message Delivered!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: 'rgba(125, 125, 125, 0.05)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-main)',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: 'rgba(125, 125, 125, 0.05)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-main)',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'rgba(125, 125, 125, 0.05)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>Your Message</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Hi Najiba, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'rgba(125, 125, 125, 0.05)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      fontSize: '16px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-primary" style={{ justifyContent: 'center', marginTop: '4px', padding: '12px 24px', opacity: loading ? 0.7 : 1, fontSize: '0.95rem' }}>
                  <Send size={16} /> {loading ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid { grid-template-columns: 0.9fr 1.1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
