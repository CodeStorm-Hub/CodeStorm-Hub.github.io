import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HeartIcon, PersonIcon, ExclamationTriangleIcon, ChatBubbleIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "Our commitment to creating a welcoming, inclusive, and safe environment for all community members.",
  openGraph: {
    title: "Code of Conduct | CodeStorm Hub",
    description: "Our commitment to creating a welcoming, inclusive, and safe environment for all community members.",
  },
}

const conductPrinciples = [
  {
    title: "Be Welcoming and Inclusive",
    description: "We welcome people of all backgrounds and identities. Our community values diversity and inclusion.",
    icon: HeartIcon,
    examples: [
      "Use inclusive language that welcomes everyone",
      "Respect different perspectives and experiences",
      "Make space for newcomers and help them feel included",
      "Celebrate the diversity of our community",
    ],
  },
  {
    title: "Be Respectful",
    description: "Treat all community members with kindness, respect, and professionalism.",
    icon: PersonIcon,
    examples: [
      "Be kind and courteous in all interactions",
      "Listen to others and consider their viewpoints",
      "Disagree constructively and professionally",
      "Respect personal boundaries and privacy",
    ],
  },
  {
    title: "Be Collaborative",
    description: "Work together to build great things and support each other's growth.",
    icon: ChatBubbleIcon,
    examples: [
      "Share knowledge and help others learn",
      "Give credit where it's due",
      "Provide constructive feedback",
      "Be open to learning from others",
    ],
  },
]

const unacceptableBehaviors = [
  "Harassment, discrimination, or intimidation of any form",
  "Offensive, derogatory, or discriminatory language or imagery",
  "Personal attacks, trolling, or deliberately inflammatory comments",
  "Public or private harassment",
  "Sharing others' personal information without permission",
  "Sexual language, imagery, or unwelcome sexual attention",
  "Advocating for or encouraging any harmful behaviors",
  "Disrupting community discussions or events",
  "Any behavior that would be considered inappropriate in a professional setting",
]

export default function CodeOfConductPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Code of Conduct</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to fostering an open, welcoming, diverse, inclusive, 
              and healthy community for everyone who participates in CodeStorm Hub.
            </p>
          </div>

          {/* Pledge */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Our Pledge</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-4xl mx-auto text-lg">
                We as members, contributors, and leaders pledge to make participation in our 
                community a harassment-free experience for everyone, regardless of age, body size, 
                visible or invisible disability, ethnicity, sex characteristics, gender identity 
                and expression, level of experience, education, socio-economic status, nationality, 
                personal appearance, race, caste, color, religion, or sexual identity and orientation.
              </p>
              <p className="text-muted-foreground max-w-4xl mx-auto text-lg">
                We pledge to act and interact in ways that contribute to an open, welcoming, 
                diverse, inclusive, and healthy community.
              </p>
            </CardContent>
          </Card>

          {/* Standards */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Standards</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide our interactions and help create a positive environment for everyone.
              </p>
            </div>
            
            <div className="space-y-6">
              {conductPrinciples.map((principle, index) => {
                const Icon = principle.icon
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{principle.title}</CardTitle>
                          <CardDescription className="text-base">{principle.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="ml-13">
                        <h4 className="font-semibold mb-3">Examples of positive behavior:</h4>
                        <ul className="space-y-2">
                          {principle.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start gap-2 text-sm">
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Unacceptable Behavior */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Unacceptable Behavior</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The following behaviors are considered harassment and are unacceptable within our community.
              </p>
            </div>
            
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl">Prohibited Behaviors</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {unacceptableBehaviors.map((behavior, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{behavior}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Enforcement */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Enforcement</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reporting Violations</CardTitle>
                  <CardDescription>
                    How to report code of conduct violations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Instances of abusive, harassing, or otherwise unacceptable behavior may be 
                    reported to the community leaders responsible for enforcement.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Report via:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Email: conduct@codestorm-hub.org</li>
                      <li>• GitHub: Private message to maintainers</li>
                      <li>• Contact form on our website</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Our Response</CardTitle>
                  <CardDescription>
                    How we handle reports and violations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    All complaints will be reviewed and investigated promptly and fairly. 
                    Community leaders are obligated to respect the privacy and security of the reporter.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Consequences may include:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>• Warning or guidance</li>
                      <li>• Temporary suspension</li>
                      <li>• Permanent ban from community</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Scope */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Scope</CardTitle>
              <CardDescription>
                Where this Code of Conduct applies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This Code of Conduct applies within all community spaces, and also applies when 
                an individual is officially representing the community in public spaces.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-2">Community Spaces Include:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• GitHub repositories and discussions</li>
                    <li>• Community events and meetups</li>
                    <li>• Social media channels</li>
                    <li>• Email communications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Representation Examples:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Using official email addresses</li>
                    <li>• Posting via official accounts</li>
                    <li>• Acting as a designated representative</li>
                    <li>• Speaking at public events</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Attribution */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>Attribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This Code of Conduct is adapted from the{" "}
                <a 
                  href="https://www.contributor-covenant.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Contributor Covenant
                </a>
                , version 2.1, available at{" "}
                <a 
                  href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                  https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
                </a>.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/community">
                  Community Guidelines
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Questions about this Code of Conduct? We&apos;re here to help.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}