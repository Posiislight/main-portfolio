import type { StaticImageData } from "next/image"
import hagueIndustries from "@/public/hague-industries.png"
import papertrail from "@/public/papertrail.png"
import dondaxpicture from "@/public/dondaxpicture.png"
import lawangelsscreenshot from "@/public/lawangelsscreenshot.png"
import docny from "@/public/docny.png"

export type CaseStudy = {
  slug: string
  title: string
  description: string
  image: StaticImageData
  tags: string[]
  status: string
  demo: string
  problem: string
  solution: string
  features: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-hague-industries",
    title: "The Hague Industries",
    description:
      "Corporate website for The Hague Industries Ltd, a professional services firm operating at the convergence of government, commerce, and international trade.",
    image: hagueIndustries,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "SHIPPED",
    demo: "https://thehagueindustries.com",
    problem:
      "In professional services, credibility is the product. The Hague Industries operates in rooms where government, commerce, and international trade meet, and needed a web presence with the same weight: one that establishes trust before the first meeting.",
    solution:
      "I designed and built a corporate site around clarity and authority: restrained typography, a content structure that walks a visitor from capability to contact, and fully static pages that load instantly anywhere in the world. Built with Next.js and Tailwind CSS, deployed on Vercel.",
    features: [
      "Fully static pages with sub-second loads",
      "Content architecture built around the firm's service lines",
      "Inbound contact pipeline for new briefs",
      "A design that holds its authority on every screen size",
    ],
  },
  {
    slug: "papertrail",
    title: "Papertrail",
    description:
      "A newsletter platform bridging deep reading and high-impact writing. AI-powered tools for creators to draft, distribute, and monetize their content.",
    image: papertrail,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
    status: "IN PROGRESS",
    demo: "https://papertrail-news.vercel.app/",
    problem:
      "Newsletter writers juggle separate tools to read, draft, distribute, and monetize. The friction between deep reading and high-impact writing breaks the publishing rhythm that creators depend on.",
    solution:
      "Papertrail brings the whole loop into one platform. AI-assisted drafting works from the sources a writer collects, and distribution and monetization are built in rather than bolted on. Built with Next.js and TypeScript, with OpenAI powering the writing tools.",
    features: [
      "AI-assisted drafting from collected sources",
      "Integrated publishing and distribution pipeline",
      "Creator monetization built in",
      "A reading experience designed for focus",
    ],
  },
  {
    slug: "dondax",
    title: "DondaX Limited",
    description:
      "The web presence for Nigeria's premier electric motorcycle company: a product site for the GN Model, an order request pipeline, and GNHub, the company's stories and media hub.",
    image: dondaxpicture,
    tags: ["React.js", "TypeScript", "Tailwind", "Django", "MySQL"],
    status: "SHIPPED",
    demo: "https://dondaxlimited.com",
    problem:
      "DondaX designs and builds electric motorcycles in Nigeria, in a market where the category is still new enough that most buyers have never ridden one. The site had to do three jobs at once: make the case for electric over petrol to a first-time audience, present a single flagship model as a serious product, and turn interest into qualified order requests the sales team could act on.",
    solution:
      "A React front end backed by Django and MySQL, built around one product told well. The GN Model leads with its numbers — 100 km of range, 120 km/h top speed, 2 to 3 hour fast charge — and a colour picker that lets a visitor see the bike they would actually own. GNHub gives the company a place to publish launch news, events, and product updates without a developer in the loop, and a structured order request form captures buyer details, colourway, and delivery destination for follow-up.",
    features: [
      "GN Model showcase with live specs and a three-colourway picker",
      "Multi-step order request form with international delivery details",
      "GNHub: a filterable stories, media, and updates hub",
      "Django-backed content management for news and product data",
      "Mobile-first design for an audience that browses on phones",
    ],
  },
  {
    slug: "lawangels",
    title: "Law Angels UK",
    description:
      "A complete SQE preparation platform for aspiring UK solicitors: mock exams, an AI tutor, textbooks with audio, and tiered subscription billing.",
    image: lawangelsscreenshot,
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Django", "Stripe", "PostgreSQL"],
    status: "SHIPPED",
    demo: "https://lawangelsuk.com",
    problem:
      "The Solicitors Qualifying Examination is the gate every aspiring UK solicitor has to pass, and candidates preparing for it — including retakers and overseas lawyers converting to the UK route — were stitching together textbooks, scattered practice questions, and guesswork about whether they were on track. The business behind the platform needed the other half solved too: recurring subscriptions, tiered access, and payments working reliably from launch.",
    solution:
      "A full learning platform rather than a question bank. Timed mock exams reproduce real FLK1 and FLK2 conditions, over 1,500 interactive quiz questions back them up, and progress tracking shows candidates where they stand against their own targets instead of leaving them to guess. Angel AI Tutor answers questions on the material directly, and the content layer spans video lessons, textbooks with an audio reader, flashcards, mind maps, and summary notes. Next.js on the front, Django and PostgreSQL behind it, with Stripe driving monthly, quarterly, and annual subscription tiers.",
    features: [
      "Timed FLK1 and FLK2 mock exams under real test conditions",
      "Angel AI Tutor for on-demand help with the material",
      "1,500+ interactive quiz questions with progress tracking",
      "Textbooks with audio reader, video lessons, flashcards, and mind maps",
      "Stripe billing across monthly, quarterly, and annual tiers",
      "Referral tracking to drive organic growth",
    ],
  },
  {
    slug: "docny",
    title: "Docny",
    description:
      "An AI-native platform for writing, hosting, and scaling developer documentation. Docny Guardian generates docs straight from a GitHub repository, and a site deploys in under five minutes.",
    image: docny,
    tags: ["Next.js", "TypeScript", "MDX", "AI", "GitHub", "Cloud"],
    status: "IN PROGRESS",
    demo: "https://docny.io",
    problem:
      "Documentation is the first thing a developer sees and the last thing a team wants to maintain. Docs get written once at launch, then drift as the product ships around them, and the tooling makes it worse: static site generators need constant upkeep, hosted platforms fight the git workflow engineers already live in, and nobody owns the gap in between.",
    solution:
      "Docny closes the loop between the codebase and the docs that describe it. Docny Guardian reads a team's GitHub repository and generates documentation from what is actually there, so the starting point is never a blank page and updates track the code. Writers work in a browser-based WYSIWYG editor with real-time team collaboration, and readers get an embedded AI chat that answers questions against the docs instead of leaving them to search. Sites ship with custom domains and branding, a choice of templates, and analytics on what people are actually reading.",
    features: [
      "Docny Guardian: AI documentation generated from a GitHub repository",
      "Browser-based WYSIWYG editor with real-time team collaboration",
      "Embedded AI chat that answers reader questions from the docs",
      "Custom domains, branding, and a template system",
      "Integrations across GitHub, Jira, Linear, Slack, Notion, and Algolia",
      "Usage analytics and content auditing",
    ],
  },
]
