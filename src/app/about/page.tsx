import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About",
  description: "Learn more about CodeStorm Hub and our mission to build powerful open-source solutions.",
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">About CodeStorm Hub</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate community of developers, researchers, and innovators 
              working together to create impactful open-source solutions.
            </p>
          </div>

          {/* Mission */}
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                Building a better future through collaborative open-source development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                CodeStorm Hub was founded on the belief that great software comes from great collaboration. 
                Our mission is to bring together talented individuals from around the world to create 
                innovative, accessible, and impactful open-source solutions that solve real-world problems.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Open Source First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We believe in the power of open source to create better software, 
                  foster innovation, and build inclusive communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our projects are shaped by our community&apos;s needs and contributions, 
                  ensuring we build what matters most.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quality & Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We strive for excellence in everything we build, using cutting-edge 
                  technologies and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}