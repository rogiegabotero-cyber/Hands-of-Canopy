import logoSrc from '../assets/logo.jpeg'
import { useTransparentLogo } from '../lib/transparentLogo'
import styles from './Logo.module.css'

/**
 * The source file is a square mark + wordmark shot on black. We show only
 * the mark (top ~64%) in the navbar/footer and set our own type alongside
 * it, since the baked-in wordmark can't be restyled to fit each context.
 */
export function Logo({ size = 48, withWordmark = false, light = false }) {
  const processed = useTransparentLogo(logoSrc)

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
          <span className={`${styles.wordmarkName} ${light ? styles.wordmarkNameLight : ''}`}>
            Hands of Canopy
          </span>
          <span className={`${styles.wordmarkSub} ${light ? styles.wordmarkSubLight : ''}`}>
            Community Outreach Center
          </span>
        </span>
      )}
    </div>
  )
}
