"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Badge } from "@/components/ui/badge"

const skillGroups: { title: string; description: string; skills: string[] }[] = [
  {
    title: "Frontend",
    description: "Interfaces that are fast, accessible, and precise.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "APIs and data layers built to stay reliable under load.",
    skills: ["Node.js", "Python", "Django", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Integrations",
    description: "Payments, auth, AI, and deployment wired in cleanly.",
    skills: ["Stripe", "Supabase", "OpenAI", "Git", "Vercel"],
  },
]

export function SkillsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {skillGroups.map((group, i) => (
        <AnimateOnScroll key={group.title} delayMs={80 * i}>
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
              {group.title}
            </h3>
            <p className="text-sm text-muted-foreground">{group.description}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-none border border-emerald-600/20 bg-emerald-600/10 text-emerald-800 dark:text-emerald-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  )
}
