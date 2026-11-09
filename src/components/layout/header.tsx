"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, Zap } from "lucide-react";
import { StormOSDrawer } from "@/components/interactive/storm-os-drawer";
import { TextScrambler } from "@/components/interactive/text-scrambler";

const NAV_LINKS = [
  { href: "/projects", label: "01 // WORK" },
  { href: "/showcase", label: "02 // PRODUCTS" },
  { href: "/team", label: "03 // ARCHITECTS" },
  { href: "/about", label: "04 // INTEL" },
  { href: "/contact", label: "05 // TRANSMIT" },
];

export function Header() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Listen for `/` or `~` hotkey to toggle STORM-OS
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is actively typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "/" || e.key === "~" || e.key === "`") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-storm-border bg-storm-void/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between font-mono">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 group text-storm-white hover:text-storm-cyan transition-colors"
            >
              <div className="w-7 h-7 bg-storm-panel border border-storm-border group-hover:border-storm-cyan flex items-center justify-center transition-colors">
                <Zap className="w-4 h-4 text-storm-cyan" />
              </div>
              <span className="font-bold tracking-wider text-sm">
                CODE<span className="text-storm-cyan">STORM</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 text-[10px] text-storm-muted border border-storm-border px-2 py-0.5 bg-storm-titanium">
              <span className="w-1.5 h-1.5 rounded-full bg-storm-volt animate-ping" />
              <span>SYS_OK</span>
              <span className="text-storm-border">|</span>
              <span className="text-storm-cyan">EDGE_CONNECTED</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1 px-2 border transition-all duration-200 ${
                    isActive
                      ? "border-storm-cyan text-storm-cyan bg-storm-panel/60 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                      : "border-transparent text-storm-muted hover:text-storm-white hover:border-storm-border"
                  }`}
                >
                  <TextScrambler text={link.label} trigger="hover" speed={25} />
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: STORM-OS & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsTerminalOpen(true)}
              aria-label="Open STORM-OS Command Terminal"
              className="flex items-center gap-2 px-3 py-1.5 border border-storm-border bg-storm-titanium hover:border-storm-volt text-storm-white hover:text-storm-volt transition-colors text-xs font-mono group"
            >
              <Terminal className="w-3.5 h-3.5 text-storm-volt group-hover:animate-pulse" />
              <span className="hidden sm:inline font-bold">STORM_OS</span>
              <kbd className="hidden sm:inline-block px-1 py-0.2 text-[10px] bg-storm-void border border-storm-border text-storm-muted group-hover:text-storm-volt">
                /
              </kbd>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden p-2 border border-storm-border bg-storm-titanium text-storm-white hover:text-storm-cyan"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-storm-border bg-storm-void px-4 py-4 space-y-2 font-mono text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 border border-storm-border hover:border-storm-cyan text-storm-muted hover:text-storm-white hover:bg-storm-titanium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-storm-border/50">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsTerminalOpen(true);
                }}
                className="w-full py-2 px-3 border border-storm-volt text-storm-volt bg-storm-titanium flex items-center justify-center gap-2 text-xs font-bold"
              >
                <Terminal className="w-4 h-4" />
                OPEN STORM_OS TERMINAL
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Terminal Drawer */}
      <StormOSDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </>
  );
}
