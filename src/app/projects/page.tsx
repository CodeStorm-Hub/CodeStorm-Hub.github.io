import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GitHubLogoIcon, ExternalLinkIcon, StarIcon, CopyIcon, CalendarIcon } from "@radix-ui/react-icons"
import { getAllProjects, getFeaturedProjects, getAllCategories } from "@/lib/project-data"

export const metadata = {
  title: "Projects",
  description: "Explore our comprehensive collection of open-source projects and contributions to the community.",
}

export default function ProjectsPage() {
  const allProjects = getAllProjects()
  const featuredProjects = getFeaturedProjects(6)
  const categories = getAllCategories()
  const otherProjects = allProjects.filter(p => !featuredProjects.some(fp => fp.slug === p.slug))

  const getStatusBadge = (status: string | undefined) => {
    const statusConfig = {
      'Active': { emoji: '✅', color: 'bg-green-100 text-green-800 border-green-200' },
      'Archived': { emoji: '📦', color: 'bg-gray-100 text-gray-800 border-gray-200' },
      'Maintenance': { emoji: '🚧', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
      'In Development': { emoji: '🔄', color: 'bg-blue-100 text-blue-800 border-blue-200' },
      'Under Construction': { emoji: '🏗️', color: 'bg-orange-100 text-orange-800 border-orange-200' },
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Active']
    return (
      <Badge variant="outline" className={`${config.color} text-xs font-medium`}>
        <span className="mr-1">{config.emoji}</span>
        {status}
      </Badge>
    )
  }

  const getTechBadgeColor = (tech: string) => {
    const colors: Record<string, string> = {
      'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'TypeScript': 'bg-blue-100 text-blue-800 border-blue-200',
      'Python': 'bg-green-100 text-green-800 border-green-200',
      'PHP': 'bg-purple-100 text-purple-800 border-purple-200',
      'Laravel': 'bg-red-100 text-red-800 border-red-200',
      'Vue.js': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'React': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Next.js': 'bg-gray-100 text-gray-800 border-gray-200',
      'HTML': 'bg-orange-100 text-orange-800 border-orange-200',
      'CSS': 'bg-pink-100 text-pink-800 border-pink-200',
      'Node.js': 'bg-lime-100 text-lime-800 border-lime-200',
      'MySQL': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    }
    return colors[tech] || 'bg-secondary text-secondary-foreground border-border'
  }

  const getCategoryBadge = (category: string | undefined) => {
    if (!category) return null
    const categoryColors: Record<string, string> = {
      'Web Development': 'bg-blue-50 text-blue-700 border-blue-200',
      'E-commerce': 'bg-green-50 text-green-700 border-green-200',
      'Mobile App': 'bg-purple-50 text-purple-700 border-purple-200',
      'API/Backend': 'bg-orange-50 text-orange-700 border-orange-200',
      'Academic Project': 'bg-indigo-50 text-indigo-700 border-indigo-200',
      'Financial Management': 'bg-emerald-50 text-emerald-700 border-emerald-200',
      'Hotel Management': 'bg-rose-50 text-rose-700 border-rose-200',
    }
    const color = categoryColors[category] || 'bg-gray-50 text-gray-700 border-gray-200'
    return (
      <Badge variant="outline" className={`${color} text-xs`}>
        {category}
      </Badge>
    )
  }

  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Our Projects Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive collection of {allProjects.length} open-source projects spanning multiple technologies 
              and domains. From enterprise SaaS platforms to specialized tools, each project demonstrates our commitment to 
              quality, innovation, and community contribution.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {categories.slice(0, 6).map((category) => (
                <Badge key={category} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
              {categories.length > 6 && (
                <Badge variant="secondary" className="text-xs text-muted-foreground">
                  +{categories.length - 6} more
                </Badge>
              )}
            </div>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Featured Projects</h2>
                <Badge variant="outline" className="text-sm">
                  {featuredProjects.length} Active Projects
                </Badge>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <Card key={project.slug} className="border-2 border-primary/20 h-full flex flex-col hover:shadow-lg transition-all duration-200 hover:border-primary/40 group">
                    <Link href={`/projects/${project.slug}`} className="h-full flex flex-col">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl line-clamp-1 group-hover:text-primary transition-colors">{project.name}</CardTitle>
                          {project.primaryLanguage && (
                            <Badge variant="outline" className={`${getTechBadgeColor(project.primaryLanguage)} text-xs flex-shrink-0 ml-2`}>
                              {project.primaryLanguage}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          {getStatusBadge(project.status)}
                          {getCategoryBadge(project.category)}
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {project.overview || project.description || 'Innovative project demonstrating modern development practices and solving real-world challenges.'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 space-y-4 pt-0">
                        {/* Key Features */}
                        {project.keyFeatures && project.keyFeatures.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Features</h4>
                            <ul className="text-sm space-y-1">
                              {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="text-muted-foreground line-clamp-1">
                                  • {feature.split(':')[0]}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Tech Stack */}
                        {project.techStack && project.techStack.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground mb-2">Tech Stack</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.techStack.slice(0, 4).map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                              {project.techStack.length > 4 && (
                                <Badge variant="secondary" className="text-xs text-muted-foreground">
                                  +{project.techStack.length - 4}
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Project Stats */}
                        {project.github && (
                          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                            {project.stars !== undefined && (
                              <div className="flex items-center gap-1">
                                <StarIcon className="h-3 w-3" />
                                <span>{project.stars}</span>
                              </div>
                            )}
                            {project.forks !== undefined && (
                              <div className="flex items-center gap-1">
                                <CopyIcon className="h-3 w-3" />
                                <span>{project.forks}</span>
                              </div>
                            )}
                            {project.lastUpdated && (
                              <div className="flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                <span className="text-xs">{project.lastUpdated}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Link>
                    <CardFooter className="gap-2 pt-0">
                      {project.liveDemo && (
                        <Button size="sm" asChild className="flex-1">
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                            GitHub
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
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">All Projects</h2>
                <Badge variant="outline" className="text-sm">
                  {allProjects.length} Total Projects
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherProjects.map((project) => (
                  <Card key={project.slug} className="h-full flex flex-col hover:shadow-md transition-shadow duration-200 group">
                    <Link href={`/projects/${project.slug}`} className="h-full flex flex-col">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg line-clamp-1 group-hover:text-primary transition-colors">{project.name}</CardTitle>
                            <div className="flex items-center gap-2 mt-2 mb-2">
                              {getStatusBadge(project.status)}
                              {getCategoryBadge(project.category)}
                              {project.visibility && (
                                <Badge variant="outline" className={`text-xs ${
                                  project.visibility === 'Public' 
                                    ? 'bg-green-50 text-green-700 border-green-200' 
                                    : 'bg-gray-50 text-gray-700 border-gray-200'
                                }`}>
                                  {project.visibility === 'Public' ? '🌐' : '🔐'} {project.visibility}
                                </Badge>
                              )}
                            </div>
                            {project.overview && (
                              <CardDescription className="mt-2 line-clamp-2 text-sm">
                                {project.overview}
                              </CardDescription>
                            )}
                          </div>
                          {project.primaryLanguage && (
                            <Badge variant="outline" className={`${getTechBadgeColor(project.primaryLanguage)} text-xs flex-shrink-0 ml-3`}>
                              {project.primaryLanguage}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 pt-0 space-y-3">
                        {/* Tech Stack */}
                        {project.techStack && project.techStack.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.slice(0, 3).map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.techStack.length > 3 && (
                              <Badge variant="secondary" className="text-xs text-muted-foreground">
                                +{project.techStack.length - 3} more
                              </Badge>
                            )}
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            {project.stars !== undefined && (
                              <div className="flex items-center gap-1">
                                <StarIcon className="h-3 w-3" />
                                <span>{project.stars}</span>
                              </div>
                            )}
                            {project.lastUpdated && (
                              <div className="flex items-center gap-1 text-xs">
                                <CalendarIcon className="h-3 w-3" />
                                <span>{project.lastUpdated}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex gap-1">
                            {project.liveDemo && (
                              <Button variant="ghost" size="sm" asChild>
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLinkIcon className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                            {project.github && (
                              <Button variant="ghost" size="sm" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <GitHubLogoIcon className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <Separator className="my-8" />

          {/* Portfolio Project */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">CodeStorm Hub Portfolio</CardTitle>
                  <CardDescription className="text-base mt-2">
                    A modern, accessible, and high-performance portfolio website showcasing professional 
                    web development practices and community-driven open source projects.
                  </CardDescription>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  ⭐ Showcase Project
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This portfolio website demonstrates cutting-edge web development technologies and serves as both 
                our community hub and a reference implementation for modern web standards, accessibility best practices, 
                and performance optimization techniques.
              </p>
              <div>
                <h4 className="text-sm font-semibold mb-2">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">Next.js 15</Badge>
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">TypeScript</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">Tailwind CSS 4</Badge>
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200">Radix UI</Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Vercel</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Server-side rendering with optimal performance</li>
                  <li>• Full accessibility compliance (WCAG 2.1 AA)</li>
                  <li>• Responsive design with mobile-first approach</li>
                  <li>• Dark/light theme support</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button asChild>
                <a href="https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  View Source Code
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://codestorm-hub.github.io" target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  Live Website
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </div>
  )
}