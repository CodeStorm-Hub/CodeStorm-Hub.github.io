import React from "react";
import { Milestone, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Engineering Roadmap // Protocol Evolution | CodeStorm Hub",
  description: "Track the past, present, and future architectural evolution of the CodeStorm software ecosystem.",
};

const PHASES = [
  {
    phase: "PHASE 01",
    title: "FOUNDATIONAL PLATFORM & WORKSPACE SETUP",
    status: "COMPLETED",
    badgeColor: "text-storm-volt border-storm-volt",
    quarter: "COMPLETED // 2024",
    items: [
      "Initial CodeStorm Hub portfolio codebase setup",
      "Parsing infrastructure for 32 Markdown project records",
      "Core team dossier & avatar synchronization",
      "Baseline accessibility and WCAG AA structural audits",
    ],
  },
  {
    phase: "PHASE 02",
    title: "ELECTRIC BRUTALISM & KINETIC SOTY ARCHITECTURE",
    status: "IN PRODUCTION",
    badgeColor: "text-storm-cyan border-storm-cyan",
    quarter: "ACTIVE // 2025-2026",
    items: [
      "Lenis smooth inertia-based scrolling integration",
      "Real-time 3D WebGL Storm Core Reactor with overclock dial",
      "Interactive STORM-OS Command Terminal Drawer (/ key)",
      "Kinetic letter-scrambler micro-interactions and hardware aesthetics",
      "Complete 18-page redesign with high-contrast typography",
    ],
  },
  {
    phase: "PHASE 03",
    title: "SAAS TELEMETRY EXPANSION & COMMERCIAL CLUSTERS",
    status: "PLANNED",
    badgeColor: "text-storm-plasma border-storm-plasma",
    quarter: "UPCOMING // 2026+",
    items: [
      "Live StormCom multi-store sandbox environment",
      "Interactive StormERP live accounting ledger playground",
      "Decentralized contributor reward registry",
      "Real-time telemetry feeds connecting live SaaS metrics into the portal",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-cyan">
          <Milestone className="w-3.5 h-3.5 text-storm-volt" />
          <span>ROADMAP // PROTOCOL_PROGRESSION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          PROTOCOL ROADMAP.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          Transparent multi-phase progression tracker. Documenting architectural milestones completed, active production deployments, and future SaaS engineering horizons.
        </p>
      </div>

      {/* Timeline Phases */}
      <div className="space-y-8 relative">
        {PHASES.map((phase) => (
          <div
            key={phase.phase}
            className="border-2 border-storm-border bg-storm-titanium p-6 sm:p-8 hover:border-storm-border-bright transition-colors space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-storm-border pb-3">
              <div className="flex items-center gap-3">
                <span className="telemetry-badge text-storm-white font-bold">{phase.phase}</span>
                <span className={`telemetry-badge ${phase.badgeColor} font-bold`}>
                  {phase.status}
                </span>
              </div>
              <span className="text-xs text-storm-muted font-mono">{phase.quarter}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold uppercase text-storm-white">
              {phase.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {phase.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 p-2.5 border border-storm-border bg-storm-panel text-xs text-storm-muted font-sans"
                >
                  <CheckCircle2 className="w-4 h-4 text-storm-cyan flex-shrink-0" />
                  <span className="text-storm-white font-mono text-[11px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
