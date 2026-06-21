export default function Overview() {
  const features = [
    {
      title: 'Webcam Gesture Recognition',
      description: 'Use your pointer finger to draw bright, live annotations, the victory gesture (V-sign) to switch slides, and a closed fist to pause or resume webcam tracking.',
      iconClass: 'icon-teal',
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      )
    },
    {
      title: 'Mobile Companion Remote',
      description: 'Pair your smartphone with your desktop using a simple secure 6-digit PIN. Wirelessly upload slides, control layouts, and navigate with haptic feedback.',
      iconClass: 'icon-indigo',
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: 'Smart File Conversion',
      description: 'Directly upload PowerPoint (.pptx) presentation files from your mobile application and let our microservice handle conversion into optimized, high-fidelity PDFs.',
      iconClass: 'icon-teal',
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      title: 'Admin Dashboard',
      description: 'Track user activities, log session statistics, inspect webcam inference performance, and configure workspace integrations in real-time.',
      iconClass: 'icon-indigo',
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="9" y1="9" x2="21" y2="9"></line>
          <line x1="15" y1="9" x2="15" y2="21"></line>
        </svg>
      )
    }
  ]

  return (
    <section className="overview-section" id="overview">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">A Seamless Presentation Ecosystem</h2>
          <p className="section-subtitle">Experience absolute freedom on stage. GesturePro binds local hardware tracking with modern cloud companion routing.</p>
        </div>

        {/* Feature Grid (4 columns) */}
        <div className="features-grid" id="features">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card glass-card">
              <div className={`feature-icon-wrapper ${feature.iconClass}`}>
                {feature.icon}
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
