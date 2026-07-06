"use client"

import { Github, Mail, Twitter, Linkedin } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useEffect } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { caseStudies } from "@/lib/projects"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"
import { FunEffects } from "@/components/fun-effects"
import { AboutSection } from "@/components/about-section"
import { SkillBars } from "@/components/skill-bars"
import { Marquee } from "@/components/marquee"
import { Terminal } from "@/components/terminal"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServicesSection } from "@/components/services-section"
import { Starfield } from "@/components/starfield"
import { AccentPicker } from "@/components/accent-picker"

export default function Page() {
  useEffect(() => {
    const click = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target && target.closest("a[href^='#']")) {
        const anchor = target.closest("a") as HTMLAnchorElement
        const id = anchor.getAttribute("href")?.replace("#", "") || ""
        const el = document.getElementById(id)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }
    document.addEventListener("click", click)
    return () => document.removeEventListener("click", click)
  }, [])

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <FunEffects />
      <Terminal />
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgb(var(--accent-500)/0.1),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgb(var(--accent-500)/0.16),_transparent_50%)]"
      />
      <div aria-hidden="true" className="bg-grid-overlay pointer-events-none fixed inset-0 -z-10" />
      <div aria-hidden="true" className="scanlines-overlay pointer-events-none fixed inset-0 -z-10" />
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="#" className="glitch-hover font-semibold tracking-tight">
            {'<'}noble.dev{'/>'}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#about" className="hover:text-foreground">
              About
            </Link>
            <Link href="#projects" className="hover:text-foreground">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-foreground">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <a href="https://github.com/noblenergyy" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <AccentPicker />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main role="main">
        {/* Hero */}
        <section
          aria-label="Hero"
          className="relative overflow-hidden border-b"
        >
          <Starfield />
          <div className="container relative z-10 mx-auto flex flex-col items-center px-4 py-20 text-center sm:py-24 md:py-32">
            <AnimateOnScroll className="flex flex-col items-center space-y-6">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                <span aria-hidden="true" className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Available for freelance
              </p>
              <h1 className="glitch-hover cursor-default text-[12vw] font-bold leading-none tracking-tighter sm:text-6xl md:text-8xl lg:text-9xl">
                NOBLE<span className="text-emerald-500">.</span>
                <span className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 bg-clip-text italic text-transparent">
                  DEV
                </span>
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                Full Stack Developer · reliable · fast · scalable
              </p>
              <p className="max-w-xl text-balance text-muted-foreground">
                I build digital products at the intersection of commerce, technology,
                and scale: modern web apps with React, Next.js, and clean backend
                architecture, shipped production-ready.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
                <Button asChild size="lg" className="bg-emerald-600 shadow-lg shadow-emerald-600/25 hover:bg-emerald-700">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                  <a href="https://github.com/noblenergyy" target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" aria-label="Twitter">
                  <a href="https://x.com/noblenergyy" target="_blank" rel="noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                  <a href="https://www.linkedin.com/in/noble-okorie-024b45322" target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" aria-label="Email">
                  <a href="mailto:noblenergyy@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <p className="hidden pt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 md:block">
                [ press {'`'} to open the terminal ]
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Skills marquee */}
        <Marquee />

        <Separator className="fade-divider" />

        {/* About */}
        <AboutSection />

        <Separator className="fade-divider" />

        {/* Projects */}
        <section
          id="projects"
          aria-label="Projects"
          className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
        >
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                02 // projects
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                A selection of things I am proud of.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <Button asChild variant="outline">
                <a href="https://github.com/noblenergyy" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((p, i) => (
              <AnimateOnScroll key={p.slug} delayMs={50 * i}>
                <ProjectCard project={p} />
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        <Separator className="fade-divider" />

        {/* Testimonials */}
        <TestimonialsSection />

        <Separator className="fade-divider" />

        {/* Skills */}
        <section
          id="skills"
          aria-label="Skills"
          className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
        >
          <AnimateOnScroll>
            <div className="mb-6 sm:mb-8">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                04 // skills
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Skills and Tools
              </h2>
              <p className="text-muted-foreground">
                Character stats, leveled up on real projects.
              </p>
            </div>
            <SkillBars />
          </AnimateOnScroll>
        </section>

        <Separator className="fade-divider" />

        {/* Services */}
        <ServicesSection />

        <Separator />

        {/* Contact */}
        <section
          id="contact"
          aria-label="Contact"
          className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
        >
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
            <AnimateOnScroll className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                06 // contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Let us build something great
              </h2>
              <p className="text-muted-foreground">
                Have a project, job opportunity, or idea in mind? I would love
                to hear from you. I usually respond within 1 to 2 business days.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href="mailto:noblenergyy@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    noblenergyy@gmail.com
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href="https://github.com/noblenergyy" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <Card className="border-emerald-600/20">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription />
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <footer
        role="contentinfo"
        className="border-t bg-muted/30 text-sm text-muted-foreground"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 pt-6 pb-24 md:pr-24 md:pb-6">
          <p>
            {'©'} {new Date().getFullYear()} Noble Okorie Chibueze. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="ghost">
              <a href="#about">About</a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a href="#projects">Projects</a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a href="#skills">Skills</a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
