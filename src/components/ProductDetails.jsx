export default function ProductDetails() {
  const steps = [
    {
      number: '1',
      title: 'Computer Vision Core',
      description: 'The native Python runtime processes the webcam feed locally using Google MediaPipe. It extracts 21 coordinates per hand at up to 60 FPS, all without sending any video data to the cloud.'
    },
    {
      number: '2',
      title: 'Tauri Desktop Presentation',
      description: 'The desktop app runs a lightweight WebSocket client that receives gestures and coordinate maps in real-time. It renders your slides and maps finger coordinates to responsive brush drawings.'
    },
    {
      number: '3',
      title: 'Secure Django Gateway',
      description: 'A cloud-based Django API handles the handshake and session pairing. When you enter a 6-digit PIN on your phone, the gateway bridges the WebSocket communication tunnel securely.'
    },
    {
      number: '4',
      title: 'React Native Companion',
      description: 'The mobile application acts as a remote. It lets you upload PowerPoint files (auto-converted to PDF via LibreOffice on the server), toggle features, and feel haptic feedback upon gesture triggers.'
    }
  ]

  const gestures = [
    {
      title: 'Cursor Navigation',
      trigger: 'Index Finger Pointing',
      description: 'Raise your index finger to control the live pointer, letting you highlight items on the screen effortlessly.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6" />
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="M21 3l-10 10" />
          <path d="M12 18H8a2 2 0 0 1-2-2v-4" />
        </svg>
      )
    },
    {
      title: 'Action Confirmation',
      trigger: 'Index & Thumb Pinch',
      description: 'Pinch your index finger and thumb together to select menu buttons, change slide pages, or confirm settings.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8l4 4-4 4M8 12h8" />
        </svg>
      )
    },
    {
      title: 'Slide Navigation',
      trigger: 'Victory Sign + Swipe',
      description: 'Raise two fingers (Victory / V-sign) and swipe left or right to seamlessly flip between next and previous slides.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M6 14v-1.5a1.5 1.5 0 0 0-3 0V18a5 5 0 0 0 5 5h4a8 8 0 0 0 8-8v-3.5a1.5 1.5 0 0 0-3 0v1" />
        </svg>
      )
    },
    {
      title: 'Control Toggle',
      trigger: 'Closed Fist',
      description: 'Make a fist with your hand to instantly pause or resume camera tracking, giving you total command over when the app responds.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <path d="M12 2v9M8 5v6M16 5v6" />
        </svg>
      )
    },
    {
      title: 'Canvas Eraser',
      trigger: 'Thumb Raised Outward',
      description: 'Extend your thumb to activate the eraser tool, letting you swipe away specific annotations on the active slide.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 20H4" />
          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 0-1.4.6L3.6 13.7a2 2 0 0 0 0 2.8L7.2 20" />
          <path d="M10.5 7.5L20 17" />
        </svg>
      )
    },
    {
      title: 'Clear Slide Canvas',
      trigger: 'Open Palm Facing Camera',
      description: 'Show an open palm to wipe all active drawing annotations from the current slide, restoring a clean sheet.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M6 14v-1.5a1.5 1.5 0 0 0-3 0V18a5 5 0 0 0 5 5h4a8 8 0 0 0 8-8v-3.5a1.5 1.5 0 0 0-3 0v1" />
        </svg>
      )
    }
  ]

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Under the Hood & Gestures</h2>
          <p className="section-subtitle">
            GesturePro bridges local hardware tracking with modern web sockets. See how it connects and how to control it.
          </p>
        </div>

        <div className="details-grid">
          {/* How It Works column */}
          <div className="architecture-column">
            <div>
              <h3 className="column-title gradient-text">System Architecture</h3>
              <p className="column-subtitle">How our cross-platform ecosystem relays events</p>
            </div>
            
            <div className="steps-timeline">
              {steps.map((step, idx) => (
                <div key={idx} className="step-card">
                  <div className="step-number">{step.number}</div>
                  <div className="step-info">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Gestures column */}
          <div className="gestures-column">
            <div>
              <h3 className="column-title gradient-text">Supported Gestures</h3>
              <p className="column-subtitle">Control layouts and annotations with ease</p>
            </div>

            <div className="gestures-grid">
              {gestures.map((gesture, idx) => (
                <div key={idx} className="gesture-item">
                  <div className="gesture-icon-box">
                    {gesture.icon}
                  </div>
                  <h4>{gesture.title}</h4>
                  <p style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-teal)', marginBottom: '8px' }}>
                    {gesture.trigger}
                  </p>
                  <p>{gesture.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
