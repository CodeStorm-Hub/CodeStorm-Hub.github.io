import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, GitHubLogoIcon, PlusIcon, ArrowUpIcon, GearIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Changelog",
  description: "Stay up to date with all CodeStorm Hub updates, releases, and improvements.",
  openGraph: {
    title: "Changelog | CodeStorm Hub",
    description: "Stay up to date with all CodeStorm Hub updates, releases, and improvements.",
  },
}

const changelogEntries = [
  {
    version: "v0.2.0",
    date: "2024-01-15",
    type: "major",
    title: "Community Platform Launch",
    description: "Major update introducing comprehensive community features and navigation.",
    changes: [
      {
        type: "added",
        items: [
          "Team page with contributor showcase",
          "Contact page with multiple communication channels",
          "Contributing guide with step-by-step instructions",
          "Community guidelines and values",
          "Blog system for articles and updates",
          "Project roadmap with transparent planning",
        ],
      },
      {
        type: "improved", 
        items: [
          "Enhanced navigation structure",
          "Better responsive design across all pages",
          "Improved accessibility with proper ARIA labels",
          "Optimized images using Next.js Image component",
        ],
      },
      {
        type: "fixed",
        items: [
          "Header navigation now properly links to all pages",
          "Consistent styling across different page types",
          "Mobile menu improvements",
        ],
      },
    ],
  },
  {
    version: "v0.1.0",
    date: "2024-01-01", 
    type: "initial",
    title: "Initial Platform Release",
    description: "First public release of the CodeStorm Hub platform with core functionality.",
    changes: [
      {
        type: "added",
        items: [
          "Homepage with hero section and feature highlights",
          "About page with mission and values",
          "Projects page with showcase layout",
          "Basic responsive design system",
          "Tailwind CSS 4 integration",
          "Radix UI component library",
          "Next.js 16 with App Router",
          "TypeScript configuration",
        ],
      },
      {
        type: "technical",
        items: [
          "ESLint configuration for code quality",
          "Automated build and deployment pipeline",
          "Vercel deployment configuration",
          "SEO optimization with metadata",
        ],
      },
    ],
  },
]

const changeTypeConfig = {
  added: {
    icon: PlusIcon,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/20",
    label: "Added",
  },
  improved: {
    icon: ArrowUpIcon,
    color: "text-blue-600", 
    bg: "bg-blue-100 dark:bg-blue-900/20",
    label: "Improved",
  },
  fixed: {
    icon: GearIcon,
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/20", 
    label: "Fixed",
  },
  technical: {
    icon: GearIcon,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/20",
    label: "Technical",
  },
}

const versionTypeConfig = {
  major: {
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-900/20",
    label: "Major Release",
  },
  minor: {
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/20", 
    label: "Minor Release",
  },
  patch: {
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/20",
    label: "Patch Release", 
  },
  initial: {
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/20",
    label: "Initial Release",
  },
}

export default function ChangelogPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Keep track of all updates, improvements, and new features added to CodeStorm Hub. 
              We believe in transparent development and regular communication with our community.
            </p>
          </div>

          {/* Subscribe to Updates */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>
                Get notified about new releases and updates
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a 
                    href="https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    Watch Releases
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/blog">
                    Subscribe to Blog
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Changelog Entries */}
          <div className="space-y-8">
            {changelogEntries.map((entry, index) => {
              const versionConfig = versionTypeConfig[entry.type as keyof typeof versionTypeConfig]
              
              return (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index < changelogEntries.length - 1 && (
                    <div className="absolute left-6 top-20 bottom-0 w-px bg-border opacity-30" />
                  )}
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-primary text-sm">{entry.version.replace('v', '')}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <CardTitle className="text-2xl">{entry.title}</CardTitle>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${versionConfig.bg} ${versionConfig.color}`}>
                                {versionConfig.label}
                              </span>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <CalendarIcon className="h-4 w-4" />
                                {new Date(entry.date).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <CardDescription className="text-base">{entry.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="ml-16 space-y-6">
                        {entry.changes.map((changeGroup, changeIndex) => {
                          const config = changeTypeConfig[changeGroup.type as keyof typeof changeTypeConfig]
                          const Icon = config.icon
                          
                          return (
                            <div key={changeIndex}>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <div className={`p-1 rounded ${config.bg}`}>
                                  <Icon className={`h-3 w-3 ${config.color}`} />
                                </div>
                                {config.label}
                              </h4>
                              <ul className="space-y-2 ml-6">
                                {changeGroup.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Release Info */}
          <Card>
            <CardHeader>
              <CardTitle>Release Information</CardTitle>
              <CardDescription>
                How we manage versions and releases
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Version Numbering</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We follow semantic versioning (SemVer) for our releases:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li><strong>Major (x.0.0):</strong> Breaking changes</li>
                    <li><strong>Minor (0.x.0):</strong> New features</li>
                    <li><strong>Patch (0.0.x):</strong> Bug fixes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Release Schedule</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We aim for regular releases based on community needs:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li><strong>Major releases:</strong> Quarterly</li>
                    <li><strong>Minor releases:</strong> Monthly</li>
                    <li><strong>Patch releases:</strong> As needed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="/roadmap">
                  View Roadmap
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href="https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  View Source
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              See what&apos;s coming next or contribute to our open source projects.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}