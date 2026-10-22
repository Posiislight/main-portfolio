"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#code", label: "Code" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
]

const container = "mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:h-[72px] md:px-10"

export function SiteHeader({ backToWork = false }: { backToWork?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
      >
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-40 border-b bg-[color-mix(in_srgb,var(--canvas)_80%,transparent)] backdrop-blur transition-colors duration-200 ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <div className={container}>
          <Link href="/" aria-label="Posi, home" className="font-serif text-[28px] leading-none tracking-[-0.01em]">
            Posi<span className="text-brand">.</span>
          </Link>

          <div className="flex items-center gap-1">
            {backToWork ? (
              <Link
                href="/#work"
                className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                All work
              </Link>
            ) : (
              <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            )}

            {!backToWork && (
              <span className="mx-3 hidden items-center gap-2 text-sm text-fg-muted lg:inline-flex">
                <span className="size-2 rounded-full bg-ok" aria-hidden="true" />
                Open to freelance projects
              </span>
            )}

            <ThemeToggle />

            {!backToWork && (
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen(true)}
                className="inline-flex size-11 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-brand-soft hover:text-fg md:hidden"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Sibling of the header, not a child: the header's backdrop-blur would make it the
          containing block for `fixed` and shrink this overlay to the header's height. */}
      {open && (
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-canvas md:hidden"
          >
            <div className="flex h-16 items-center justify-between border-b border-line px-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-serif text-[28px] leading-none"
              >
                Posi<span className="text-brand">.</span>
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-brand-soft hover:text-fg"
                autoFocus
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col px-6 pt-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 font-serif text-5xl leading-none"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex items-center gap-2 px-6 pb-10 text-sm text-fg-muted">
              <span className="size-2 rounded-full bg-ok" aria-hidden="true" />
              Open to freelance projects
            </div>
          </div>
        )}
    </>
  )
}
