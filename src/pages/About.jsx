import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { ValueCard } from '../components/ValueCard'
import { DonationCTA } from '../components/DonationCTA'
import { CanopyArch } from '../components/CanopyArch'
import styles from './About.module.css'

const values = [
  { title: 'Compassion', description: 'We lead with empathy and understanding.' },
  { title: 'Dignity', description: 'Every child and caregiver deserves respect.' },
  { title: 'Opportunity', description: 'Every child deserves the chance to learn, grow, and thrive.' },
  { title: 'Community', description: 'Supporting children and families is a shared responsibility.' },
  { title: 'Care', description: 'No child or caregiver should feel like they are standing alone.' },
]

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Why We Exist"
        description="Hands of Canopy Community Outreach provides essential resources, support, and guidance to foster children and families, ensuring every child and caregiver is covered with care, dignity, and opportunity."
      />

      <section className={styles.section}>
        <div className={styles.story}>
          <h2 className={styles.visionTitle}>Mission Statement</h2>
          <p>
            Hands of Canopy Community Outreach is dedicated to strengthening the lives of
            foster children, caregivers, and families by providing comprehensive support
            rooted in compassion, dignity, and opportunity. We believe every child deserves
            to grow in an environment where they feel safe, valued, and empowered, and every
            caregiver deserves access to the resources and guidance necessary to provide that
            foundation.
          </p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesArchLayer}>
          <CanopyArch className={styles.archFill} />
        </div>
        <div className={styles.valuesContainer}>
          <SectionHeading eyebrow="Our Values" title="What Guides Everything We Do" />
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.visionWrapper}>
          <h2 className={styles.visionTitle}>Our Vision</h2>
          <p className={styles.visionText}>
            A future where every foster child and caregiver is covered with a canopy of
            care — supported by a community that shares in the responsibility of helping
            families thrive.
          </p>
        </div>
      </section>

      <div className={styles.sectionNoTop}>
        <DonationCTA />
      </div>
    </>
  )
}
