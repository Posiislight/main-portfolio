import type { StaticImageData } from "next/image"
import hagueIndustries from "@/public/hague-industries.png"
import axisbydigenty from "@/public/axisbydigenty.png"
import dondaxpicture from "@/public/dondaxpicture.png"
import lawangelsscreenshot from "@/public/lawangelsscreenshot.png"
import docny from "@/public/docny.png"

export type CaseStudy = {
  slug: string
  title: string
  category: string
  status: "Shipped" | "In progress"
  featured: boolean
  /** My role on the project. */
  role: string
  /** Technologies I worked in, most important first. */
  stack: string[]
  /** One or two sentences for the home page: what I built, not what the product is. */
  summary: string
  /** Three short engineering points shown on featured rows. */
  highlights: string[]
  /** Subtitle at the top of the case study. */
  lede: string
  /** Pull quote that opens the context section. */
  problemLead: string
  /** What the product is, kept short. */
  problem: string
  /** What I built and how, in prose. */
  solution: string
  /** Engineering contributions, one per card. */
  features: string[]
  image: StaticImageData
  /** CSS object-position for cropped previews. */
  imagePosition?: string
  demo: string
}

// Order here is the order on the site: featured rows first, then the grid.
export const caseStudies: CaseStudy[] = [
  {
    slug: "lawangels",
    title: "Law Angels UK",
    category: "EdTech",
    status: "Shipped",
    featured: true,
    role: "Co-founder and backend engineer",
    stack: ["Django REST Framework", "PostgreSQL", "Stripe"],
    summary:
      "I built the backend: Django REST Framework APIs and PostgreSQL services for authentication, timed mock exams, Stripe checkout, subscription webhooks and paid-content access.",
    highlights: [
      "Stripe checkout and subscription webhooks behind monthly, quarterly and annual tiers",
      "Subscription webhooks and paid-content access in the backend",
      "Timed FLK1 and FLK2 mock exams with progress tracking",
    ],
    lede: "The backend of an SQE preparation platform: auth, timed exams and the billing to run it as a business from day one.",
    problemLead:
      "A learning platform is only a business once the payments, access rules and exam engine are correct.",
    problem:
      "Law Angels is an SQE preparation platform for aspiring UK solicitors, with 1,500+ quiz questions and over 1,000 monthly visitors. The product needed recurring subscriptions, tiered access and timed mock exams that behave like the real thing.",
    solution:
      "As co-founder and backend engineer I built the APIs and PostgreSQL services behind the platform with Django REST Framework: authentication, timed mock exams, Stripe checkout, subscription webhooks and paid-content access. Stripe handles the billing across monthly, quarterly and annual tiers, and the webhooks are what tie a subscription to what a candidate can open. Candidates see their progress across the 1,500+ quiz questions.",
    features: [
      "Authentication and account APIs in Django REST Framework",
      "Timed FLK1 and FLK2 mock exams",
      "Stripe Checkout for monthly, quarterly and annual tiers",
      "Subscription webhooks that keep access in sync with billing",
      "Paid-content access for subscribers",
      "Progress tracking over 1,500+ quiz questions",
    ],
    image: lawangelsscreenshot,
    imagePosition: "top center",
    demo: "https://lawangelsuk.com",
  },
  {
    slug: "docny",
    title: "Docny",
    category: "Dev tools",
    status: "In progress",
    featured: true,
    role: "Founding engineer",
    stack: ["TipTap", "GitHub", "Algolia", "LLM assistant"],
    summary:
      "I built the TipTap documentation editor end to end, co-built the GitHub-based documentation generation, and shipped the embedded AI assistant that answers reader questions from published docs.",
    highlights: [
      "TipTap editor wired to save APIs and document persistence",
      "Documentation generated from a connected GitHub repository",
      "Integrations with GitHub, Jira, Linear, Slack, Notion and Algolia",
    ],
    lede: "The editor, the repo-to-docs pipeline and the reader-facing AI assistant behind a developer documentation platform.",
    problemLead:
      "Documentation drifts from the code it describes, and the tools to keep it current fight the git workflow.",
    problem:
      "Docny is an AI-native platform for writing, hosting and scaling developer documentation, serving 500+ users. Sites deploy in under five minutes, generated from the team's own GitHub repository.",
    solution:
      "As founding engineer I built the TipTap editor end to end: the browser interface, the save APIs it talks to, and the persistence behind every document. I co-built the GitHub-based generation that turns a repository into documentation, and shipped the embedded assistant that answers reader questions using the published documentation. On top of that I implemented custom domains, branding, templates and reader analytics, and the integrations with GitHub, Jira, Linear, Slack, Notion and Algolia.",
    features: [
      "TipTap editor connected to save APIs and document persistence",
      "GitHub-based documentation generation, co-built",
      "Embedded AI assistant that answers from published documentation",
      "Custom domains, branding and templates",
      "Reader analytics",
      "Integrations: GitHub, Jira, Linear, Slack, Notion, Algolia",
    ],
    image: docny,
    imagePosition: "35% top",
    demo: "https://docny.io",
  },
  {
    slug: "axis-by-digenty",
    title: "Axis by Digenty",
    category: "School ERP",
    status: "Shipped",
    featured: false,
    role: "Full stack engineer",
    stack: ["Java 21", "Spring Boot", "Next.js", "MySQL", "Docker"],
    summary:
      "A Java 21 and Spring Boot backend with a Next.js client: MySQL through JPA, Flyway-versioned schema changes, Spring Security auth and a multi-stage Docker build.",
    highlights: [
      "MySQL persistence with JPA and Flyway migrations",
      "Authentication with Spring Security",
      "Multi-stage Docker build for the backend",
    ],
    lede: "A school management backend on Java 21 and Spring Boot, with versioned migrations and a containerised build.",
    problemLead:
      "Attendance, admissions, exams, invoices and parent access all hang off one shared data model.",
    problem:
      "Axis centralises the records a school runs on: attendance, admissions, exams, invoices and parent access. That makes schema discipline and access control the hard parts.",
    solution:
      "I built the platform with Java 21, Spring Boot and Next.js. Data lives in MySQL behind JPA, and every schema change ships as a Flyway migration, so the database evolves in versioned, reviewable steps. Spring Security handles authentication, and the backend is packaged with a multi-stage Docker build so the image that ships contains only what it needs to run.",
    features: [
      "Java 21 and Spring Boot backend, Next.js client",
      "MySQL persistence through JPA",
      "Flyway-versioned schema changes",
      "Authentication with Spring Security",
      "Multi-stage Docker build",
      "Attendance, admissions, exam and invoice modules",
    ],
    image: axisbydigenty,
    imagePosition: "left center",
    demo: "https://axisbydigenty.com",
  },
  {
    slug: "dondax",
    title: "DondaX Limited",
    category: "Mobility",
    status: "Shipped",
    featured: false,
    role: "Frontend developer (contract)",
    stack: ["React", "TypeScript", "Tailwind", "Django REST APIs"],
    summary:
      "A multi-step order form and a rider management app for 200+ riders, with the frontend integrated against Django APIs and a tracking database.",
    highlights: [
      "Rider management app used day to day by 200+ riders",
      "Frontend integrated with Django APIs for rider tracking",
      "Multi-step order form capturing buyer and delivery details",
    ],
    lede: "A rider management app and an order pipeline for a Nigerian electric motorcycle maker, built against Django APIs.",
    problemLead:
      "Two jobs: turn buyer interest into structured orders, and give 200+ riders a tool for their daily operations.",
    problem:
      "DondaX designs and builds electric motorcycles in Nigeria. Beyond the product site it needed an order intake the sales team could act on and an application to manage riders.",
    solution:
      "I built the rider management application, integrating the frontend with Django APIs and a database for rider tracking and management, so it supports 200+ riders in their day-to-day operations. On the product side I built mobile-first pages, a three-colour picker and a multi-step order form that collects buyer and delivery details for follow-up.",
    features: [
      "Rider management app for 200+ riders",
      "Frontend-to-Django API integration for rider tracking",
      "Multi-step order form with delivery details",
      "Three-colour picker on the product page",
      "Mobile-first product pages",
    ],
    image: dondaxpicture,
    imagePosition: "top center",
    demo: "https://dondaxlimited.com",
  },
  {
    slug: "the-hague-industries",
    title: "The Hague Industries",
    category: "Corporate",
    status: "Shipped",
    featured: false,
    role: "Designer and developer",
    stack: ["Static site", "Contact pipeline"],
    summary:
      "A fully static corporate site: sub-second loads, content structured around the firm's service lines, and an inbound contact pipeline for new briefs.",
    highlights: [
      "Fully static pages with sub-second loads",
      "Content architecture built around the firm's service lines",
      "Inbound contact pipeline for new briefs",
    ],
    lede: "A corporate site for a firm operating where government, commerce and international trade meet, built static for speed and trust.",
    problemLead: "In professional services, credibility is the product.",
    problem:
      "The Hague Industries works where government, commerce and international trade meet, and needed a web presence with the same weight.",
    solution:
      "I designed and built the site as fully static pages, so they load instantly from anywhere. Content is structured around the firm's service lines, walking a visitor from capability to contact, and an inbound contact pipeline routes new briefs to the team.",
    features: [
      "Fully static pages with sub-second loads",
      "Content architecture built around the firm's service lines",
      "Inbound contact pipeline for new briefs",
      "Layout that holds on every screen size",
    ],
    image: hagueIndustries,
    imagePosition: "top center",
    demo: "https://thehagueindustries.com",
  },
]

export const featuredStudies = caseStudies.filter((c) => c.featured)
export const otherStudies = caseStudies.filter((c) => !c.featured)
