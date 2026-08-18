"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "MVPs & SaaS platforms",
    body: "From idea to production: auth, payments, dashboards, and AI features. Everything a product needs to take real users on day one.",
  },
  {
    title: "Corporate & marketing sites",
    body: "Fast, credible websites that carry a brand's weight. Built to load instantly, rank well, and turn visitors into inquiries.",
  },
  {
    title: "Platforms & integrations",
    body: "Stripe billing, subscriptions, referral systems, admin panels, and third-party APIs wired into one reliable system.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
    >
      <AnimateOnScroll>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
          04 // services
        </p>
        <h2 className="text-3xl font-semibold tracking-tight">Work with me</h2>
        <p className="mb-6 mt-1 text-muted-foreground sm:mb-8">
          What I build for clients, from first call to launch.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <AnimateOnScroll key={s.title} delayMs={80 * i}>
            <Card className="h-full transition-colors hover:border-emerald-600/40">
              <CardContent className="flex h-full flex-col gap-3 p-6">
                <h3 className="font-semibold tracking-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.body}</p>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll className="mt-10 sm:mt-12">
        <Button asChild size="lg">
          <a href="#contact">Start a project</a>
        </Button>
      </AnimateOnScroll>
    </section>
  )
}
