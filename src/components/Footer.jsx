export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
              <path d="M6 14v-1.5a1.5 1.5 0 0 0-3 0V18a5 5 0 0 0 5 5h4a8 8 0 0 0 8-8v-3.5a1.5 1.5 0 0 0-3 0v1"></path>
            </svg>
            <span>GesturePro</span>
          </a>
          <p className="footer-desc">Redefining human-computer interactions during high-stakes presentations.</p>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2026 GesturePro. All rights reserved. Managed under MIT License.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="https://github.com/gesturepro/gesturepro" target="_blank" rel="noopener noreferrer" className="footer-link github-link-footer">
              <svg className="footer-github-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
