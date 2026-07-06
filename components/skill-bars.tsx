"use client"

import { useEffect, useRef, useState } from "react"

type Skill = {
  name: string
  level: number
  flavor: string
}

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95, flavor: "primary weapon, always equipped" },
      { name: "TypeScript", level: 92, flavor: "strict mode, no mercy" },
      { name: "Tailwind CSS", level: 90, flavor: "ships pixel-perfect UI at speed" },
      { name: "JavaScript", level: 93, flavor: "fluent in the ancient tongue" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, flavor: "APIs that don't fall over" },
      { name: "Python / Django", level: 82, flavor: "batteries included, drama excluded" },
      { name: "PostgreSQL", level: 80, flavor: "indexes before it hurts" },
    ],
  },
  {
    title: "Tools & Integrations",
    skills: [
      { name: "Stripe / Supabase / OpenAI", level: 84, flavor: "third-party APIs, first-class results" },
      { name: "Git / Vercel", level: 88, flavor: "commit early, deploy often" },
    ],
  },
]

function SkillBar({ skill, delayMs }: { skill: Skill; delayMs: number }) {
  const [filled, setFilled] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (prefersReduced) {
              setFilled(true)
            } else {
              window.setTimeout(() => setFilled(true), delayMs)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delayMs])

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 tabular-nums">
          LVL {skill.level}
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
      >
        <div
          className="skill-bar-fill h-full rounded-full"
          style={{ width: filled ? `${skill.level}%` : "0%" }}
        />
      </div>
      <p className="text-xs italic text-muted-foreground">{skill.flavor}</p>
    </div>
  )
}

export function SkillBars() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.title} className="space-y-5">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {"// "}
            {group.title}
          </h3>
          {group.skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delayMs={i * 120} />
          ))}
        </div>
      ))}
    </div>
  )
}
