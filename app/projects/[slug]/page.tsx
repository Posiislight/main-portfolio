import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "@/lib/projects"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"

const wrap = "mx-auto w-full max-w-[1200px] px-6 md:px-10"
const sectionLabel = "text-sm text-fg-muted md:col-span-3"

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title: `${cs.title} | Case Study | Adeleke Olamiposi Samuel`,
    description: cs.lede,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const index = caseStudies.findIndex((c) => c.slug === slug)
  if (index === -1) notFound()
  const cs = caseStudies[index]
  const next = caseStudies[(index + 1) % caseStudies.length]
  const host = new URL(cs.demo).host

  const meta = [
    { label: "Role", value: "Full stack, end to end" },
    { label: "Sector", value: cs.category },
    { label: "Status", value: cs.status },
  ]

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader backToWork />

      <main id="main" className="flex-1">
        {/* Overview */}
        <section aria-label="Overview">
          <div className={`${wrap} flex flex-col gap-6 pb-10 pt-12 md:grid md:grid-cols-12 md:gap-x-8 md:gap-y-10 md:pb-16 md:pt-20`}>
            <p className="text-sm text-fg-muted md:col-span-12">
              Case study {String(index + 1).padStart(2, "0")}
            </p>
            <h1 className="font-serif text-[44px] leading-none tracking-[-0.02em] md:col-span-8 md:text-7xl">
              {cs.title}
            </h1>
            <p className="text-lg leading-relaxed text-fg-muted md:col-span-7 md:text-xl">{cs.lede}</p>
            <dl className="flex flex-col text-[15px] md:col-span-4 md:col-start-9 md:row-span-2 md:row-start-2">
              {meta.map((m) => (
                <div key={m.label} className="flex justify-between gap-4 border-t border-line py-3.5">
                  <dt className="text-fg-muted">{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 border-y border-line py-1">
                <dt className="text-fg-muted">Live</dt>
                <dd>
                  <a
                    href={cs.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center break-all underline underline-offset-4 transition-colors hover:text-brand"
                  >
                    {host}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <div className={wrap}>
          <div className="overflow-hidden rounded-2xl border border-line bg-showcase p-3 shadow-soft md:p-4">
            <div className="relative h-[240px] overflow-hidden rounded-xl md:h-[520px]">
              <Image
                src={cs.image}
                alt={`${cs.title} screenshot`}
                fill
                priority
                sizes="(min-width: 1200px) 1120px, 100vw"
                className="object-cover"
                style={{ objectPosition: cs.imagePosition }}
              />
            </div>
          </div>
        </div>

        {/* Problem */}
        <section aria-labelledby="problem-heading">
          <Reveal className={`${wrap} flex flex-col gap-4 pt-16 md:grid md:grid-cols-12 md:gap-x-8 md:pt-24`}>
            <h2 id="problem-heading" className={`${sectionLabel} font-normal`}>
              The problem
            </h2>
            <div className="flex flex-col gap-4 md:col-span-8 md:col-start-4 md:gap-6">
              <p className="font-serif text-[28px] leading-[1.18] tracking-[-0.01em] md:text-[38px] md:leading-[1.15]">
                {cs.problemLead}
              </p>
              <p className="text-base leading-[1.7] text-fg-muted md:text-lg">{cs.problem}</p>
            </div>
          </Reveal>
        </section>

        {/* Solution */}
        <section aria-labelledby="solution-heading">
          <Reveal className={`${wrap} flex flex-col gap-4 pt-14 md:grid md:grid-cols-12 md:gap-x-8 md:pt-20`}>
            <h2 id="solution-heading" className={`${sectionLabel} font-normal`}>
              What I built
            </h2>
            <p className="text-base leading-[1.7] text-fg-muted md:col-span-8 md:col-start-4 md:text-lg">
              {cs.solution}
            </p>
          </Reveal>
        </section>

        {/* Features */}
        <section aria-label="Key features">
          <ul className={`${wrap} grid gap-4 pt-12 md:grid-cols-3 md:gap-6 md:pt-20`}>
            {cs.features.map((f, i) => (
              <li key={f}>
                <Reveal className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6 shadow-soft">
                  <span className="font-serif text-2xl leading-none text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[17px] leading-snug">{f}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        {/* Next */}
        <div className={`${wrap} pb-16 pt-16 md:pb-28 md:pt-24`}>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 border-y border-line py-8 md:py-12"
          >
            <span className="flex flex-col gap-2 md:gap-3">
              <span className="text-sm text-fg-muted">Next project</span>
              <span className="font-serif text-4xl leading-none tracking-[-0.015em] transition-colors group-hover:text-brand md:text-6xl">
                {next.title}
              </span>
            </span>
            <ArrowRight
              className="size-9 shrink-0 text-fg-muted transition-all group-hover:translate-x-1 group-hover:text-brand md:size-12"
              strokeWidth={1.2}
              aria-hidden="true"
            />
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
