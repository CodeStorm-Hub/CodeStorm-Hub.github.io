import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, ExternalLinkIcon, StarIcon, CopyIcon } from "@radix-ui/react-icons"
import { getAllProjects, getFeaturedProjects } from "@/lib/project-data"

export const metadata = {
  title: "Projects",
  description: "Explore our open-source projects and contributions to the community.",
}

export default function ProjectsPage() {
  const allProjects = getAllProjects()
  const featuredProjects = getFeaturedProjects(3)
  const otherProjects = allProjects.filter(p => !featuredProjects.some(fp => fp.slug === p.slug))

  const getTechBadgeColor = (tech: string) => {
    const colors: Record<string, string> = {
      'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'TypeScript': 'bg-blue-100 text-blue-800 border-blue-200',
      'Python': 'bg-green-100 text-green-800 border-green-200',
      'PHP': 'bg-purple-100 text-purple-800 border-purple-200',
      'HTML': 'bg-orange-100 text-orange-800 border-orange-200',
      'CSS': 'bg-pink-100 text-pink-800 border-pink-200',
      'Go': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Rust': 'bg-red-100 text-red-800 border-red-200',
      'Java': 'bg-amber-100 text-amber-800 border-amber-200',
    }
    return colors[tech] || 'bg-secondary text-secondary-foreground border-border'
  }

  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the open-source projects we&apos;re building to solve real-world problems 
              and empower developers worldwide. From SaaS platforms to AI/ML tools.
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <Card key={project.slug} className="border-2 border-primary/20 h-full flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl">{project.name}</CardTitle>
                          <CardDescription className="mt-2">
                            {project.overview || project.description || 'No description available'}
                          </CardDescription>
                        </div>
                        {project.primaryLanguage && (
                          <span className={`text-xs font-medium px-2 py-1 rounded border ${getTechBadgeColor(project.primaryLanguage)}`}>
                            {project.primaryLanguage}
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      {project.github && (
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          {project.stars !== undefined && (
                            <div className="flex items-center gap-1">
                              <StarIcon className="h-3 w-3" />
                              {project.stars}
                            </div>
                          )}
                          {project.forks !== undefined && (
                            <div className="flex items-center gap-1">
                              <CopyIcon className="h-3 w-3" />
                              {project.forks}
                            </div>
                          )}
                          <div className="text-xs">
                            Updated: {project.lastUpdated || 'Unknown'}
                          </div>
                        </div>
                      )}
                      {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.techStack.slice(0, 3).map((tech, idx) => (
                            <span 
                              key={idx} 
                              className={`text-xs px-2 py-1 rounded border ${getTechBadgeColor(tech)}`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="text-xs text-muted-foreground">
                              +{project.techStack.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="gap-2 pt-0">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.liveDemo && (
                        <Button size="sm" asChild>
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">All Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherProjects.map((project) => (
                  <Card key={project.slug} className="h-full flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{project.name}</CardTitle>
                          {project.overview && (
                            <CardDescription className="mt-1 line-clamp-2">
                              {project.overview}
                            </CardDescription>
                          )}
                        </div>
                        {project.primaryLanguage && (
                          <span className={`text-xs font-medium px-2 py-1 rounded border ${getTechBadgeColor(project.primaryLanguage)}`}>
                            {project.primaryLanguage}
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          {project.stars !== undefined && (
                            <div className="flex items-center gap-1">
                              <StarIcon className="h-3 w-3" />
                              {project.stars}
                            </div>
                          )}
                          {project.visibility && (
                            <span className={`text-xs px-1 py-0.5 rounded ${
                              project.visibility === 'Public' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {project.visibility}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-1">
                          {project.github && (
                            <Button variant="ghost" size="sm" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <GitHubLogoIcon className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.liveDemo && (
                            <Button variant="ghost" size="sm" asChild>
                              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                <ExternalLinkIcon className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Portfolio Project */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">CodeStorm Hub Portfolio</CardTitle>
                  <CardDescription className="text-base mt-2">
                    A modern, accessible portfolio website built with Next.js, Tailwind CSS, and Radix UI
                  </CardDescription>
                </div>
                <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                  Portfolio
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This portfolio website showcases modern web development practices using cutting-edge 
                technologies and design systems. It serves as both our community hub and a reference 
                implementation for best practices in web development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">Next.js 15</span>
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">Tailwind CSS 4</span>
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">Radix UI</span>
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">TypeScript</span>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button asChild>
                <a href="https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  View Source
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://codestorm-hub.github.io" target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </div>
  )
}