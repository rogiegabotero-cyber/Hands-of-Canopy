import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollManager } from './ScrollManager'
import { useFavicon } from '../lib/useFavicon'
import { useScrollReveal } from '../lib/useScrollReveal'
import styles from './Layout.module.css'

export function Layout() {
  useFavicon()
  useScrollReveal()
  const { pathname } = useLocation()

  return (
    <div className={styles.page}>
      <ScrollManager />
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className={styles.main}>
        <div key={pathname} className={styles.pageTransition}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
