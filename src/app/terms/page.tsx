import React from "react";
import { FileCode } from "lucide-react";

export const metadata = {
  title: "Terms of Service // Open Source Terms | CodeStorm Hub",
  description: "Terms and conditions governing the use of CodeStorm Hub open-source repositories and online services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-volt">
          <FileCode className="w-3.5 h-3.5" />
          <span>LEGAL // TERMS_OF_SERVICE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          TERMS OF SERVICE.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          These terms govern your access to CodeStorm Hub, our open-source software distributions, and community forums.
        </p>
      </div>

      <div className="space-y-8">
        {/* Core Notice */}
        <section className="border border-storm-border bg-storm-titanium p-8 sm:p-10 space-y-4">
          <h2 className="text-xl font-bold uppercase text-storm-white">
            01 // ACCEPTANCE OF TERMS
          </h2>
          <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
            By accessing or browsing CodeStorm Hub (codestorm-hub.github.io) or contributing to its public repositories, you agree to comply with and be bound by these Terms of Service, all applicable laws, and relevant open-source licensing agreements.
          </p>
        </section>

        {/* Open Source Licensing */}
        <section className="border border-storm-border bg-storm-titanium p-8 sm:p-10 space-y-4">
          <h2 className="text-xl font-bold uppercase text-storm-cyan">
            02 // OPEN SOURCE LICENSES & CODE REUSE
          </h2>
          <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
            Our public software repositories are generally released under permissive open-source licenses (such as the MIT License or Apache 2.0). Each individual repository includes its exact license file. Code reuse, modification, and redistribution must respect those license boundaries.
          </p>
        </section>

        {/* Disclaimer of Warranties */}
        <section className="border border-storm-border bg-storm-titanium p-8 sm:p-10 space-y-4">
          <h2 className="text-xl font-bold uppercase text-storm-volt">
            03 // DISCLAIMER OF WARRANTIES (&quot;AS IS&quot;)
          </h2>
          <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
            ALL OPEN-SOURCE CODE, ARCHITECTURAL BLUEPRINTS, AND DOCUMENTATION PROVIDED ON THIS SITE ARE DELIVERED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED. CODESTORM HUB DISCLAIMS ALL LIABILITY FOR ANY SYSTEM OUTAGES, DATA LOSS, OR CONSEQUENTIAL DAMAGES ARISING FROM REPOSITORY USAGE.
          </p>
        </section>

        {/* Commercial Products */}
        <section className="border border-storm-border bg-storm-titanium p-8 sm:p-10 space-y-4">
          <h2 className="text-xl font-bold uppercase text-storm-white">
            04 // COMMERCIAL SAAS PRODUCTS
          </h2>
          <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
            Proprietary SaaS platforms referenced on this website (such as StormCom and StormERP) have independent commercial Service Level Agreements (SLAs), terms of service, and enterprise licensing terms governed separately from our open-source repositories.
          </p>
        </section>
      </div>
    </div>
  );
}
