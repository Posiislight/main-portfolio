"use client"

import { Github, Mail, ExternalLink, FileDown } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect } from "react"

import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"
import { ThemeDemo } from "@/components/theme-demo"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  links: { github?: string; demo?: string }
}

const projects: Project[] = [
  {
    title: "Realtime Chat App",
    description:
      "A WebSocket powered chat app with presence, typing indicators, and optimistic UI. Built with Next.js and a KV store.",
    image:
      "/dark-code-editor-chat-ui.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "WebSockets"],
    links: { github: "https://github.com", demo: "https://example.com" },
  },
  {
    title: "AI Docs Summarizer",
    description:
      "Ingests PDFs and URLs, performs chunking and retrieval, and generates concise summaries using the AI SDK.",
    image:
      "/ai-document-summarizer-dashboard.png",
    tags: ["AI SDK", "RAG", "Vercel AI", "Zod"],
    links: { github: "https://github.com", demo: "https://example.com" },
  },
  {
    title: "Ecommerce Starter",
    description:
      "Headless ecommerce starter with product search, cart, and checkout. Focused on performance and DX.",
    image:
      "/placeholder-0vvze.png",
    tags: ["Next.js", "Postgres", "Stripe", "React Query"],
    links: { github: "https://github.com" },
  },
]

const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Postgres",
  "Prisma",
  "Tailwind CSS",
  "Testing Library",
  "Playwright",
  "Vercel",
  "CI/CD",
]

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Acme Corp",
    period: "2023 — Present",
    summary:
      "Led the migration to Next.js App Router, improved performance by 35% and implemented design system with shadcn/ui.",
  },
  {
    role: "Full Stack Developer",
    company: "Globex",
    period: "2021 — 2023",
    summary:
      "Built internal tools, GraphQL services, and a real-time monitoring dashboard powering operations for 50+ teams.",
  },
  {
    role: "Frontend Engineer",
    company: "Startup XYZ",
    period: "2019 — 2021",
    summary:
      "Shipped multiple greenfield features, built component library, introduced testing practices and CI pipelines.",
  },
]

export const metadata = {
  title: "Developer Portfolio",
  description:
    "A modern developer portfolio showcasing projects, skills, and experience.",
}

export default function Page() {
  useEffect(() => {
    // Smooth scrolling for anchor links
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
            {'<'}dev.portfolio{'/>'}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#projects" className="hover:text-foreground">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-foreground">
              Skills
            </Link>
            <Link href="#experience" className="hover:text-foreground">
              Experience
            </Link>
            <Link href="#contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <a href="https://github.com" target="_blank" rel="noreferrer">
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
          className="container mx-auto px-4 py-16 md:py-24"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white">
                Available for freelance
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Hi, I am Alex. I build reliable, fast, accessible web apps.
              </h1>
              <p className="text-muted-foreground text-lg">
                Frontend focused, product oriented, and obsessed with UX. I
                ship modern apps using Next.js, TypeScript, and delightful UI.
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
              <ThemeDemo />
            </div>
            <div className="flex justify-center md:justify-end">
              <Card className="max-w-sm w-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage
                      src="/developer-avatar.png"
                      alt="Portrait"
                    />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Alex Lee</CardTitle>
                    <CardDescription>Senior Frontend Engineer</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Passionate about performance, DX, and building delightful
                  products. I enjoy system design, design systems, and teaching.
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a href="mailto:alex@example.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://example.com" target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Portfolio
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Projects */}
        <section
          id="projects"
          aria-label="Projects"
          className="container mx-auto px-4 py-16 md:py-24"
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
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="https://example.com" target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demos
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </section>

        <Separator />

        {/* Skills */}
        <section
          id="skills"
          aria-label="Skills"
          className="container mx-auto px-4 py-16 md:py-24"
        >
          <h2 className="text-3xl font-semibold tracking-tight mb-8">
            Skills and Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="border bg-emerald-600/10 text-emerald-800 dark:text-emerald-300 border-emerald-600/20"
              >
                {s}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Experience */}
        <section
          id="experience"
          aria-label="Experience"
          className="container mx-auto px-4 py-16 md:py-24"
        >
          <h2 className="text-3xl font-semibold tracking-tight mb-8">
            Experience
          </h2>
          <ol className="relative border-s pl-6">
            {experience.map((e, i) => (
              <li key={i} className="mb-10 ms-6">
                <span className="absolute -start-1.5 mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-background"></span>
                <h3 className="font-semibold">
                  {e.role} {" · "} {e.company}
                </h3>
                <p className="text-xs text-muted-foreground">{e.period}</p>
                <p className="mt-2 text-muted-foreground">{e.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <Separator />

        {/* Contact */}
        <section
          id="contact"
          aria-label="Contact"
          className="container mx-auto px-4 py-16 md:py-24"
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">
                Let us build something great
              </h2>
              <p className="text-muted-foreground">
                Have a project, job opportunity, or idea in mind? I would love
                to hear from you. I usually respond within 1 to 2 business days.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href="mailto:alex@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    alex@example.com
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href="https://example.com" target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Website
                  </a>
                </Button>
              </div>
            </div>
            <Card className="border-emerald-600/20">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  This will simulate sending on the server and return a success
                  message.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer
        role="contentinfo"
        className="border-t bg-muted/30 text-sm text-muted-foreground"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6">
          <p>
            {'©'} {new Date().getFullYear()} Alex Lee. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="ghost">
              <a href="#projects">Projects</a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a href="#skills">Skills</a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a href="#experience">Experience</a>
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
