export default function Team() {
  const members = [
    {
      name: 'Alex Rivera',
      role: 'Lead AI Engineer',
      avatar: '/assets/avatar_ai.png',
      glowClass: 'glow-teal',
      bio: 'Spearheaded the computer vision architecture, optimizing the MediaPipe and OpenCV hand tracking pipeline to achieve sub-10ms inference directly in the browser and desktop runtime.',
    },
    {
      name: 'Sarah Chen',
      role: 'Frontend Architect',
      avatar: '/assets/avatar_frontend.png',
      glowClass: 'glow-indigo',
      bio: 'Designed the fluid user interfaces for the Tauri desktop shell and companion remote. Implemented the canvas annotation engine and CSS glassmorphism library.',
    },
    {
      name: 'Marcus Vance',
      role: 'Backend Developer',
      avatar: '/assets/avatar_backend.png',
      glowClass: 'glow-teal',
      bio: 'Built the Django REST APIs, WebSockets orchestration for phone-to-desktop pairing, and engineered the high-performance LibreOffice file conversion worker service.',
    }
  ]

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Behind the Tech</h2>
          <p className="section-subtitle">The minds that engineered GesturePro.</p>
        </div>

        <div className="team-grid">
          {members.map((member, idx) => (
            <div key={idx} className="team-card glass-card">
              <div className="team-avatar-wrapper">
                <img 
                  src={member.avatar} 
                  alt={`${member.name} - ${member.role}`} 
                  className="team-avatar" 
                  loading="lazy"
                />
                <div className={`avatar-glow ${member.glowClass}`}></div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
              <div className="team-links">
                <a href="#" className="team-link" aria-label="GitHub Profile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="team-link" aria-label="LinkedIn Profile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
