import styles from './ImpactCard.module.css'

export function ImpactCard({ icon, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>{icon}</div>
      <p className={styles.title}>{title}</p>
    </div>
  )
}
