import React from "react";
import { GitCommit } from "lucide-react";

export const metadata = {
  title: "Changelog // Version Release History | CodeStorm Hub",
  description: "Track version releases, architectural changes, breaking changes, and bug fixes across CodeStorm Hub.",
};

const LOGS = [
  {
    version: "v2.0.0-PROD",
    date: "2025-02-10",
    badge: "MAJOR OVERHAUL",
    badgeColor: "text-storm-cyan border-storm-cyan",
    summary: "Complete redesign adopting Electric Brutalism & Cybernetic Storm Forge aesthetic.",
    commits: [
      { type: "FEATURE", text: "Integrated Three.js / WebGL 2.0 3D Storm Core Reactor with overclock dial" },
      { type: "FEATURE", text: "Built global STORM-OS Command Terminal Drawer with keyboard hotkey (/)" },
      { type: "FEATURE", text: "Installed Lenis smooth inertia scrolling across all 18 routes" },
      { type: "UI/UX", text: "Refactored all 18 pages with unified brutalist design tokens and monospace telemetry" },
      { type: "A11Y", text: "Added strict prefers-reduced-motion fallback across canvas and particle loops" },
    ],
  },
  {
    version: "v0.2.0-STABLE",
    date: "2024-01-15",
    badge: "COMMUNITY RELEASE",
    badgeColor: "text-storm-volt border-storm-volt",
    summary: "Platform expansion with community and project documentation pipelines.",
    commits: [
      { type: "DATA", text: "Implemented Markdown AST parser for 32 open source repositories in docs/projects" },
      { type: "FEATURE", text: "Created Team Dossier with social badges and contributor avatars" },
      { type: "LEGAL", text: "Added WCAG AA statement, Terms of Service, and Privacy Policy" },
    ],
  },
  {
    version: "v0.1.0-INIT",
    date: "2024-01-01",
    badge: "INITIAL COMMIT",
    badgeColor: "text-storm-white border-storm-border",
    summary: "Initial scaffold of CodeStorm Hub on Next.js App Router.",
    commits: [
      { type: "INFRA", text: "Configured static export (output: export) for GitHub Pages CDN" },
      { type: "CONFIG", text: "Configured Tailwind CSS and Radix UI baseline primitives" },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-volt">
          <GitCommit className="w-3.5 h-3.5" />
          <span>GIT_TELEMETRY // RELEASE_ARCHIVE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          VERSION CHANGELOG.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          Chronological version history and engineering diffs for the CodeStorm Hub platform and core architecture.
        </p>
      </div>

      {/* Changelog Entries */}
      <div className="space-y-10">
        {LOGS.map((log) => (
          <div
            key={log.version}
            className="border-2 border-storm-border bg-storm-titanium p-6 sm:p-8 space-y-4 hover:border-storm-border-bright transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-storm-border pb-3">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-storm-white">{log.version}</span>
                <span className={`telemetry-badge ${log.badgeColor} text-[10px] font-bold`}>
                  {log.badge}
                </span>
              </div>
              <span className="text-xs text-storm-muted font-mono">{log.date}</span>
            </div>

            <p className="text-xs sm:text-sm text-storm-white font-sans font-medium">
              {log.summary}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-[11px] text-storm-muted uppercase font-bold tracking-wider">
                COMMITS & MODIFICATIONS:
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                {log.commits.map((commit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2 bg-storm-panel border border-storm-border/50 text-storm-muted"
                  >
                    <span className="text-storm-volt font-bold text-[10px] uppercase min-w-[70px]">
                      [{commit.type}]
                    </span>
                    <span className="text-storm-white text-xs">{commit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
