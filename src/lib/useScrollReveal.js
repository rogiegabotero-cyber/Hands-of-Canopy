import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollReveal() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const sections = document.querySelectorAll('#main-content section')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    sections.forEach((section) => {
      section.classList.add('reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [pathname])
}
