import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { Button } from './Button'
import styles from './Footer.module.css'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/how-we-help', label: 'How We Help' },
  { to: '/what-we-accept', label: 'What We Accept' },
  { to: '/ways-to-help', label: 'Ways to Help' },
  { to: '/contact', label: 'Contact' },
]

const social = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <Logo size={64} withWordmark />
            <p className={styles.brandText}>
              Strengthening the lives of foster children, caregivers, and families
              through essential resources, guidance, and community support — a
              canopy of care for every child and family we serve.
            </p>
            <Button to="/ways-to-help#donate" variant="primary" className={styles.donateButton}>
              Donate Now
            </Button>
          </div>

          <div>
            <h3 className={styles.columnHeading}>Navigate</h3>
            <ul className={styles.navList}>
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.columnHeading}>Contact</h3>
            <ul className={styles.contactList}>
              <li>[Organization Email]</li>
              <li>
                <a href="tel:+17542081481">(754) 208-1481</a>
              </li>
              <li>[Organization Address]</li>
            </ul>
            <div className={styles.socialRow}>
              {social.map((s) => (
                <a key={s.label} href={s.href} className={styles.socialLink}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            &copy; {new Date().getFullYear()} Hands of Canopy Community Outreach Center, Inc.
            All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
