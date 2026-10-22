import Image from "next/image"
import Link from "next/link"
import { featuredStudies, otherStudies, type CaseStudy } from "@/lib/projects"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { CopyEmail } from "@/components/copy-email"
import { StackRow } from "@/components/stack-row"
import avatar from "@/public/developer-avatar.png"

const wrap = "mx-auto w-full max-w-[1200px] px-6 md:px-10"
const h2 = "font-serif text-[38px] leading-[1.05] tracking-[-0.015em] md:text-5xl"
const pill =
  "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors"
const textLink =
  "inline-flex min-h-11 items-center text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-brand"

const facts = [
  { label: "Based", value: "Remote, working worldwide" },
  { label: "Focus", value: "Backend, cloud, full stack" },
  { label: "Currently", value: "Building Docny and Law Angels" },
]

const services = [
  {
    title: "MVPs and SaaS platforms",
    body: "From idea to production: auth, payments, dashboards and AI features. Everything a product needs to take real users on day one.",
  },
  {
    title: "Corporate and marketing sites",
    body: "Fast, credible websites that carry a brand's weight. Built to load instantly, rank well and turn visitors into enquiries.",
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
              alt="Portrait of Adeleke Olamiposi"
              width={64}
              height={64}
              className="size-16 rounded-full object-cover"
              priority
            />
            <p className="text-sm text-fg-muted">Adeleke Olamiposi Samuel — Full stack developer</p>
            <p className="inline-flex items-center gap-2 text-sm text-fg-muted lg:hidden">
              <span className="size-2 rounded-full bg-ok" aria-hidden="true" />
              Open to freelance projects
            </p>
            <h1 className="max-w-[18ch] font-serif text-4xl leading-[1.05] tracking-[-0.015em] md:text-6xl">
              I build the parts of a product that <em className="text-brand">have to hold up.</em>
            </h1>
            <p className="max-w-[56ch] text-base leading-relaxed text-fg-muted">
              Backend services, infrastructure and the system design calls that decide whether a
              product survives real traffic. On the surface, React and Next.js interfaces that load
              fast and stay out of the way.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className={`${pill} bg-fg text-canvas hover:bg-brand`}>
                See the work
              </a>
              <a href="#contact" className={`${pill} border border-stroke hover:border-brand hover:text-brand`}>
                Start a project
              </a>
            </div>
            <dl className="mt-6 grid w-full gap-4 border-t border-line pt-6 md:grid-cols-3 md:gap-6">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-1">
                  <dt className="text-sm text-fg-muted">{f.label}</dt>
                  <dd className="text-base">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Stack */}
        <section aria-label="Tools" className="py-16 md:py-24">
          <Reveal className={wrap}>
            <StackRow />
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
