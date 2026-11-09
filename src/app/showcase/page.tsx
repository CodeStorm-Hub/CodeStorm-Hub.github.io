import React from "react";
import Link from "next/link";
import { ArrowUpRight, Server, CheckCircle2 } from "lucide-react";
import { getAssetPath } from "@/lib/image-utils";

export const metadata = {
  title: "Commercial SaaS Showcase // StormCom & StormERP | CodeStorm Hub",
  description: "Architectural deep dive into CodeStorm's flagship platforms: StormCom AI E-Commerce and StormERP Enterprise Solution.",
};

export default function ShowcasePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-cyan">
          <Server className="w-3.5 h-3.5 text-storm-volt" />
          <span>FLAGSHIP ARCHITECTURE DOSSIER</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          COMMERCIAL ENGINES.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          Deep-dive inspection of CodeStorm&apos;s proprietary enterprise SaaS applications. Built to handle heavy real-time traffic, automated intelligence, and complex business operations.
        </p>
      </div>

      {/* =========================================================
          FLAGSHIP 01: StormCom
         ========================================================= */}
      <section className="mb-20 border border-storm-border bg-storm-titanium p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-storm-border">
          <div className="flex items-center gap-3">
            <span className="telemetry-badge text-storm-cyan font-bold">SAAS // PROPRIETARY</span>
            <span className="text-xs text-storm-muted">RELEASE: v2.4-PRODUCTION</span>
          </div>
          <a
            href="https://codestormhub.live"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-storm-cyan bg-storm-cyan text-storm-void text-xs font-bold hover:bg-transparent hover:text-storm-cyan transition-all flex items-center gap-1.5"
          >
            <span>LAUNCH STORMCOM LIVE</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div>
              <span className="text-xs text-storm-volt uppercase font-bold tracking-widest">
                01 // ARTIFICIAL INTELLIGENCE PLATFORM
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-storm-white mt-1">
                StormCom
              </h2>
              <p className="text-sm text-storm-cyan font-bold mt-2">
                AI-Powered Multi-Vendor E-Commerce Operating System
              </p>
            </div>

            <p className="text-sm text-storm-muted font-sans leading-relaxed">
              StormCom is an autonomous e-commerce engine designed for modern merchants requiring predictive operational intelligence. Rather than passively recording sales, StormCom acts as an active AI copilot: analyzing consumer behavioral patterns, predicting seasonal demand, and automating targeted marketing cycles.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-storm-white font-bold">
                KEY ARCHITECTURAL HIGHLIGHTS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-storm-muted font-sans">
                {[
                  "Real-Time Revenue & Order Telemetry",
                  "AI Demand & Restock Predictions",
                  "Multi-Store Unified Inventory",
                  "Algorithmic Abandoned-Cart Recovery",
                  "Automated Dynamic Price Optimization",
                  "Encrypted PCI-Compliant Pipelines",
                  "Sub-50ms Global Query Response",
                  "Elastic Horizontal Scaling Clusters",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 border border-storm-border p-2 bg-storm-panel">
                    <CheckCircle2 className="w-3.5 h-3.5 text-storm-cyan flex-shrink-0" />
                    <span className="text-storm-white text-[11px] font-mono">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Showcase Panel */}
          <div className="space-y-4">
            <div className="border border-storm-border bg-storm-void p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-storm-muted border-b border-storm-border pb-2">
                <span>DASHBOARD METRICS TELEMETRY</span>
                <span className="text-storm-volt">LIVE STATUS // 99.98%</span>
              </div>
              <div className="aspect-video w-full bg-storm-titanium border border-storm-border overflow-hidden relative group">
                <img
                  src={getAssetPath("/products/stormcom-dashboard.png")}
                  alt="StormCom Dashboard Overview"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-storm-muted pt-2">
                <div className="border border-storm-border p-1.5">
                  <div className="text-storm-white font-bold text-xs">AI ENGINE</div>
                  <div>NEURAL FORECAST</div>
                </div>
                <div className="border border-storm-border p-1.5">
                  <div className="text-storm-cyan font-bold text-xs">&lt; 12ms</div>
                  <div>CACHE LATENCY</div>
                </div>
                <div className="border border-storm-border p-1.5">
                  <div className="text-storm-volt font-bold text-xs">100K+</div>
                  <div>CONCURRENT TPS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FLAGSHIP 02: StormERP
         ========================================================= */}
      <section className="mb-14 border border-storm-border bg-storm-titanium p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-storm-border">
          <div className="flex items-center gap-3">
            <span className="telemetry-badge text-storm-volt font-bold">SAAS // ENTERPRISE</span>
            <span className="text-xs text-storm-muted">RELEASE: v3.1-ENTERPRISE</span>
          </div>
          <a
            href="https://codestormhub.live/erp/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-storm-volt bg-storm-volt text-storm-void text-xs font-bold hover:bg-transparent hover:text-storm-volt transition-all flex items-center gap-1.5"
          >
            <span>LAUNCH STORMERP LIVE</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div>
              <span className="text-xs text-storm-cyan uppercase font-bold tracking-widest">
                02 // ENTERPRISE SYSTEM
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-storm-white mt-1">
                StormERP
              </h2>
              <p className="text-sm text-storm-volt font-bold mt-2">
                Unified Cloud Enterprise Resource Planning Engine
              </p>
            </div>

            <p className="text-sm text-storm-muted font-sans leading-relaxed">
              Engineered to replace fragmented business software with an all-in-one cloud platform. StormERP orchestrates complex multi-location manufacturing, double-entry financial accounting, human resources payroll, automated supply chains, and procurement lifecycles.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-storm-white font-bold">
                KEY ARCHITECTURAL HIGHLIGHTS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-storm-muted font-sans">
                {[
                  "Multi-Warehouse Inventory Ledger",
                  "Automated Double-Entry Accounting",
                  "Human Capital & Payroll Lifecycle",
                  "Supply Chain & Procurement Workflows",
                  "Multi-Currency & Tax Governance",
                  "Role-Based Access Control (RBAC)",
                  "Audit-Proof Compliance Logs",
                  "Continuous Event-Driven Webhooks",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 border border-storm-border p-2 bg-storm-panel">
                    <CheckCircle2 className="w-3.5 h-3.5 text-storm-volt flex-shrink-0" />
                    <span className="text-storm-white text-[11px] font-mono">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Showcase Panel */}
          <div className="space-y-4">
            <div className="border border-storm-border bg-storm-void p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-storm-muted border-b border-storm-border pb-2">
                <span>ERP SYSTEM CONTROL PANEL</span>
                <span className="text-storm-cyan">MULTI-TENANT // ONLINE</span>
              </div>
              <div className="aspect-video w-full bg-storm-titanium border border-storm-border overflow-hidden relative group">
                <img
                  src={getAssetPath("/products/stormerp-dashboard.png")}
                  alt="StormERP Dashboard Overview"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-storm-muted pt-2">
                <div className="border border-storm-border p-1.5">
                  <div className="text-storm-white font-bold text-xs">ISO READY</div>
                  <div>DATA AUDIT</div>
                </div>
                <div className="border border-storm-border p-1.5">
                  <div className="text-storm-volt font-bold text-xs">UNIFIED</div>
                  <div>LEDGER SYNC</div>
                </div>
                <div className="border border-storm-border p-1.5">
                  <div className="text-storm-cyan font-bold text-xs">HIGH RES</div>
                  <div>ENTERPRISE SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="border-t border-storm-border pt-10 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold uppercase text-storm-white">
          WANT A BESPOKE DEMONSTRATION OR ENTERPRISE DEPLOYMENT?
        </h3>
        <p className="text-xs text-storm-muted font-sans max-w-xl mx-auto">
          Contact our lead architects directly for tailored white-label deployments, architectural consulting, or custom module integrations.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-storm-cyan bg-storm-cyan text-storm-void font-bold text-xs hover:bg-transparent hover:text-storm-cyan transition-all"
          >
            <span>TRANSMIT INQUIRY TO LEAD ARCHITECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
