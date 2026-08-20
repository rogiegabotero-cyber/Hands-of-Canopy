import {
  ShoppingBagIcon,
  HomeModernIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { PageHero } from '../components/PageHero'
import { DonationCTA } from '../components/DonationCTA'
import styles from './HowWeHelp.module.css'

const iconStyle = { width: 28, height: 28 }

const services = [
  {
    icon: <ShoppingBagIcon style={iconStyle} />,
    title: 'Essential Resources',
    description:
      'We provide clothing, hygiene products, school supplies, children’s books, toys, and baby supplies to children and families who need them — helping meet everyday needs with dignity.',
  },
  {
    icon: <HomeModernIcon style={iconStyle} />,
    title: 'Support for Foster Families',
    description:
      'We offer resources and practical assistance that help caregivers navigate transitions and provide the stability that foster children need to feel safe and secure.',
  },
  {
    icon: <AcademicCapIcon style={iconStyle} />,
    title: 'Educational Support',
    description:
      'School supplies, gently used books, and low-technology learning games help children keep learning and growing, no matter where their journey takes them.',
  },
  {
    icon: <UserGroupIcon style={iconStyle} />,
    title: 'Community Partnerships',
    description:
      'We work alongside individuals, organizations, and community partners to strengthen the network of support available to foster children and families.',
  },
]

export function HowWeHelp() {
  return (
    <>
      <PageHero
        eyebrow="How We Help"
        title="Comprehensive Support, Rooted in Care"
        description="From essential resources to community partnerships, our work is focused on making sure foster children and families have what they need to thrive."
      />

      <section className={styles.section}>
        <div className={styles.list}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${styles.row} ${index % 2 === 1 ? styles.rowReverse : ''}`}
            >
              <div className={styles.iconWrap}>{service.icon}</div>
              <div className={styles.textGroup}>
                <h2 className={styles.title}>{service.title}</h2>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.sectionNoTop}>
        <DonationCTA
          heading="Help Us Keep This Support Going"
          message="Every resource we provide is made possible by donors and community partners who believe in this work."
        />
      </div>
    </>
  )
}
