"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const facts: { label: string; value: string }[] = [
  { label: "role", value: "Full Stack Developer" },
  { label: "base", value: "Remote · worldwide" },
  { label: "focus", value: "Backend · Cloud · AI · Full Stack" },
  {
    label: "currently",
    value: "shipping client products & working with Docny and Law Angels",
  },
  { label: "status", value: "available for freelance projects" },
]

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About"
      className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
    >
      <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center">
        <AnimateOnScroll className="space-y-4">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
              01 // about
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
          </div>
          <p className="text-muted-foreground">
            I&apos;m Posi, a full stack developer who works closest to the parts most
            people never see: backend services, cloud infrastructure, and the system
            design decisions that decide whether a product holds up once real traffic
            arrives. On the front, that work shows up as React and Next.js interfaces
            that load fast and stay out of the way.
          </p>
          <p className="text-muted-foreground">
            A lot of what I build now involves AI: wiring models into products in ways
            that are genuinely useful rather than decorative, and designing the data and
            infrastructure around them so they stay fast and affordable at scale.
          </p>
          <p className="text-muted-foreground">
            When I take on a project, I own it end to end: architecture, APIs, database
            design, cloud deployment, and the UI on top. My goal is always the same: turn
            an idea into something robust, fast, and ready for real users.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delayMs={100}>
          <Card className="overflow-hidden border-emerald-600/20 font-mono text-sm">
            <CardHeader className="flex-row items-center gap-2 space-y-0 border-b bg-muted/50 px-4 py-3">
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-red-400" />
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-yellow-400" />
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-green-400" />
              <span className="flex-1 text-center text-xs text-muted-foreground">
                posi@dev: ~
              </span>
            </CardHeader>
            <CardContent className="space-y-2 p-5">
              <p>
                <span className="text-emerald-600 dark:text-emerald-400">$</span> whoami
              </p>
              {facts.map((f) => (
                <p key={f.label} className="pl-4">
                  <span className="text-muted-foreground">{f.label}:</span>{" "}
                  <span>{f.value}</span>
                </p>
              ))}
              <p className="pt-1">
                <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
                <span
                  aria-hidden="true"
                  className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-500"
                />
              </p>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
