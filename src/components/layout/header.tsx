"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export function Header() {
  return (
    <header id="navigation" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">
              <span className="text-foreground">Code</span>
              <span className="text-primary">Storm</span>
              <span className="text-foreground"> Hub</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            <Link 
              href="/about" 
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Projects
            </Link>
            <Link 
              href="/team" 
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Team
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/CodeStorm-Hub" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button size="sm">
              Join Us
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}