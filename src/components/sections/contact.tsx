"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Clock, Github, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll get back to you within 24 hours.",
    contact: "hello@codestorm-hub.dev",
    href: "mailto:hello@codestorm-hub.dev",
  },
  {
    icon: Github,
    title: "GitHub Discussions",
    description: "Join our community discussions on GitHub.",
    contact: "CodeStorm-Hub/discussions",
    href: "https://github.com/CodeStorm-Hub/discussions",
  },
  {
    icon: MessageSquare,
    title: "Discord Community",
    description: "Chat with our team and community in real-time.",
    contact: "Join our Discord",
    href: "#",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question, suggestion, or want to collaborate? We&apos;d love to hear from you. 
            Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <method.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{method.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">
                            {method.description}
                          </p>
                          <Link
                            href={method.href}
                            target={method.href.startsWith("http") ? "_blank" : undefined}
                            rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-primary hover:underline text-sm font-medium"
                          >
                            {method.contact}
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">General inquiries:</span>
                    <span className="font-medium">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technical support:</span>
                    <span className="font-medium">12-24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Partnership inquiries:</span>
                    <span className="font-medium">2-3 business days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this about?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800 text-sm">
                        ✅ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800 text-sm">
                        ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                      </p>
                    </div>
                  )}

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">How can I contribute to your projects?</h3>
              <p className="text-muted-foreground text-sm">
                Check out our GitHub organization, pick a project that interests you, and read the contributing guidelines. 
                We welcome contributions of all sizes!
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer commercial support?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, we offer consulting and commercial support for our open-source projects. 
                Contact us to discuss your specific needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I use your projects in commercial applications?</h3>
              <p className="text-muted-foreground text-sm">
                Most of our projects are released under permissive licenses (MIT, Apache 2.0, etc.). 
                Check each project&apos;s license file for specific terms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How can I stay updated with your projects?</h3>
              <p className="text-muted-foreground text-sm">
                Follow us on GitHub, join our Discord community, or watch our repositories 
                to get notified about new releases and updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}