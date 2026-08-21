import { Button } from './Button'
import { CanopyArch } from './CanopyArch'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.archLayer}>
        <CanopyArch className={styles.arch} />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Hands of Canopy Community Outreach Center, Inc.</span>

        <h1 className={styles.title}>Planting seeds of success by meeting every child's essential needs.</h1>

        <p className={styles.description}>
          We provide essential resources, support, and guidance to foster children,
          caregivers, and families — so children and caregivers are covered with
          care, dignity, and opportunity.
        </p>

        <div className={styles.actions}>
          <Button to="/ways-to-help#donate" variant="primary" size="lg">
            Donate Now
          </Button>
          <Button to="/ways-to-help" variant="secondary" size="lg">
            How You Can Help
          </Button>
        </div>
      </div>
    </section>
  )
}
