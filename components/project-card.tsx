"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'
import Image, { type StaticImageData } from "next/image"

type Project = {
  title: string
  description: string
  image: string | StaticImageData
  tags: string[]
  links: {
    frontend?: string
    backend?: string
    github?: string
    demo?: string
  }
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
    <Card className="group overflow-hidden h-full flex flex-col transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1 tracking-tight">{project.title}</CardTitle>
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
              className="border bg-emerald-600/10 text-emerald-800 dark:text-emerald-300 border-emerald-600/20 transition-colors hover:bg-emerald-600/15"
            >
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.links.frontend && (
          <Button asChild variant="outline" size="sm">
            <a href={project.links.frontend} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Frontend
            </a>
          </Button>
        )}
        {project.links.backend && (
          <Button asChild variant="outline" size="sm">
            <a href={project.links.backend} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Backend
            </a>
          </Button>
        )}
        {!project.links.frontend && !project.links.backend && project.links.github && (
          <Button asChild variant="outline" size="sm">
            <a href={project.links.github} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Code
            </a>
          </Button>
        )}
        <Button
          asChild
          variant="ghost"
          size="sm"
          disabled={!project.links.demo}
        >
          <a href={project.links.demo || "#"} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
