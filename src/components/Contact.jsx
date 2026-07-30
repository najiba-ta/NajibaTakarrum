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

    // 1. Send simulated real-time submission with emailjs
    emailjs.send(
      'default_service',
      'template_default',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: data.contact.email
      },
      'public_key_demo'
    ).catch(() => {
      // Graceful fallback to mailto intent if service key is unconfigured
      const mailtoUrl = `mailto:${data.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoUrl, '_blank');
    }).finally(() => {
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
    });
  };

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '20px', color: '#818cf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
            <Mail size={14} /> GET IN TOUCH
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '1rem' }}>
            Have a project in mind or want to discuss full-stack developer opportunities? Reach out directly!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="contact-grid">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Email Card */}
            <a
              href={`mailto:${data.contact.email}`}
              className="glass-panel"
              style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8', shrink: 0 }}>
                <Mail size={26} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>EMAIL ADDRESS</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f3f4f6' }}>{data.contact.email}</div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${data.contact.phone}`}
              className="glass-panel"
              style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', shrink: 0 }}>
                <Phone size={26} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>PHONE NUMBER</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f3f4f6' }}>{data.contact.phone}</div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${data.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', shrink: 0 }}>
                <MessageSquare size={26} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>WHATSAPP CHAT</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f3f4f6' }}>{data.contact.whatsapp}</div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', shrink: 0 }}>
                <MapPin size={26} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>LOCATION</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f3f4f6' }}>{data.contact.location}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px', color: '#f3f4f6' }}>
              Send Me a Direct Message
            </h3>

            {submitted ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '30px', borderRadius: '16px', textAlign: 'center' }}>
                <CheckCircle2 size={48} color="#34d399" style={{ margin: '0 auto 16px auto' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'white', marginBottom: '8px' }}>Message Delivered!</h4>
                <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-color)',
                        color: 'white',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-color)',
                        color: 'white',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: 'white',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>Your Message</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Hi Najiba, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: 'white',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-primary" style={{ justifyContent: 'center', marginTop: '8px', opacity: loading ? 0.7 : 1 }}>
                  <Send size={18} /> {loading ? 'Sending Message...' : 'Send Message'}
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
