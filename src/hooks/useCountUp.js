import { useEffect, useRef, useState } from 'react'

/**
 * Counts to a target once the element enters the viewport.
 *
 * @param {number} target - Final numeric value.
 * @param {number} [duration=1400] - Animation duration in milliseconds.
 * @returns {{ ref: import('react').RefObject<HTMLElement>, value: number }}
 */
export function useCountUp(target, duration = 1400) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setValue(target)
      return undefined
    }

    let frameId
    let started = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        const startTime = performance.now()

        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1)
          const easedProgress = 1 - (1 - progress) ** 3
          setValue(Math.round(target * easedProgress))
          if (progress < 1) frameId = requestAnimationFrame(animate)
        }

        frameId = requestAnimationFrame(animate)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [duration, target])

  return { ref, value }
}
