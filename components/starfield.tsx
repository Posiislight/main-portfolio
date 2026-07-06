"use client"

import { useEffect, useRef } from "react"

const KEY = "noble-stars"
const EVENT = "noble-stars-toggle"
const LINK_DIST = 110

export function isStarsEnabled() {
  if (typeof window === "undefined") return true
  return window.localStorage.getItem(KEY) !== "off"
}

export function setStarsEnabled(on: boolean) {
  window.localStorage.setItem(KEY, on ? "on" : "off")
  window.dispatchEvent(new CustomEvent(EVENT, { detail: on }))
}

type Star = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  big: boolean
  phase: number
  twinkle: number
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let enabled = isStarsEnabled()
    let visible = true
    let raf = 0
    let last = 0
    let stars: Star[] = []

    const newStar = (): Star => {
      const big = Math.random() < 0.12
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12,
        r: big ? 2.5 + Math.random() * 2 : 0.8 + Math.random() * 1.4,
        big,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.6 + Math.random() * 1.6,
      }
    }

    const resize = () => {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      const count = Math.min(110, Math.floor((canvas.width * canvas.height) / 9500))
      stars = Array.from({ length: count }, newStar)
    }

    const isDark = () => document.documentElement.classList.contains("dark")

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame)
      if (!last) {
        last = t
        return
      }
      const dt = Math.min(0.05, (t - last) / 1000)
      last = t
      const time = t / 1000
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const rgb = isDark() ? "250, 248, 246" : "28, 25, 23"

      // connection lines
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i]
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.45
            ctx.strokeStyle = `rgba(${rgb}, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // stars
      stars.forEach((s) => {
        s.x += s.vx * dt
        s.y += s.vy * dt
        if (s.x < -10) s.x = canvas.width + 10
        if (s.x > canvas.width + 10) s.x = -10
        if (s.y < -10) s.y = canvas.height + 10
        if (s.y > canvas.height + 10) s.y = -10

        const shimmer = 0.55 + 0.45 * Math.sin(time * s.twinkle + s.phase)
        const alpha = (s.big ? 0.75 : 0.55) * shimmer

        if (s.big) {
          const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 7)
          halo.addColorStop(0, `rgba(${rgb}, ${alpha * 0.35})`)
          halo.addColorStop(1, `rgba(${rgb}, 0)`)
          ctx.fillStyle = halo
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 7, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.fillStyle = `rgba(${rgb}, ${alpha})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * (0.8 + 0.2 * shimmer), 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const start = () => {
      if (!raf) {
        last = 0
        raf = requestAnimationFrame(frame)
      }
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    const sync = () => (enabled && visible ? start() : stop())

    const onToggle = (e: Event) => {
      enabled = Boolean((e as CustomEvent).detail)
      sync()
    }
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      sync()
    })
    const ro = new ResizeObserver(resize)

    resize()
    io.observe(canvas)
    ro.observe(parent)
    window.addEventListener(EVENT, onToggle)
    sync()

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      window.removeEventListener(EVENT, onToggle)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-55 dark:opacity-50"
    />
  )
}
