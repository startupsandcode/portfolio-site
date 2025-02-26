"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Code, ExternalLink, Github, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectGallery() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const projects = [
    {
      id: 1,
      title: "Interactive Dashboard",
      description:
        "A comprehensive analytics dashboard with real-time data visualization, customizable widgets, and user-friendly interface.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "D3.js", "Tailwind CSS", "Next.js"],
      demoLink: "#",
      codeLink: "#",
      color: "from-blue-500 to-violet-500",
    },
    {
      id: 2,
      title: "Blog Template",
      description: "A modern, responsive blog template with dark mode support, comment system, and optimized for SEO.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "Prisma"],
      demoLink: "#",
      codeLink: "#",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: "3D Product Showcase",
      description:
        "An interactive 3D product viewer with zoom, rotate, and explode view capabilities for e-commerce applications.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Three.js", "React Three Fiber", "TypeScript", "GSAP"],
      demoLink: "#",
      codeLink: "#",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Task Management Application",
      description:
        "A full-featured task management app with drag-and-drop interface, team collaboration, and progress tracking.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Redux", "Firebase", "Styled Components"],
      demoLink: "#",
      codeLink: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 5,
      title: "Portfolio for Visual Artists",
      description:
        "A minimalist portfolio template designed for photographers and visual artists with gallery layouts and smooth transitions.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity.io"],
      demoLink: "#",
      codeLink: "#",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <div className={`min-h-screen bg-background ${darkMode ? "dark" : ""}`}>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="text-lg font-bold">DevPortfolio</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container py-12 md:py-24">
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Crafting Digital <span className="text-primary">Experiences</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              A showcase of my web development projects, from interactive dashboards to 3D product viewers. Each project
              represents a unique challenge and solution.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full">
                View All Projects
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </section>

        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.codeLink}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demoLink}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="rounded-lg bg-muted p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
              <p className="text-muted-foreground max-w-2xl mb-6">
                I'm currently available for freelance projects and open to discussing new opportunities. If you have a
                project in mind or just want to chat, feel free to reach out.
              </p>
              <Button className="group">
                Contact Me
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code className="h-5 w-5" />
            <span className="font-semibold">DevPortfolio</span>
          </div>
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

