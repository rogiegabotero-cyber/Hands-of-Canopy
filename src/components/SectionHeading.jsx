import styles from './SectionHeading.module.css'

export function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? styles.center : styles.left

  return (
    <div className={`${styles.wrapper} ${alignment}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
