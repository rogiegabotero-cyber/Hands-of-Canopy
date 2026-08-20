import {
  GiftIcon,
  ShoppingBagIcon,
  BuildingLibraryIcon,
  HandRaisedIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline'
import { PageHero } from '../components/PageHero'
import { Button } from '../components/Button'
import { DonationCTA } from '../components/DonationCTA'
import styles from './WaysToHelp.module.css'

const iconStyle = { width: 28, height: 28 }

const ways = [
  {
    icon: <GiftIcon style={iconStyle} />,
    title: 'Donate',
    description:
      'Give financial support to help fund the essential resources we provide to foster children and families.',
    action: { label: 'Donate Now', to: '#donate' },
  },
  {
    icon: <ShoppingBagIcon style={iconStyle} />,
    title: 'Give Items',
    description:
      'Donate new or gently used clothing, baby items, books, learning games, school supplies, and hygiene products.',
    action: { label: 'See What We Accept', to: '/what-we-accept' },
  },
  {
    icon: <BuildingLibraryIcon style={iconStyle} />,
    title: 'Partner With Us',
    description:
      'Businesses, organizations, churches, schools, and community groups are invited to collaborate with us.',
    action: { label: 'Get in Touch', to: '/contact' },
  },
  {
    icon: <HandRaisedIcon style={iconStyle} />,
    title: 'Volunteer',
    description:
      'Volunteer opportunities are coming soon. Reach out to be notified when they become available.',
    action: { label: 'Contact Us', to: '/contact' },
  },
  {
    icon: <MegaphoneIcon style={iconStyle} />,
    title: 'Spread the Word',
    description:
      'Share our mission with your friends, family, and community — awareness helps us reach more families.',
    action: null,
  },
]

export function WaysToHelp() {
  return (
    <>
      <PageHero
        eyebrow="Ways to Help"
        title="There Are Many Ways to Make a Difference"
        description="Every form of support — financial, material, or simply spreading the word — helps us build a canopy of care for foster children and families."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {ways.map((way) => (
              <div key={way.title} className={styles.card}>
                <div className={styles.iconWrap}>{way.icon}</div>
                <h3 className={styles.title}>{way.title}</h3>
                <p className={styles.description}>{way.description}</p>
                {way.action && (
                  <Button to={way.action.to} variant="secondary" size="md" className={styles.action}>
                    {way.action.label}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonationCTA id="donate" />
    </>
  )
}
