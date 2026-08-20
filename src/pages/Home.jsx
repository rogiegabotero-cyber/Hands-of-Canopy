import {
  HeartIcon,
  HomeModernIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  BookOpenIcon,
  SparklesIcon,
  ShieldCheckIcon,
  GiftIcon,
  HandRaisedIcon,
  BuildingLibraryIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline'
import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { ImpactCard } from '../components/ImpactCard'
import { ValueCard } from '../components/ValueCard'
import { DonationCTA } from '../components/DonationCTA'
import { Button } from '../components/Button'
import { CanopyArch } from '../components/CanopyArch'
import styles from './Home.module.css'

const iconSize = { width: 24, height: 24 }
const smallIconSize = { width: 20, height: 20 }

const services = [
  {
    icon: <ShoppingBagIcon style={iconSize} />,
    title: 'Essential Resources',
    description:
      'Clothing, hygiene products, school supplies, children’s books, toys, and baby supplies for children and families in need.',
  },
  {
    icon: <HomeModernIcon style={iconSize} />,
    title: 'Support for Foster Families',
    description:
      'Resources and practical assistance that help caregivers navigate transitions and provide stability at home.',
  },
  {
    icon: <AcademicCapIcon style={iconSize} />,
    title: 'Educational Support',
    description:
      'School supplies, books, and learning games that help children keep learning and growing.',
  },
  {
    icon: <UserGroupIcon style={iconSize} />,
    title: 'Community Partnerships',
    description:
      'Working with individuals, organizations, and community partners to strengthen support for foster children and families.',
  },
]

const impactExamples = [
  { icon: <ShoppingBagIcon style={smallIconSize} />, title: 'Clothing for a child entering a new home' },
  { icon: <AcademicCapIcon style={smallIconSize} />, title: 'School supplies for a student' },
  { icon: <SparklesIcon style={smallIconSize} />, title: 'Hygiene essentials for daily dignity' },
  { icon: <BookOpenIcon style={smallIconSize} />, title: 'Books and learning materials' },
  { icon: <HeartIcon style={smallIconSize} />, title: 'Baby necessities for infants and toddlers' },
  { icon: <ShieldCheckIcon style={smallIconSize} />, title: 'Shoes and everyday essentials' },
]

const waysToHelp = [
  { icon: <GiftIcon style={iconSize} />, title: 'Donate', description: 'Give financial support to fund essential resources.' },
  { icon: <ShoppingBagIcon style={iconSize} />, title: 'Give Items', description: 'Donate new or gently used items from our accepted-items list.' },
  { icon: <BuildingLibraryIcon style={iconSize} />, title: 'Partner With Us', description: 'Businesses, churches, schools, and community groups can collaborate with us.' },
  { icon: <HandRaisedIcon style={iconSize} />, title: 'Volunteer', description: 'Volunteer opportunities are coming soon — check back for updates.' },
  { icon: <MegaphoneIcon style={iconSize} />, title: 'Spread the Word', description: 'Share our mission with your friends, family, and community.' },
]

const values = [
  { title: 'Compassion', description: 'We lead with empathy and understanding.' },
  { title: 'Dignity', description: 'Every child and caregiver deserves respect.' },
  { title: 'Opportunity', description: 'Every child deserves the chance to learn, grow, and thrive.' },
  { title: 'Community', description: 'Supporting children and families is a shared responsibility.' },
  { title: 'Care', description: 'No child or caregiver should feel like they are standing alone.' },
]

export function Home() {
  return (
    <>
      <Hero />

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Our Mission"
            title="Creating a Canopy of Care"
            description="Our mission is to bridge the gaps that too often leave foster families without the tools they need to thrive. Through essential resources, educational support, community partnerships, and hands-on assistance, we work to ensure that no child or caregiver stands alone. We strive to create a canopy of care — one that uplifts families during moments of transition, fosters emotional and practical stability, and opens pathways to long-term success."
          />
        </div>
      </section>

      <section className={styles.sectionNoTop}>
        <div className={styles.container}>
          <SectionHeading eyebrow="How We Help" title="Comprehensive Support, Rooted in Care" />
          <div className={styles.grid}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className={styles.ctaRow}>
            <Button to="/how-we-help" variant="secondary">
              Learn more about how we help
            </Button>
          </div>
        </div>
      </section>

      <div className={styles.spacerTight}>
        <DonationCTA id="donate" />
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Your Impact"
            title="What Your Contribution Can Provide"
            description="Every gift — big or small — has a tangible purpose. Here are some of the everyday essentials your support can help provide."
          />
          <div className={styles.impactGrid}>
            {impactExamples.map((item) => (
              <ImpactCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.waysSection}>
        <div className={styles.waysArchLayer}>
          <CanopyArch style={{ height: '100%', width: '100%' }} />
        </div>
        <div className={styles.waysContainer}>
          <SectionHeading
            eyebrow="Ways to Help"
            title="There Are Many Ways to Make a Difference"
          />
          <div className={styles.waysGrid}>
            {waysToHelp.map((way) => (
              <div key={way.title} className={styles.wayCard}>
                <div className={styles.wayIconWrap}>{way.icon}</div>
                <h3 className={styles.wayTitle}>{way.title}</h3>
                <p className={styles.wayDescription}>{way.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <Button to="/ways-to-help" variant="primary">
              Explore all the ways to help
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading eyebrow="Our Values" title="What Guides Everything We Do" />
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <div className={styles.sectionNoTop}>
        <DonationCTA
          heading="Help Us Build a Canopy of Care"
          message="Whether through a financial gift, donated items, or simply sharing our mission, your support helps ensure every child and caregiver we serve is covered with care, dignity, and opportunity."
        />
      </div>
    </>
  )
}
