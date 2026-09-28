import Image from "next/image"
import Link from "next/link"
import { featuredStudies, otherStudies, type CaseStudy } from "@/lib/projects"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const wrap = "mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20"
const label = "font-mono text-xs uppercase tracking-[0.08em] text-ink-muted md:text-[13px]"

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

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function FeaturedProject({ project, index }: { project: CaseStudy; index: number }) {
  return (
    <article className="flex flex-col gap-5 border-t border-ink pt-5 md:gap-10 md:pt-8">
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block h-[240px] overflow-hidden rounded-lg bg-sand md:h-[480px] lg:h-[680px]"
      >
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1440px) 1280px, 100vw"
          className="object-cover"
          style={{ objectPosition: project.imagePosition }}
          priority={index === 0}
        />
      </Link>
      <div className="grid gap-5 md:grid-cols-12 md:gap-x-6">
        <div className="flex flex-col gap-4 md:col-span-5">
          <div className="flex justify-between gap-6 font-mono text-xs text-ink-muted md:justify-start md:text-[13px]">
            <span>{pad(index + 1)}</span>
            <span>
              {project.status} · {project.category}
            </span>
          </div>
          <h3 className="font-serif text-[40px] leading-none md:text-[64px]">{project.title}</h3>
        </div>
        <div className="flex flex-col gap-5 md:col-span-6 md:col-start-7 md:pt-8">
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">{project.summary}</p>
          <ul className="flex flex-col gap-2 text-[15px] leading-snug text-ink-soft md:text-base">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="flex gap-6 text-base font-medium">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-moss"
            >
              Read the case study
            </Link>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-moss"
            >
              Visit site
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project, index }: { project: CaseStudy; index: number }) {
  return (
    <article className="flex flex-col gap-3.5 md:gap-4">
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block h-[200px] overflow-hidden rounded-lg bg-sand md:h-[280px]"
      >
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          style={{ objectPosition: project.imagePosition }}
        />
      </Link>
      <div className="flex justify-between font-mono text-xs text-ink-muted md:text-[13px]">
        <span>{pad(index + 1)}</span>
        <span>
          {project.status} · {project.category}
        </span>
      </div>
      <h3 className="font-serif text-[32px] leading-none md:text-4xl">
        <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-moss">
          {project.title}
        </Link>
      </h3>
      <p className="text-[15px] leading-relaxed text-ink-soft md:text-base">{project.summary}</p>
    </article>
  )
}

export default function Page() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />

      <main>
        {/* Intro */}
        <section id="top" aria-label="Intro" className="border-b border-rule">
          <div className={`${wrap} grid gap-8 py-12 md:grid-cols-12 md:gap-x-6 md:gap-y-16 md:pb-24 md:pt-[120px]`}>
            <div className="flex items-center gap-2 font-mono text-xs text-ink-muted md:hidden">
              <span className="h-2 w-2 rounded-full bg-moss" aria-hidden="true" />
              Open to freelance projects
            </div>
            <p className={`${label} hidden md:col-span-12 md:block`}>
              Adeleke Olamiposi Samuel — Full stack developer
            </p>
            <h1 className="font-serif text-[56px] leading-none tracking-[-0.02em] md:col-span-11 md:text-[96px] md:leading-[0.95] lg:col-span-10 lg:text-[128px] lg:tracking-[-0.025em]">
              I build the parts of a product that <em className="text-moss">have to hold up.</em>
            </h1>
            <p className="text-[17px] leading-relaxed text-ink-soft md:col-span-6 md:text-xl lg:col-span-5">
              Backend services, infrastructure and the system design calls that decide whether a
              product survives real traffic. On the surface, React and Next.js interfaces that load
              fast and stay out of the way.
            </p>
            <div className="flex flex-col gap-3 md:col-span-5 md:col-start-8 md:flex-row md:items-end">
              <a
                href="#work"
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-ink px-7 text-base font-medium text-paper transition-colors hover:bg-moss"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-ink px-7 text-base font-medium transition-colors hover:border-moss hover:text-moss"
              >
                Start a project
              </a>
            </div>
            <dl className="flex flex-col md:col-span-12 md:grid md:grid-cols-3 md:gap-6 md:border-t md:border-rule md:pt-8">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex justify-between gap-4 border-t border-rule py-3.5 md:flex-col md:justify-start md:gap-1.5 md:border-0 md:py-0 ${
                    i === facts.length - 1 ? "border-b md:border-b-0" : ""
                  }`}
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-ink-faint">{f.label}</dt>
                  <dd className="text-right text-[15px] md:text-left md:text-[17px]">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Work */}
        <section id="work" aria-label="Selected work" className="scroll-mt-4">
          <div className={`${wrap} flex flex-col gap-14 py-16 md:gap-[72px] md:pb-[120px] md:pt-28`}>
            <div className="flex items-end justify-between">
              <h2 className="font-serif text-5xl leading-none tracking-[-0.015em] md:text-[80px] md:tracking-[-0.02em]">
                Selected work
              </h2>
              <a
                href="https://github.com/Posiislight"
                target="_blank"
                rel="noreferrer"
                className="hidden text-base underline underline-offset-4 transition-colors hover:text-moss md:inline"
              >
                More on GitHub
              </a>
            </div>

            {featuredStudies.map((p, i) => (
              <FeaturedProject key={p.slug} project={p} index={i} />
            ))}

            <div className="grid gap-10 border-t border-ink pt-5 md:grid-cols-3 md:gap-6 md:pt-8">
              {otherStudies.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={featuredStudies.length + i} />
              ))}
            </div>

            <a
              href="https://github.com/Posiislight"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[52px] items-center justify-center rounded-full border border-ink text-base font-medium md:hidden"
            >
              More on GitHub
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-label="About" className="bg-ink text-paper">
          <div className={`${wrap} flex flex-col gap-7 py-[72px] md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-12 md:py-[120px]`}>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-bone-muted md:col-span-12 md:text-[13px]">
              About
            </p>
            <p className="font-serif text-[32px] leading-[1.12] tracking-[-0.01em] md:col-span-7 md:text-[44px] lg:text-[56px] lg:leading-[1.08]">
              I work closest to the parts people never see, and own a project end to end:
              architecture, APIs, deployment and the UI on top.
            </p>
            <p className="text-base leading-relaxed text-bone md:col-span-4 md:col-start-9 md:text-[17px]">
              I&apos;m Posi. Most of my work is for founders and teams who need one person to take a
              product from a blank repo to real users, and still be around when it has to scale.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" aria-label="Services" className="border-b border-rule">
          <div className={`${wrap} flex flex-col gap-10 py-[72px] md:gap-16 md:py-[120px]`}>
            <h2 className="font-serif text-5xl leading-none tracking-[-0.015em] md:text-[80px] md:tracking-[-0.02em]">
              What I build
            </h2>
            <div className="grid gap-8 md:grid-cols-3 md:gap-6">
              {services.map((s) => (
                <div key={s.title} className="flex flex-col gap-3 border-t border-ink pt-5 md:gap-4 md:pt-6">
                  <h3 className="text-xl font-semibold md:text-[22px]">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-soft md:text-base">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-label="Contact">
          <div className={`${wrap} flex flex-col gap-7 pb-[72px] pt-20 md:gap-12 md:pb-[120px] md:pt-[140px]`}>
            <p className={label}>Contact</p>
            <h2 className="font-serif text-[56px] leading-none tracking-[-0.02em] md:text-[96px] md:leading-[0.95] lg:text-[128px] lg:tracking-[-0.025em]">
              Have something that <br className="hidden md:block" />
              needs to <em className="text-moss">hold up?</em>
            </h2>
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-12">
              <a
                href="mailto:adelekeolamiposi@gmail.com"
                className="break-all font-serif text-[26px] underline decoration-1 underline-offset-[6px] transition-colors hover:text-moss md:text-5xl md:underline-offset-8"
              >
                adelekeolamiposi@gmail.com
              </a>
              <p className="max-w-[360px] text-[15px] leading-relaxed text-ink-soft md:text-base">
                Projects, roles or a half-formed idea. I reply within one to two business days.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
