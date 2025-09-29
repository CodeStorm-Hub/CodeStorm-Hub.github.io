import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileTextIcon, ExclamationTriangleIcon, InfoCircledIcon, UpdateIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using CodeStorm Hub services and participating in our community.",
  openGraph: {
    title: "Terms of Service | CodeStorm Hub", 
    description: "Terms and conditions for using CodeStorm Hub services and participating in our community.",
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These terms govern your use of CodeStorm Hub services and participation in our community. 
              Please read them carefully.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Agreement */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <InfoCircledIcon className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Agreement to Terms</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing or using CodeStorm Hub services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing our services.
              </p>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Services</CardTitle>
              <CardDescription>
                What CodeStorm Hub provides to the community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                CodeStorm Hub provides an open-source community platform that includes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Platform Services</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Project hosting and showcase</li>
                    <li>• Community discussion forums</li>
                    <li>• Documentation and resources</li>
                    <li>• Event management and announcements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community Features</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Collaboration tools and workflows</li>
                    <li>• Learning resources and guides</li>
                    <li>• Newsletter and blog content</li>
                    <li>• Support and mentorship programs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">User Accounts and Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Account Registration</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• You must provide accurate and complete information when creating an account</li>
                  <li>• You are responsible for maintaining the security of your account credentials</li>
                  <li>• You must be at least 13 years old to create an account</li>
                  <li>• One person may not maintain more than one account</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Account Responsibilities</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• You are responsible for all activity that occurs under your account</li>
                  <li>• You must notify us immediately of any unauthorized use of your account</li>
                  <li>• You must not share your account credentials with others</li>
                  <li>• You must comply with our Code of Conduct and community guidelines</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Acceptable Use Policy</CardTitle>
              <CardDescription>
                Guidelines for appropriate use of our services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">Permitted Uses</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Contributing to open-source projects</li>
                  <li>• Participating in community discussions</li>
                  <li>• Sharing knowledge and resources</li>
                  <li>• Collaborating on projects and initiatives</li>
                  <li>• Learning and skill development</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-red-700 dark:text-red-400">Prohibited Uses</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Violating laws or regulations</li>
                  <li>• Infringing on intellectual property rights</li>
                  <li>• Harassing or threatening other users</li>
                  <li>• Distributing malware or harmful content</li>
                  <li>• Spamming or unsolicited commercial activities</li>
                  <li>• Attempting to gain unauthorized access to systems</li>
                  <li>• Interfering with the normal operation of services</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Content and Contributions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Content and Contributions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Your Content</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  You retain ownership of content you create and contribute to CodeStorm Hub, but you grant us certain rights:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Right to display your contributions on our platform</li>
                  <li>• Right to make your contributions available to other community members</li>
                  <li>• Right to modify formatting for display purposes</li>
                  <li>• Right to remove content that violates our terms</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Open Source Contributions</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Contributions to open-source projects are governed by the respective project licenses:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Code contributions are subject to the project&apos;s open-source license</li>
                  <li>• You represent that you have the right to make contributions</li>
                  <li>• You agree to comply with the project&apos;s contribution guidelines</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Your privacy is important to us. Our Privacy Policy explains how we collect, 
                use, and protect your information when you use our services.
              </p>
              <Button asChild>
                <a href="/privacy">
                  Read Privacy Policy
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-2xl">Disclaimers and Limitations</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Service Availability</h3>
                <p className="text-sm text-muted-foreground">
                  We strive to keep our services available, but we do not guarantee uninterrupted access. 
                  Services may be temporarily unavailable due to maintenance, updates, or technical issues.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Content Accuracy</h3>
                <p className="text-sm text-muted-foreground">
                  While we moderate content, we do not guarantee the accuracy, completeness, or reliability 
                  of user-generated content. Users are responsible for verifying information independently.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Third-Party Services</h3>
                <p className="text-sm text-muted-foreground">
                  Our platform may integrate with third-party services (like GitHub). We are not responsible 
                  for the availability, accuracy, or practices of these external services.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">By You</h3>
                <p className="text-sm text-muted-foreground">
                  You may stop using our services at any time. You can request account deletion 
                  by contacting us through our support channels.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">By Us</h3>
                <p className="text-sm text-muted-foreground">
                  We may suspend or terminate your access to our services if you violate these terms, 
                  our Code of Conduct, or engage in harmful activities. We will provide notice when possible.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <UpdateIcon className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Changes to Terms</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We may modify these terms from time to time. We will notify users of material changes 
                by posting the updated terms and updating the &quot;last updated&quot; date. Continued use of our 
                services after changes constitutes acceptance of the new terms.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <a href="/changelog">
                    View Updates
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/blog">
                    Subscribe to Updates
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These terms are governed by and construed in accordance with applicable international 
                open-source community standards and practices. Any disputes will be resolved through 
                good faith discussion and community mediation where possible.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileTextIcon className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle>Questions About These Terms?</CardTitle>
                  <CardDescription>
                    We&apos;re here to help clarify any questions you may have
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have questions about these Terms of Service, please contact us. 
                We&apos;re committed to maintaining transparency and open communication with our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="/contact">
                    Contact Us
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/code-of-conduct">
                    Code of Conduct
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