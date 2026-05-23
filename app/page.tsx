"use client"

import { Github, Mail, Twitter, Linkedin, ExternalLink, Phone } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useEffect } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import type { StaticImageData } from "next/image"
import hagueIndustries from "@/public/hague-industries.png"
import papertrail from "@/public/papertrail.png"
import dondaxpicture from "@/public/dondaxpicture.png"
import lawangelsscreenshot from "@/public/lawangelsscreenshot.png"
import latiodus from "@/public/latiodus.png"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"

type Project = {
  title: string
  description: string
  image: string | StaticImageData
  tags: string[]
  links: {
    demo?: string
  }
}

const projects: Project[] = [
  {
    title: "The Hague Industries",
    description:
      "Corporate website for The Hague Industries Ltd — a professional services firm operating at the convergence of government, commerce, and international trade.",
    image: hagueIndustries,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      demo: "https://thehagueindustries.com",
    },
  },
  {
    title: "Papertrail",
    description:
      "A newsletter platform bridging deep reading and high-impact writing. AI-powered tools for creators to draft, distribute, and monetize their content.",
    image: papertrail,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
    links: {
      demo: "https://papertrail-news.vercel.app/",
    },
  },
  {
    title: "DondaX Limited Website",
    description:
      "Website for DondaX Limited, an electric automobile company based in Africa. Built with React.js, Django, Tailwind CSS, and MySQL.",
    image: dondaxpicture,
    tags: ["React.js", "TypeScript", "Tailwind", "Django", "MySQL"],
    links: {
      demo: "https://dondaxlimited.com",
    },
  },
  {
    title: "LawAngelsUk",
    description:
      "An educational platform providing mock exams for law students. Features exam simulations, personalized feedback, referral tracking, and subscription processing.",
    image: lawangelsscreenshot,
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Django", "Stripe", "PostgreSQL"],
    links: {
      demo: "https://lawangelsuk.com",
    },
  },
  {
    title: "Latiodus",
    description:
      "A modern web application for a premier dredging and marine operations company. Showcases their equipment fleet, past projects, and core services.",
    image: latiodus,
    tags: ["React.js", "Tailwind CSS", "TypeScript"],
    links: {
      demo: "https://latiodus.vercel.app/",
    },
  },
]

const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Python",
  "Django",
  "Supabase",
  "Stripe",
  "Vercel",
  "OpenAI",
  "Git",
]

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
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.22),_transparent_50%)]"
      />
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="#" className="font-semibold tracking-tight">
            {'<'}noble.dev{'/>'}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
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
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main role="main">
        {/* Hero */}
        <section
          aria-label="Hero"
          className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
        >
          <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2">
            <AnimateOnScroll className="space-y-6">
              <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white">
                Available for freelance
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Hi, I&apos;m Noble. I build reliable, fast, scalable web apps.
              </h1>
              <p className="text-muted-foreground text-lg">
                Full stack developer focused on performance and great user experience. I ship modern products using React, Next.js, and clean backend architecture.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="flex justify-center md:justify-end" delayMs={100}>
              <Card className="max-w-sm w-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="text-lg font-semibold">NC</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Noble Okorie Chibueze</CardTitle>
                    <CardDescription>Full Stack Developer</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Full stack developer building digital products at the intersection of commerce, technology, and scale. I turn ideas into robust, production-ready applications.
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a href="mailto:noblenergyy@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://x.com/noblenergyy" target="_blank" rel="noreferrer">
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://www.linkedin.com/in/noble-okorie-024b45322" target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimateOnScroll>
          </div>
        </section>

        <Separator className="fade-divider" />

        {/* Projects */}
        <section
          id="projects"
          aria-label="Projects"
          className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
        >
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
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
            {projects.map((p, i) => (
              <AnimateOnScroll key={i} delayMs={50 * i}>
                <ProjectCard project={p} />
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        <Separator className="fade-divider" />

        {/* Skills */}
        <section
          id="skills"
          aria-label="Skills"
          className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
        >
          <AnimateOnScroll>
            <h2 className="text-3xl font-semibold tracking-tight mb-6 sm:mb-8">
              Skills and Tools
            </h2>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {skills.map((s, idx) => (
                <AnimateOnScroll key={s} delayMs={20 * idx} className="inline-block">
                  <Badge
                    variant="secondary"
                    className="border bg-emerald-600/10 text-emerald-800 dark:text-emerald-300 border-emerald-600/20"
                  >
                    {s}
                  </Badge>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </section>

        <Separator />

        {/* Contact */}
        <section
          id="contact"
          aria-label="Contact"
          className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
        >
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
            <AnimateOnScroll className="space-y-4">
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
                <Button asChild variant="ghost">
                  <a href="tel:+2349130129226">
                    <Phone className="mr-2 h-4 w-4" />
                    09130129226
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
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6">
          <p>
            {'©'} {new Date().getFullYear()} Noble Okorie Chibueze. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
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
