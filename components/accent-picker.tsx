"use client"

import { useEffect, useRef, useState } from "react"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

export const ACCENTS = [
  { id: "white", swatch: "linear-gradient(135deg, #ffffff 50%, #171717 50%)" },
  { id: "ember", swatch: "#ff6b47" },
  { id: "emerald", swatch: "#10b981" },
  { id: "violet", swatch: "#8b5cf6" },
  { id: "cyan", swatch: "#06b6d4" },
  { id: "gold", swatch: "#f59e0b" },
] as const

export type AccentId = (typeof ACCENTS)[number]["id"]

export function setAccent(id: AccentId) {
  document.documentElement.setAttribute("data-accent", id)
  try {
    window.localStorage.setItem("noble-accent", id)
  } catch {}
}

export function getAccent(): AccentId {
  const current = document.documentElement.getAttribute("data-accent")
  return (ACCENTS.find((a) => a.id === current)?.id ?? "white") as AccentId
}

export function AccentPicker() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<AccentId>("white")
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setActive(getAccent())
  }, [])

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <Button
        size="icon"
        variant="outline"
        aria-label="Change accent color"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Palette className="h-5 w-5" />
      </Button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 flex gap-2 border border-emerald-500/40 bg-background p-2 shadow-lg">
          {ACCENTS.map((a) => (
            <button
              key={a.id}
              type="button"
              aria-label={`${a.id} accent`}
              title={a.id}
              onClick={() => {
                setAccent(a.id)
                setActive(a.id)
                setOpen(false)
              }}
              className="h-6 w-6 border transition-transform hover:scale-110"
              style={{
                background: a.swatch,
                borderColor: active === a.id ? "hsl(var(--foreground))" : "hsl(var(--border))",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
