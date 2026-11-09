import React from "react";
import { GitPullRequest, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "Contributing Directives // Developer Manual | CodeStorm Hub",
  description: "Standard operating procedures for contributing code, documentation, and architecture to CodeStorm repositories.",
};

const PROTOCOL_STEPS = [
  {
    step: "01",
    title: "FORK & CLONE",
    cmd: "git clone https://github.com/CodeStorm-Hub/<repository-name>.git",
    desc: "Fork the target repository to your own namespace and clone it locally.",
  },
  {
    step: "02",
    title: "ISOLATE IN FEATURE BRANCH",
    cmd: "git checkout -b feat/your-feature-name",
    desc: "Create a descriptive branch prefixed with feat/, fix/, docs/, or refactor/.",
  },
  {
    step: "03",
    title: "RUN VERIFICATION SUITE",
    cmd: "npm run type-check && npm run lint",
    desc: "Ensure all TypeScript compiler checks and linter rules pass with zero warnings.",
  },
  {
    step: "04",
    title: "DISPATCH PULL REQUEST",
    cmd: "git push origin feat/your-feature-name",
    desc: "Open a PR against the main branch with clear architectural justification.",
  },
];

export default function ContributingPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-cyan">
          <GitPullRequest className="w-3.5 h-3.5 text-storm-volt" />
          <span>CONTRIBUTING // OPERATIONAL_MANUAL</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          CONTRIBUTE TO THE FORGE.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          We welcome contributions across our 32 repositories. Follow our protocol to submit pull requests, report defects, or propose new software modules.
        </p>
      </div>

      {/* Protocol Steps */}
      <div className="space-y-6 mb-16">
        <h2 className="text-sm text-storm-volt uppercase font-bold tracking-wider flex items-center gap-2">
          <Zap className="w-4 h-4 text-storm-cyan" />
          <span>{"// 4-STEP CONTRIBUTION PROTOCOL"}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROTOCOL_STEPS.map((step) => (
            <div
              key={step.step}
              className="border border-storm-border bg-storm-titanium p-6 hover:border-storm-cyan transition-colors space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="telemetry-badge text-storm-cyan font-bold">
                  STEP {step.step}
                </span>
                <span className="text-storm-white font-bold">{step.title}</span>
              </div>

              <div className="p-3 bg-storm-void border border-storm-border text-xs text-storm-volt font-mono overflow-x-auto select-all">
                $ {step.cmd}
              </div>

              <p className="text-xs text-storm-muted font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Architectural Quality Standards */}
      <section className="border border-storm-border bg-storm-titanium p-8 sm:p-10 space-y-6">
        <h3 className="text-xl font-bold uppercase text-storm-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-storm-volt" />
          <span>CODE QUALITY & ARCHITECTURAL GATES</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
          {[
            { title: "Strict Type Safety", text: "Zero 'any' casts without explicit justification. Always declare complete interfaces." },
            { title: "Deterministic Builds", text: "Lockfile consistency is enforced. Never modify package-lock.json without reason." },
            { title: "Accessibility Compliance", text: "All interactive components must preserve keyboard focus, ARIA tags, and reduced-motion states." },
            { title: "Atomic Commit Hygiene", text: "Follow Conventional Commits (e.g. feat(canvas): add overclock dial controller)." },
          ].map((gate) => (
            <div key={gate.title} className="p-4 border border-storm-border bg-storm-panel space-y-1">
              <span className="text-storm-white font-mono font-bold block">{gate.title}</span>
              <span className="text-storm-muted text-xs leading-relaxed">{gate.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Repositories Trigger */}
      <div className="mt-12 border-t border-storm-border pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-storm-muted">
        <div>READY TO SUBMIT YOUR FIRST PULL REQUEST?</div>
        <a
          href="https://github.com/CodeStorm-Hub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-storm-volt hover:underline flex items-center gap-1 font-bold"
        >
          <span>OPEN GITHUB ORG ↗</span>
        </a>
      </div>
    </div>
  );
}
