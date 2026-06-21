import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const animationTargets = document.querySelectorAll(
      '.feature-card, .download-card, .team-card, .hero-mockup-wrapper, .step-card, .gesture-item'
    )

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      animationTargets.forEach((target) => {
        revealObserver.observe(target)
      })

      return () => {
        animationTargets.forEach((target) => {
          try {
            revealObserver.unobserve(target)
          } catch {
            // Element might have unmounted already
          }
        })
      }
    } else {
      animationTargets.forEach((target) => target.classList.add('visible'))
    }
  }, [])
}
