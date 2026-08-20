import logoSrc from '../assets/hoc-logo.webp'
import { useTransparentMark } from '../lib/transparentLogo'
import styles from './Logo.module.css'

/**
 * The source file is a wide mark + wordmark lockup shot on black. We show
 * only the mark (auto-cropped from the left side) in the navbar/footer and
 * set our own type alongside it, since the baked-in wordmark can't be
 * restyled to fit each context (e.g. the light variant on a dark navbar).
 */
export function Logo({ size = 48, withWordmark = false, light = false }) {
  const processed = useTransparentMark(logoSrc)

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
