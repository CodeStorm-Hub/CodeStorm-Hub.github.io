import { getAllProjects, getFeaturedProjects } from "@/lib/project-data";
import { Terminal, ArrowUpRight, Layers, Zap } from "lucide-react";

export const metadata = {
  title: "Spatial Projects Vault (32 Modules) | CodeStorm Hub",
  description: "Browse all 32 open-source repositories and software architectures forged by CodeStorm Hub.",
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  const featured = getFeaturedProjects(4);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header & Telemetry */}
      <div className="border-b border-storm-border pb-8 mb-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-storm-muted">
          <div className="telemetry-badge text-storm-cyan">
            <Terminal className="w-3.5 h-3.5 text-storm-volt" />
            <span>MODULE_DIRECTORY // 32 REPOSITORIES</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>INDEX: <strong className="text-storm-white">ALL_ACTIVE</strong></span>
            <span className="text-storm-border">|</span>
            <span>STORAGE: <strong className="text-storm-volt">MARKDOWN AST</strong></span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          THE SPATIAL VAULT.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          Explore all 32 software projects forged by our engineering collective. 
          Ranging from distributed microservices and ATM diagnostic systems to full-stack e-commerce backends and machine learning experiments.
        </p>

        {/* Global Action Bar */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-storm-muted">SOURCE:</span>
            <a
              href="https://github.com/CodeStorm-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-storm-volt hover:underline flex items-center gap-1 font-bold"
            >
              <span>GITHUB.COM/CODESTORM-HUB ↗</span>
            </a>
          </div>

          <div className="text-[11px] text-storm-muted flex items-center gap-2 border border-storm-border px-3 py-1 bg-storm-titanium">
            <span className="w-2 h-2 rounded-full bg-storm-volt animate-ping" />
            <span>32 ACTIVE CODEBASES COMPILED</span>
          </div>
        </div>
      </div>

      {/* Featured Core Architectures */}
      <section className="mb-14">
        <div className="flex items-center gap-2 mb-6 text-xs text-storm-volt font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          <span>{"// FLAGSHIP CODEBASES"}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((proj) => (
            <div
              key={proj.slug}
              className="border-2 border-storm-cyan/40 bg-storm-titanium p-6 hover:border-storm-cyan transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="telemetry-badge text-storm-cyan font-bold">
                    {proj.primaryLanguage || "Full Stack"}
                  </span>
                  <span className="text-storm-muted text-[10px]">
                    STATUS: <strong className="text-storm-volt">{proj.status || "ACTIVE"}</strong>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-storm-white group-hover:text-storm-cyan transition-colors">
                  {proj.name}
                </h3>

                <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed line-clamp-3">
                  {proj.overview || proj.description || "Production-grade system architecture and distributed software module."}
                </p>

                {proj.techStack && proj.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 border border-storm-border bg-storm-panel text-storm-muted font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-storm-border flex items-center justify-between text-xs">
                {proj.github ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-storm-cyan font-bold hover:text-storm-white flex items-center gap-1"
                  >
                    <span>SOURCE REPO</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-storm-muted text-[11px]">INTERNAL CORE</span>
                )}
                <span className="text-storm-muted text-[10px] font-mono">
                  {proj.lastUpdated ? `UPDATED: ${proj.lastUpdated}` : "VERIFIED ARCHITECTURE"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Project Archive (32 Entities) */}
      <section>
        <div className="flex items-center justify-between mb-6 border-b border-storm-border pb-3">
          <div className="flex items-center gap-2 text-xs text-storm-white font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-storm-cyan" />
            <span>{`// REPOSITORY INDEX (ALL ${allProjects.length} REPOSITORIES)`}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allProjects.map((proj) => (
            <div
              key={proj.slug}
              className="border border-storm-border bg-storm-titanium p-5 hover:border-storm-border-bright hover:bg-storm-panel transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-storm-cyan font-bold">
                    {proj.primaryLanguage || "System Code"}
                  </span>
                  <span className="text-storm-muted font-mono text-[10px]">
                    {proj.visibility || "PUBLIC"}
                  </span>
                </div>

                <h4 className="text-base font-bold text-storm-white group-hover:text-storm-cyan transition-colors">
                  {proj.name}
                </h4>

                <p className="text-xs text-storm-muted font-sans line-clamp-2">
                  {proj.overview || proj.description || "Engineered module for robust computing and distributed operations."}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-storm-border/50 flex items-center justify-between text-xs">
                {proj.github ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-storm-volt hover:underline flex items-center gap-1 font-bold text-[11px]"
                  >
                    <span>GITHUB ↗</span>
                  </a>
                ) : (
                  <span className="text-[10px] text-storm-muted">PROPRIETARY</span>
                )}

                <span className="text-[10px] text-storm-muted font-mono">
                  {proj.status || "STABLE"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
