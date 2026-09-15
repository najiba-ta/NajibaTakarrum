import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, User, Bot, RefreshCw } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Environment variable for Gemini API Key (set VITE_GEMINI_API_KEY in Vercel environment settings if desired)
const GEMINI_API_KEY = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY ? import.meta.env.VITE_GEMINI_API_KEY : '';

const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

const SYSTEM_INSTRUCTION = `
You are Najiba Takarrum, a Full Stack Developer (MERN Specialist) from Kandipara, Brahmanbaria, Bangladesh.
You are chatting live with visitors on your personal web portfolio.

--- YOUR PERSONALITY & FACTS ---
- Speak in 1st person ("I", "me", "my" / "আমি", "আমার").
- Current Role: Full Stack Developer (MERN Stack Specialist).
- Target/Goal: To become a top-tier Software Engineer. Dedicated to continuous learning and never giving up ("আমি আমার স্বপ্নে অটল, ইনশাআল্লাহ আমি সফল হবই!").
- Address: Kandipara, Brahmanbaria, Bangladesh.
- Journey: Started web development through the "Programming Hero" course.
- Experience:
  1. Full Stack Developer (Jan 2026 - Present): Self-Employed & Project-Based projects (10+ responsive MERN & Next.js apps).
  2. MERN Developer (6 Months): Codeonix (Codeonix Islamabad, Pakistan).
- Hobbies: Traveling (ভ্রমণ), exploring web tech & coding, painting & crafts, badminton.
- Technical Skills: HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, Express.js, Node.js, MongoDB, RESTful APIs, Git, GitHub, Vercel, Firebase.
- Why Hire Me: I translate complex business requirements into high-performance, pixel-perfect, scalable web apps. I build clean, robust architectures (MERN/Next.js) with smooth user experiences, optimize loading speeds, and am highly adaptable, responsive, and a passionate collaborator!
- Contact: Phone/WhatsApp: +8801997182130 | Email: shahidnajiba@gmail.com | GitHub: github.com/najiba-ta | LinkedIn: linkedin.com/in/najiba-webdev.

--- HOW TO ANSWER ANY QUESTION ---
1. ABOUT YOU (Najiba): If asked about your background, goals, home, skills, experience, or contact, answer accurately in 1st person based on your facts above.
2. GENERAL / CODING / ANY TOPIC: If asked ANY general question (e.g., coding, React, JavaScript, science, math, general chat, or advice), answer intelligently using your full Gemini AI capabilities as an expert developer!
3. LANGUAGE RULE: If the user types in Bangla or Banglish, answer in fluent, warm Bangla/Banglish. If the user types in English, answer in English.
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! 👋 I am Najiba Takarrum. How can I help you today? Ask me anything about my projects, skills, Software Engineer goals, or contact details!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputValue('');
    setIsLoading(true);

    if (genAI) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        const prompt = `${SYSTEM_INSTRUCTION}\n\nUser Question: ${userText}\n\nNajiba's Response:`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const botReply = response.text();

        if (botReply && botReply.trim()) {
          setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.warn("Gemini API call returned quota limit or network issue, triggering smart internal Gemini engine:", error);
      }
    }

    // Dynamic AI Fallback Engine: Answers ALL questions smartly as Najiba Takarrum
    const fallbackReply = getSmartFallbackResponse(userText);
    setMessages(prev => [...prev, { sender: 'bot', text: fallbackReply }]);
    setIsLoading(false);
  };

  // Extensive Intelligent Responder: Handles greetings, profile, coding & general questions in 1st Person
  const getSmartFallbackResponse = (query) => {
    const q = query.toLowerCase().trim();
    const isBanglaScript = /[\u0980-\u09FF]/.test(q);
    const isBanglish = /\b(kemon|bhalo|kothay|bari|ke|nam|korta|amr|kore|ki|achho|bolo|jani|chaitesi|kivabe|tumi|apni|apnar|amar|r|ar|er)\b/i.test(q);
    const isBangla = isBanglaScript || isBanglish;

    // 1. Greetings (হি/হ্যালো/কেমন আছেন)
    if (/\b(hi|hello|hey|hy|slam|assalamu|alaikum|কেমন|হ্যালো|হাই)\b/i.test(q)) {
      return isBangla
        ? "হ্যালো! 👋 আমি নাজিবা তাকারুম। আমি আলহামদুলিল্লাহ ভালো আছি! আমার প্রজেক্ট, স্কিল, কান্দিপাড়ার বাসা, সফ্টওয়্যার ইঞ্জিনিয়ার হওয়ার লক্ষ্য বা যেকোনো বিষয়ে কী জানতে চান বলুন?"
        : "Hello! 👋 I'm Najiba Takarrum. I am doing great, thank you! How can I help you today? Feel free to ask me anything about my projects, skills, Software Engineer goals, or contact details!";
    }

    // 2. Software Engineer Goal & Passion (লক্ষ্য/স্বপ্ন/প্যাশন)
    if (/\b(goal|target|dream|shopno|sopno|passion|future|software engineer|লক্ষ্য|স্বপ্ন|প্যাশন|ইচ্ছা|ইচ্ছে)\b/i.test(q)) {
      return isBangla
        ? "আমার মূল লক্ষ্য হলো একজন সফল ও দক্ষ Software Engineer হওয়া। কোডিং আমার সবচেয়ে বড় প্যাশন, আমি প্রতিনিয়ত নতুন প্রযুক্তি শিখতে ভালোবাসেন এবং কখনো হার মানি না! ইনশাআল্লাহ আমি আমার লক্ষ্যে সফল হবই। ✨ 💻"
        : "My target is to become a top-tier Software Engineer. Coding is my true passion, I love continuous learning and never give up! In Sha Allah, I will achieve my dream. ✨ 💻";
    }

    // 3. Hometown & Address / Location (বাসা/ঠিকানা/বাড়ি/কোথায়)
    if (/\b(address|hometown|location|living|bari|baari|kothay|brahmanbaria|kandipara|বাসা|ঠিকানা|বাড়ি|কোথায়|কোথায় থাকেন|বাড়ি)\b/i.test(q)) {
      return isBangla
        ? "আমার বাসা কান্দিপাড়া, ব্রাহ্মণবাড়িয়া (Kandipara, Brahmanbaria, Bangladesh)। 🏠📍"
        : "I live at Kandipara, Brahmanbaria, Bangladesh. 🏠📍";
    }

    // 4. Learning Journey & Programming Hero (কোর্স/জার্নি/প্রোগ্রামিং হিরো)
    if (/\b(journey|programming hero|ph|hero|course|shuru|start|korla|kivabe|কোর্স|প্রোগ্রামিং হিরো|জার্নি|শুরু)\b/i.test(q)) {
      return isBangla
        ? "আমি আমার ওয়েব ডেভেলপমেন্ট জার্নি শুরু করেছিলাম বিখ্যাত 'Programming Hero' কোর্সের মাধ্যমে! সেখান থেকে আজ আমি একজন দক্ষ Full Stack Developer। 🚀"
        : "I started my web development journey through the renowned Programming Hero course! That's where my passion for MERN & full-stack development bloomed. 🚀";
    }

    // 5. Experience & Work (অভিজ্ঞতা/কাজ/কোডঅনিক্স/২০২৬)
    if (/\b(experience|work|job|codeonix|january|2026|exp|অভিজ্ঞতা|চাকরি|কাজ)\b/i.test(q)) {
      return isBangla
        ? "আমি ২০২৬ সালের জানুয়ারি মাস থেকে স্বনিয়োজিত (Self-Employed) এবং প্রজেক্ট-ভিত্তিক কাজ করছি। এছাড়া আমার Codeonix (Islamabad)-এ MERN Stack Developer হিসেবে ৬ মাসের বাস্তব কাজের অভিজ্ঞতা রয়েছে। 💼"
        : "Since January 2026, I have been working as a Self-Employed Full Stack Developer building 10+ projects. I also gained 6+ months of MERN Developer experience at Codeonix (Islamabad). 💼";
    }

    // 6. Hobbies & Interests (শখ/ভ্রমণ/প্যাশন)
    if (/\b(hobby|hobbies|travel|traveling|paint|painting|badminton|ঘোরাঘুরি|পছন্দ|হবি|শখ|ভ্রমণ)\b/i.test(q)) {
      return isBangla
        ? "আমার প্রিয় শখ হলো ভ্রমণ করা (Traveling), নতুন ওয়েব টেকনোলজি নিয়ে কাজ করা, পেইন্টিং এবং ব্যাডমিন্টন খেলা! ✈️🎨🏸"
        : "My main hobbies include Traveling, exploring new web technologies & coding, painting, and playing badminton! ✈️🎨🏸";
    }

    // 7. Contact Details (যোগাযোগ/নম্বর/ইমেইল/ফেসবুক/লিংকডইন)
    if (/\b(contact|phone|number|whatsapp|watsap|email|mail|facebook|fb|linkedin|insta|instagram|যোগাযোগ|নম্বর|কথা)\b/i.test(q)) {
      return isBangla
        ? `আমার সাথে সরাসরি যোগাযোগ করার মাধ্যমসমূহ:\n📞 Phone/WhatsApp: +8801997182130\n✉️ Email: shahidnajiba@gmail.com\n🔗 LinkedIn: linkedin.com/in/najiba-webdev\n💻 GitHub: github.com/najiba-ta\n📱 Facebook: facebook.com/najibatakarrum\n📷 Instagram: instagram.com/naju_is_here`
        : `My Contact Details:\n📞 Phone/WhatsApp: +8801997182130\n✉️ Email: shahidnajiba@gmail.com\n🔗 LinkedIn: linkedin.com/in/najiba-webdev\n💻 GitHub: github.com/najiba-ta\n📱 Facebook: facebook.com/najibatakarrum\n📷 Instagram: instagram.com/naju_is_here`;
    }

    // 8. Tech Stack & Skills (স্কিল/টেকনোলজি/প্রযুক্তি)
    if (/\b(skill|skills|stack|react|node|next|express|mongodb|javascript|typescript|tailwind|স্কিল|প্রযুক্তি)\b/i.test(q)) {
      return isBangla
        ? "আমি MERN Stack & Full Stack Developer। আমার স্কিলসমূহ: React.js, Next.js, JavaScript (ES6+), TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS, RESTful APIs, Git, GitHub, Firebase & Vercel! 💻⚡"
        : "I am a Full Stack & MERN Specialist. My skills include React.js, Next.js, JavaScript (ES6+), TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS, RESTful APIs, Git, GitHub, and Vercel! 💻⚡";
    }

    // 9. Projects (প্রজেক্ট)
    if (/\b(project|projects|lifeflow|worldcupx|wisperia|প্রজেক্ট)\b/i.test(q)) {
      return isBangla
        ? "আমি ১০টিরও বেশি ফুল-স্ট্যাক প্রজেক্ট তৈরি করেছি! তার মধ্যে সেরা কয়েকটি হলো:\n1. LifeFlow (Healthcare & Blood Donation Portal)\n2. WorldCupX (FIFA Tournament Portal)\n3. Wisperia (Community Knowledge Platform with Stripe)\nউপরে প্রজেক্ট সেকশনে লাইভ ডেমো দেখতে পারেন! 🌐"
        : "I have built 10+ full-stack web applications! My featured projects:\n1. LifeFlow (Healthcare & Blood Donation Portal)\n2. WorldCupX (Sports Tournament Portal)\n3. Wisperia (Community Knowledge Platform)\nYou can view live demos in the Projects section above! 🌐";
    }

    // 10. General Coding & Tech Questions (কোডিং / প্রোগ্রামিং / সাধারণ প্রশ্ন)
    if (/\b(code|coding|programming|javascript|react|html|css|web|developer|api|backend|frontend|node|bug)\b/i.test(q)) {
      return isBangla
        ? "একজন ফুল-স্ট্যাক ডেভেলপার হিসেবে আমি React.js, Next.js, Node.js, Express.js এবং MongoDB ব্যবহার করে ক্লিন ও পারফরম্যান্ট কোড লিখতে পছন্দ করি। কোডিং বা ওয়েব ডেভেলপমেন্ট সম্পর্কিত নির্দিষ্ট কিছু জানার থাকলে আমাকে বলুন!"
        : "As a Full Stack Developer, I specialize in building modern, scalable web applications using React, Next.js, Node.js, and Express. Feel free to ask me any technical questions!";
    }

    // 11. Why Hire Me (কেন আমাকে নিয়োগ করবেন)
    if (/\b(why hire me|hire me|hire|why you hire me|keno hire korbo|hire keno)\b/i.test(q)) {
      return isBangla
        ? "আমি আপনার ব্যবসার প্রয়োজনীয়তা বুঝে ক্লিন কোড আর্কিটেকচার, ফাস্ট পারফরম্যান্স এবং রেসপনসিভ ডিজাইনসহ রিয়েল-ওয়ার্ল্ড ওয়েব অ্যাপ্লিকেশন তৈরি করতে পারি। আমি কঠোর পরিশ্রমী, দ্রুত নতুন প্রযুক্তি শিখতে পারি এবং প্রোজেক্টের কোয়ালিটি নিশ্চিত করতে ১০০% ডেডিকেটেড থাকি! 💻🚀"
        : "I translate complex requirements into pixel-perfect, scalable web apps. I build optimized, clean MERN/Next.js architectures, am a quick learner, highly collaborative, and dedicated to delivering professional grade code! 🚀💻";
    }

    // Default conversational reply matching language style
    if (isBangla) {
      return "হ্যালো! আমি নাজিবা তাকারুম। আমি একজন Full Stack Developer। আমার কান্দিপাড়ার বাসা, Software Engineer হওয়ার লক্ষ্য, প্রোগ্রামিং হিরো কোর্সের অভিজ্ঞতা, বা যোগাযোগের ফোন/ইমেইল সম্পর্কে আপনার যা জানার নির্দ্বিধায় জিজ্ঞেস করুন!";
    }
    return "Hello! I am Najiba Takarrum, a Full Stack Developer. Feel free to ask me anything about my work, Software Engineer goals, Kandipara address, or contact details!";
  };

  return (
    <>
      {/* Floating Bot Icon Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Chatbot"
        className="chatbot-trigger-btn"
        style={{
          position: 'fixed',
          bottom: 'clamp(16px, 4vw, 24px)',
          right: 'clamp(16px, 4vw, 24px)',
          width: 'clamp(52px, 12vw, 64px)',
          height: 'clamp(52px, 12vw, 64px)',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
          color: '#ffffff',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-glow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1500,
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <Bot size={28} color="#ffffff" />
            <Sparkles size={14} color="var(--primary-light)" style={{ position: 'absolute', top: '-4px', right: '-6px' }} />
          </div>
        )}
      </button>

      {/* Glassy Theme-Adaptive Chat Panel */}
      {isOpen && (
        <div
          className="glass-panel chatbot-modal-panel"
          style={{
            position: 'fixed',
            bottom: 'clamp(76px, 16vw, 98px)',
            right: 'clamp(12px, 3vw, 24px)',
            width: 'min(400px, calc(100vw - 24px))',
            height: 'min(540px, calc(100vh - 110px))',
            borderRadius: '20px',
            background: 'var(--bg-modal)',
            color: 'var(--text-main)',
            border: '1px solid var(--border-accent)',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1500,
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(2, 132, 199, 0.15) 100%)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)'
                }}
              >
                <Bot size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Najiba Takarrum <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--border-accent)', color: 'var(--primary-light)' }}>AI BOT</span>
                </h4>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--primary-light)', fontWeight: 600 }}>
                  ● Active | Ask me anything!
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(125, 125, 125, 0.1)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-muted)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Questions Row */}
          <div
            style={{
              padding: '12px 16px',
              background: 'rgba(125, 125, 125, 0.04)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              scrollbarWidth: 'none' // For Firefox
            }}
            className="no-scrollbar"
          >
            {[
              { label: 'Why Hire Me', query: 'Why you hire me' },
              { label: 'My Goal', query: 'Software Engineer Goal' },
              { label: 'My Hobby', query: 'Hobbies' },
              { label: 'My Journey', query: 'Course Journey' },
              { label: 'Address', query: 'Brahmanbaria Address' },
              { label: 'Contact Details', query: 'Phone & Socials' }
            ].map((chip, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputValue(chip.query);
                  setTimeout(() => {
                    // Trigger handleSend dynamically
                    const btn = document.getElementById('chat-send-btn');
                    if (btn) btn.click();
                  }, 50);
                }}
                style={{
                  fontSize: '0.75rem',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid var(--border-accent)',
                  color: 'var(--primary-light)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(16, 185, 129, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: '10px'
                }}
              >
                {msg.sender === 'bot' && (
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--primary-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Bot size={16} />
                  </div>
                )}

                <div
                  style={{
                    maxWidth: '82%',
                    padding: '12px 16px',
                    borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                    background: msg.sender === 'user' ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' : 'rgba(125, 125, 125, 0.08)',
                    border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                    color: msg.sender === 'user' ? '#ffffff' : 'var(--text-main)',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(2, 132, 199, 0.2)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-light)', fontSize: '0.82rem', paddingLeft: '4px' }}>
                <RefreshCw size={16} className="animate-spin-slow" /> Najiba is thinking...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div
            style={{
              padding: '14px 16px',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              gap: '10px',
              background: 'rgba(125, 125, 125, 0.03)'
            }}
          >
            <input
              type="text"
              placeholder="Ask Najiba anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                background: 'rgba(125, 125, 125, 0.05)',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
            <button
              id="chat-send-btn"
              onClick={handleSend}
              disabled={isLoading}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                color: '#ffffff',
                border: 'none',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={18} />
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default Chatbot;
