"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Zap, Cpu, Server, Activity, ChevronRight, Layers, ShieldCheck } from "lucide-react";
import { StormCoreReactor } from "@/components/canvas/storm-core-reactor";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden font-mono">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />

      {/* =========================================================
          HERO SECTION: Kinetic Brutalism + 3D Storm Reactor Core
         ========================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-between border-b border-storm-border px-4 sm:px-8 py-10 lg:py-16 max-w-7xl mx-auto">
        {/* Top Coordinates Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-storm-muted border-b border-storm-border/50 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-storm-volt animate-pulse" />
            <span className="text-storm-white font-bold">STATION // 23.8103° N, 90.4125° E</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>ENGINEERING LAB: <strong className="text-storm-cyan">ACTIVE</strong></span>
            <span className="text-storm-border">|</span>
            <span>SPEC: <strong className="text-storm-volt">AESTHETIC SOTY 2026</strong></span>
          </div>
        </div>

        {/* Hero Title & Kinetic Typography */}
        <div className="my-8 lg:my-12 space-y-4">
          <div className="telemetry-badge text-storm-cyan">
            <Zap className="w-3 h-3 text-storm-volt" />
            CYBERNETIC SOFTWARE FORGE
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-storm-white leading-[0.95]">
            WE FORGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-storm-cyan via-storm-white to-storm-volt">SOFTWARE</span> <br />
            OUT OF CHAOS.
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-storm-muted font-sans font-light leading-relaxed">
            CodeStorm is an elite collective of open-source software architects and systems engineers. 
            We build resilient enterprise SaaS platforms, AI-driven architectures, and high-throughput software.
          </p>

          {/* Action Triggers */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
            <Link
              href="/projects"
              className="px-6 py-3 border border-storm-cyan bg-storm-cyan text-storm-void font-bold hover:bg-transparent hover:text-storm-cyan transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              <span>ACCESS 32-PROJECT VAULT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/showcase"
              className="px-6 py-3 border border-storm-border bg-storm-titanium text-storm-white hover:border-storm-volt hover:text-storm-volt transition-all flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-storm-volt" />
              <span>INSPECT FLAGSHIPS (StormCom & StormERP)</span>
            </Link>
          </div>
        </div>

        {/* 3D WebGL Reactor Canvas */}
        <div className="w-full">
          <StormCoreReactor />
        </div>
      </section>

      {/* =========================================================
          THE KINETIC MANIFESTO: Split Screen Editorial
         ========================================================= */}
      <section className="border-b border-storm-border bg-storm-titanium/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-storm-border">
          {/* Left: The Manifesto Text */}
          <div className="p-8 sm:p-12 lg:p-16 space-y-6">
            <div className="telemetry-badge text-storm-volt">
              <Activity className="w-3 h-3" />
              {"// 01_ENGINEERING_MANIFESTO"}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-storm-white uppercase">
              WE REJECT BOILERPLATE. <br />
              WE DEMAND ARCHITECTURAL TRUTH.
            </h2>
            <div className="space-y-4 text-sm text-storm-muted font-sans leading-relaxed">
              <p>
                In a web saturated with generic, cookie-cutter templates and disposable code, CodeStorm was founded to build software with structural integrity and unapologetic craft.
              </p>
              <p>
                Every line of code we write is calibrated for low latency, zero memory leaks, and transparent execution. Whether we are orchestrating distributed ERP engines or multi-agent predictive e-commerce models, we treat software engineering as industrial art.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-storm-cyan">
              <span>LED BY LEAD ARCHITECT SYED SALMAN REZA</span>
              <span>&rarr;</span>
              <Link href="/about" className="underline hover:text-storm-white">
                READ FULL INTEL
              </Link>
            </div>
          </div>

          {/* Right: The Hardware Tech Matrix */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-storm-void/60">
            <div>
              <div className="text-xs text-storm-muted uppercase tracking-widest mb-6 flex items-center justify-between">
                <span>[STACK_CAPABILITIES]</span>
                <span className="text-storm-volt">LEVEL 03 CLEARANCE</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: "Next.js 15", category: "Core Framework", color: "text-storm-cyan" },
                  { name: "React 19", category: "Concurrent UI", color: "text-storm-white" },
                  { name: "Three.js / WebGL", category: "3D Spatial Engine", color: "text-storm-volt" },
                  { name: "TypeScript 5", category: "Type Soundness", color: "text-storm-cyan" },
                  { name: "Python / PyTorch", category: "Neural & AI Models", color: "text-storm-plasma" },
                  { name: "Docker / K8s", category: "DevOps & Cloud", color: "text-storm-white" },
                  { name: "PostgreSQL", category: "Relational Storage", color: "text-storm-cyan" },
                  { name: "Tailwind CSS v4", category: "Styling Engine", color: "text-storm-volt" },
                  { name: "Lenis Motion", category: "Inertia Physics", color: "text-storm-white" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="border border-storm-border p-3 bg-storm-titanium hover:border-storm-cyan hover:bg-storm-panel transition-all group cursor-default"
                  >
                    <div className={`text-xs font-bold ${tech.color} group-hover:translate-x-0.5 transition-transform`}>
                      {tech.name}
                    </div>
                    <div className="text-[10px] text-storm-muted mt-1 font-mono">
                      {tech.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-storm-border pt-4 flex items-center justify-between text-xs text-storm-muted">
              <span>ZERO UNSAFE RUNTIMES</span>
              <span className="text-storm-volt font-bold">100% PRODUCTION READY</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FLAGSHIPS: StormCom & StormERP Cinematic Portals
         ========================================================= */}
      <section className="border-b border-storm-border py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="telemetry-badge text-storm-cyan mb-2">
              <Server className="w-3 h-3 text-storm-volt" />
              {"// 02_COMMERCIAL_SAAS_FLAGSHIPS"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-storm-white tracking-tight">
              PROPRIETARY ENGINES.
            </h2>
          </div>
          <Link
            href="/showcase"
            className="text-xs text-storm-cyan hover:text-storm-volt flex items-center gap-1 underline"
          >
            <span>EXPLORE FULL ARCHITECTURAL SHOWCASE</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* StormCom */}
          <div className="border border-storm-border bg-storm-titanium p-6 sm:p-8 flex flex-col justify-between hover:border-storm-cyan transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-32 h-32 text-storm-cyan" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="telemetry-badge text-storm-cyan">ACTIVE SAAS</span>
                <span className="text-xs text-storm-muted font-mono">ID: COM-AI-01</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-storm-white group-hover:text-storm-cyan transition-colors">
                StormCom
              </h3>
              <p className="text-xs text-storm-volt uppercase font-bold tracking-wider">
                Autonomous AI-Driven E-Commerce Ecosystem
              </p>
              <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
                Empowering multi-vendor commerce with real-time sales predictive modeling, algorithmic restocking recommendations, automated customer journey analytics, and high-concurrency order processing.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] font-mono text-storm-muted">
                <div className="border border-storm-border/70 p-2 bg-storm-void">
                  <span className="text-storm-white font-bold block">AI Sales Forecasting</span>
                  <span>99.2% Trend Accuracy</span>
                </div>
                <div className="border border-storm-border/70 p-2 bg-storm-void">
                  <span className="text-storm-white font-bold block">Multi-Store Sync</span>
                  <span>Real-Time Inventory</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-storm-border flex items-center justify-between relative z-10">
              <a
                href="https://codestormhub.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-storm-cyan hover:text-storm-white flex items-center gap-1.5"
              >
                <span>VISIT PLATFORM (codestormhub.live)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link href="/showcase" className="text-xs text-storm-muted hover:text-storm-white">
                SPECS &rarr;
              </Link>
            </div>
          </div>

          {/* StormERP */}
          <div className="border border-storm-border bg-storm-titanium p-6 sm:p-8 flex flex-col justify-between hover:border-storm-volt transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layers className="w-32 h-32 text-storm-volt" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="telemetry-badge text-storm-volt">ACTIVE SAAS</span>
                <span className="text-xs text-storm-muted font-mono">ID: ERP-SYS-02</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-storm-white group-hover:text-storm-volt transition-colors">
                StormERP
              </h3>
              <p className="text-xs text-storm-cyan uppercase font-bold tracking-wider">
                Cloud Enterprise Resource Planning System
              </p>
              <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
                A unified operational backbone unifying multi-warehouse inventory, double-entry financial accounting, human resources payroll, automated supply chain triggers, and enterprise manufacturing pipelines.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] font-mono text-storm-muted">
                <div className="border border-storm-border/70 p-2 bg-storm-void">
                  <span className="text-storm-white font-bold block">Multi-Currency Ledger</span>
                  <span>Automated Balancing</span>
                </div>
                <div className="border border-storm-border/70 p-2 bg-storm-void">
                  <span className="text-storm-white font-bold block">Supply Chain AI</span>
                  <span>Automated PO Triggers</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-storm-border flex items-center justify-between relative z-10">
              <a
                href="https://codestormhub.live/erp/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-storm-volt hover:text-storm-white flex items-center gap-1.5"
              >
                <span>VISIT PLATFORM (/erp/dashboard)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link href="/showcase" className="text-xs text-storm-muted hover:text-storm-white">
                SPECS &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OPEN SOURCE VAULT: Top Repositories Preview
         ========================================================= */}
      <section className="border-b border-storm-border bg-storm-titanium/30 py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <div className="telemetry-badge text-storm-white mb-2">
              <Terminal className="w-3 h-3 text-storm-cyan" />
              {"// 03_OPEN_SOURCE_REPOSITORY_RADAR"}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase text-storm-white">
              32 DISTRIBUTED MODULES.
            </h2>
          </div>
          <Link
            href="/projects"
            className="px-4 py-2 border border-storm-border bg-storm-panel hover:border-storm-cyan text-storm-white hover:text-storm-cyan text-xs flex items-center gap-2"
          >
            <span>VIEW ALL 32 PROJECTS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "AlloraBD",
              desc: "Complete multi-tier e-commerce ecosystem with automated order queues and analytics.",
              lang: "TypeScript / Node.js",
              status: "PRODUCTION",
            },
            {
              title: "ATM Tester",
              desc: "Hardware & software simulation bench for banking transaction durability and compliance.",
              lang: "C# / .NET",
              status: "STABLE",
            },
            {
              title: "Storm Funnel",
              desc: "High-throughput lead conversion and marketing automation ingestion engine.",
              lang: "Python / FastAPI",
              status: "ACTIVE",
            },
            {
              title: "CBRMS",
              desc: "Community billing and resource management platform with auditing capabilities.",
              lang: "PHP / Laravel",
              status: "ACTIVE",
            },
            {
              title: "NetCon_PyVue",
              desc: "Network diagnostic protocol analyzer combining Python services with reactive Vue frontend.",
              lang: "Python / Vue",
              status: "RESEARCH",
            },
            {
              title: "GitHubReadTool",
              desc: "Developer CLI utility for rapid repo telemetry scanning and AST documentation generation.",
              lang: "TypeScript",
              status: "UTILITY",
            },
          ].map((proj) => (
            <div
              key={proj.title}
              className="border border-storm-border bg-storm-titanium p-5 hover:border-storm-cyan transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-storm-cyan font-bold">{proj.status}</span>
                  <span className="text-storm-muted">{proj.lang}</span>
                </div>
                <h4 className="text-base font-bold text-storm-white">{proj.title}</h4>
                <p className="text-xs text-storm-muted font-sans line-clamp-2">{proj.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-storm-border/50 flex items-center justify-between text-[11px]">
                <Link href="/projects" className="text-storm-volt hover:underline flex items-center gap-1">
                  <span>DISPATCH DETAILS</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          THE ARCHITECTS: Team Preview & Dossier
         ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <div className="telemetry-badge text-storm-volt mb-2">
              <ShieldCheck className="w-3 h-3" />
              {"// 04_CORE_ARCHITECTS"}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase text-storm-white">
              THE ENGINEERS BEHIND THE FORGE.
            </h2>
          </div>
          <Link
            href="/team"
            className="text-xs text-storm-cyan hover:text-storm-volt flex items-center gap-1 underline"
          >
            <span>OPEN COMPLETE ARCHITECTS DOSSIER</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Syed Salman Reza",
              role: "Lead Software Architect",
              focus: "Scalable Systems & Full-Stack",
              img: "/team-members/syed-salman-reza.jpg",
            },
            {
              name: "Rafiqul Islam Susmoy",
              role: "Software Engineer",
              focus: "Backend Architecture & APIs",
              img: "/team-members/rafiqul-islam-susmoy.jpg",
            },
            {
              name: "Maruf Mustal Moon",
              role: "DevOps & Infrastructure",
              focus: "Cloud Pipelines & Reliability",
              img: "/team-members/maruf-mustal-moon.jpg",
            },
            {
              name: "Afsan Khan",
              role: "AI / ML Specialist",
              focus: "Neural Networks & Intelligence",
              img: "/team-members/afsan-khan.jpg",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="border border-storm-border bg-storm-titanium p-4 hover:border-storm-volt transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="aspect-square w-full bg-storm-panel border border-storm-border overflow-hidden relative grayscale hover:grayscale-0 transition-all">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-2 left-2 telemetry-badge text-[9px] bg-storm-void/80">
                    ARCHITECT
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-storm-white">{member.name}</h4>
                  <p className="text-xs text-storm-volt font-bold">{member.role}</p>
                  <p className="text-[11px] text-storm-muted mt-0.5">{member.focus}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-storm-border/50">
                <Link
                  href="/team"
                  className="text-[11px] text-storm-cyan hover:text-storm-white flex items-center justify-between"
                >
                  <span>INSPECT PROFILE</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CALL TO TRANSMIT: Bottom Terminal Trigger
         ========================================================= */}
      <section className="border-t border-storm-border bg-storm-titanium py-16 px-4 sm:px-8 text-center font-mono">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-storm-void border border-storm-border text-xs text-storm-volt">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSMIT_DISPATCH // SECURE COMMS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-storm-white tracking-tight">
            READY TO COLLABORATE OR COMMISSION?
          </h2>
          <p className="text-sm text-storm-muted max-w-xl mx-auto font-sans">
            Whether you want to contribute to an open-source initiative, test our SaaS platforms, or partner on high-load software development, our communications line is open.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link
              href="/contact"
              className="px-6 py-3 border border-storm-volt bg-storm-volt text-storm-void font-bold hover:bg-transparent hover:text-storm-volt transition-all flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              <span>OPEN TRANSMISSION CHANNEL</span>
            </Link>
            <a
              href="https://github.com/CodeStorm-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-storm-border bg-storm-void text-storm-white hover:border-storm-cyan hover:text-storm-cyan transition-all"
            >
              <span>GITHUB REPOSITORIES ↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
