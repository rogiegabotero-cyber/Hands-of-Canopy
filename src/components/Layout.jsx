import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollManager } from './ScrollManager'
import { useFavicon } from '../lib/useFavicon'
import styles from './Layout.module.css'

export function Layout() {
  useFavicon()

  return (
    <div className={styles.page}>
      <ScrollManager />
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
