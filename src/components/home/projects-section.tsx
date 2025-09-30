import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Stack } from "@/components/ui/stack"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GitHubLogoIcon, StarIcon, PersonIcon, ExternalLinkIcon, CheckCircledIcon, ArchiveIcon, UpdateIcon, ReloadIcon, ComponentInstanceIcon } from "@radix-ui/react-icons"
import { getFeaturedProjects } from "@/lib/project-data"

interface ProjectsSectionProps {
  className?: string
}

export default function ProjectsSection({ className }: ProjectsSectionProps) {
  const featuredProjects = getFeaturedProjects(6)

  const getStatusBadge = (status: string | undefined) => {
    const statusConfig = {
      'Active': { icon: CheckCircledIcon, color: 'bg-green-100 text-green-800 border-green-200' },
      'Archived': { icon: ArchiveIcon, color: 'bg-gray-100 text-gray-800 border-gray-200' },
      'Maintenance': { icon: UpdateIcon, color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
      'In Development': { icon: ReloadIcon, color: 'bg-blue-100 text-blue-800 border-blue-200' },
      'Under Construction': { icon: ComponentInstanceIcon, color: 'bg-orange-100 text-orange-800 border-orange-200' },
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Active']
    const Icon = config.icon
    return (
      <Badge variant="outline" className={`${config.color} text-xs font-medium`}>
        <Icon className="mr-1 h-3 w-3" />
        {status}
      </Badge>
    )
  }

  return (
    <section className={className} aria-labelledby="projects-heading">
      <Container className="py-16 sm:py-24">
        <Stack gap={8}>
          {/* Section Header */}
          <Stack gap={4} align="center" className="text-center">
            <Typography variant="h2" id="projects-heading">
              Featured Projects
            </Typography>
            <Typography variant="lead" className="max-w-2xl">
              Explore our open source initiatives showcasing modern development practices, 
              innovative solutions, and community-driven excellence across diverse technology domains.
            </Typography>
          </Stack>

          {/* Projects Grid */}
          <Grid cols={3} gap={6} className="w-full">
            {featuredProjects.map((project) => (
              <Card key={project.slug} className="h-full hover:shadow-lg transition-all duration-200 hover:border-primary/40 group">
                <Link href={`/projects/${project.slug}`} className="h-full flex flex-col">
                <CardHeader className="pb-3">
                  <Stack gap={3}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                      {project.primaryLanguage && (
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {project.primaryLanguage}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {getStatusBadge(project.status)}
                      {project.category && (
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      )}
                    </div>
                  </Stack>
                </CardHeader>
                <CardContent className="flex-1">
                  <Stack gap={4}>
                    <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                      {project.overview || project.description || "Innovative project demonstrating modern development practices and solving real-world challenges with cutting-edge technology."}
                    </CardDescription>
                    
                    {/* Key Features Preview */}
                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                          Key Features
                        </h4>
                        <ul className="text-xs space-y-1">
                          {project.keyFeatures.slice(0, 2).map((feature, idx) => (
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
                        <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.slice(0, 3).map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.techStack.length > 3 && (
                            <Badge variant="secondary" className="text-xs text-muted-foreground">
                              +{project.techStack.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Project Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border/50">
                      {project.stars !== undefined && (
                        <div className="flex items-center gap-1">
                          <StarIcon className="h-4 w-4" aria-hidden="true" />
                          <span aria-label={`${project.stars} stars`}>
                            {project.stars.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {project.forks !== undefined && (
                        <div className="flex items-center gap-1">
                          <PersonIcon className="h-4 w-4" aria-hidden="true" />
                          <span aria-label={`${project.forks} forks`}>
                            {project.forks}
                          </span>
                        </div>
                      )}
                      {project.lastUpdated && (
                        <div className="text-xs">
                          Updated {project.lastUpdated}
                        </div>
                      )}
                    </div>
                  </Stack>
                </CardContent>
                </Link>
                <div className="p-4 pt-0">
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveDemo && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a 
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLinkIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <GitHubLogoIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </Grid>

          {/* View All Projects CTA */}
          <div className="flex justify-center pt-8">
            <Button size="lg" asChild className="group">
              <Link href="/projects">
                View All Projects
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </Stack>
      </Container>
    </section>
  )
}

export type { ProjectsSectionProps }