import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, CodeIcon, FileTextIcon, ChatBubbleIcon, StarIcon, CheckIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contributing",
  description: "Learn how to contribute to CodeStorm Hub projects and join our open source community.",
  openGraph: {
    title: "Contributing | CodeStorm Hub",
    description: "Learn how to contribute to CodeStorm Hub projects and join our open source community.",
  },
}

const contributionTypes = [
  {
    title: "Code Contributions",
    description: "Submit bug fixes, new features, or improvements to our projects",
    icon: CodeIcon,
    actions: [
      "Fork the repository",
      "Create a feature branch",
      "Make your changes",
      "Submit a pull request",
    ],
  },
  {
    title: "Documentation",
    description: "Help improve our docs, write tutorials, or create examples",
    icon: FileTextIcon,
    actions: [
      "Review existing docs",
      "Identify gaps or errors",
      "Write clear content",
      "Submit improvements",
    ],
  },
  {
    title: "Community Support",
    description: "Help other community members and answer questions",
    icon: ChatBubbleIcon,
    actions: [
      "Monitor GitHub Discussions",
      "Answer questions",
      "Share your expertise",
      "Welcome new contributors",
    ],
  },
  {
    title: "Testing & Feedback",
    description: "Test our projects, report bugs, and suggest improvements",
    icon: StarIcon,
    actions: [
      "Try out new features",
      "Report bugs you find",
      "Suggest enhancements",
      "Provide user feedback",
    ],
  },
]

const guidelines = [
  {
    title: "Be Respectful",
    description: "Treat all community members with respect and kindness. Follow our Code of Conduct.",
  },
  {
    title: "Start Small",
    description: "Begin with small contributions to get familiar with our workflow and project structure.",
  },
  {
    title: "Ask Questions",
    description: "Don't hesitate to ask questions if you're unsure about something. We're here to help!",
  },
  {
    title: "Follow Standards",
    description: "Adhere to our coding standards, commit message conventions, and PR guidelines.",
  },
  {
    title: "Test Your Work",
    description: "Ensure your changes work correctly and don't break existing functionality.",
  },
  {
    title: "Document Changes",
    description: "Update documentation and add tests for new features or significant changes.",
  },
]

export default function ContributingPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Contributing to CodeStorm Hub</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in the power of community-driven development. Whether you&apos;re a seasoned developer 
              or just starting out, there are many ways you can contribute to our projects.
            </p>
          </div>

          {/* Get Started */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-base">
                Follow these steps to make your first contribution
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto">
                    1
                  </div>
                  <h4 className="font-semibold">Explore Projects</h4>
                  <p className="text-sm text-muted-foreground">
                    Browse our repositories and find a project that interests you
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto">
                    2
                  </div>
                  <h4 className="font-semibold">Read the Docs</h4>
                  <p className="text-sm text-muted-foreground">
                    Check the project&apos;s README and contributing guidelines
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto">
                    3
                  </div>
                  <h4 className="font-semibold">Pick an Issue</h4>
                  <p className="text-sm text-muted-foreground">
                    Look for issues labeled &quot;good first issue&quot; or &quot;help wanted&quot;
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto">
                    4
                  </div>
                  <h4 className="font-semibold">Make Changes</h4>
                  <p className="text-sm text-muted-foreground">
                    Fork, clone, make your changes, and submit a pull request
                  </p>
                </div>
              </div>
              <Button size="lg" asChild>
                <a href="https://github.com/CodeStorm-Hub" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  Browse Our Repositories
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Ways to Contribute */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Ways to Contribute</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                There are many ways to contribute to our projects, regardless of your skill level or experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contributionTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{type.title}</CardTitle>
                          <CardDescription>{type.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {type.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-center gap-2 text-sm">
                            <CheckIcon className="h-4 w-4 text-green-600 flex-shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Guidelines */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Contribution Guidelines</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Please follow these guidelines to ensure a smooth contribution process for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guidelines.map((guideline, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    {guideline.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {guideline.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Helpful Resources</CardTitle>
              <CardDescription>
                Links and resources to help you get started with contributing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Learning Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a 
                        href="https://docs.github.com/en/get-started/quickstart/contributing-to-projects" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        GitHub&apos;s Contributing Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://opensource.guide/how-to-contribute/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Open Source Guide: How to Contribute
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.firsttimersonly.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        First Timers Only
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">CodeStorm Hub Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/code-of-conduct" className="text-primary hover:underline">
                        Code of Conduct
                      </a>
                    </li>
                    <li>
                      <a href="/community" className="text-primary hover:underline">
                        Community Guidelines
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-primary hover:underline">
                        Getting Help
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recognition */}
          <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Recognition & Rewards</CardTitle>
              <CardDescription className="text-base">
                We appreciate and recognize our contributors
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All contributors are recognized in our project README files and contributor lists. 
                We believe in celebrating the amazing work our community members do to make our 
                projects better for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="/team">
                    Meet Our Contributors
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/CodeStorm-Hub" target="_blank" rel="noopener noreferrer">
                    View All Projects
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