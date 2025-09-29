import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AccessibilityIcon, EyeOpenIcon, UpdateIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Our commitment to making CodeStorm Hub accessible to everyone, including people with disabilities.",
  openGraph: {
    title: "Accessibility Statement | CodeStorm Hub",
    description: "Our commitment to making CodeStorm Hub accessible to everyone, including people with disabilities.",
  },
}

const accessibilityFeatures = [
  {
    title: "Keyboard Navigation",
    description: "Full keyboard navigation support for all interactive elements",
    details: [
      "Tab navigation through all interactive elements",
      "Skip links to main content and navigation",
      "Visible focus indicators",
      "Logical tab order throughout the site",
    ],
  },
  {
    title: "Screen Reader Support",
    description: "Semantic HTML and ARIA labels for assistive technologies",
    details: [
      "Semantic HTML structure with proper headings",
      "Alt text for all informative images",
      "ARIA labels and descriptions where needed",
      "Screen reader tested with NVDA and JAWS",
    ],
  },
  {
    title: "Visual Design",
    description: "High contrast and scalable design for better readability",
    details: [
      "WCAG AA compliant color contrast ratios",
      "Scalable text up to 200% without horizontal scrolling",
      "No use of color alone to convey information",
      "Clear visual hierarchy and spacing",
    ],
  },
  {
    title: "Responsive Design",
    description: "Works across all devices and screen sizes",
    details: [
      "Mobile-first responsive design",
      "Touch-friendly interactive elements",
      "Consistent experience across devices",
      "Optimized for various screen sizes",
    ],
  },
]

const wcagCompliance = [
  {
    level: "Level A",
    status: "Compliant",
    description: "Basic accessibility features that don't interfere with standard website usage",
  },
  {
    level: "Level AA",
    status: "Mostly Compliant",
    description: "Standard level of accessibility that removes barriers for most users",
  },
  {
    level: "Level AAA",
    status: "Partially Compliant",
    description: "Highest level of accessibility - we're working toward full compliance",
  },
]

export default function AccessibilityPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Accessibility Statement</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CodeStorm Hub is committed to ensuring digital accessibility for all users, 
              including people with disabilities. We continually work to improve the user experience for everyone.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Commitment */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AccessibilityIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-4xl mx-auto text-lg">
                We believe that the web should be accessible to everyone, regardless of ability or technology. 
                Our goal is to create an inclusive experience that allows all users to access our content 
                and participate in our community effectively.
              </p>
              <p className="text-muted-foreground max-w-4xl mx-auto">
                We are committed to conforming to the Web Content Accessibility Guidelines (WCAG) 2.1 
                at Level AA, which are the international standards for web accessibility.
              </p>
            </CardContent>
          </Card>

          {/* Accessibility Features */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Accessibility Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of the accessibility features we&apos;ve implemented to ensure 
                our platform works for everyone.
              </p>
            </div>
            
            <div className="space-y-6">
              {accessibilityFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* WCAG Compliance */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">WCAG 2.1 Compliance</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our current compliance status with Web Content Accessibility Guidelines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wcagCompliance.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.level}</CardTitle>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'Compliant' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : item.status === 'Mostly Compliant'
                        ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                    }`}>
                      {item.status}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testing and Validation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Testing and Validation</CardTitle>
              <CardDescription>
                How we ensure our accessibility standards
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Automated Testing</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• axe-core accessibility testing in CI/CD pipeline</li>
                    <li>• Lighthouse accessibility audits</li>
                    <li>• WAVE Web Accessibility Evaluation Tool</li>
                    <li>• Color contrast ratio verification</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Manual Testing</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Keyboard navigation testing</li>
                    <li>• Screen reader testing (NVDA, JAWS, VoiceOver)</li>
                    <li>• User testing with people with disabilities</li>
                    <li>• Cross-browser accessibility validation</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Continuous Improvement</h4>
                <p className="text-sm text-muted-foreground">
                  We conduct regular accessibility audits and user testing sessions to identify 
                  and address accessibility barriers. Our development process includes accessibility 
                  considerations from the design phase through implementation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Known Issues */}
          <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="text-2xl">Known Accessibility Issues</CardTitle>
              <CardDescription>
                Areas we&apos;re actively working to improve
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We are transparent about areas where we don&apos;t yet fully meet accessibility standards:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Third-Party Integrations</h4>
                  <p className="text-sm text-muted-foreground">
                    Some embedded content from third-party services (like GitHub widgets) 
                    may not fully meet our accessibility standards. We&apos;re working with providers 
                    to improve these experiences.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Complex Interactive Elements</h4>
                  <p className="text-sm text-muted-foreground">
                    Some advanced interactive features are still being enhanced for full 
                    screen reader compatibility. We provide alternative access methods where possible.
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <p className="text-sm text-orange-800 dark:text-orange-300">
                  We&apos;re actively working to address these issues and expect to have improvements 
                  in upcoming releases. Check our roadmap for specific timelines.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Assistive Technologies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Supported Assistive Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Screen Readers</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• NVDA (Windows)</li>
                    <li>• JAWS (Windows)</li>
                    <li>• VoiceOver (macOS/iOS)</li>
                    <li>• TalkBack (Android)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Other Technologies</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Voice recognition software</li>
                    <li>• Switch navigation devices</li>
                    <li>• Magnification software</li>
                    <li>• Alternative keyboards</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feedback */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3">
                <EyeOpenIcon className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Accessibility Feedback</CardTitle>
              </div>
              <CardDescription className="text-base">
                Help us improve by sharing your experience
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We welcome feedback on the accessibility of CodeStorm Hub. If you encounter 
                accessibility barriers or have suggestions for improvement, please let us know.
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Email:</strong> accessibility@codestorm-hub.org</p>
                <p><strong>Response time:</strong> We aim to respond within 2 business days</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/contact">
                    Contact Us
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io/issues/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Report Issue
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Future Improvements */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <UpdateIcon className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Future Improvements</CardTitle>
                  <CardDescription>
                    Our roadmap for enhanced accessibility
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We&apos;re continuously working to improve accessibility. Here&apos;s what&apos;s coming next:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Enhanced keyboard navigation patterns for complex components
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Improved screen reader announcements for dynamic content
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    High contrast theme option for better visual accessibility
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Animation controls for users with vestibular disorders
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="outline" asChild>
                  <a href="/roadmap">
                    View Full Roadmap
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