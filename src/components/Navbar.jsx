import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background scrolled transition
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Highlight active section link
      const sections = document.querySelectorAll('section')
      let currentSectionId = 'hero'
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const id = section.getAttribute('id')
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = id
        }
      })
      setActiveSection(currentSectionId)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const nextState = !prev
      document.body.style.overflow = nextState ? 'hidden' : ''
      return nextState
    })
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'how-it-works', label: 'How it Works' },
    { id: 'downloads', label: 'Downloads' },
  ]

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={closeMobileMenu}>
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
            <path d="M6 14v-1.5a1.5 1.5 0 0 0-3 0V18a5 5 0 0 0 5 5h4a8 8 0 0 0 8-8v-3.5a1.5 1.5 0 0 0-3 0v1"></path>
          </svg>
          <span>GesturePro</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} 
          id="mobile-menu-btn" 
          aria-label="Toggle Navigation Menu"
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Nav Links */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`} id="nav-menu">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a 
                  href={`#${link.id}`} 
                  className={`nav-link ${activeSection === link.id || (link.id === 'overview' && activeSection === 'features') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Nav CTA */}
        <div className="nav-cta">
          <a href="#downloads" className="btn btn-primary btn-sm">Get Started</a>
        </div>
      </div>
    </header>
  )
}
