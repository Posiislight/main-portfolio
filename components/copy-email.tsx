"use client"

import { useEffect, useRef, useState, type MouseEvent } from "react"

type CopyEmailProps = {
  email: string
  className?: string
}

// A mailto link that copies the address on click. If the clipboard API is
// missing or refuses, it falls back to opening the mail client.
export function CopyEmail({ email, className = "" }: CopyEmailProps) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  async function onClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <a
        href={`mailto:${email}`}
        onClick={onClick}
        className={`break-all underline decoration-1 underline-offset-[6px] transition-colors hover:text-brand ${className}`}
      >
        {email}
      </a>
      <span aria-live="polite" className="text-sm text-fg-muted">
        {copied ? "Copied" : "Click to copy"}
      </span>
    </span>
  )
}
