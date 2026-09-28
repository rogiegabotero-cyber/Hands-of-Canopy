import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Button } from './Button'
import { useHideOnScroll } from '../lib/useHideOnScroll'
import logoSrc from '../assets/hoc-logo.webp'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/how-we-help', label: 'How We Help' },
  { to: '/what-we-accept', label: 'What We Accept' },
  { to: '/ways-to-help', label: 'Ways to Help' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const hiddenByScroll = useHideOnScroll()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isHidden = hiddenByScroll && !open

  return (
    <header className={`${styles.header} ${isHidden ? styles.headerHidden : ''}`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <NavLink to="/" className={styles.logoLink} onClick={() => setOpen(false)}>
            <img
              src={logoSrc}
              alt="Hands of Canopy Community Outreach Center, Inc."
              className={styles.logoImage}
            />
          </NavLink>

          <nav className={styles.desktopNav}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.desktopDonate}>
            <Button to="/ways-to-help#donate" variant="gold">
              Donate
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={styles.mobileToggle}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              to="/ways-to-help#donate"
              variant="primary"
              className={styles.mobileDonate}
              onClick={() => setOpen(false)}
            >
              Donate
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
