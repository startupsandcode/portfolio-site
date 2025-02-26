"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProjectDetail() {
  // This would typically come from a database or CMS
  const project = {
    id: 1,
    title: "Interactive Dashboard",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, customizable widgets, and user-friendly interface.",
    longDescription:
      "This interactive dashboard provides businesses with powerful analytics tools to visualize and interpret their data. Built with React and D3.js, it offers real-time updates, customizable widgets, and an intuitive interface that makes complex data accessible to all users. The dashboard includes features like drag-and-drop widget arrangement, multiple visualization options, and export capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    technologies: ["React", "D3.js", "Tailwind CSS", "Next.js"],
    features: [
      "Real-time data visualization",
      "Customizable widgets and layouts",
      "Interactive charts and graphs",
      "Data filtering and sorting",
      "Export to PDF and CSV",
      "User permission management",
    ],
    demoLink: "#",
    codeLink: "#",
    color: "from-blue-500 to-violet-500",
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-6">{project.longDescription}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              <Button asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden border">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>

            <Tabs defaultValue="screenshot1">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="screenshot1">Screenshot 1</TabsTrigger>
                <TabsTrigger value="screenshot2">Screenshot 2</TabsTrigger>
                <TabsTrigger value="screenshot3">Screenshot 3</TabsTrigger>
              </TabsList>
              {project.screenshots.map((screenshot, index) => (
                <TabsContent
                  key={index}
                  value={`screenshot${index + 1}`}
                  className="rounded-lg overflow-hidden border mt-2"
                >
                  <Image
                    src={screenshot || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="border-t py-12 mt-12">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

