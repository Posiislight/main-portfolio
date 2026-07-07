"use client"

import { useEffect, useRef } from "react"

const KEY = "noble-stars"
const EVENT = "noble-stars-toggle"
const LINK_DIST = 110
const FRAME_MS = 33 // ~30fps: the drift is slow, so this halves the work invisibly
const ALPHA_BUCKETS = 8
const HALO_SIZE = 64

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

function makeHaloSprite(rgb: string) {
  const c = document.createElement("canvas")
  c.width = c.height = HALO_SIZE
  const g = c.getContext("2d")
  if (!g) return c
  const half = HALO_SIZE / 2
  const grad = g.createRadialGradient(half, half, 0, half, half, half)
  grad.addColorStop(0, `rgba(${rgb}, 0.35)`)
  grad.addColorStop(1, `rgba(${rgb}, 0)`)
  g.fillStyle = grad
  g.fillRect(0, 0, HALO_SIZE, HALO_SIZE)
  return c
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
    let W = 0
    let H = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let stars: Star[] = []
    let haloSprite: HTMLCanvasElement | null = null
    let haloIsDark: boolean | null = null
    // one segment bucket per alpha level so lines stroke in ≤8 batches, not per pair
    const lineBuckets: number[][] = Array.from({ length: ALPHA_BUCKETS }, () => [])

    const newStar = (): Star => {
      const big = Math.random() < 0.12
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12,
        r: big ? 2 + Math.random() * 1.6 : 0.7 + Math.random() * 1.2,
        big,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.8 + Math.random() * 2,
      }
    }

    // Mobile browsers resize the viewport on every URL-bar show/hide; only
    // rebuild the field when the geometry meaningfully changes.
    const resize = () => {
      const w = parent.clientWidth
      const h = parent.clientHeight
      const widthChanged = Math.abs(w - W) > 4
      const heightChanged = Math.abs(h - H) > 4
      if (!widthChanged && !heightChanged) return
      W = w
      H = h
      // render at device resolution (capped at 2x) so stars and lines stay crisp
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(110, Math.floor((w * h) / 9500))
      if (widthChanged || Math.abs(count - stars.length) > 10 || stars.length === 0) {
        stars = Array.from({ length: count }, newStar)
      }
    }

    const isDark = () => document.documentElement.classList.contains("dark")

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame)
      if (!last) {
        last = t
        return
      }
      if (t - last < FRAME_MS) return
      const dt = Math.min(0.05, (t - last) / 1000)
      last = t
      const time = t / 1000
      ctx.clearRect(0, 0, W, H)

      const dark = isDark()
      const rgb = dark ? "250, 248, 246" : "28, 25, 23"
      const lineAlpha = dark ? 0.65 : 0.7
      if (!haloSprite || haloIsDark !== dark) {
        haloSprite = makeHaloSprite(rgb)
        haloIsDark = dark
      }

      // connection lines, batched by alpha bucket
      for (const bucket of lineBuckets) bucket.length = 0
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i]
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK_DIST * LINK_DIST) {
            const strength = 1 - Math.sqrt(d2) / LINK_DIST
            const idx = Math.min(ALPHA_BUCKETS - 1, Math.floor(strength * ALPHA_BUCKETS))
            lineBuckets[idx].push(a.x, a.y, b.x, b.y)
          }
        }
      }
      ctx.lineWidth = 1
      for (let i = 0; i < ALPHA_BUCKETS; i++) {
        const seg = lineBuckets[i]
        if (!seg.length) continue
        ctx.strokeStyle = `rgba(${rgb}, ${(((i + 0.5) / ALPHA_BUCKETS) * lineAlpha).toFixed(3)})`
        ctx.beginPath()
        for (let k = 0; k < seg.length; k += 4) {
          ctx.moveTo(seg[k], seg[k + 1])
          ctx.lineTo(seg[k + 2], seg[k + 3])
        }
        ctx.stroke()
      }

      // stars
      for (const s of stars) {
        s.x += s.vx * dt
        s.y += s.vy * dt
        if (s.x < -10) s.x = W + 10
        if (s.x > W + 10) s.x = -10
        if (s.y < -10) s.y = H + 10
        if (s.y > H + 10) s.y = -10

        const shimmer = 0.5 + 0.5 * Math.sin(time * s.twinkle + s.phase)
        const alpha = (s.big ? 0.75 : 0.55) * shimmer

        if (s.big && haloSprite) {
          const size = s.r * 12
          ctx.globalAlpha = alpha
          ctx.drawImage(haloSprite, s.x - size / 2, s.y - size / 2, size, size)
          ctx.globalAlpha = 1
        }

        ctx.fillStyle = `rgba(${rgb}, ${alpha.toFixed(3)})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * (0.8 + 0.2 * shimmer), 0, Math.PI * 2)
        ctx.fill()
      }
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
      className="pointer-events-none absolute inset-0 opacity-55 dark:opacity-60"
    />
  )
}
