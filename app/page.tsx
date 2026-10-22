import Image from "next/image"
import Link from "next/link"
import { featuredStudies, otherStudies, type CaseStudy } from "@/lib/projects"
import { repos, type Repo } from "@/lib/repos"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { CopyEmail } from "@/components/copy-email"
import { ClientLogos } from "@/components/client-logos"
import avatar from "@/public/self-avatar.jpg"

const wrap = "mx-auto w-full max-w-[1200px] px-6 md:px-10"
const h2 = "font-serif text-[38px] leading-[1.05] tracking-[-0.015em] md:text-5xl"
const pill =
  "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors"
const textLink =
  "inline-flex min-h-11 items-center text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-brand"

const facts = [
  { label: "Based", value: "Remote, working worldwide" },
  { label: "Focus", value: "AI products, backend, cloud" },
  { label: "Currently", value: "Building Docny and Law Angels" },
]

const services = [
  {
    title: "AI features and agents",
    body: "Assistants that answer from your own documents, retrieval over your data, and agent workflows with tests, limits and human approval built in.",
  },
  {
    title: "MVPs and SaaS platforms",
    body: "From idea to production: auth, payments, dashboards and AI features. Everything a product needs to take real users on day one.",
  },
  {
    title: "Platforms and integrations",
    body: "Stripe billing, subscriptions, referral systems, admin panels and third-party APIs wired into one reliable system.",
  },
]

function Tags({ project }: { project: CaseStudy }) {
  return (
    <div className="flex flex-wrap gap-2 text-xs text-fg-muted">
      <span className="rounded-full border border-line px-3 py-1">{project.category}</span>
      <span className="rounded-full border border-line px-3 py-1">{project.status}</span>
    </div>
  )
}

function FeaturedProject({ project, index }: { project: CaseStudy; index: number }) {
  return (
    <Reveal as="article" className="overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-shadow duration-200 hover:shadow-lift">
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="block bg-showcase p-3 md:p-4"
      >
        <span className="relative block h-[220px] overflow-hidden rounded-xl md:h-[440px]">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
            style={{ objectPosition: project.imagePosition }}
            priority={index === 0}
          />
        </span>
      </Link>
      <div className="grid gap-6 p-6 md:grid-cols-12 md:gap-x-8 md:p-8">
        <div className="flex flex-col gap-4 md:col-span-5">
          <Tags project={project} />
          <h3 className="font-serif text-[34px] leading-none tracking-[-0.015em] md:text-[44px]">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-col gap-5 md:col-span-7">
          <p className="text-base leading-relaxed text-fg-muted">{project.summary}</p>
          <ul className="flex flex-col gap-2 text-[15px] leading-snug text-fg-muted">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
          <div className="flex gap-6">
            <Link href={`/projects/${project.slug}`} className={textLink}>
              Read the case study
            </Link>
            <a href={project.demo} target="_blank" rel="noreferrer" className={textLink}>
              Visit site
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <Reveal as="article" className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-shadow duration-200 hover:shadow-lift">
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="block bg-showcase p-3"
      >
        <span className="relative block h-[180px] overflow-hidden rounded-xl md:h-[220px]">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: project.imagePosition }}
          />
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <Tags project={project} />
        <h3 className="font-serif text-[30px] leading-none tracking-[-0.015em]">
          <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-brand">
            {project.title}
          </Link>
        </h3>
        <p className="text-[15px] leading-relaxed text-fg-muted">{project.summary}</p>
      </div>
    </Reveal>
  )
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Reveal
      as="article"
      className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 shadow-soft transition-shadow duration-200 hover:shadow-lift md:p-8"
    >
      <div className="flex flex-col gap-2">
        <p className="break-all text-sm text-fg-muted">Posiislight/{repo.name}</p>
        <h3 className="font-serif text-[30px] leading-none tracking-[-0.015em] md:text-[34px]">
          {repo.title}
        </h3>
      </div>
      <p className="text-[15px] leading-relaxed text-fg-muted">{repo.summary}</p>
      <ul className="flex flex-col gap-2 text-[15px] leading-snug text-fg-muted">
        {repo.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-2 text-xs text-fg-muted" aria-label="Tech stack">
        {repo.stack.map((s) => (
          <li key={s} className="rounded-full border border-line px-3 py-1">
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-x-6">
        <a href={repo.github} target="_blank" rel="noreferrer" className={textLink}>
          View on GitHub
          <span className="sr-only"> ({repo.name}, opens in a new tab)</span>
        </a>
        {repo.demo && (
          <a href={repo.demo.url} target="_blank" rel="noreferrer" className={textLink}>
            {repo.demo.label}
            <span className="sr-only"> ({repo.name}, opens in a new tab)</span>
          </a>
        )}
      </div>
    </Reveal>
  )
}

export default function Page() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section
          id="top"
          aria-label="Intro"
          className="flex min-h-[calc(100svh-64px)] flex-col justify-center py-16 md:min-h-[calc(100svh-72px)] md:py-20"
        >
          <div className={`${wrap} flex flex-col items-start gap-6`}>
            <Image
              src={avatar}
              alt="Adeleke Olamiposi, smiling in a navy suit and red tie"
              width={112}
              height={112}
              className="size-24 rounded-full border border-line object-cover md:size-28"
              priority
            />
            <h1 className="font-serif text-5xl leading-[1.05] tracking-[-0.015em] md:text-[64px]">
              Hi, I’m <em className="text-brand">Posi</em>.
            </h1>
            <p className="max-w-[56ch] text-base leading-relaxed text-fg-muted md:text-lg">
              I’m a software engineer and AWS Certified Solutions Architect who builds AI products:
              assistants that answer from your own documents, retrieval pipelines and agent workflows, plus the backend, cloud and interface
              around them. I take projects from a blank repo to real users.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className={`${pill} bg-fg text-canvas hover:bg-brand`}>
                Contact me
              </a>
              <a
                href="/Adeleke_Olamiposi_Resume.pdf"
                download
                className={`${pill} border border-stroke hover:border-brand hover:text-brand`}
              >
                Resume
              </a>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section aria-labelledby="clients-heading" className="py-12 md:py-16">
          <Reveal className={`${wrap} flex flex-col gap-6`}>
            <h2 id="clients-heading" className="text-sm text-fg-muted">
              Companies I’ve built with. Tap a logo to visit.
            </h2>
            <ClientLogos />
          </Reveal>
        </section>

        {/* Work */}
        <section id="work" aria-label="Selected work" className="scroll-mt-20 py-16 md:py-28">
          <div className={`${wrap} flex flex-col gap-10 md:gap-14`}>
            <div className="flex items-end justify-between gap-6">
              <h2 className={h2}>Selected work</h2>
              <a
                href="https://github.com/Posiislight"
                target="_blank"
                rel="noreferrer"
                className={`${textLink} hidden md:inline-flex`}
              >
                More on GitHub
              </a>
            </div>
            <div className="flex flex-col gap-8 md:gap-10">
              {featuredStudies.map((p, i) => (
                <FeaturedProject key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* More work */}
        <section aria-label="More work" className="pb-16 md:pb-24">
          <div className={`${wrap} flex flex-col gap-10`}>
            <h2 className={h2}>More work</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherStudies.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            <a
              href="https://github.com/Posiislight"
              target="_blank"
              rel="noreferrer"
              className={`${pill} border border-stroke md:hidden`}
            >
              More on GitHub
            </a>
          </div>
        </section>

        {/* Open source */}
        <section id="code" aria-label="Open source" className="scroll-mt-20 pb-16 md:pb-28">
          <div className={`${wrap} flex flex-col gap-10`}>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
              <div className="flex flex-col gap-3">
                <h2 className={h2}>Open source</h2>
                <p className="max-w-[52ch] text-base leading-relaxed text-fg-muted">
                  Public repositories you can read, run and fork.
                </p>
              </div>
              <a
                href="https://github.com/Posiislight?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className={`${textLink} w-fit`}
              >
                All repositories
              </a>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {repos.map((r) => (
                <RepoCard key={r.name} repo={r} />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-label="About" className="scroll-mt-20 py-16 md:py-28">
          <Reveal className={`${wrap} grid gap-8 md:grid-cols-12 md:gap-x-8`}>
            <h2 className={`${h2} md:col-span-5`}>About</h2>
            <div className="flex flex-col gap-5 md:col-span-7">
              <p className="font-serif text-[28px] leading-[1.15] tracking-[-0.01em] md:text-[34px]">
                I work closest to the parts people never see, and own a project end to end:
                architecture, APIs, deployment and the UI on top.
              </p>
              <p className="text-base leading-relaxed text-fg-muted">
                I&apos;m Posi. Most of my work is for founders and teams who need one person to take a
                product from a blank repo to real users, and still be around when it has to scale.
              </p>
              <p className="text-base leading-relaxed text-fg-muted">
                More and more of that work is AI. At Docny I shipped an assistant that answers readers’
                questions from published documentation. At i4nnova I built an embeddings search over issue
                logs that cut average resolution time by 40%. I’m also an AWS Certified Solutions
                Architect, which is why my LLM services come with queues, metrics and cost tracking.
              </p>
              <p className="pt-4 text-sm text-fg-muted">Adeleke Olamiposi Samuel — AI and full stack engineer</p>
              <dl className="grid gap-4 border-t border-line pt-6 sm:grid-cols-3 sm:gap-6">
                {facts.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1">
                    <dt className="text-sm text-fg-muted">{f.label}</dt>
                    <dd className="text-base">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </section>

        {/* Services */}
        <section id="services" aria-label="Services" className="scroll-mt-20 py-16 md:py-24">
          <div className={`${wrap} flex flex-col gap-10`}>
            <h2 className={h2}>What I build</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <Reveal
                  key={s.title}
                  className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 shadow-soft"
                >
                  <h3 className="font-serif text-2xl leading-tight">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-fg-muted">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-label="Contact" className="scroll-mt-20 py-16 md:py-32">
          <Reveal className={`${wrap} flex flex-col gap-8`}>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.015em] md:text-6xl">
              Have something that needs to <em className="text-brand">hold up?</em>
            </h2>
            <CopyEmail email="adelekeolamiposi@gmail.com" className="font-serif text-2xl md:text-4xl" />
            <p className="inline-flex items-center gap-2 text-sm text-fg-muted">
              <span className="size-2 rounded-full bg-ok" aria-hidden="true" />
              Open to freelance projects
            </p>
            <p className="max-w-[44ch] text-base leading-relaxed text-fg-muted">
              Projects, roles or a half-formed idea. I reply within one to two business days.
            </p>
            <a
              href="https://github.com/Posiislight"
              target="_blank"
              rel="noreferrer"
              className={`${textLink} w-fit`}
            >
              GitHub
            </a>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
