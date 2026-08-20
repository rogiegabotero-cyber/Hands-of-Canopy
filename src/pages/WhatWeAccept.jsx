import { HeartIcon, ShoppingBagIcon, BookOpenIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { PageHero } from '../components/PageHero'
import { AcceptedCategoryCard } from '../components/AcceptedCategoryCard'
import { DonationCTA } from '../components/DonationCTA'
import styles from './WhatWeAccept.module.css'

const iconStyle = { width: 24, height: 24 }

export function WhatWeAccept() {
  return (
    <>
      <PageHero
        eyebrow="What We Accept"
        title="Donated Items That Make a Difference"
        description="We accept new or gently used clothing and essentials for babies, children, teens, and adults. Browse the categories below to see what's needed most."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <AcceptedCategoryCard
              icon={<HeartIcon style={iconStyle} />}
              title="Baby, Infant & Toddler Items"
              defaultCondition="New or gently used"
              items={[
                { label: 'Preemie, infant & toddler clothing' },
                { label: 'Toys' },
                { label: 'Bedding & blankets' },
                { label: 'Bottles with unused nipples' },
                { label: 'Baby lotion' },
                { label: 'Diaper cream' },
                { label: 'Shampoo' },
                { label: 'Diapers' },
              ]}
            />

            <AcceptedCategoryCard
              icon={<ShoppingBagIcon style={iconStyle} />}
              title="Clothing"
              defaultCondition="New or gently used"
              items={[
                { label: 'Everyday wear — infant through adult' },
                { label: 'Shoes — infant through adult' },
                { label: 'Jackets — all sizes' },
                { label: 'Sweaters — all sizes' },
                { label: 'Undergarments — male & female (New only)' },
              ]}
            />

            <AcceptedCategoryCard
              icon={<BookOpenIcon style={iconStyle} />}
              title="Education & Learning"
              defaultCondition="New or gently used"
              items={[
                { label: 'Children’s books' },
                { label: 'Low-technology learning games' },
                { label: 'School supplies' },
              ]}
            />

            <AcceptedCategoryCard
              icon={<SparklesIcon style={iconStyle} />}
              title="Personal Care"
              defaultCondition="New items preferred"
              items={[{ label: 'Personal hygiene products for males and females' }]}
            />
          </div>
        </div>
      </section>

      <div className={styles.sectionNoTop}>
        <DonationCTA
          mode="contact"
          heading="Ready to Give Items?"
          message="Contact us to arrange a drop-off or ask about pick-up options for your donation."
        />
      </div>
    </>
  )
}
