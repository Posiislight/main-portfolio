"use client"

import { useEffect, useRef, useState, type JSX, type PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

type AnimateOnScrollProps = PropsWithChildren<{
  className?: string
  as?: keyof JSX.IntrinsicElements
  /** Trigger when element enters viewport. If true, only triggers once. */
  once?: boolean
  /** IntersectionObserver rootMargin */
  rootMargin?: string
  /** Initial offset translate in px (y-axis). */
  offsetY?: number
  /** Delay in ms */
  delayMs?: number
}>

export function AnimateOnScroll({
  className,
  as = "div",
  once = true,
  rootMargin = "0px 0px -10% 0px",
  offsetY = 12,
  delayMs = 0,
  children,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs && !prefersReduced) {
              const id = window.setTimeout(() => setIsVisible(true), delayMs)
              ;(element as any).__aosTimeout = id
            } else {
              setIsVisible(true)
            }
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { root: null, rootMargin, threshold: 0.15 }
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      const id = (element as any).__aosTimeout
      if (id) window.clearTimeout(id)
    }
  }, [once, rootMargin, delayMs])

  const Comp: any = as

  return (
    <Comp
      ref={ref as any}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0",
        className
      )}
      style={isVisible ? undefined : { transform: `translateY(${offsetY}px)` }}
    >
      {children}
    </Comp>
  )
}


