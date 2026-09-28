import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'
import styles from './Contact.module.css'

const details = [
  { icon: <EnvelopeIcon className="icon-20" />, label: 'donate@handsofcanopy.com', href: 'mailto:donate@handsofcanopy.com' },
  { icon: <PhoneIcon className="icon-20" />, label: '(754) 208-1481', href: 'tel:+17542081481' },
  { icon: <MapPinIcon className="icon-20" />, label: '10770 SW 216 St. PO Box 700678, Miami, Florida 33170' },
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
              <p className={styles.orgName}>Hands of Canopy Community Outreach Center, Inc.</p>
              <h2 className={styles.blockHeading}>Contact Details</h2>
              <ul className={styles.detailList}>
                {details.map((detail) => (
                  <li key={detail.label} className={styles.detailItem}>
                    <span className={styles.detailIconWrap}>{detail.icon}</span>
                    {detail.href ? (
                      <a href={detail.href} className={styles.detailLabel}>
                        {detail.label}
                      </a>
                    ) : (
                      <span className={styles.detailLabel}>{detail.label}</span>
                    )}
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
