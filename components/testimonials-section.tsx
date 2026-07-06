"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Card, CardContent } from "@/components/ui/card"

// TODO: Replace these placeholder quotes with the client's and user's real words
// before deploying. Never publish testimonials people didn't actually give.
const testimonials: { quote: string; author: string; source: string }[] = [
  {
    quote:
      "Noble took our vision and delivered a website that carries the weight of our brand. Professional, fast, and exactly what we asked for.",
    author: "Client",
    source: "The Hague Industries",
  },
  {
    quote:
      "Papertrail makes publishing my newsletter feel effortless. The drafting tools alone save me hours every single week.",
    author: "Early user",
    source: "Papertrail",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
    >
      <AnimateOnScroll>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
          03 // testimonials
        </p>
        <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:mb-8">
          What people say
        </h2>
      </AnimateOnScroll>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <AnimateOnScroll key={t.source} delayMs={100 * i}>
            <Card className="h-full border-l-2 border-l-emerald-500">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <span aria-hidden="true" className="font-mono text-3xl leading-none text-emerald-500">
                  &gt;_
                </span>
                <blockquote className="flex-1 text-balance text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="font-mono text-xs uppercase tracking-[0.15em]">
                  <span className="text-foreground">{t.author}</span>
                  <span className="text-muted-foreground"> · {t.source}</span>
                </footer>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
