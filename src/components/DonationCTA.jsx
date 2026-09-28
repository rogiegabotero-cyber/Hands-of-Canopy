import { useEffect, useRef, useState } from 'react'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { Button } from './Button'
import treeLeftSrc from '../assets/tleft.png'
import treeRightSrc from '../assets/tright.png'
import groundSrc from '../assets/ground.png'
import styles from './DonationCTA.module.css'

export function DonationCTA({
  id,
  heading = 'Your Gift Can Help Provide More Than a Necessity',
  message = 'A donation to Hands of Canopy helps provide essential resources and support for foster children and families — a small way to make sure no one stands alone.',
  mode = 'donate',
}) {
  const panelRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = panelRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel} ref={panelRef}>
          <img
            src={treeLeftSrc}
            alt=""
            aria-hidden="true"
            className={`${styles.treeLeft} ${isVisible ? styles.treeLeftVisible : ''}`}
          />
          <img
            src={treeRightSrc}
            alt=""
            aria-hidden="true"
            className={`${styles.treeRight} ${isVisible ? styles.treeRightVisible : ''}`}
          />
          <img
            src={groundSrc}
            alt=""
            aria-hidden="true"
            className={`${styles.ground} ${isVisible ? styles.groundVisible : ''}`}
          />
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
