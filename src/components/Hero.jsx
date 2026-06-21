export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="glow-container">
        <div className="glow-orb orb-teal"></div>
        <div className="glow-orb orb-indigo"></div>
      </div>
      
      <div className="hero-container container">
        <div className="hero-content">
          <h1 className="hero-title">
            Presentations Controlled by Your <span className="gradient-text">Movement</span>
          </h1>
          <p className="hero-subtitle">
            Ditch the hardware clickers. Navigate slides, paint live annotations with simple hand gestures using your webcam, and control sessions wirelessly from your smartphone.
          </p>
          <div className="hero-actions">
            <a href="#downloads" className="btn btn-primary btn-lg">
              <span>Download Now</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
            <a 
              href="https://github.com/gesturepro/gesturepro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-lg"
            >
              <span>View on GitHub</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Mockup Grid */}
        <div className="hero-mockup-wrapper">
          <div className="mockup-glowing-backdrop"></div>
          <div className="hero-mockup-container">
            <img 
              src="/assets/hero_mockup.png" 
              alt="GesturePro Presentation Interface Mockup" 
              className="mockup-img" 
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
