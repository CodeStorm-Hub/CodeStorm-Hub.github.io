import React from "react";
import { Calendar, ArrowUpRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Tech Dispatches // Engineering Articles | CodeStorm Hub",
  description: "Read architectural essays, technical deep-dives, and platform announcements from the CodeStorm Hub engineering team.",
};

const DISPATCHES = [
  {
    slug: "welcome-to-codestorm-hub",
    title: "The CodeStorm Genesis: Reclaiming Engineering Integrity on the Open Web",
    excerpt: "Why we built CodeStorm Hub, rejecting bloated framework boilerplate in pursuit of raw computational performance, strict typing, and resilient SaaS architectures.",
    date: "2024-01-15",
    author: "Syed Salman Reza",
    role: "Lead Software Architect",
    readTime: "5 MIN READ",
    category: "MANIFESTO",
    featured: true,
  },
  {
    slug: "building-with-nextjs-radix",
    title: "Engineering at the Edge: Next.js 15 Static Architecture & Low-Latency UI",
    excerpt: "A deep dive into static export optimization, React 19 concurrency, and headless accessible primitives configured for extreme edge CDN delivery.",
    date: "2024-01-10",
    author: "Engineering Core",
    role: "Systems Team",
    readTime: "8 MIN READ",
    category: "TECHNICAL",
    featured: false,
  },
  {
    slug: "community-guidelines",
    title: "Operational Directives: High-Velocity Open Source Collaboration",
    excerpt: "How our collective approaches code reviews, AST verification, semantic release pipelines, and contributor hygiene across 32 repositories.",
    date: "2024-01-05",
    author: "Maruf Mustal Moon",
    role: "DevOps & Platform",
    readTime: "4 MIN READ",
    category: "DIRECTIVES",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = DISPATCHES.find((d) => d.featured) || DISPATCHES[0];
  const rest = DISPATCHES.filter((d) => d.slug !== featured.slug);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-cyan">
          <BookOpen className="w-3.5 h-3.5 text-storm-volt" />
          <span>TECHNICAL_DISPATCHES // ARCHIVAL_FEED</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          TECH DISPATCHES.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          Essays on systems programming, distributed SaaS architecture, AI agents, and open-source craftsmanship authored by CodeStorm engineers.
        </p>
      </div>

      {/* Featured Dispatch */}
      <div className="mb-14 border-2 border-storm-cyan/40 bg-storm-titanium p-8 sm:p-10 hover:border-storm-cyan transition-all group">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-storm-muted border-b border-storm-border pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="telemetry-badge text-storm-cyan font-bold">{featured.category}</span>
            <span className="text-storm-border">|</span>
            <span className="text-storm-volt">{featured.readTime}</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <Calendar className="w-3.5 h-3.5 text-storm-muted" />
            <span>{featured.date}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-storm-white group-hover:text-storm-cyan transition-colors">
            {featured.title}
          </h2>
          <p className="text-sm sm:text-base text-storm-muted font-sans leading-relaxed max-w-4xl">
            {featured.excerpt}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-storm-border flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-storm-white font-bold">{featured.author}</span>
            <span className="text-storm-border">/</span>
            <span className="text-storm-muted">{featured.role}</span>
          </div>

          <span className="text-storm-cyan font-bold flex items-center gap-1 group-hover:text-storm-volt">
            <span>READ FULL DISPATCH</span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Grid of Other Dispatches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rest.map((dispatch) => (
          <div
            key={dispatch.slug}
            className="border border-storm-border bg-storm-titanium p-6 hover:border-storm-volt transition-colors flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-storm-muted">
                <span className="telemetry-badge text-[10px] text-storm-volt">{dispatch.category}</span>
                <span className="text-[10px] font-mono">{dispatch.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-storm-white group-hover:text-storm-volt transition-colors">
                {dispatch.title}
              </h3>

              <p className="text-xs text-storm-muted font-sans leading-relaxed line-clamp-3">
                {dispatch.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-storm-border/50 flex items-center justify-between text-xs">
              <span className="text-storm-muted text-[11px]">{dispatch.author}</span>
              <span className="text-storm-volt flex items-center gap-1 font-bold text-[11px]">
                <span>READ &rarr;</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
