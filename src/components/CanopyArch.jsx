import { useEffect, useRef, useState } from 'react'
import styles from './CanopyArch.module.css'

/**
 * A soft, abstract echo of the logo's arching hands/canopy silhouette —
 * used as a background motif so the brand feels present without repeating
 * the literal logo mark throughout the page.
 *
 * It stays collapsed toward its horizontal center until its container
 * scrolls into view, then spreads outward and settles into place — and
 * draws back in toward the center once the container scrolls back out
 * of view (in either direction).
 */
export function CanopyArch({ className = '' }) {
  const svgRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = svgRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 600 300"
      fill="none"
      className={`${className} ${styles.arch} ${isVisible ? styles.archVisible : ''}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMax slice"
    >
      <path
        d="M20 300C20 180 110 40 300 40C490 40 580 180 580 300"
        stroke="url(#canopy-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M90 300C90 200 165 90 300 90C435 90 510 200 510 300"
        stroke="url(#canopy-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M160 300C160 225 220 145 300 145C380 145 440 225 440 300"
        stroke="url(#canopy-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <defs>
        <linearGradient id="canopy-gradient" x1="20" y1="40" x2="580" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#93AB7C" />
          <stop offset="1" stopColor="#4F6140" />
        </linearGradient>
      </defs>
    </svg>
  )
}
