import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReaderIcon, VideoIcon, CodeIcon, GlobeIcon, RocketIcon, PersonIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources",
  description: "Curated learning resources, tools, and guides for the CodeStorm Hub community.",
  openGraph: {
    title: "Resources | CodeStorm Hub",
    description: "Curated learning resources, tools, and guides for the CodeStorm Hub community.",
  },
}

const resourceCategories = [
  {
    title: "Getting Started",
    description: "Essential resources for new contributors and community members",
    icon: RocketIcon,
    resources: [
      {
        title: "Contributing Guide",
        description: "Learn how to contribute to our projects",
        type: "Guide",
        url: "/contributing",
        internal: true,
      },
      {
        title: "Community Guidelines",
        description: "Understand our community values and guidelines",
        type: "Guide", 
        url: "/community",
        internal: true,
      },
      {
        title: "Code of Conduct",
        description: "Our commitment to inclusive and respectful interactions",
        type: "Policy",
        url: "/code-of-conduct",
        internal: true,
      },
      {
        title: "First Contributions",
        description: "A hands-on tutorial for making your first open source contribution",
        type: "Tutorial",
        url: "https://github.com/firstcontributions/first-contributions",
        internal: false,
      },
    ],
  },
  {
    title: "Development & Tools",
    description: "Technical resources, tools, and best practices for developers", 
    icon: CodeIcon,
    resources: [
      {
        title: "Next.js Documentation",
        description: "Official documentation for Next.js framework",
        type: "Documentation",
        url: "https://nextjs.org/docs",
        internal: false,
      },
      {
        title: "Tailwind CSS Guide",
        description: "Utility-first CSS framework documentation",
        type: "Documentation", 
        url: "https://tailwindcss.com/docs",
        internal: false,
      },
      {
        title: "Radix UI Primitives",
        description: "Unstyled, accessible components for React",
        type: "Components",
        url: "https://www.radix-ui.com/primitives",
        internal: false,
      },
      {
        title: "TypeScript Handbook",
        description: "Learn TypeScript from basics to advanced features",
        type: "Tutorial",
        url: "https://www.typescriptlang.org/docs/",
        internal: false,
      },
    ],
  },
  {
    title: "Open Source",
    description: "Learn about open source development and best practices",
    icon: GlobeIcon,
    resources: [
      {
        title: "Open Source Guide",
        description: "Comprehensive guide to participating in open source",
        type: "Guide",
        url: "https://opensource.guide/",
        internal: false,
      },
      {
        title: "GitHub Docs",
        description: "Official GitHub documentation and tutorials",
        type: "Documentation",
        url: "https://docs.github.com/",
        internal: false,
      },
      {
        title: "Git Handbook", 
        description: "Learn Git version control from the basics",
        type: "Tutorial",
        url: "https://docs.github.com/en/get-started/using-git/about-git",
        internal: false,
      },
      {
        title: "Choosing a License",
        description: "Guide to choosing the right license for your project",
        type: "Guide",
        url: "https://choosealicense.com/",
        internal: false,
      },
    ],
  },
  {
    title: "Learning & Tutorials",
    description: "Educational content and interactive learning resources",
    icon: ReaderIcon,
    resources: [
      {
        title: "React Documentation",
        description: "Official React documentation and learning resources",
        type: "Documentation",
        url: "https://react.dev/",
        internal: false,
      },
      {
        title: "MDN Web Docs",
        description: "Comprehensive web development documentation", 
        type: "Documentation",
        url: "https://developer.mozilla.org/",
        internal: false,
      },
      {
        title: "freeCodeCamp",
        description: "Free coding tutorials and interactive lessons",
        type: "Course",
        url: "https://www.freecodecamp.org/",
        internal: false,
      },
      {
        title: "The Odin Project",
        description: "Free full stack curriculum with projects",
        type: "Course", 
        url: "https://www.theodinproject.com/",
        internal: false,
      },
    ],
  },
  {
    title: "Videos & Media",
    description: "Video tutorials, talks, and multimedia learning content",
    icon: VideoIcon,
    resources: [
      {
        title: "Vercel YouTube Channel",
        description: "Next.js tutorials and web development content",
        type: "Video",
        url: "https://www.youtube.com/@VercelHQ",
        internal: false,
      },
      {
        title: "GitHub YouTube Channel", 
        description: "Git, GitHub, and open source tutorials",
        type: "Video",
        url: "https://www.youtube.com/@GitHub",
        internal: false,
      },
      {
        title: "React Conf Talks",
        description: "Annual React conference presentations",
        type: "Video",
        url: "https://www.youtube.com/c/reactjs",
        internal: false,
      },
      {
        title: "Web Dev Simplified",
        description: "Clear and concise web development tutorials",
        type: "Video",
        url: "https://www.youtube.com/@WebDevSimplified",
        internal: false,
      },
    ],
  },
  {  
    title: "Community & Networking",
    description: "Connect with other developers and join communities",
    icon: PersonIcon,
    resources: [
      {
        title: "GitHub Discussions",
        description: "Join our community discussions and Q&A",
        type: "Community",
        url: "https://github.com/orgs/CodeStorm-Hub/discussions",
        internal: false,
      },
      {
        title: "Dev.to Community",
        description: "Share articles and connect with developers worldwide",
        type: "Community",
        url: "https://dev.to/",
        internal: false,
      },
      {
        title: "Stack Overflow",
        description: "Get help with programming questions and answers",
        type: "Q&A",
        url: "https://stackoverflow.com/",
        internal: false,
      },
      {
        title: "Reddit r/webdev",
        description: "Web development community discussions",
        type: "Community", 
        url: "https://www.reddit.com/r/webdev/",
        internal: false,
      },
    ],
  },
]

const resourceTypeColors = {
  Guide: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
  Documentation: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  Tutorial: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
  Course: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
  Video: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
  Community: "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400",
  Components: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400",
  Policy: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
  "Q&A": "bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400",
}

export default function ResourcesPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Learning Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curated resources to help you learn, grow, and contribute to open source projects. 
              Whether you&apos;re just starting out or looking to advance your skills, we&apos;ve got you covered.
            </p>
          </div>

          {/* Quick Start */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">New to Open Source?</CardTitle>
              <CardDescription className="text-base">
                Start your journey with these essential resources
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you&apos;re new to open source development, start with our contributing guide 
                and community guidelines. Then explore the Getting Started section below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/contributing">
                    Contributing Guide
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/community">
                    Community Guidelines
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resource Categories */}
          <div className="space-y-12">
            {resourceCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.resources.map((resource, resourceIndex) => (
                      <Card key={resourceIndex} className="group hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${
                              resourceTypeColors[resource.type as keyof typeof resourceTypeColors]
                            }`}>
                              {resource.type}
                            </span>
                          </div>
                          <CardDescription>{resource.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            asChild
                          >
                            <a
                              href={resource.url}
                              target={resource.internal ? undefined : "_blank"}
                              rel={resource.internal ? undefined : "noopener noreferrer"}
                            >
                              {resource.internal ? "View Resource" : "Visit Site"}
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Suggest Resources */}
          <Card className="bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Suggest a Resource</CardTitle>
              <CardDescription className="text-base">
                Know of a great resource that should be included?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Help us improve this collection by suggesting new resources. We&apos;re always looking 
                for high-quality, relevant content that can help our community learn and grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a 
                    href="https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io/issues/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Suggest Resource
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">
                    Get in Touch
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter */}
          <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription className="text-base">
                Get notified about new resources and learning opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Subscribe to our newsletter to receive curated resources, tutorials, 
                and updates about new learning opportunities in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="/blog">
                    Read Our Blog
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/roadmap">
                    View Roadmap
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}