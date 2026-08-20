import styles from './PlaceholderLegalPage.module.css'

export function PlaceholderLegalPage({ title }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>
        This page is being finalized and will be published here soon. In the meantime,
        please reach out through our Contact page with any questions.
      </p>
    </div>
  )
}
