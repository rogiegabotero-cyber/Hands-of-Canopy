import styles from './PageHero.module.css'

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}
