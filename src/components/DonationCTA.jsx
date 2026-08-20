import { PhoneIcon } from '@heroicons/react/24/solid'
import { Button } from './Button'
import styles from './DonationCTA.module.css'

export function DonationCTA({
  id,
  heading = 'Your Gift Can Help Provide More Than a Necessity',
  message = 'A donation to Hands of Canopy helps provide essential resources and support for foster children and families — a small way to make sure no one stands alone.',
  mode = 'donate',
}) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.message}>{message}</p>

          {mode === 'donate' ? (
            <div className={styles.actions}>
              <Button href="tel:+17542081481" variant="gold" size="lg">
                Donate Now
              </Button>
              <span className={styles.orDivider}>or</span>
              <a href="tel:+17542081481" className={styles.phoneLink}>
                <PhoneIcon className={styles.phoneIcon} />
                Call (754) 208-1481
              </a>
            </div>
          ) : (
            <div className={styles.contactAction}>
              <Button to="/contact" variant="gold" size="lg">
                Contact Us
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
