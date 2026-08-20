import styles from './AcceptedCategoryCard.module.css'

export function AcceptedCategoryCard({ icon, title, defaultCondition, items }) {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.iconWrap}>{icon}</div>
        <span className={styles.condition}>{defaultCondition}</span>
      </div>

      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.label} className={styles.item}>
            <span className={styles.itemLabel}>
              <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10.5l3.5 3.5L16 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
