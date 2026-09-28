import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "@/lib/projects"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const wrap = "mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20"
const label = "font-mono text-xs uppercase tracking-[0.08em] text-ink-muted md:text-[13px]"

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
  ]

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader backToWork />

      <main className="flex-1">
        {/* Overview */}
        <section aria-label="Overview">
          <div className={`${wrap} flex flex-col gap-6 pb-10 pt-12 md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-12 md:pb-[72px] md:pt-[104px]`}>
            <div className={`${label} flex gap-4 md:col-span-12 md:gap-6`}>
              <span>Case study {String(index + 1).padStart(2, "0")}</span>
              <span>{cs.category}</span>
              <span className="text-moss">{cs.status}</span>
            </div>
            <h1 className="font-serif text-[56px] leading-none tracking-[-0.02em] md:col-span-9 md:text-[88px] md:leading-[0.95] lg:text-[112px] lg:tracking-[-0.025em]">
              {cs.title}
            </h1>
            <p className="font-serif text-2xl leading-tight text-ink-soft md:col-span-7 md:text-[32px] lg:text-4xl">
              {cs.lede}
            </p>
            <dl className="flex flex-col text-[15px] md:col-span-4 md:col-start-9 md:text-base">
              {meta.map((m) => (
                <div key={m.label} className="flex justify-between gap-4 border-t border-rule py-3.5">
                  <dt className="text-ink-faint">{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 border-y border-rule py-1">
                <dt className="text-ink-faint">Live</dt>
                <dd>
                  <a
                    href={cs.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-moss"
                  >
                    {host}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <div className={wrap}>
          <div className="relative h-[300px] overflow-hidden rounded-lg bg-sand md:h-[520px] lg:h-[760px]">
            <Image
              src={cs.image}
              alt={`${cs.title} screenshot`}
              fill
              priority
              sizes="(min-width: 1440px) 1280px, 100vw"
              className="object-cover"
              style={{ objectPosition: cs.imagePosition }}
            />
          </div>
        </div>

        {/* Problem */}
        <section aria-labelledby="problem-heading">
          <div className={`${wrap} flex flex-col gap-4 pt-16 md:grid md:grid-cols-12 md:gap-x-6 md:pt-[120px]`}>
            <h2 id="problem-heading" className={`${label} font-normal md:col-span-3`}>
              The problem
            </h2>
            <div className="flex flex-col gap-4 md:col-span-7 md:col-start-5 md:gap-6">
              <p className="font-serif text-[28px] leading-[1.18] md:text-[40px] md:leading-[1.15]">
                {cs.problemLead}
              </p>
              <p className="text-base leading-[1.65] text-ink-soft md:text-lg">{cs.problem}</p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section aria-labelledby="solution-heading">
          <div className={`${wrap} flex flex-col gap-4 pt-14 md:grid md:grid-cols-12 md:gap-x-6 md:pt-[104px]`}>
            <h2 id="solution-heading" className={`${label} font-normal md:col-span-3`}>
              What I built
            </h2>
            <p className="text-base leading-[1.65] text-ink-soft md:col-span-7 md:col-start-5 md:text-lg">
              {cs.solution}
            </p>
          </div>
        </section>

        {/* Features */}
        <section aria-label="Key features">
          <ul className={`${wrap} grid gap-4 pt-12 md:grid-cols-3 md:gap-6 md:pt-[88px]`}>
            {cs.features.map((f, i) => (
              <li
                key={f}
                className="flex gap-4 border-t border-ink pt-4 md:flex-col md:gap-2.5 md:pt-5"
              >
                <span className="w-6 shrink-0 font-mono text-xs leading-[1.9] text-ink-faint md:text-[13px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[17px] leading-snug md:text-[19px]">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Next */}
        <div className={`${wrap} pb-16 pt-16 md:pb-[120px] md:pt-[120px]`}>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between border-y border-ink py-8 md:py-12"
          >
            <span className="flex flex-col gap-2 md:gap-3">
              <span className={label}>Next project</span>
              <span className="font-serif text-[44px] leading-none transition-colors group-hover:text-moss md:text-[72px]">
                {next.title}
              </span>
            </span>
            <ArrowRight
              className="h-9 w-9 shrink-0 transition-transform group-hover:translate-x-1 md:h-14 md:w-14"
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
