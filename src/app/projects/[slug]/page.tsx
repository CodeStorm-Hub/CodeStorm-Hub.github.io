import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GitHubLogoIcon, ExternalLinkIcon, StarIcon, CopyIcon, CalendarIcon, PersonIcon } from "@radix-ui/react-icons"
import { getAllProjects, getProjectBySlug } from "@/lib/project-data"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.name} | CodeStorm Hub Projects`,
    description: project.overview || project.description || `Learn more about ${project.name} - an innovative project by CodeStorm Hub.`,
    openGraph: {
      title: project.name,
      description: project.overview || project.description,
      type: "website",
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

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
      <Badge variant="outline" className={`${config.color} text-sm font-medium`}>
        <span className="mr-2">{config.emoji}</span>
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
    }
    return colors[tech] || 'bg-secondary text-secondary-foreground border-border'
  }

  return (
    <div className="py-12">
      <Container>
        <div className="space-y-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{project.name}</span>
          </nav>

          {/* Project Header */}
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-bold tracking-tight">{project.name}</h1>
                  {project.primaryLanguage && (
                    <Badge variant="outline" className={`${getTechBadgeColor(project.primaryLanguage)} text-sm`}>
                      {project.primaryLanguage}
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  {getStatusBadge(project.status)}
                  {project.category && (
                    <Badge variant="secondary" className="text-sm">
                      {project.category}
                    </Badge>
                  )}
                  {project.visibility && (
                    <Badge variant="outline" className={`text-sm ${
                      project.visibility === 'Public' 
                        ? 'bg-green-50 text-green-700 border-green-200' 
                        : 'bg-gray-50 text-gray-700 border-gray-200'
                    }`}>
                      {project.visibility === 'Public' ? '🌐' : '🔐'} {project.visibility}
                    </Badge>
                  )}
                </div>

                <p className="text-xl text-muted-foreground max-w-3xl">
                  {project.overview || project.description || 'An innovative project demonstrating modern development practices and solving real-world challenges.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-col">
                {project.liveDemo && (
                  <Button size="lg" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-5 w-5" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitHubLogoIcon className="mr-2 h-5 w-5" />
                      View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Project Stats */}
            {project.github && (
              <div className="flex items-center gap-6 text-muted-foreground">
                {project.stars !== undefined && (
                  <div className="flex items-center gap-2">
                    <StarIcon className="h-5 w-5" />
                    <span className="text-lg font-medium">{project.stars.toLocaleString()}</span>
                    <span className="text-sm">stars</span>
                  </div>
                )}
                {project.forks !== undefined && (
                  <div className="flex items-center gap-2">
                    <CopyIcon className="h-5 w-5" />
                    <span className="text-lg font-medium">{project.forks}</span>
                    <span className="text-sm">forks</span>
                  </div>
                )}
                {project.lastUpdated && (
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    <span className="text-sm">Updated {project.lastUpdated}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          <Separator />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">✨ Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.keyFeatures.map((feature, idx) => {
                        const [title, description] = feature.split(': ')
                        return (
                          <li key={idx} className="flex gap-3">
                            <span className="text-primary font-medium">•</span>
                            <div>
                              <span className="font-medium">{title}:</span>
                              <span className="text-muted-foreground ml-1">{description}</span>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Full Documentation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">📋 Complete Documentation</CardTitle>
                  <CardDescription>
                    Comprehensive project documentation including setup, usage, and contribution guidelines.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none dark:prose-invert">
                    <ReactMarkdown>{project.content}</ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technology Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🛠️ Technology Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className={getTechBadgeColor(tech)}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Project Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">📋 Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.architecture && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Architecture:</span>
                      <p className="text-sm">{project.architecture}</p>
                    </div>
                  )}
                  {project.repositorySize && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Repository Size:</span>
                      <p className="text-sm">{project.repositorySize}</p>
                    </div>
                  )}
                  {project.languages && project.languages.length > 0 && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Languages:</span>
                      <p className="text-sm">{project.languages.join(', ')}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contributors */}
              {project.contributors && project.contributors.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">👥 Contributors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {project.contributors.map((contributor, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <PersonIcon className="h-4 w-4" />
                          <span className="text-sm">{contributor}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🏷️ Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}