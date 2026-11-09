import React from "react";
import { CheckCircle2, Eye, Keyboard, Monitor, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Accessibility Conformance (WCAG 2.1 AA) | CodeStorm Hub",
  description: "CodeStorm Hub's formal commitment to digital accessibility, keyboard navigability, and assistive screen reader compatibility.",
};

const PILLARS = [
  {
    title: "KEYBOARD OPERABILITY",
    icon: Keyboard,
    items: [
      "Full tab navigation through all interactive controls and terminal links",
      "Visible focus rings (2px cyan glow) on all focused interactive nodes",
      "Logical focus order preserving DOM traversal",
      "STORM-OS drawer fully navigatable and dismissable via Escape key",
    ],
  },
  {
    title: "SCREEN READER SEMANTICS",
    icon: Eye,
    items: [
      "Semantic HTML5 landmark hierarchy (<header>, <main>, <footer>, <nav>)",
      "Descriptive ARIA labels and aria-modal attributes on drawer dialogs",
      "Meaningful text alternatives for decorative icons and interactive badges",
      "Accessible name computation for all external repo links",
    ],
  },
  {
    title: "MOTION & SENSORY SAFETY",
    icon: Monitor,
    items: [
      "Strict compliance with prefers-reduced-motion media query",
      "Zero high-frequency flashing exceeding 3 flashes per second",
      "3D canvas animation throttles to static mode when motion reduction is detected",
      "Inertia smooth-scrolling bypasses whenever reduced motion is preferred",
    ],
  },
  {
    title: "CONTRAST & LEGIBILITY",
    icon: ShieldCheck,
    items: [
      "Strict WCAG 2.1 AA compliant contrast (minimum 4.5:1 for body copy)",
      "Text scalable up to 200% without horizontal viewport overflow",
      "Information is never conveyed solely by color hue alone",
      "Clean monospaced typographic baseline for code telemetry",
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-cyan">
          <ShieldCheck className="w-3.5 h-3.5 text-storm-volt" />
          <span>STANDARDS // WCAG_2.1_AA_CONFORMANCE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          ACCESSIBILITY.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          CodeStorm Hub is engineered for universal access. While our aesthetic is bold and kinetic, our code strictly adheres to W3C Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="border border-storm-border bg-storm-titanium p-6 sm:p-8 space-y-4 hover:border-storm-cyan transition-colors"
            >
              <div className="flex items-center gap-3 border-b border-storm-border pb-3">
                <div className="w-8 h-8 border border-storm-border bg-storm-panel flex items-center justify-center text-storm-cyan">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold uppercase text-storm-white">
                  {`// ${pillar.title}`}
                </h3>
              </div>

              <div className="space-y-2.5 pt-2">
                {pillar.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-storm-muted font-sans">
                    <CheckCircle2 className="w-4 h-4 text-storm-volt flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Feedback & Remediation */}
      <section className="border border-storm-border bg-storm-titanium p-8 space-y-4">
        <h3 className="text-sm font-bold uppercase text-storm-white">
          ACCESSIBILITY FEEDBACK & REMEDIATION
        </h3>
        <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
          If you encounter any accessibility barriers while using CodeStorm Hub or its documentation, please notify our lead architects at <strong className="text-storm-cyan font-mono">accessibility@codestorm-hub.org</strong>. We treat accessibility defects with high operational priority.
        </p>
      </section>
    </div>
  );
}
