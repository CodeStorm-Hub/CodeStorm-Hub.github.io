import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LockClosedIcon, EyeOpenIcon, LockClosedIcon as ProtectionIcon, UpdateIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how CodeStorm Hub collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy | CodeStorm Hub",
    description: "Learn how CodeStorm Hub collects, uses, and protects your personal information.",
  },
}

const privacyPrinciples = [
  {
    title: "Transparency",
    description: "We are clear about what data we collect and how we use it.",
    icon: EyeOpenIcon,
  },
  {
    title: "Security",
    description: "We protect your data with appropriate security measures.",
    icon: LockClosedIcon,
  },
  {
    title: "Control",
    description: "You have control over your personal information.",
    icon: ProtectionIcon,
  },
  {
    title: "Updates",
    description: "We keep you informed about changes to our practices.",
    icon: UpdateIcon,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your information when you use CodeStorm Hub.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Privacy Principles */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Privacy Principles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide how we handle your personal information.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyPrinciples.map((principle, index) => {
                const Icon = principle.icon
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Information We Collect</CardTitle>
              <CardDescription>
                Types of information we may collect when you use our services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Information You Provide</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Account information (username, email) when contributing to our projects</li>
                  <li>• Content you create (code contributions, comments, discussions)</li>
                  <li>• Communication with us (emails, contact form submissions)</li>
                  <li>• Event registration information for community events</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Information Automatically Collected</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Usage data (pages visited, time spent, features used)</li>
                  <li>• Device information (browser type, operating system)</li>
                  <li>• IP address and general location information</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Third-Party Information</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Public GitHub profile information (if you contribute to our projects)</li>
                  <li>• Social media profile information (if you link your accounts)</li>
                  <li>• Analytics data from services like Google Analytics</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
              <CardDescription>
                The purposes for which we collect and use your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Service Operation</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Provide and maintain our services</li>
                    <li>• Process your contributions and participation</li>
                    <li>• Manage user accounts and authentication</li>
                    <li>• Enable community features and interactions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Communication</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Send important service updates</li>
                    <li>• Respond to your inquiries and support requests</li>
                    <li>• Send newsletters (with your consent)</li>
                    <li>• Notify you about events and opportunities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Improvement</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Analyze usage patterns and performance</li>
                    <li>• Improve our services and user experience</li>
                    <li>• Develop new features and functionality</li>
                    <li>• Conduct research and analytics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Legal & Security</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Comply with legal obligations</li>
                    <li>• Protect against fraud and abuse</li>
                    <li>• Enforce our terms of service</li>
                    <li>• Maintain security and integrity</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Information Sharing</CardTitle>
              <CardDescription>
                When and how we may share your information with others
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                  We do not sell your personal information
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  CodeStorm Hub does not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">We may share information in these situations:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• <strong>With your consent:</strong> When you explicitly agree to share information</li>
                  <li>• <strong>Public contributions:</strong> Code contributions and discussions are public by nature</li>
                  <li>• <strong>Service providers:</strong> Trusted vendors who help us operate our services</li>
                  <li>• <strong>Legal requirements:</strong> When required by law or to protect rights and safety</li>
                  <li>• <strong>Business transfers:</strong> In case of merger, acquisition, or asset sale</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Data Security</CardTitle>
              <CardDescription>
                How we protect your information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Technical Measures</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Encryption in transit and at rest</li>
                    <li>• Secure hosting infrastructure</li>
                    <li>• Regular security updates and patches</li>
                    <li>• Access controls and authentication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Organizational Measures</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Employee access on need-to-know basis</li>
                    <li>• Privacy and security training</li>
                    <li>• Regular security assessments</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Your Privacy Rights</CardTitle>
              <CardDescription>
                Your rights regarding your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Access & Control</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Delete your personal information</li>
                    <li>• Export your data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Communication Preferences</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Opt out of marketing communications</li>
                    <li>• Manage cookie preferences</li>
                    <li>• Control notification settings</li>
                    <li>• Withdraw consent where applicable</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  To exercise your rights, please contact us at{" "}
                  <a href="mailto:privacy@codestorm-hub.org" className="text-primary hover:underline">
                    privacy@codestorm-hub.org
                  </a>{" "}
                  or use our contact form.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We use cookies and similar technologies to improve your experience and analyze our services.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for basic site functionality and security. These cannot be disabled.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors use our site to improve performance and user experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Preference Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Remember your settings and preferences to provide a personalized experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Updates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Questions about this privacy policy?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> privacy@codestorm-hub.org</p>
                  <p><strong>Contact Form:</strong> <a href="/contact" className="text-primary hover:underline">codestorm-hub.github.io/contact</a></p>
                </div>
                <Button asChild>
                  <a href="/contact">
                    Get in Touch
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Policy Updates</CardTitle>
                <CardDescription>
                  How we handle changes to this policy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any 
                  material changes by posting the new policy and updating the &quot;last updated&quot; date.
                </p>
                <Button variant="outline" asChild>
                  <a href="/changelog">
                    View Changelog
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}