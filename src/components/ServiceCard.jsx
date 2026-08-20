import styles from './ServiceCard.module.css'

export function ServiceCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
