import React from "react";
import { ShieldAlert, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Code of Conduct // Contributor Covenant v2.1 | CodeStorm Hub",
  description: "Standards of behavior and enforcement guidelines for participating in CodeStorm open-source spaces.",
};

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-cyan">
          <ShieldCheck className="w-3.5 h-3.5 text-storm-volt" />
          <span>GOVERNANCE // CONTRIBUTOR_COVENANT_v2.1</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          CODE OF CONDUCT.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          We are committed to providing a friendly, safe, and welcoming environment for all, regardless of level of experience, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.
        </p>
      </div>

      <div className="space-y-12">
        {/* Our Pledge */}
        <section className="border border-storm-border bg-storm-titanium p-8 sm:p-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-storm-white">
            {"// OUR PLEDGE"}
          </h2>
          <p className="text-sm text-storm-muted font-sans leading-relaxed">
            In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to make participation in our project and our community a harassment-free experience for everyone.
          </p>
        </section>

        {/* Expected Standards */}
        <section className="border border-storm-border bg-storm-titanium p-8 sm:p-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-storm-volt">
            {"// POSITIVE BEHAVIORS"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {[
              "Demonstrating empathy and kindness toward other people",
              "Being respectful of differing viewpoints and architectural opinions",
              "Giving and gracefully accepting constructive feedback",
              "Accepting responsibility and apologizing to those affected by our mistakes",
              "Focusing on what is best not just for us as individuals, but for the overall community",
            ].map((text) => (
              <div key={text} className="p-3 border border-storm-border bg-storm-panel flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-storm-cyan flex-shrink-0 mt-0.5" />
                <span className="text-storm-white">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Unacceptable Behaviors */}
        <section className="border border-destructive/50 bg-destructive/5 p-8 sm:p-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-destructive flex items-center gap-2">
            <ShieldAlert className="w-5 h-5" />
            <span>{"// UNACCEPTABLE BEHAVIOR"}</span>
          </h2>
          <ul className="space-y-2 text-xs text-storm-muted font-sans list-disc list-inside">
            <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
            <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
            <li>Public or private harassment</li>
            <li>Publishing others&apos; private information without explicit permission</li>
            <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
          </ul>
        </section>

        {/* Enforcement & Reporting */}
        <section className="border border-storm-border bg-storm-titanium p-8 sm:p-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-storm-cyan">
            {"// ENFORCEMENT & REPORTING"}
          </h2>
          <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
            Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at <strong className="text-storm-white font-mono">conduct@codestorm-hub.org</strong>. All complaints will be reviewed and investigated promptly and fairly.
          </p>
        </section>
      </div>
    </div>
  );
}
