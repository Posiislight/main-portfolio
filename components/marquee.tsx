"use client"

const items = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "NODE.JS",
  "DJANGO",
  "POSTGRESQL",
  "STRIPE",
  "SUPABASE",
  "OPENAI",
  "VERCEL",
]

export function Marquee() {
  const row = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden || undefined} className="marquee-track flex shrink-0 items-center">
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-6 pr-6 font-mono text-xs tracking-[0.25em] text-muted-foreground"
        >
          {item}
          <span aria-hidden="true" className="text-emerald-500">
            ✦
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee flex overflow-hidden border-b bg-muted/30 py-3" role="presentation">
      {row(false)}
      {row(true)}
    </div>
  )
}
