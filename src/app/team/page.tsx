import React from "react";
import { getAllTeamMembers } from "@/lib/team-data";
import { ShieldCheck } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { getAssetPath } from "@/lib/image-utils";

export const metadata = {
  title: "Architects Dossier // Core Engineering Roster | CodeStorm Hub",
  description: "Inspect the engineering profiles, disciplines, and identities of CodeStorm's core software architects.",
};

export default function TeamPage() {
  const teamMembers = getAllTeamMembers();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-storm-muted">
          <div className="telemetry-badge text-storm-volt">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ARCHITECT_ROSTER // 7 ACTIVE PROFILES</span>
          </div>
          <div className="text-[11px] text-storm-muted">
            SECURITY CLEARANCE: <strong className="text-storm-cyan">LEVEL_4_FULL_ACCESS</strong>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          THE ARCHITECTS.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          Meet the engineers, platform specialists, and intelligence researchers behind the CodeStorm ecosystem. 
          Each architect drives distinct disciplines across scalable system design, distributed infrastructure, neural models, and full-stack execution.
        </p>
      </div>

      {/* Architects Dossier Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={member.name}
            className="border-2 border-storm-border bg-storm-titanium p-6 flex flex-col justify-between hover:border-storm-cyan transition-all group relative overflow-hidden"
          >
            {/* Top Identity Badge */}
            <div>
              <div className="flex items-center justify-between text-xs text-storm-muted mb-4 border-b border-storm-border pb-3">
                <span className="telemetry-badge text-[10px] text-storm-cyan">
                  IDENTIFIER #{String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-mono text-storm-volt">VERIFIED_ACTIVE</span>
              </div>

              {/* Photo & Scanline Overlay */}
              <div className="aspect-[4/3] w-full bg-storm-panel border border-storm-border overflow-hidden relative mb-5 grayscale group-hover:grayscale-0 transition-all">
                <img
                  src={getAssetPath(member.image)}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-storm-void/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 text-[10px] text-storm-white font-mono bg-storm-void/90 px-2 py-0.5 border border-storm-border">
                  ARCHITECT // {member.name.split(" ")[0].toUpperCase()}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-storm-white group-hover:text-storm-cyan transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-storm-volt font-bold tracking-wide">
                  {member.role}
                </p>
                <p className="text-xs text-storm-muted font-sans leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>
            </div>

            {/* Social Links & Comms */}
            <div className="mt-6 pt-4 border-t border-storm-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {member.social.github && member.social.github !== "#" && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} GitHub`}
                    className="p-1.5 border border-storm-border hover:border-storm-cyan text-storm-muted hover:text-storm-white bg-storm-panel transition-colors"
                  >
                    <GitHubLogoIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.social.linkedin && member.social.linkedin !== "#" && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="p-1.5 border border-storm-border hover:border-storm-volt text-storm-muted hover:text-storm-white bg-storm-panel transition-colors"
                  >
                    <LinkedInLogoIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <span className="text-[10px] text-storm-muted font-mono">
                DISCIPLINE READY
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Roster Bottom Note */}
      <div className="mt-16 border-t border-storm-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-storm-muted">
        <div>
          <span>WANT TO CONTRIBUTE OR JOIN THE COLLECTIVE?</span>
        </div>
        <Link
          href="/contributing"
          className="text-storm-cyan hover:underline flex items-center gap-1 font-bold"
        >
          <span>READ CONTRIBUTING DIRECTIVES &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
