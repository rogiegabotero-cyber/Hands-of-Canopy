import { useEffect, useRef, useState } from 'react'

/**
 * Hides once the user scrolls down past `revealAt`, and reappears as soon
 * as they scroll up even slightly — the common "auto-hiding navbar"
 * pattern. Scroll deltas are compared against `threshold` to ignore
 * sub-pixel jitter. It also reappears on its own once scrolling settles
 * (no further scroll events for `settleDelay` ms), so the header is never
 * left hidden once the user stops to read.
 */
export function useHideOnScroll({ threshold = 8, revealAt = 80, settleDelay = 500 } = {}) {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const settleTimer = useRef(null)

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

      clearTimeout(settleTimer.current)
      settleTimer.current = setTimeout(() => setHidden(false), settleDelay)
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(settleTimer.current)
    }
  }, [threshold, revealAt, settleDelay])

  return hidden
}
