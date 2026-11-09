import React from "react";
import { Lock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy // Data Telemetry Disclosures | CodeStorm Hub",
  description: "CodeStorm Hub's privacy policy, zero third-party tracking pledge, and data telemetry disclosures.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-cyan">
          <Lock className="w-3.5 h-3.5 text-storm-volt" />
          <span>GOVERNANCE // PRIVACY_DIRECTIVE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          PRIVACY POLICY.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          CodeStorm Hub believes in aggressive privacy preservation. We do not sell user data, we do not employ third-party surveillance ad trackers, and our static distribution is designed for privacy by default.
        </p>
      </div>

      <div className="space-y-10">
        {/* Core Principles */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "ZERO AD TRACKING",
              desc: "No third-party advertising cookies, fingerprinting pixels, or behavioral cross-site trackers.",
            },
            {
              title: "STATIC CDN HOSTING",
              desc: "Hosted on GitHub Pages Edge CDN. Standard server access logs are managed per GitHub Privacy Policies.",
            },
            {
              title: "VOLUNTARY COMMS ONLY",
              desc: "We only process personal details when you voluntarily submit an inquiry through our contact form.",
            },
          ].map((principle) => (
            <div
              key={principle.title}
              className="border border-storm-border bg-storm-titanium p-6 space-y-2 hover:border-storm-cyan transition-colors"
            >
              <h3 className="text-sm font-bold uppercase text-storm-white">
                {`// ${principle.title}`}
              </h3>
              <p className="text-xs text-storm-muted font-sans leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Detailed Sections */}
        <section className="border border-storm-border bg-storm-titanium p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold uppercase text-storm-volt">
              01 // DATA COLLECTION & STORAGE
            </h2>
            <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
              When visiting CodeStorm Hub, no personal account registration is mandatory. If you contact our architects via email or our transmission terminal, we collect your name, email address, and message payload strictly to respond to your inquiry.
            </p>
          </div>

          <div className="space-y-2 border-t border-storm-border/50 pt-6">
            <h2 className="text-xl font-bold uppercase text-storm-cyan">
              02 // THIRD-PARTY REPOSITORIES
            </h2>
            <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
              CodeStorm Hub links to external platforms such as GitHub, LinkedIn, and commercial product domains (codestormhub.live). Those external services operate under their respective terms and privacy policies.
            </p>
          </div>

          <div className="space-y-2 border-t border-storm-border/50 pt-6">
            <h2 className="text-xl font-bold uppercase text-storm-white">
              03 // YOUR RIGHTS
            </h2>
            <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
              Under GDPR, CCPA, and global privacy standards, you have the right to request deletion or inspection of any communication records submitted to CodeStorm Hub. Contact our architects at <strong className="text-storm-volt font-mono">privacy@codestorm-hub.org</strong> for immediate resolution.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
