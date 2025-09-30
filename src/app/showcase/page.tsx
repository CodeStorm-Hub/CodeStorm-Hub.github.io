import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StarIcon, RocketIcon, HeartIcon, GlobeIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Showcase",
  description: "Discover organizations and projects using CodeStorm Hub solutions and see our community impact.",
  openGraph: {
    title: "Showcase | CodeStorm Hub",
    description: "Discover organizations and projects using CodeStorm Hub solutions and see our community impact.",
  },
}

const showcaseProjects = [
  {
    title: "CodeStorm Hub Portfolio",
    description: "Our own community website built with modern web technologies and accessibility-first design.",
    category: "Community Platform",
    technologies: ["Next.js", "Tailwind CSS", "Radix UI", "TypeScript"],
    stats: {
      contributors: 5,
      stars: 0,
      forks: 0,
    },
    links: {
      website: "https://codestorm-hub.github.io",
      github: "https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io",
    },
    featured: true,
    image: "https://github.com/CodeStorm-Hub.png",
  },
  // Placeholder for future projects
  {
    title: "Community Tools Suite",
    description: "A collection of developer tools and utilities to enhance open source contribution workflows.",
    category: "Developer Tools",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    stats: {
      contributors: 0,
      stars: 0,
      forks: 0,
    },
    links: {
      website: "#",
      github: "#",
    },
    featured: false,
    image: "https://github.com/CodeStorm-Hub.png",
    comingSoon: true,
  },
]

const adopters = [
  {
    name: "Open Source Enthusiasts",
    description: "Individual developers using our resources and contributing to projects",
    type: "Community",
    logo: "https://github.com/CodeStorm-Hub.png",
    size: "Individual Contributors",
  },
  // Placeholder for future adopters
  {
    name: "Educational Institutions",
    description: "Universities and coding bootcamps using our learning resources",
    type: "Education",
    logo: "https://github.com/CodeStorm-Hub.png",
    size: "Coming Soon",
    comingSoon: true,
  },
]

const communityStats = [
  {
    label: "Community Members",
    value: "Growing",
    icon: HeartIcon,
  },
  {
    label: "Projects",
    value: "1+",
    icon: RocketIcon,
  },
  {
    label: "Contributors",
    value: "5+",
    icon: StarIcon,
  },
  {
    label: "Countries",
    value: "Global",
    icon: GlobeIcon,
  },
]

export default function ShowcasePage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Community Showcase</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the amazing projects and organizations that are part of the CodeStorm Hub ecosystem. 
              See how our community is making an impact in the open source world.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{stat.value}</CardTitle>
                    <CardDescription className="text-sm">{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>

          {/* Featured Projects */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the projects that showcase the capabilities and principles of CodeStorm Hub development.
              </p>
            </div>
            
            <div className="space-y-6">
              {showcaseProjects.map((project, index) => (
                <Card key={index} className={project.featured ? "border-2 border-primary/20 bg-primary/5" : ""}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={project.image}
                          alt={`${project.title} logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {project.featured && (
                            <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                              Featured
                            </span>
                          )}
                          {project.comingSoon && (
                            <span className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 text-xs font-medium px-2 py-1 rounded">
                              Coming Soon
                            </span>
                          )}
                          <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                            {project.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{project.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats & Links */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <StarIcon className="h-3 w-3" />
                          <span>{project.stats.stars} stars</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>{project.stats.contributors} contributors</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>{project.stats.forks} forks</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        {!project.comingSoon && (
                          <>
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.links.website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Visit Site
                              </a>
                            </Button>
                            <Button size="sm" asChild>
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Code
                              </a>
                            </Button>
                          </>
                        )}
                        {project.comingSoon && (
                          <Button size="sm" disabled>
                            Coming Soon
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Adopters */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Who&apos;s Using CodeStorm Hub</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Organizations and individuals who have adopted our solutions and contribute to our ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {adopters.map((adopter, index) => (
                <Card key={index} className={adopter.comingSoon ? "opacity-60" : ""}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={adopter.logo}
                          alt={`${adopter.name} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-lg">{adopter.name}</CardTitle>
                          {adopter.comingSoon && (
                            <span className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 text-xs font-medium px-2 py-1 rounded">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                            {adopter.type}
                          </span>
                          <span>{adopter.size}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{adopter.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Success Stories</CardTitle>
              <CardDescription className="text-base">
                How our community is making a difference
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Open Source Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Building transparent, accessible solutions that benefit the entire community
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Learning & Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Providing resources and mentorship opportunities for developers at all levels
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    Connecting passionate individuals to work together on meaningful projects
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/community">
                    Join Our Community
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contributing">
                    Start Contributing
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Submit Your Project */}
          <Card className="bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Showcase Your Project</CardTitle>
              <CardDescription className="text-base">
                Built something amazing with CodeStorm Hub? We&apos;d love to feature it!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you&apos;ve contributed to our projects, used our resources, or built something 
                inspired by our community principles, we want to celebrate your work and share it 
                with others.
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>What we&apos;re looking for:</strong></p>
                <ul className="space-y-1 max-w-md mx-auto text-left">
                  <li>• Projects using our technologies or principles</li>
                  <li>• Organizations adopting our solutions</li>
                  <li>• Success stories and case studies</li>
                  <li>• Community contributions and achievements</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a 
                    href="https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io/issues/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Submit Project
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">
                    Contact Us
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="/blog">
                  Read Success Stories
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View All Projects
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Stay updated on new showcase additions and community highlights.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}