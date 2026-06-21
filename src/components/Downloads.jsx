export default function Downloads() {
  return (
    <section className="downloads-section" id="downloads">
      <div className="glow-container">
        <div className="glow-orb orb-indigo-bottom"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get GesturePro</h2>
          <p className="section-subtitle">Choose your platform and kickstart interactive slides in minutes.</p>
        </div>

        <div className="downloads-grid">
          
          {/* Card A: Desktop Installer */}
          <div className="download-card glass-card">
            <div className="download-header">
              <svg className="dl-device-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="2" y1="20" x2="22" y2="20"></line>
                <line x1="12" y1="17" x2="12" y2="20"></line>
              </svg>
              <div>
                <h3>Desktop Application</h3>
                <p>Supports Windows, macOS & Linux</p>
              </div>
            </div>

            <div className="dl-platforms-list">
              {/* Windows */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <a href="https://github.com/bakytbekovJ27/GesturePro/releases/download/v0.1.0/GesturePro.Desktop_0.1.0_x64-setup.exe" className="btn btn-secondary dl-btn" style={{ flex: 1 }} target="_blank" rel="noopener noreferrer">
                  <svg className="platform-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.451L0 20.551v-8.101zM10.8 1.95L24 0v11.55H10.8V1.95zM10.8 12.45H24v11.55l-13.2-1.95v-9.6z"/>
                  </svg>
                  <div className="dl-btn-text">
                    <span className="dl-btn-sub">Download for</span>
                    <span className="dl-btn-title">Windows (.exe)</span>
                  </div>
                </a>
                <a href="https://github.com/bakytbekovJ27/GesturePro/releases/download/v0.1.0/GesturePro.Desktop_0.1.0_x64_en-US.msi" className="btn btn-secondary dl-btn" style={{ flex: '0 0 auto', padding: '14px 16px' }} title="Download Windows MSI Installer" target="_blank" rel="noopener noreferrer">
                  <div className="dl-btn-text" style={{ alignItems: 'center' }}>
                    <span className="dl-btn-sub">MSI</span>
                  </div>
                </a>
              </div>
              
              {/* macOS Apple Silicon */}
              <a href="https://github.com/bakytbekovJ27/GesturePro/releases/download/v0.1.0/GesturePro.Desktop_0.1.0_aarch64.dmg" className="btn btn-secondary dl-btn" target="_blank" rel="noopener noreferrer">
                <svg className="platform-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.01 1.454 2.2 3.078 3.774 3.02 1.524-.06 2.098-.98 3.938-.98 1.829 0 2.365.98 3.96.948 1.627-.027 2.65-1.47 3.64-2.9 1.15-1.677 1.62-3.3 1.65-3.387-.03-.016-3.178-1.218-3.21-4.82-.03-3.007 2.478-4.453 2.59-4.522-1.41-2.07-3.587-2.3-4.342-2.355-1.99-.163-3.29.957-3.96.957zm1.75-4.486c.829-1.006 1.39-2.41 1.23-3.81-1.2.05-2.66.8-3.52 1.81-.74.86-1.39 2.28-1.21 3.66 1.34.1 2.7-.65 3.5-1.66z"/>
                </svg>
                <div className="dl-btn-text">
                  <span className="dl-btn-sub">Download for</span>
                  <span className="dl-btn-title">macOS Apple Silicon (.dmg)</span>
                </div>
              </a>

              {/* macOS Intel */}
              <a href="https://github.com/bakytbekovJ27/GesturePro/releases/download/v0.1.0/GesturePro.Desktop_0.1.0_x64.dmg" className="btn btn-secondary dl-btn" target="_blank" rel="noopener noreferrer">
                <svg className="platform-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.01 1.454 2.2 3.078 3.774 3.02 1.524-.06 2.098-.98 3.938-.98 1.829 0 2.365.98 3.96.948 1.627-.027 2.65-1.47 3.64-2.9 1.15-1.677 1.62-3.3 1.65-3.387-.03-.016-3.178-1.218-3.21-4.82-.03-3.007 2.478-4.453 2.59-4.522-1.41-2.07-3.587-2.3-4.342-2.355-1.99-.163-3.29.957-3.96.957zm1.75-4.486c.829-1.006 1.39-2.41 1.23-3.81-1.2.05-2.66.8-3.52 1.81-.74.86-1.39 2.28-1.21 3.66 1.34.1 2.7-.65 3.5-1.66z"/>
                </svg>
                <div className="dl-btn-text">
                  <span className="dl-btn-sub">Download for</span>
                  <span className="dl-btn-title">macOS Intel (.dmg)</span>
                </div>
              </a>

              {/* Linux */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <a href="https://github.com/bakytbekovJ27/GesturePro/releases/download/v0.1.0/GesturePro.Desktop_0.1.0_amd64.AppImage" className="btn btn-secondary dl-btn" style={{ flex: 1 }} target="_blank" rel="noopener noreferrer">
                  <svg className="platform-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm1.96 4.07a1.43 1.43 0 0 1 1.43 1.43 1.43 1.43 0 0 1-1.43 1.43 1.43 1.43 0 0 1-1.43-1.43 1.43 1.43 0 0 1 1.43-1.43zm-3.92 0A1.43 1.43 0 0 1 11.47 7.5a1.43 1.43 0 0 1-1.43 1.43 1.43 1.43 0 0 1-1.43-1.43 1.43 1.43 0 0 1 1.43-1.43zm5.72 6.47c-.52 2.37-2.18 4.29-3.76 4.29-1.58 0-3.24-1.92-3.76-4.29a3.78 3.78 0 0 1-.22-1.24c0-2 1.78-3.62 3.98-3.62 2.2 0 3.98 1.62 3.98 3.62 0 .43-.07.85-.22 1.24z"/>
                  </svg>
                  <div className="dl-btn-text">
                    <span className="dl-btn-sub">Download for</span>
                    <span className="dl-btn-title">Linux (.AppImage)</span>
                  </div>
                </a>
                <a href="https://github.com/bakytbekovJ27/GesturePro/releases/download/v0.1.0/GesturePro.Desktop_0.1.0_amd64.deb" className="btn btn-secondary dl-btn" style={{ flex: '0 0 auto', padding: '14px 16px' }} title="Download Linux .deb package" target="_blank" rel="noopener noreferrer">
                  <div className="dl-btn-text" style={{ alignItems: 'center' }}>
                    <span className="dl-btn-sub">DEB</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Card B: Mobile Companion App */}
          <div className="download-card glass-card">
            <div className="download-header">
              <svg className="dl-device-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <div>
                <h3>Mobile Companion</h3>
                <p>Supports iOS & Android (via Expo Go)</p>
              </div>
            </div>
            
            <div className="dl-platforms-list">
              <div className="mobile-dl-instructions" style={{ marginBottom: '8px' }}>
                <h4>Build & Install Instructions:</h4>
                <p>Install the <strong>Expo Go</strong> app on your device, or download the companion app directly to control layouts and slides.</p>
              </div>

              <a href="https://expo.dev/artifacts/eas/YgI8nBGfhKNTLoApfx36sS3dHfU3mVD_mVzsL7Tkw3Y.apk" className="btn btn-secondary dl-btn" target="_blank" rel="noopener noreferrer">
                <svg className="platform-icon" viewBox="0 0 24 24" fill="currentColor" style={{ transform: 'rotate(180deg)' }}>
                  <path d="M17.523 15.3l1.816 3.146a.5.5 0 0 1-.183.682.501.501 0 0 1-.682-.183L16.63 15.75H7.37l-1.846 3.195a.5.5 0 0 1-.682.183.5.5 0 0 1-.183-.682l1.816-3.146A9.455 9.455 0 0 1 2 8.167h20a9.455 9.455 0 0 1-4.477 7.133zM7 11.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm10 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
                </svg>
                <div className="dl-btn-text">
                  <span className="dl-btn-sub">Download for</span>
                  <span className="dl-btn-title">Android (.apk)</span>
                </div>
              </a>

              <div className="btn btn-secondary dl-btn disabled-btn" title="iPhone Companion App is coming soon!">
                <svg className="platform-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.01 1.454 2.2 3.078 3.774 3.02 1.524-.06 2.098-.98 3.938-.98 1.829 0 2.365.98 3.96.948 1.627-.027 2.65-1.47 3.64-2.9 1.15-1.677 1.62-3.3 1.65-3.387-.03-.016-3.178-1.218-3.21-4.82-.03-3.007 2.478-4.453 2.59-4.522-1.41-2.07-3.587-2.3-4.342-2.355-1.99-.163-3.29.957-3.96.957zm1.75-4.486c.829-1.006 1.39-2.41 1.23-3.81-1.2.05-2.66.8-3.52 1.81-.74.86-1.39 2.28-1.21 3.66 1.34.1 2.7-.65 3.5-1.66z"/>
                </svg>
                <div className="dl-btn-text">
                  <span className="dl-btn-sub">iPhone App</span>
                  <span className="dl-btn-title">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
