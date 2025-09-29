"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { GitHubLogoIcon, HamburgerMenuIcon, Cross1Icon, ChevronDownIcon } from "@radix-ui/react-icons"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

const navigationItems = {
  main: [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ],
  community: [
    { href: "/community", label: "Community" },
    { href: "/blog", label: "Blog" },
    { href: "/events", label: "Events" },
    { href: "/showcase", label: "Showcase" },
  ],
  resources: [
    { href: "/resources", label: "Resources" },
    { href: "/contributing", label: "Contributing" },
    { href: "/code-of-conduct", label: "Code of Conduct" },
    { href: "/changelog", label: "Changelog" },
    { href: "/roadmap", label: "Roadmap" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/accessibility", label: "Accessibility" },
  ],
  developer: [
    { href: "/style-guide", label: "Style Guide" },
  ]
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {/* Main Navigation Items */}
            {navigationItems.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  isActivePath(item.href)
                    ? "text-foreground bg-accent"
                    : "text-foreground/60 hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Community Dropdown */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button variant="ghost" size="sm" className="h-10 text-sm font-medium text-foreground/60 hover:text-foreground">
                  Community
                  <ChevronDownIcon className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="min-w-[200px] bg-popover border border-border rounded-md shadow-md p-1" sideOffset={5}>
                  {navigationItems.community.map((item) => (
                    <DropdownMenu.Item key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center px-3 py-2 text-sm rounded-sm cursor-default focus:outline-none transition-colors ${
                          isActivePath(item.href)
                            ? "bg-accent text-accent-foreground"
                            : "text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            {/* Resources Dropdown */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button variant="ghost" size="sm" className="h-10 text-sm font-medium text-foreground/60 hover:text-foreground">
                  Resources
                  <ChevronDownIcon className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="min-w-[200px] bg-popover border border-border rounded-md shadow-md p-1" sideOffset={5}>
                  {navigationItems.resources.map((item) => (
                    <DropdownMenu.Item key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center px-3 py-2 text-sm rounded-sm cursor-default focus:outline-none transition-colors ${
                          isActivePath(item.href)
                            ? "bg-accent text-accent-foreground"
                            : "text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
              <Link href="https://github.com/CodeStorm-Hub" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button size="sm" className="hidden sm:inline-flex">
              Join Us
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <Cross1Icon className="h-4 w-4" />
              ) : (
                <HamburgerMenuIcon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Main Navigation */}
              <div className="space-y-1">
                {navigationItems.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActivePath(item.href)
                        ? "text-foreground bg-accent"
                        : "text-foreground/60 hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Community Section */}
              <div className="pt-4">
                <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Community
                </div>
                {navigationItems.community.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActivePath(item.href)
                        ? "text-foreground bg-accent"
                        : "text-foreground/60 hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Resources Section */}
              <div className="pt-4">
                <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Resources
                </div>
                {navigationItems.resources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActivePath(item.href)
                        ? "text-foreground bg-accent"
                        : "text-foreground/60 hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Button asChild className="w-full justify-center">
                  <Link href="https://github.com/CodeStorm-Hub" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-center">
                  Join Community
                </Button>
              </div>

              {/* Legal Links */}
              <div className="pt-4 border-t border-border">
                <div className="flex flex-wrap gap-4 px-3 py-2">
                  {navigationItems.legal.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}