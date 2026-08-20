import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  to,
  href,
  onClick,
  ...rest
}) {
  const classes = `${styles.base} ${styles[variant]} ${styles[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
