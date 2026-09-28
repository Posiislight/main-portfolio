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
  /** One or two sentences for the home page. */
  summary: string
  /** Three short points shown on featured rows. */
  highlights: string[]
  /** Subtitle at the top of the case study. */
  lede: string
  /** Pull quote that opens the problem section. */
  problemLead: string
  problem: string
  solution: string
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
    summary:
      "A full SQE preparation platform for aspiring UK solicitors: timed mock exams, an AI tutor, textbooks with audio, and Stripe subscriptions across three tiers.",
    highlights: [
      "1,500+ interactive quiz questions with progress tracking",
      "Timed FLK1 and FLK2 mocks under real conditions",
      "Monthly, quarterly and annual billing on Stripe",
    ],
    lede: "A complete SQE preparation platform for aspiring UK solicitors, with the billing to run it as a business from day one.",
    problemLead:
      "Candidates were stitching together textbooks, scattered practice questions and guesswork about whether they were on track.",
    problem:
      "The Solicitors Qualifying Examination is the gate every aspiring UK solicitor has to pass, including retakers and overseas lawyers converting to the UK route. The business behind the platform needed the other half solved too: recurring subscriptions, tiered access and payments that worked reliably from launch.",
    solution:
      "A full learning platform rather than a question bank. Timed mock exams reproduce real FLK1 and FLK2 conditions, over 1,500 interactive quiz questions back them up, and progress tracking shows candidates where they stand against their own targets instead of leaving them to guess. Angel AI Tutor answers questions on the material directly, and the content layer spans video lessons, textbooks with an audio reader, flashcards, mind maps and summary notes. Stripe drives monthly, quarterly and annual subscription tiers.",
    features: [
      "Timed FLK1 and FLK2 mock exams under real test conditions",
      "Angel AI Tutor for on-demand help with the material",
      "1,500+ interactive quiz questions with progress tracking",
      "Textbooks with audio reader, video lessons, flashcards and mind maps",
      "Stripe billing across monthly, quarterly and annual tiers",
      "Referral tracking to drive organic growth",
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
    summary:
      "An AI-native platform for writing, hosting and scaling developer documentation. Docny Guardian generates docs straight from a GitHub repository, and a site deploys in under five minutes.",
    highlights: [
      "Docs generated from the codebase, so they track what ships",
      "Browser-based editor with real-time team collaboration",
      "Embedded AI chat that answers reader questions from the docs",
    ],
    lede: "An AI-native platform for writing, hosting and scaling developer documentation, with sites that deploy in under five minutes.",
    problemLead:
      "Documentation is the first thing a developer sees and the last thing a team wants to maintain.",
    problem:
      "Docs get written once at launch, then drift as the product ships around them, and the tooling makes it worse: static site generators need constant upkeep, hosted platforms fight the git workflow engineers already live in, and nobody owns the gap in between.",
    solution:
      "Docny closes the loop between the codebase and the docs that describe it. Docny Guardian reads a team's GitHub repository and generates documentation from what is actually there, so the starting point is never a blank page and updates track the code. Writers work in a browser-based WYSIWYG editor with real-time team collaboration, and readers get an embedded AI chat that answers questions against the docs instead of leaving them to search. Sites ship with custom domains and branding, a choice of templates, and analytics on what people are actually reading.",
    features: [
      "Docny Guardian: AI documentation generated from a GitHub repository",
      "Browser-based WYSIWYG editor with real-time team collaboration",
      "Embedded AI chat that answers reader questions from the docs",
      "Custom domains, branding and a template system",
      "Integrations across GitHub, Jira, Linear, Slack, Notion and Algolia",
      "Usage analytics and content auditing",
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
    summary:
      "A school operating system: results, CBT exams, fees, attendance and parent communication in one dashboard.",
    highlights: [
      "Computer-based testing and result processing",
      "Fee collection, invoices and expense tracking",
      "Parent portal with fees and results access",
    ],
    lede: "A school management platform that brings results, CBT exams, fees, attendance and parent communication into one system.",
    problemLead:
      "Running a school should not feel hard, but results, fees and records were scattered across spreadsheets, paper and disconnected tools.",
    problem:
      "Results are stressful and error-prone, fee tracking is manual, spreadsheets and paper records are hard to maintain, parents lack visibility, and student data is scattered across multiple systems. Axis brings everything into one place so school operations can run with clarity and confidence.",
    solution:
      "Axis is designed as a modern school operating system: a single dashboard for student and parent records, fees, attendance, admissions, exams and communication. It gives schools a cleaner workflow, faster result processing, and better visibility for staff and parents without the chaos of disconnected tools.",
    features: [
      "Student and parent record management",
      "Classes, subjects, attendance and admissions",
      "Computer-based testing and result processing",
      "Finance, fee collection, invoices and expense tracking",
      "Parent portal with fee visibility and results access",
      "School communication and website customization tools",
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
    summary:
      "Product site and order pipeline for Nigeria's electric motorcycle maker, plus GNHub, its stories and media hub.",
    highlights: [
      "GN Model showcase with live specs and a colourway picker",
      "Multi-step order request form",
      "GNHub stories and media hub",
    ],
    lede: "The web presence for Nigeria's premier electric motorcycle company: a product site, an order pipeline and a media hub.",
    problemLead:
      "Most buyers had never ridden an electric motorcycle. The site had to make the case, present one flagship seriously, and turn interest into orders.",
    problem:
      "DondaX designs and builds electric motorcycles in Nigeria, in a market where the category is still new. The site had to do three jobs at once: make the case for electric over petrol to a first-time audience, present a single flagship model as a serious product, and turn interest into qualified order requests the sales team could act on.",
    solution:
      "Built around one product told well. The GN Model leads with its numbers — 100 km of range, 120 km/h top speed, 2 to 3 hour fast charge — and a colour picker that lets a visitor see the bike they would actually own. GNHub gives the company a place to publish launch news, events and product updates without a developer in the loop, and a structured order request form captures buyer details, colourway and delivery destination for follow-up.",
    features: [
      "GN Model showcase with live specs and a three-colourway picker",
      "Multi-step order request form with international delivery details",
      "GNHub: a filterable stories, media and updates hub",
      "Content management for news and product data",
      "Mobile-first design for an audience that browses on phones",
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
    summary:
      "A corporate site for a firm working where government, commerce and trade meet. Fully static, built to earn trust before the first meeting.",
    highlights: [
      "Fully static pages with sub-second loads",
      "Content architecture built around the firm's service lines",
      "Inbound contact pipeline for new briefs",
    ],
    lede: "A corporate site for a firm operating where government, commerce and international trade meet, built to establish trust before the first meeting.",
    problemLead: "In professional services, credibility is the product.",
    problem:
      "The Hague Industries operates in rooms where government, commerce and international trade meet, and needed a web presence with the same weight: one that establishes trust before the first meeting.",
    solution:
      "I designed and built a corporate site around clarity and authority: restrained typography, a content structure that walks a visitor from capability to contact, and fully static pages that load instantly anywhere in the world.",
    features: [
      "Fully static pages with sub-second loads",
      "Content architecture built around the firm's service lines",
      "Inbound contact pipeline for new briefs",
      "A design that holds its authority on every screen size",
    ],
    image: hagueIndustries,
    imagePosition: "top center",
    demo: "https://thehagueindustries.com",
  },
]

export const featuredStudies = caseStudies.filter((c) => c.featured)
export const otherStudies = caseStudies.filter((c) => !c.featured)
