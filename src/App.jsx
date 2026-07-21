import React, { useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import { 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Code2, 
  Terminal, 
  Rocket, 
  Briefcase, 
  Brain, 
  Globe, 
  CheckCircle2, 
  Flame, 
  Zap,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('noumansajid623@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "3D Interactive Portfolio",
      desc: "Ultra-smooth 3D Web experience crafted with Three.js, React, and GSAP animations.",
      url: "https://nouman-sajid-portfolio.vercel.app/",
      badge: "3D Experience",
      color: "var(--cyan-glow)",
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      tags: ["Three.js", "React", "GSAP", "3D Canvas"]
    },
    {
      title: "ThinkSpace Dev",
      desc: "Next-generation platform for developers, AI integrations, & tech innovations.",
      url: "https://think-space.dev",
      badge: "Featured Platform",
      color: "var(--pink-glow)",
      icon: <Rocket className="w-6 h-6 text-pink-500" />,
      tags: ["Web Dev", "AI/ML", "Automation", "Platform"]
    },
    {
      title: "PakJobPortal",
      desc: "Comprehensive job portal ecosystem connecting tech talent with top opportunities.",
      url: "https://pakjobportal.vercel.app/",
      badge: "Live App",
      color: "var(--green-glow)",
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      tags: ["React", "Supabase", "Career", "Web App"]
    }
  ];

  const skills = [
    { name: "C++", category: "Core Language" },
    { name: "Python", category: "AI & Automation" },
    { name: "TypeScript / JS", category: "Full-Stack" },
    { name: "React", category: "Frontend" },
    { name: ".NET / C#", category: "Backend" },
    { name: "Flask", category: "API Framework" },
    { name: "Supabase", category: "Database" },
    { name: "NumPy & Pandas", category: "Data Science" }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* 3D WebGL Particle Sphere Background */}
      <ThreeBackground />

      {/* Navigation Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 8%',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(7, 9, 19, 0.8)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={handleConfetti}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--cyan-glow), var(--purple-glow))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.5)'
          }}>
            <Code2 color="#fff" size={24} />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
            NOUMAN<span className="glow-text-cyan">.DEV</span>
          </span>
        </div>

        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#projects" className="btn-secondary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>Projects</a>
          <a href="#manifesto" className="btn-secondary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>About</a>
          <a href="https://github.com/alfa546" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            <Github size={18} /> GitHub
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 40px', textAlign: 'center' }}>
        <div className="float-3d">
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '30px',
            background: 'rgba(0, 240, 255, 0.1)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            color: 'var(--cyan-glow)',
            fontWeight: 600,
            fontSize: '0.95rem',
            marginBottom: '24px'
          }}>
            <Sparkles size={16} /> Software Engineer & AI Specialist
          </span>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            Crafting <span className="glow-text-cyan">3D Web Apps</span> & <br />
            <span className="glow-text-pink">Intelligent AI Solutions</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '750px',
            margin: '0 auto 36px',
            fontWeight: 400
          }}>
            Hi, I'm <strong style={{ color: '#fff' }}>Nouman Sajid 👋</strong>. I specialize in high-grade Web Development, AI/ML Architectures, and Automation systems with an extreme focus on smooth 3D UI & performance.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://nouman-sajid-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary">
              <Sparkles size={20} /> Open 3D Portfolio
            </a>
            <a href="https://think-space.dev" target="_blank" rel="noreferrer" className="btn-secondary">
              <Globe size={20} /> Visit ThinkSpace
            </a>
            <a href="https://pakjobportal.vercel.app/" target="_blank" rel="noreferrer" className="btn-secondary">
              <Briefcase size={20} /> PakJobPortal
            </a>
          </div>
        </div>

        {/* Featured Live 3D Projects Section */}
        <section id="projects" style={{ marginTop: '120px' }}>
          <div style={{ marginBottom: '50px' }}>
            <span className="glow-text-purple" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>
              ⚡ Featured Live Showcase
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '8px' }}>
              Interactive 3D Web Apps & Platforms
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            textAlign: 'left'
          }}>
            {projects.map((proj, idx) => (
              <div key={idx} className="glow-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      padding: '12px',
                      borderRadius: '14px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      {proj.icon}
                    </div>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      background: 'rgba(255,255,255,0.08)',
                      color: proj.color,
                      border: `1px solid ${proj.color}`
                    }}>
                      {proj.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '10px', color: '#fff' }}>
                    {proj.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.5 }}>
                    {proj.desc}
                  </p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255,255,255,0.04)',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)'
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={proj.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-secondary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                >
                  Visit Live Web App <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Manifesto VS Code Window */}
        <section id="manifesto" style={{ marginTop: '120px' }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: '#0d1117',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
            overflow: 'hidden',
            textAlign: 'left'
          }}>
            {/* Terminal Top Bar */}
            <div style={{
              background: '#161b22',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                nouman_sajid_developer.py
              </span>
              <Terminal size={18} color="var(--cyan-glow)" />
            </div>

            {/* Code Content */}
            <pre style={{
              padding: '24px',
              fontFamily: 'var(--font-code)',
              fontSize: '0.95rem',
              color: '#e6edf3',
              overflowX: 'auto',
              lineHeight: 1.7
            }}>
              <code>
                <span style={{ color: '#ff7b72' }}>class</span> <span style={{ color: '#ffa657' }}>NoumanSajid</span>:<br />
                &nbsp;&nbsp;<span style={{ color: '#ff7b72' }}>def</span> <span style={{ color: '#d2a8ff' }}>__init__</span>(<span style={{ color: '#79c0ff' }}>self</span>):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>self</span>.name = <span style={{ color: '#a5d6ff' }}>"Nouman Sajid 👋"</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>self</span>.role = <span style={{ color: '#a5d6ff' }}>"Software Engineer & AI/ML Specialist"</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>self</span>.portfolio_3d = <span style={{ color: '#79c0ff' }}>"https://nouman-sajid-portfolio.vercel.app/"</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>self</span>.platforms = [<span style={{ color: '#a5d6ff' }}>"think-space.dev"</span>, <span style={{ color: '#a5d6ff' }}>"pakjobportal.vercel.app"</span>]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>self</span>.core_stack = [<span style={{ color: '#a5d6ff' }}>"C++"</span>, <span style={{ color: '#a5d6ff' }}>"Python"</span>, <span style={{ color: '#a5d6ff' }}>"React"</span>, <span style={{ color: '#a5d6ff' }}>".NET"</span>, <span style={{ color: '#a5d6ff' }}>"Supabase"</span>]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#79c0ff' }}>self</span>.motto = <span style={{ color: '#a5d6ff' }}>"Vibe coding & architecting world-class software 🚀"</span><br /><br />
                &nbsp;&nbsp;<span style={{ color: '#ff7b72' }}>def</span> <span style={{ color: '#d2a8ff' }}>get_vision</span>(<span style={{ color: '#79c0ff' }}>self</span>):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff7b72' }}>return</span> <span style={{ color: '#a5d6ff' }}>"Building high-performance AI tools & ultra-smooth 3D UIs."</span>
              </code>
            </pre>
          </div>
        </section>

        {/* Tech Matrix Grid */}
        <section style={{ marginTop: '120px' }}>
          <div style={{ marginBottom: '40px' }}>
            <span className="glow-text-cyan" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>
              ⚡ Skills & Ecosystem
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '8px' }}>
              Tech Matrix & Toolkit
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {skills.map((s, idx) => (
              <div key={idx} className="glow-card" style={{ padding: '20px', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{s.name}</h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--cyan-glow)' }}>{s.category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Footer Section */}
        <section style={{ marginTop: '120px', padding: '60px 20px', borderRadius: '24px', background: 'rgba(15, 23, 42, 0.4)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '16px' }}>
            Let's Build Something <span className="glow-text-cyan">Awesome</span> Together
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>
            Have a project in mind, an AI integration requirement, or want to connect?
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleCopyEmail} className="btn-primary">
              {copied ? <CheckCircle2 size={20} color="#00ff66" /> : <Mail size={20} />}
              {copied ? "Email Copied!" : "Copy Email (noumansajid623@gmail.com)"}
            </button>
            <a href="https://linkedin.com/in/nouman-sajid-7199803a5" target="_blank" rel="noreferrer" className="btn-secondary">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/alfa546" target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={20} /> GitHub
            </a>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '60px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Nouman Sajid. Built with React, Three.js & Vibe Coding 🚀
      </footer>
    </div>
  );
}
