import { useEffect, useRef, useState } from 'react'

/**
 * Hides once the user scrolls down past `revealAt`, and reappears as soon
 * as they scroll up even slightly — the common "auto-hiding navbar"
 * pattern. Scroll deltas are compared against `threshold` to ignore
 * sub-pixel jitter.
 */
export function useHideOnScroll({ threshold = 8, revealAt = 80 } = {}) {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    let ticking = false

    function update() {
      const y = window.scrollY
      const delta = y - lastY.current

      if (y <= revealAt) {
        setHidden(false)
      } else if (delta > threshold) {
        setHidden(true)
      } else if (delta < -threshold) {
        setHidden(false)
      }

      lastY.current = y
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold, revealAt])

  return hidden
}
