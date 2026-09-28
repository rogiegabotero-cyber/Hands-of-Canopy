import logoSrc from '../assets/hoc-logo.webp'
import { useTransparentMark } from '../lib/transparentLogo'
import styles from './Logo.module.css'

/**
 * The source file is a wide mark+wordmark lockup, so we crop tightly to
 * just the mark artwork on the left and set our own type alongside it.
 */
export function Logo({ size = 48, withWordmark = false }) {
  const processed = useTransparentMark(logoSrc)

  return (
    <div className={styles.wrapper}>
      <span
        className={`${styles.mark} ${processed ? styles.markLoaded : ''}`}
        style={{ '--logo-size': `${size}px`, '--logo-image': `url(${processed ?? logoSrc})` }}
        role="img"
        aria-label="Hands of Canopy Community Outreach Center logo"
      />
      {withWordmark && (
        <span className={styles.wordmarkGroup}>
          <span className={styles.wordmarkName}>Hands of Canopy</span>
          <span className={styles.wordmarkSub}>Community Outreach Center</span>
        </span>
      )}
    </div>
  )
}
