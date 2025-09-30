"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
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
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
            aria-label="CodeStorm Hub - Return to homepage"
          >
            <Logo size="sm" />
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
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-10 text-sm font-medium text-foreground/60 hover:text-foreground"
                  aria-label="Community menu"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Community
                  <ChevronDownIcon className="ml-1 h-3 w-3" aria-hidden="true" />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content 
                  className="min-w-[200px] bg-popover border border-border rounded-md shadow-md p-1" 
                  sideOffset={5}
                  aria-label="Community submenu"
                >
                  {navigationItems.community.map((item) => (
                    <DropdownMenu.Item key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center px-3 py-2 text-sm rounded-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors ${
                          isActivePath(item.href)
                            ? "bg-accent text-accent-foreground"
                            : "text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                        role="menuitem"
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
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-10 text-sm font-medium text-foreground/60 hover:text-foreground"
                  aria-label="Resources menu"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                  <ChevronDownIcon className="ml-1 h-3 w-3" aria-hidden="true" />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content 
                  className="min-w-[200px] bg-popover border border-border rounded-md shadow-md p-1" 
                  sideOffset={5}
                  aria-label="Resources submenu"
                >
                  {navigationItems.resources.map((item) => (
                    <DropdownMenu.Item key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center px-3 py-2 text-sm rounded-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors ${
                          isActivePath(item.href)
                            ? "bg-accent text-accent-foreground"
                            : "text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                        role="menuitem"
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
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="hidden sm:flex focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Link 
                href="https://github.com/CodeStorm-Hub" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit CodeStorm Hub GitHub repository (opens in new tab)"
              >
                <GitHubLogoIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                GitHub
              </Link>
            </Button>
            <Button 
              size="sm" 
              className="hidden sm:inline-flex"
              aria-label="Join the CodeStorm Hub community"
            >
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
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? (
                <Cross1Icon className="h-4 w-4" aria-hidden="true" />
              ) : (
                <HamburgerMenuIcon className="h-4 w-4" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav 
            id="mobile-menu" 
            className="lg:hidden border-t border-border"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Main Navigation */}
              <div className="space-y-1" role="group" aria-labelledby="mobile-main-nav">
                <h3 id="mobile-main-nav" className="sr-only">Main navigation</h3>
                {navigationItems.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
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
              <div className="pt-4" role="group" aria-labelledby="mobile-community-nav">
                <h3 
                  id="mobile-community-nav" 
                  className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  Community
                </h3>
                {navigationItems.community.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
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
              <div className="pt-4" role="group" aria-labelledby="mobile-resources-nav">
                <h3 
                  id="mobile-resources-nav" 
                  className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  Resources
                </h3>
                {navigationItems.resources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
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
              <div className="pt-4 space-y-2" role="group" aria-label="Call to action buttons">
                <Button 
                  asChild 
                  className="w-full justify-center focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Link 
                    href="https://github.com/CodeStorm-Hub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View CodeStorm Hub on GitHub (opens in new tab)"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <GitHubLogoIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                    View on GitHub
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  aria-label="Join the CodeStorm Hub community"
                >
                  Join Community
                </Button>
              </div>

              {/* Legal Links */}
              <div 
                className="pt-4 border-t border-border" 
                role="group" 
                aria-labelledby="mobile-legal-nav"
              >
                <h3 id="mobile-legal-nav" className="sr-only">Legal and policy links</h3>
                <div className="flex flex-wrap gap-4 px-3 py-2">
                  {navigationItems.legal.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}