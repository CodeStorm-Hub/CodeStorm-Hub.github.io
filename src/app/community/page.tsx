import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, ChatBubbleIcon, HeartIcon, RocketIcon, CheckIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community",
  description: "Join the CodeStorm Hub community. Learn about our values, guidelines, and how to participate.",
  openGraph: {
    title: "Community | CodeStorm Hub",
    description: "Join the CodeStorm Hub community. Learn about our values, guidelines, and how to participate.",
  },
}

const communityValues = [
  {
    title: "Inclusivity",
    description: "We welcome contributors from all backgrounds and experience levels.",
    icon: HeartIcon,
  },
  {
    title: "Collaboration",
    description: "Great things happen when we work together toward common goals.",
    icon: ChatBubbleIcon,
  },
  {
    title: "Innovation",
    description: "We encourage creative thinking and exploring new possibilities.",
    icon: RocketIcon,
  },
  {
    title: "Quality",
    description: "We strive for excellence in everything we create and maintain.",
    icon: CheckIcon,
  },
]

const guidelines = [
  {
    title: "Be Respectful",
    items: [
      "Treat all community members with kindness and respect",
      "Use inclusive language that welcomes everyone",
      "Respect different opinions and perspectives",
      "Give constructive feedback rather than criticism",
    ],
  },
  {
    title: "Be Helpful",
    items: [
      "Support other community members when they ask for help",
      "Share your knowledge and experience",
      "Mentor newcomers and help them get started",
      "Celebrate others' achievements and contributions",
    ],
  },
  {
    title: "Be Professional",
    items: [
      "Keep discussions relevant to the project or community",
      "Avoid spam, self-promotion, or off-topic content",
      "Use appropriate channels for different types of communication",
      "Respect project maintainers' decisions and guidelines",
    ],
  },
  {
    title: "Be Collaborative",
    items: [
      "Work together to solve problems and build great software",
      "Be open to feedback and different approaches",
      "Share credit and acknowledge contributions",
      "Focus on what's best for the community and projects",
    ],
  },
]

const participationWays = [
  {
    title: "Join Discussions",
    description: "Participate in GitHub Discussions to share ideas and ask questions",
    action: "Visit Discussions",
    href: "https://github.com/orgs/CodeStorm-Hub/discussions",
  },
  {
    title: "Contribute Code",
    description: "Submit pull requests with bug fixes, features, or improvements",
    action: "View Contributing Guide",
    href: "/contributing",
  },
  {
    title: "Report Issues",
    description: "Help improve our projects by reporting bugs or suggesting enhancements",
    action: "Browse Repositories",
    href: "https://github.com/CodeStorm-Hub",
  },
  {
    title: "Spread the Word",
    description: "Share our projects and help grow the community",
    action: "Follow on GitHub",
    href: "https://github.com/CodeStorm-Hub",
  },
]

export default function CommunityPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Welcome to Our Community</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CodeStorm Hub is more than just code—it&apos;s a community of passionate individuals 
              working together to create amazing open source projects. We believe in the power 
              of collaboration, learning, and mutual support.
            </p>
          </div>

          {/* Community Values */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These values guide everything we do and help create a positive environment for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Community Guidelines */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Community Guidelines</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                To maintain a welcoming and productive environment, we ask all community members 
                to follow these guidelines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guidelines.map((guideline, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{guideline.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {guideline.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
                          <CheckIcon className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How to Participate */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">How to Participate</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                There are many ways to get involved in our community. Choose what works best for you!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {participationWays.map((way, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{way.title}</CardTitle>
                    <CardDescription>{way.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <a
                        href={way.href}
                        target={way.href.startsWith('http') ? "_blank" : undefined}
                        rel={way.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        {way.href.startsWith('http') && <GitHubLogoIcon className="mr-2 h-4 w-4" />}
                        {way.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Code of Conduct */}
          <Card className="bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Code of Conduct</CardTitle>
              <CardDescription className="text-base">
                Our commitment to creating a safe and inclusive environment
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are committed to providing a friendly, safe, and welcoming environment for all, 
                regardless of gender, sexual orientation, ability, ethnicity, socioeconomic status, 
                and religion (or lack thereof).
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                By participating in our community, you agree to abide by our Code of Conduct. 
                Violations may result in temporary or permanent bans from community spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/code-of-conduct">
                    Read Full Code of Conduct
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">
                    Report an Issue
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recognition */}
          <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Community Recognition</CardTitle>
              <CardDescription className="text-base">
                Celebrating our amazing community members
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We regularly recognize outstanding contributions and community members who go above 
                and beyond to help others and improve our projects. Every contribution, big or small, 
                makes a difference!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="/team">
                    Meet Our Contributors
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
        </div>
      </Container>
    </div>
  )
}