"use client"

import { Github, Mail, ExternalLink, FileDown, Twitter, Linkedin } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import type { StaticImageData } from "next/image"
import dondaxpicture from "@/public/dondaxpicture.png"
import lawangelsscreenshot from "@/public/lawangelsscreenshot.png"
import taskflowpicture from "@/public/taskflow.png"
import latiodus from "@/public/latiodus.png"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"
import { ThemeDemo } from "@/components/theme-demo"

type Project = {
  title: string
  description: string
  image: string | StaticImageData
  tags: string[]
  links: {
    frontend?: string
    backend?: string
    github?: string
    demo?: string
  }
}

const projects: Project[] = [
  {
    title: "DondaX Limited Website",
    description:
      "Website for DondaX Limited an electric automobile company based in Africa. Built with React.js, Django, Tailwind CSS, and MySQL.",
    image: dondaxpicture,
    tags: ["React.js", "TypeScript", "Tailwind", "Django", "MySQL"],
    links: {
      frontend: "https://github.com/Posiislight/DondaXUI",
      backend: "https://github.com/Posiislight/DondaXbackend",
      demo: "https://dondaxlimited.com",
    },
  },
  {
    title: "LawAngelsUk",
    description:
      "An educational platform providing mock exams for law students. Features include exam simulations, personalized feedback, referral tracking, and subscription processing.",
    image: lawangelsscreenshot,
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Django", "Stripe", "PostgreSQL"],
    links: {
      frontend: "https://github.com/Posiislight/lawangelsfrontend",
      demo: "https://lawangelsuk.com",
    },
  },
  {
    title: "Latiodus",
    description:
      "A modern web application for a premier dredging and marine operations company. Showcases their equipment fleet, past projects, and core services to prospective clients.",
    image: latiodus,
    tags: ["React.js", "Tailwind CSS", "TypeScript"],
    links: {
      frontend: "https://github.com/Posiislight/latiodus",
      demo: "https://latiodus.vercel.app/",
    },
  },
  
 
]

const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Postgres",
  "pandas",
  "numpy",
  "Tailwind CSS",
  "Django",
  "MySQL",
  "Python",
  "Vercel",
  "Stripe",
  "Supabase",
  "RAG",
  "LangChain",
  "OpenAI",
]

const experience = [
  {
    role: "Full Stack Engineer",
    company: "Law Angels",
    period: "2025 - Present",
    summary:
      "Developed a scalable educational platform tailored for law students taking mock exams. Engineered complex features including a robust referral ecosystem, automated payouts utilizing Stripe Connect, programmatic data ingestion logic for exam handling, and a specialized Retrieval-Augmented Generation (RAG) system to provide context-aware legal study assistance.",
  },
  {
    role: "Backend Developer Intern",
    company: "i4nnova Limited",
    period: "2025",
    summary:
      "Joined as a backend developer intern at i4nnova Limited, a startup that provides tech solutions for businesses. I worked on the backend of the company's issue tracking webapp using Django and React",
  },
  
]

// metadata must not be exported from a client component

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
            {'<'}posi.dev{'/>'}
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
              <a href="https://github.com/Posiislight" target="_blank" rel="noreferrer">
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
                Hi, I am Posi. I build reliable, fast, accessible web apps.
              </h1>
              <p className="text-muted-foreground text-lg">
                Backend focused, product oriented, and obsessed with performance. I
                ship modern apps using Django, React, and delightful UI.
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
                    <AvatarImage
                      src="/developer-avatar.png"
                      alt="Portrait"
                    />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Adeleke Olamiposi</CardTitle>
                    <CardDescription>Software Engineer</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Passionate about performance, and building delightful
                  products. I enjoy system design and coding.
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a href="mailto:adelekeolamiposi@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href="https://x.com/adeleke34331" target="_blank" rel="noreferrer">
                        <Twitter className="mr-2 h-4 w-4" />
                        Twitter
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href="www.linkedin.com/in/adeleke-olamiposi-a7545b311" target="_blank" rel="noreferrer">
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

        <Separator className="fade-divider" />

        {/* Experience */}
        <section
          id="experience"
          aria-label="Experience"
          className="container mx-auto px-4 py-14 sm:py-16 md:py-24"
        >
          <AnimateOnScroll>
            <h2 className="text-3xl font-semibold tracking-tight mb-6 sm:mb-8 ">
              Experience
            </h2>
            <ol className="relative border-s pl-6">
              {experience.map((e, i) => (
                <AnimateOnScroll key={i} as="li" className="mb-10 ms-6" delayMs={70 * i}>
                  <span className="-m-20 absolute -start-1.5 mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-background"></span>
                  <h3 className="font-semibold ml-50">
                    {e.role} {" · "} {e.company}
                  </h3>
                  <p className="text-xs text-muted-foreground">{e.period}</p>
                  <p className="mt-2 text-muted-foreground">{e.summary}</p>
                </AnimateOnScroll>
              ))}
            </ol>
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
                  <a href="mailto:adelekeolamiposi@gmail.com">
                    <Mail className="mr-2 h-4 w-4"/>
                    adelekeolamiposi@gmail.com
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href="https://github.com/Posiislight" target="_blank" rel="noreferrer">
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
                <CardDescription>
                  
                </CardDescription>
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
            {'©'} {new Date().getFullYear()} Adeleke Olamiposi. All rights reserved.
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
