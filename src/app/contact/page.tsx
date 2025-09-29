import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, EnvelopeClosedIcon, ChatBubbleIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the CodeStorm Hub team. We're here to help and answer your questions.",
  openGraph: {
    title: "Contact | CodeStorm Hub",
    description: "Get in touch with the CodeStorm Hub team. We're here to help and answer your questions.",
  },
}

const contactMethods = [
  {
    title: "GitHub Discussions",
    description: "Ask questions, share ideas, and connect with our community",
    icon: ChatBubbleIcon,
    href: "https://github.com/orgs/CodeStorm-Hub/discussions",
    primary: true,
  },
  {
    title: "GitHub Issues",
    description: "Report bugs, request features, or contribute to our projects",
    icon: GitHubLogoIcon,
    href: "https://github.com/CodeStorm-Hub",
    primary: false,
  },
  {
    title: "General Inquiries",
    description: "For partnerships, press, or other general questions",
    icon: EnvelopeClosedIcon,
    href: "mailto:hello@codestorm-hub.org",
    primary: false,
  },
]

const faqs = [
  {
    question: "How can I contribute to CodeStorm Hub?",
    answer: "We welcome contributions of all kinds! Check out our contributing guide to get started, or browse our GitHub repositories to find projects that interest you.",
  },
  {
    question: "Do you offer support for your projects?",
    answer: "Community support is available through GitHub Discussions and Issues. For each project, you can find documentation and examples in the respective repositories.",
  },
  {
    question: "Can I use CodeStorm Hub projects in commercial applications?",
    answer: "Yes! Our projects are open source and free to use. Please check the specific license for each project to understand the terms and conditions.",
  },
  {
    question: "How do I report a security vulnerability?",
    answer: "Security is important to us. Please report security vulnerabilities responsibly by following the instructions in our Security Policy on GitHub.",
  },
]

export default function ContactPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a question, idea, or want to collaborate? We&apos;d love to hear from you. 
              Here are the best ways to connect with our community.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className={method.primary ? "border-primary/50 bg-primary/5" : ""}>
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center ${
                      method.primary ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button 
                      variant={method.primary ? "default" : "outline"} 
                      className="w-full"
                      asChild
                    >
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.title === "General Inquiries" ? "Send Email" : "Visit"}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Response Times */}
          <Card>
            <CardHeader>
              <CardTitle>Response Times</CardTitle>
              <CardDescription>
                Here&apos;s what you can expect when reaching out to us
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Community Support</h4>
                  <p className="text-sm text-muted-foreground">
                    GitHub Discussions and Issues are monitored by our community volunteers. 
                    Response times vary, but we aim to acknowledge new posts within 48 hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">General Inquiries</h4>
                  <p className="text-sm text-muted-foreground">
                    For partnerships, press, and other business inquiries, we typically 
                    respond within 1-2 business days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions. If you don&apos;t find what you&apos;re looking for, 
                feel free to reach out using any of the methods above.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <QuestionMarkCircledIcon className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground ml-8">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Guidelines CTA */}
          <Card className="bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle>Community Guidelines</CardTitle>
              <CardDescription>
                Help us maintain a welcoming and inclusive environment
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Before reaching out, please review our community guidelines and code of conduct 
                to ensure respectful and productive interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="/code-of-conduct">
                    Code of Conduct
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
        </div>
      </Container>
    </div>
  )
}