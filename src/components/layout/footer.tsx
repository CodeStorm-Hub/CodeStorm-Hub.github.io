"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Zap, GitBranch, Clock } from "lucide-react";
import { TextScrambler } from "@/components/interactive/text-scrambler";

export function Footer() {
  const [timeUtc, setTimeUtc] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTimeUtc(new Date().toUTCString().split(" ")[4] || "");
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-storm-border bg-storm-void font-mono text-xs text-storm-muted">
      {/* Top Mainframe Telemetry Bar */}
      <div className="border-b border-storm-border bg-storm-titanium/60 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-storm-cyan">
            <Zap className="w-3.5 h-3.5" />
            <span className="font-bold">CODESTORM_MAINFRAME</span>
          </div>
          <span className="text-storm-border">|</span>
          <div className="flex items-center gap-1.5 text-storm-white text-[11px]">
            <Clock className="w-3 h-3 text-storm-volt" />
            <span>UTC: {timeUtc || "00:00:00"}</span>
          </div>
          <span className="text-storm-border hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
            <GitBranch className="w-3 h-3 text-storm-cyan" />
            <span>BRANCH: <strong className="text-storm-white">main#production</strong></span>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Catapult to top of page"
          className="flex items-center gap-2 border border-storm-border hover:border-storm-volt px-2.5 py-1 text-storm-white hover:text-storm-volt transition-colors bg-storm-panel"
        >
          <span>CATAPULT_TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Directory Links Grid (All 18 Pages Covered) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Core System */}
        <div className="space-y-3">
          <h4 className="text-storm-white font-bold tracking-wider text-[11px] uppercase border-b border-storm-border pb-1">
            {"// 01_SYSTEM"}
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Terminal Home (/)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Engineering Intel (/about)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Architects Dossier (/team)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Transmit Message (/contact)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/style-guide" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Design Tokens (/style-guide)" trigger="hover" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Flagships & Work */}
        <div className="space-y-3">
          <h4 className="text-storm-white font-bold tracking-wider text-[11px] uppercase border-b border-storm-border pb-1">
            {"// 02_FLAGSHIPS"}
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/projects" className="hover:text-storm-volt transition-colors block">
                <TextScrambler text="Spatial Vault (/projects)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/showcase" className="hover:text-storm-volt transition-colors block">
                <TextScrambler text="Product Showcase (/showcase)" trigger="hover" />
              </Link>
            </li>
            <li>
              <a
                href="https://codestormhub.live"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-storm-volt transition-colors block"
              >
                <TextScrambler text="StormCom AI Platform ↗" trigger="hover" />
              </a>
            </li>
            <li>
              <a
                href="https://codestormhub.live/erp/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-storm-volt transition-colors block"
              >
                <TextScrambler text="StormERP Enterprise ↗" trigger="hover" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/CodeStorm-Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-storm-volt transition-colors block"
              >
                <TextScrambler text="GitHub Repositories (32) ↗" trigger="hover" />
              </a>
            </li>
          </ul>
        </div>

        {/* Ecosystem & Dispatches */}
        <div className="space-y-3">
          <h4 className="text-storm-white font-bold tracking-wider text-[11px] uppercase border-b border-storm-border pb-1">
            {"// 03_ECOSYSTEM"}
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/blog" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Tech Dispatches (/blog)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Events & Hackathons (/events)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Developer Community (/community)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Developer Toolkits (/resources)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/roadmap" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Protocol Roadmap (/roadmap)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="hover:text-storm-cyan transition-colors block">
                <TextScrambler text="Changelog Commits (/changelog)" trigger="hover" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies & Governance */}
        <div className="space-y-3">
          <h4 className="text-storm-white font-bold tracking-wider text-[11px] uppercase border-b border-storm-border pb-1">
            {"// 04_LEGAL_CORE"}
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/contributing" className="hover:text-storm-white transition-colors block">
                <TextScrambler text="Contributing Manual (/contributing)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/code-of-conduct" className="hover:text-storm-white transition-colors block">
                <TextScrambler text="Code of Conduct (/code-of-conduct)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="hover:text-storm-white transition-colors block">
                <TextScrambler text="WCAG AA Statement (/accessibility)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-storm-white transition-colors block">
                <TextScrambler text="Privacy Policy (/privacy)" trigger="hover" />
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-storm-white transition-colors block">
                <TextScrambler text="Terms of Service (/terms)" trigger="hover" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Colophon */}
      <div className="border-t border-storm-border px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} CODESTORM HUB.</span>
          <span className="text-storm-border">/</span>
          <span>MIT LICENSED OPEN SOURCE COLLECTIVE.</span>
        </div>
        <div className="text-storm-muted flex items-center gap-2">
          <span>DESIGNED UNDER THE PROTOCOL OF</span>
          <strong className="text-storm-cyan">ELECTRIC BRUTALISM</strong>
        </div>
      </div>
    </footer>
  );
}
