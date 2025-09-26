import Link from "next/link"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

// Mock project data - in a real app, this would come from an API or database
const projects = [
  {
    id: 1,
    name: "CodeStorm CLI",
    description: "A powerful command-line interface for streamlining development workflows and project scaffolding.",
    technologies: ["TypeScript", "Node.js", "Commander.js"],
    githubUrl: "https://github.com/CodeStorm-Hub/codestorm-cli",
    liveUrl: "https://www.npmjs.com/package/@codestorm-hub/cli",
    stars: 127,
    forks: 23,
    status: "Active",
  },
  {
    id: 2,
    name: "React Component Library",
    description: "A modern, accessible React component library built with TypeScript and styled with Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    githubUrl: "https://github.com/CodeStorm-Hub/react-components",
    liveUrl: "https://components.codestorm-hub.dev",
    stars: 89,
    forks: 15,
    status: "Active",
  },
  {
    id: 3,
    name: "API Documentation Generator",
    description: "Automatically generate beautiful API documentation from OpenAPI/Swagger specifications.",
    technologies: ["Python", "FastAPI", "OpenAPI", "React"],
    githubUrl: "https://github.com/CodeStorm-Hub/api-docs-gen",
    liveUrl: "https://api-docs.codestorm-hub.dev",
    stars: 234,
    forks: 41,
    status: "Active",
  },
  {
    id: 4,
    name: "Docker Development Environment",
    description: "Pre-configured Docker environments for various tech stacks to get developers up and running quickly.",
    technologies: ["Docker", "Docker Compose", "Shell Scripts"],
    githubUrl: "https://github.com/CodeStorm-Hub/dev-environments",
    liveUrl: null,
    stars: 156,
    forks: 67,
    status: "Active",
  },
  {
    id: 5,
    name: "Machine Learning Toolkit",
    description: "A collection of ML utilities and pre-trained models for common machine learning tasks.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Jupyter"],
    githubUrl: "https://github.com/CodeStorm-Hub/ml-toolkit",
    liveUrl: "https://ml.codestorm-hub.dev",
    stars: 312,
    forks: 89,
    status: "Beta",
  },
  {
    id: 6,
    name: "VS Code Extension Pack",
    description: "A curated collection of VS Code extensions for enhanced development productivity.",
    technologies: ["TypeScript", "VS Code API"],
    githubUrl: "https://github.com/CodeStorm-Hub/vscode-extensions",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=codestorm-hub.extension-pack",
    stars: 78,
    forks: 12,
    status: "Active",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our open-source projects built by the community, for the community. 
            Each project represents our commitment to innovation and collaboration.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">12+</div>
            <div className="text-muted-foreground">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">1.2k+</div>
            <div className="text-muted-foreground">GitHub Stars</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">300+</div>
            <div className="text-muted-foreground">Contributors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-muted-foreground">Forks</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </div>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex space-x-2 w-full">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" asChild className="flex-1">
                      <Link 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate developers to join our community. 
            Check out our GitHub organization and start contributing today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link 
                href="https://github.com/CodeStorm-Hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 w-4 h-4" />
                Browse All Projects
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}