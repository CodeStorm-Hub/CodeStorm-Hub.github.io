import React from "react";
import Link from "next/link";
import { FolderCode, ArrowUpRight, Zap } from "lucide-react";

export const metadata = {
  title: "Developer Toolkits & Resources | CodeStorm Hub",
  description: "Curated developer resources, contribution starter kits, documentation guides, and architecture specifications.",
};

const CATEGORIES = [
  {
    title: "ONBOARDING & PROTOCOLS",
    desc: "Foundational manuals for developers joining the CodeStorm collective.",
    items: [
      {
        title: "Contributing Directives",
        desc: "Step-by-step git workflow, branching models, and AST linting policies.",
        href: "/contributing",
        isInternal: true,
      },
      {
        title: "Community Guidelines",
        desc: "Behavioral and collaborative operating procedures.",
        href: "/community",
        isInternal: true,
      },
      {
        title: "Code of Conduct",
        desc: "Strict adherence standards for community spaces and pull requests.",
        href: "/code-of-conduct",
        isInternal: true,
      },
    ],
  },
  {
    title: "ARCHITECTURE & TOOLING",
    desc: "Production guidelines, frameworks, and core engineering references.",
    items: [
      {
        title: "Next.js 15 & Turbopack Core",
        desc: "Official framework documentation for static edge applications.",
        href: "https://nextjs.org/docs",
        isInternal: false,
      },
      {
        title: "React 19 Concurrency Reference",
        desc: "React 19 architectural features, compiler optimizers, and hooks.",
        href: "https://react.dev",
        isInternal: false,
      },
      {
        title: "Three.js & WebGL 2.0 Docs",
        desc: "3D scene graph, shader math, and GPU optimization patterns.",
        href: "https://threejs.org/docs",
        isInternal: false,
      },
      {
        title: "Lenis Smooth Scroll Engine",
        desc: "Physics-based inertia scroll and custom ticker synchronization.",
        href: "https://github.com/darkroomengineering/lenis",
        isInternal: false,
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-cyan">
          <FolderCode className="w-3.5 h-3.5 text-storm-volt" />
          <span>TOOLKITS // REFERENCE_MANUALS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          DEV RESOURCES.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          Curated learning resources, technical guidelines, framework documentation, and contribution starter kits to accelerate engineering on CodeStorm repositories.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="space-y-12">
        {CATEGORIES.map((cat) => (
          <section key={cat.title} className="space-y-6">
            <div className="flex items-center justify-between border-b border-storm-border pb-2">
              <h2 className="text-sm font-bold uppercase text-storm-volt flex items-center gap-2">
                <Zap className="w-4 h-4 text-storm-cyan" />
                <span>{`// ${cat.title}`}</span>
              </h2>
              <span className="text-[11px] text-storm-muted font-mono">{cat.items.length} MODULES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => {
                const isInternal = item.isInternal;
                const Wrapper = isInternal ? Link : "a";
                const wrapperProps = isInternal
                  ? { href: item.href }
                  : { href: item.href, target: "_blank", rel: "noopener noreferrer" };

                return (
                  <Wrapper
                    key={item.title}
                    {...wrapperProps}
                    className="border border-storm-border bg-storm-titanium p-6 hover:border-storm-cyan hover:bg-storm-panel transition-all flex flex-col justify-between group block"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-storm-muted">
                        <span className="telemetry-badge text-[9px] text-storm-cyan">
                          {isInternal ? "INTERNAL CORE" : "EXTERNAL 3P"}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-storm-white group-hover:text-storm-cyan transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-storm-muted font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-storm-border/50 flex items-center justify-between text-xs text-storm-volt">
                      <span className="font-bold">INSPECT RESOURCE</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
