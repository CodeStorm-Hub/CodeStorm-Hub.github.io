import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon, ClockIcon, RocketIcon, LightningBoltIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roadmap",
  description: "See what's coming next for CodeStorm Hub. Track our progress and upcoming features.",
  openGraph: {
    title: "Roadmap | CodeStorm Hub",
    description: "See what's coming next for CodeStorm Hub. Track our progress and upcoming features.",
  },
}

const roadmapItems = [
  {
    title: "Community Platform Launch",
    description: "Launch the initial community platform with core features and documentation.",
    status: "completed",
    quarter: "Q1 2024",
    items: [
      "Portfolio website with modern design",
      "Project showcase and team pages", 
      "Community guidelines and contributing guides",
      "Basic navigation and responsive design",
    ],
  },
  {
    title: "Enhanced Developer Experience", 
    description: "Improve tooling and documentation to make contributing easier and more enjoyable.",
    status: "in-progress",
    quarter: "Q1 2024",
    items: [
      "Comprehensive API documentation",
      "Interactive code examples and tutorials",
      "Improved onboarding process",
      "Developer resources and learning materials",
    ],
  },
  {
    title: "Community Growth & Engagement",
    description: "Build tools and features to grow and engage our open source community.",
    status: "planned",
    quarter: "Q2 2024", 
    items: [
      "Blog and article publishing system",
      "Event management and community meetups",
      "Contributor recognition and rewards",
      "Enhanced project discovery and filtering",
    ],
  },
  {
    title: "Advanced Platform Features",
    description: "Add sophisticated features for project management and collaboration.",
    status: "planned", 
    quarter: "Q2-Q3 2024",
    items: [
      "Dynamic GitHub integration and stats",
      "Project analytics and insights",
      "Advanced search and filtering",
      "Multi-language support (i18n)",
    ],
  },
  {
    title: "Ecosystem Expansion",
    description: "Expand our ecosystem with new tools and integrations.",
    status: "future",
    quarter: "Q3-Q4 2024",
    items: [
      "API for third-party integrations",
      "Mobile app for community engagement", 
      "Advanced collaboration tools",
      "Enterprise features and support",
    ],
  },
]

const statusConfig = {
  completed: {
    icon: CheckIcon,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-800",
    label: "Completed",
  },
  "in-progress": {
    icon: ClockIcon,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/20", 
    border: "border-blue-200 dark:border-blue-800",
    label: "In Progress",
  },
  planned: {
    icon: RocketIcon,
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-800", 
    label: "Planned",
  },
  future: {
    icon: LightningBoltIcon,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/20",
    border: "border-purple-200 dark:border-purple-800",
    label: "Future",
  },
}

export default function RoadmapPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Project Roadmap</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track our progress and see what&apos;s coming next for CodeStorm Hub. 
              Our roadmap is transparent and community-driven—help us prioritize what matters most.
            </p>
          </div>

          {/* Status Legend */}
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(statusConfig).map(([status, config]) => {
              const Icon = config.icon
              return (
                <div key={status} className="flex items-center gap-2">
                  <div className={`p-1 rounded-full ${config.bg}`}>
                    <Icon className={`h-3 w-3 ${config.color}`} />
                  </div>
                  <span className="text-sm font-medium">{config.label}</span>
                </div>
              )
            })}
          </div>

          {/* Roadmap Timeline */}
          <div className="space-y-6">
            {roadmapItems.map((item, index) => {
              const config = statusConfig[item.status as keyof typeof statusConfig]
              const Icon = config.icon
              
              return (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index < roadmapItems.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-border opacity-30" />
                  )}
                  
                  <Card className={`${config.border} ${config.bg}`}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-full ${config.bg} ${config.border} border`}>
                          <Icon className={`h-5 w-5 ${config.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-medium px-2 py-1 rounded ${config.bg} ${config.color}`}>
                                {config.label}
                              </span>
                              <span className="text-sm text-muted-foreground font-medium">
                                {item.quarter}
                              </span>
                            </div>
                          </div>
                          <CardDescription className="text-base">{item.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="ml-14">
                        <h4 className="font-semibold mb-3">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {item.items.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-start gap-2">
                              <CheckIcon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                                item.status === 'completed' ? 'text-green-600' : 'text-muted-foreground'
                              }`} />
                              <span className={`text-sm ${
                                item.status === 'completed' ? 'text-foreground' : 'text-muted-foreground'
                              }`}>
                                {deliverable}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Community Input */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Shape Our Future</CardTitle>
              <CardDescription className="text-base">
                Help us prioritize and improve our roadmap
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our roadmap is community-driven. Share your ideas, vote on features, 
                and help us build what matters most to you and the open source community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a 
                    href="https://github.com/orgs/CodeStorm-Hub/discussions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Join Discussion
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io/issues/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Suggest Feature
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Progress Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-green-600">
                  {roadmapItems.filter(item => item.status === 'completed').length}
                </CardTitle>
                <CardDescription>Completed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-blue-600">
                  {roadmapItems.filter(item => item.status === 'in-progress').length}
                </CardTitle>
                <CardDescription>In Progress</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-orange-600">
                  {roadmapItems.filter(item => item.status === 'planned').length}
                </CardTitle>
                <CardDescription>Planned</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-purple-600">
                  {roadmapItems.filter(item => item.status === 'future').length}
                </CardTitle>
                <CardDescription>Future</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Updates */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="/changelog">
                  View Changelog
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/blog">
                  Read Updates
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Stay updated with our progress through our changelog and blog posts.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}