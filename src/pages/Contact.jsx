import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'
import styles from './Contact.module.css'

const iconStyle = { width: 20, height: 20 }

const details = [
  { icon: <EnvelopeIcon style={iconStyle} />, label: '[Organization Email]' },
  { icon: <PhoneIcon style={iconStyle} />, label: '[Organization Phone Number]' },
  { icon: <MapPinIcon style={iconStyle} />, label: '[Organization Address]' },
]

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd Love to Hear From You"
        description="Whether you have a question, want to donate items, or are interested in partnering with us, reach out any time."
      />

      <section className={styles.section}>
        <div className={styles.layout}>
          <div className={styles.details}>
            <div>
              <h2 className={styles.blockHeading}>Contact Details</h2>
              <ul className={styles.detailList}>
                {details.map((detail) => (
                  <li key={detail.label} className={styles.detailItem}>
                    <span className={styles.detailIconWrap}>{detail.icon}</span>
                    <span className={styles.detailLabel}>{detail.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={styles.blockHeading}>Follow Us</h2>
              <div className={styles.socialRow}>
                <a href="#" className={styles.socialLink}>
                  [Facebook]
                </a>
                <a href="#" className={styles.socialLink}>
                  [Instagram]
                </a>
              </div>
            </div>
          </div>

          <div className={styles.formPanel}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
