import logoSrc from '../assets/hoc-favicon.webp'
import { useTransparentMark } from '../lib/transparentLogo'
import styles from './Logo.module.css'

/**
 * The source file is the mark icon (no wordmark baked in), so we crop it
 * tightly to its own content and set our own type alongside it.
 */
export function Logo({ size = 48, withWordmark = false }) {
  const processed = useTransparentMark(logoSrc, { maxXFraction: 1 })

  return (
    <div className={styles.wrapper}>
      <span
        className={styles.mark}
        style={{
          width: size,
          height: size,
          backgroundImage: `url(${processed ?? logoSrc})`,
          opacity: processed ? 1 : 0,
        }}
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
