import React from "react";
import Link from "next/link";
import { Users, MessageSquare, ArrowUpRight, Zap } from "lucide-react";

export const metadata = {
  title: "Developer Community // Open Source Collective | CodeStorm Hub",
  description: "Join the CodeStorm Hub engineering community. Connect with open-source contributors, share ideas, and build resilient software.",
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-cyan">
          <Users className="w-3.5 h-3.5 text-storm-volt" />
          <span>DEVELOPER_COLLECTIVE // GLOBAL_COMMUNITY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          THE COLLECTIVE.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          CodeStorm Hub thrives on global developer collaboration. Connect with our architects, participate in discussions, review RFCs, and help build the next wave of open-source software.
        </p>
      </div>

      {/* Community Values Matrix */}
      <section className="mb-14">
        <div className="text-xs text-storm-volt uppercase font-bold tracking-widest mb-6 flex items-center gap-2">
          <Zap className="w-4 h-4 text-storm-cyan" />
          <span>{"// COMMUNITY CORE VALUES"}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "INCLUSIVITY",
              desc: "Welcoming passionate developers, researchers, and systems thinkers across all backgrounds.",
              color: "text-storm-cyan",
            },
            {
              title: "COLLABORATION",
              desc: "Engineering in the open with asynchronous peer review and transparent architectural consensus.",
              color: "text-storm-volt",
            },
            {
              title: "INNOVATION",
              desc: "Pushing beyond standard web patterns with experimental shaders, AI agents, and concurrency.",
              color: "text-storm-plasma",
            },
            {
              title: "CRAFT & QUALITY",
              desc: "Strict type enforcement, memory-safe code execution, and high test coverage.",
              color: "text-storm-white",
            },
          ].map((val) => (
            <div
              key={val.title}
              className="border border-storm-border bg-storm-titanium p-6 hover:border-storm-border-bright transition-colors space-y-3"
            >
              <h3 className={`text-sm font-bold uppercase ${val.color}`}>
                {`// ${val.title}`}
              </h3>
              <p className="text-xs text-storm-muted font-sans leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Channels */}
      <section className="mb-14 border border-storm-border bg-storm-titanium p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold uppercase text-storm-white flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-storm-cyan" />
          <span>OFFICIAL COMMUNITY CHANNELS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <a
            href="https://github.com/orgs/CodeStorm-Hub/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-storm-border bg-storm-panel p-6 hover:border-storm-cyan transition-colors flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <span className="text-storm-cyan font-bold block text-sm group-hover:underline">
                GitHub Discussions Forum ↗
              </span>
              <p className="text-storm-muted font-sans text-xs">
                Ask architectural questions, showcase projects, propose new modules, and debate engineering RFCs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-storm-border/50 text-storm-volt font-bold flex items-center gap-1">
              <span>ENTER FORUM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          <a
            href="https://github.com/CodeStorm-Hub"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-storm-border bg-storm-panel p-6 hover:border-storm-volt transition-colors flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <span className="text-storm-volt font-bold block text-sm group-hover:underline">
                GitHub Organization Repos ↗
              </span>
              <p className="text-storm-muted font-sans text-xs">
                Inspect source repositories, submit issues, open pull requests, and contribute to active projects.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-storm-border/50 text-storm-cyan font-bold flex items-center gap-1">
              <span>VIEW CODEBASES</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </section>

      {/* Code of Conduct CTA */}
      <div className="border-t border-storm-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-storm-muted">
        <div>ALL COMMUNITY MEMBERS MUST ADHERE TO OUR CODE OF CONDUCT.</div>
        <Link
          href="/code-of-conduct"
          className="text-storm-white hover:text-storm-volt hover:underline font-bold"
        >
          <span>READ CODE OF CONDUCT &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
