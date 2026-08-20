import { useState } from 'react'
import { Button } from './Button'
import styles from './ContactForm.module.css'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.successCard}>
        <h3 className={styles.successTitle}>Thank you for reaching out.</h3>
        <p className={styles.successText}>
          Your message has been recorded. We'll be in touch as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={styles.input} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>
        <input id="subject" name="subject" type="text" required className={styles.input} />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={styles.input} />
      </div>

      <Button type="submit" variant="primary" size="lg" className={styles.submitButton}>
        Send Message
      </Button>

      <p className={styles.disclaimer}>
        Note: this form is not yet connected to an email inbox. Messages will route to{' '}
        [Organization Email] once configured.
      </p>
    </form>
  )
}
