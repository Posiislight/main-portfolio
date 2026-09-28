"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Menu, X } from "lucide-react"

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader({ backToWork = false }: { backToWork?: boolean }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-[88px] md:px-10 lg:px-20">
        <Link href="/" className="font-serif text-[28px] tracking-[-0.01em] md:text-[32px]">
          Posi<span className="text-moss">.</span>
        </Link>

        {backToWork ? (
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center gap-2 text-[15px] transition-colors hover:text-moss"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All work
          </Link>
        ) : (
          <>
            <nav aria-label="Primary" className="hidden gap-10 text-[15px] md:flex">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="transition-colors hover:text-moss">
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="hidden items-center gap-2.5 font-mono text-[13px] text-ink-muted lg:flex">
              <span className="h-2 w-2 rounded-full bg-moss" aria-hidden="true" />
              Open to freelance projects
            </div>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink md:hidden"
            >
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b border-rule px-5">
            <Link href="/" onClick={() => setOpen(false)} className="font-serif text-[28px]">
              Posi<span className="text-moss">.</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink"
              autoFocus
            >
              <X className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col px-5 pt-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-4 font-serif text-5xl leading-none"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex items-center gap-2 px-5 pb-10 font-mono text-xs text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-moss" aria-hidden="true" />
            Open to freelance projects
          </div>
        </div>
      )}
    </header>
  )
}
