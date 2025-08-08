"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'
import Image from "next/image"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  links: { github?: string; demo?: string }
}

export function ProjectCard({
  project = {
    title: "Sample Project",
    description:
      "This is a placeholder description for a sample project card. Replace with a real project.",
    image:
      "/project-preview-ui.png",
    tags: ["Next.js", "TypeScript"],
    links: { github: "https://github.com", demo: "https://example.com" },
  },
}: {
  project?: Project
}) {
  return (
    <Card className="group overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="border bg-emerald-600/10 text-emerald-800 dark:text-emerald-300 border-emerald-600/20"
            >
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          asChild
          variant="outline"
          size="sm"
          disabled={!project.links.github}
        >
          <a
            href={project.links.github || "#"}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="sm"
          disabled={!project.links.demo}
        >
          <a href={project.links.demo || "#"} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
