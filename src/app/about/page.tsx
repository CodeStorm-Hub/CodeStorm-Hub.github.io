import React from "react";
import Link from "next/link";
import { Terminal, Shield, Zap, Cpu, Server, Compass } from "lucide-react";

export const metadata = {
  title: "Engineering Intel // Collective Philosophy | CodeStorm Hub",
  description: "Learn about CodeStorm Hub's origin, philosophy, architectural principles, and open-source commitment.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-cyan">
          <Compass className="w-3.5 h-3.5 text-storm-volt" />
          <span>ORIGIN_AND_MISSION // DOSSIER</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          ENGINEERING INTEL.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          CodeStorm Hub is a collective of software architects, distributed systems engineers, and open-source builders. 
          We exist to challenge generic, low-performance web bloat by building resilient, production-hardened software solutions.
        </p>
      </div>

      {/* The Genesis Section */}
      <section className="mb-14 border border-storm-border bg-storm-titanium p-8 sm:p-12">
        <div className="max-w-4xl space-y-6">
          <div className="telemetry-badge text-storm-volt">
            {"// THE_GENESIS"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-storm-white">
            FORGED IN RESISTANCE TO THE SANITIZED WEB.
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-storm-muted font-sans leading-relaxed">
            <p>
              CodeStorm was born out of a shared frustration: modern software development has increasingly retreated into bloated templates, fragile abstractions, and disposable codebases.
            </p>
            <p>
              We established CodeStorm Hub as a disciplined engineering forge. Whether constructing commercial SaaS engines like StormCom and StormERP or shipping foundational open-source tools across 32 repositories, our objective is uncompromised performance, strict type soundness, and architectural permanence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="mb-14 space-y-6">
        <div className="text-xs text-storm-cyan uppercase font-bold tracking-widest flex items-center gap-2">
          <Zap className="w-4 h-4 text-storm-volt" />
          <span>{"// THREE FOUNDATIONAL PILLARS"}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-storm-border bg-storm-titanium p-6 space-y-4 hover:border-storm-cyan transition-colors">
            <div className="w-10 h-10 border border-storm-border bg-storm-panel flex items-center justify-center text-storm-cyan">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-storm-white uppercase">
              01 // Architectural Soundness
            </h3>
            <p className="text-xs text-storm-muted font-sans leading-relaxed">
              We design systems from first principles. Clean boundaries, zero unmanaged side-effects, predictable latency, and bulletproof static compilation.
            </p>
          </div>

          <div className="border border-storm-border bg-storm-titanium p-6 space-y-4 hover:border-storm-volt transition-colors">
            <div className="w-10 h-10 border border-storm-border bg-storm-panel flex items-center justify-center text-storm-volt">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-storm-white uppercase">
              02 // Open Source Conviction
            </h3>
            <p className="text-xs text-storm-muted font-sans leading-relaxed">
              We believe great engineering must be transparent. Our work is published under permissive licenses so the global community can audit, contribute, and build upon our foundations.
            </p>
          </div>

          <div className="border border-storm-border bg-storm-titanium p-6 space-y-4 hover:border-storm-plasma transition-colors">
            <div className="w-10 h-10 border border-storm-border bg-storm-panel flex items-center justify-center text-storm-plasma">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-storm-white uppercase">
              03 // Real-World Impact
            </h3>
            <p className="text-xs text-storm-muted font-sans leading-relaxed">
              We do not build toy demos. Our solutions solve concrete problems for e-commerce vendors, manufacturers, researchers, and enterprise operators worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Telemetry Specs */}
      <section className="border border-storm-border bg-storm-titanium/50 p-6 sm:p-8 space-y-6">
        <h3 className="text-sm font-bold uppercase text-storm-white flex items-center gap-2">
          <Terminal className="w-4 h-4 text-storm-cyan" />
          <span>INFRASTRUCTURE & ENVIRONMENT TELEMETRY</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-storm-muted">
          <div className="border border-storm-border p-3 bg-storm-void">
            <span className="text-storm-white font-bold block">Next.js 15</span>
            <span>App Router & Turbopack</span>
          </div>
          <div className="border border-storm-border p-3 bg-storm-void">
            <span className="text-storm-cyan font-bold block">Static Export</span>
            <span>GitHub Pages Edge CDN</span>
          </div>
          <div className="border border-storm-border p-3 bg-storm-void">
            <span className="text-storm-volt font-bold block">TypeScript 5</span>
            <span>Strict Type Soundness</span>
          </div>
          <div className="border border-storm-border p-3 bg-storm-void">
            <span className="text-storm-plasma font-bold block">Three.js / WebGL</span>
            <span>60fps Kinetic Canvas</span>
          </div>
        </div>
      </section>

      {/* Comms Link */}
      <div className="mt-12 border-t border-storm-border pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-storm-muted">
        <div>WANT TO INSPECT OUR COMPLETE 32-PROJECT VAULT?</div>
        <Link
          href="/projects"
          className="text-storm-cyan hover:underline flex items-center gap-1 font-bold"
        >
          <span>OPEN REPOSITORIES &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
