import Link from "next/link"
import { Github, ArrowRight, Code, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Open Source Community
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              CodeStorm Hub
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            A vibrant community of open source enthusiasts, researchers, and creators. 
            We collaborate on powerful open-source solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" asChild>
              <Link href="/projects" className="flex items-center">
                Explore Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link 
                href="https://github.com/CodeStorm-Hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 w-4 h-4" />
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Open Source First</h3>
              <p className="text-muted-foreground">
                All our projects are open source, fostering transparency and collaboration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Built by developers, for developers. Join our growing community of contributors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation Focus</h3>
              <p className="text-muted-foreground">
                Pushing boundaries with cutting-edge solutions and modern technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}