import React from "react";
import { Terminal, Zap, Cpu, Activity, ArrowUpRight } from "lucide-react";
import { TextScrambler } from "@/components/interactive/text-scrambler";

export const metadata = {
  title: "Electric Brutalism // Design System Style Guide | CodeStorm Hub",
  description: "Live design token catalog, interactive components, color scales, and typography rules for CodeStorm Hub.",
};

const COLOR_TOKENS = [
  { name: "--storm-void", hex: "#07080B", role: "Deep Obsidian Base Background" },
  { name: "--storm-titanium", hex: "#10121A", role: "Hardware Chassis / Card Surface" },
  { name: "--storm-panel", hex: "#161924", role: "Sub-layer Panels & Inputs" },
  { name: "--storm-border", hex: "#1F2432", role: "Grid Dividers & Division Rules" },
  { name: "--storm-cyan", hex: "#00F0FF", role: "Lightning Arcs & Primary Interactions" },
  { name: "--storm-volt", hex: "#CCFF00", role: "Hazard Alerts & High-Impact CTAs" },
  { name: "--storm-plasma", hex: "#BD00FF", role: "AI & Concurrency Accent" },
  { name: "--storm-white", hex: "#F3F4F6", role: "High-Contrast Display Prose" },
];

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-volt">
          <Zap className="w-3.5 h-3.5" />
          <span>DESIGN_SYSTEM // SOTY_2026_SPECIFICATION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          DESIGN SYSTEM TOKENS.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          The visual grammar of CodeStorm Hub: Electric Brutalism, tactile hardware controls, high-contrast monospace telemetry, and responsive accessibility states.
        </p>
      </div>

      {/* Colors Swatches */}
      <section className="mb-14 space-y-6">
        <div className="text-xs text-storm-cyan uppercase font-bold tracking-widest flex items-center gap-2">
          <Activity className="w-4 h-4 text-storm-volt" />
          <span>{"// 01_COLOR_TOKENS"}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {COLOR_TOKENS.map((token) => (
            <div
              key={token.name}
              className="border border-storm-border bg-storm-titanium p-4 space-y-3 hover:border-storm-cyan transition-colors"
            >
              <div
                className="w-full h-16 border border-storm-border"
                style={{ backgroundColor: token.hex }}
              />
              <div>
                <div className="text-xs font-bold text-storm-white">{token.name}</div>
                <div className="text-[10px] text-storm-volt font-mono">{token.hex}</div>
                <div className="text-[10px] text-storm-muted font-sans mt-1">{token.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Scale */}
      <section className="mb-14 space-y-6">
        <div className="text-xs text-storm-cyan uppercase font-bold tracking-widest flex items-center gap-2">
          <Terminal className="w-4 h-4 text-storm-volt" />
          <span>{"// 02_TYPOGRAPHIC_HIERARCHY"}</span>
        </div>

        <div className="border border-storm-border bg-storm-titanium p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] text-storm-muted uppercase">Display Heading 1</span>
            <div className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
              KINETIC BRUTALISM
            </div>
          </div>

          <div className="space-y-1 border-t border-storm-border/50 pt-4">
            <span className="text-[10px] text-storm-muted uppercase">Section Heading 2</span>
            <div className="text-2xl sm:text-4xl font-bold uppercase text-storm-white">
              ARCHITECTURAL SOUNDNESS
            </div>
          </div>

          <div className="space-y-1 border-t border-storm-border/50 pt-4">
            <span className="text-[10px] text-storm-muted uppercase">Monospace Telemetry Badge</span>
            <div>
              <span className="telemetry-badge text-storm-cyan">
                SYS_OK // 60FPS // EDGE_CONNECTED
              </span>
            </div>
          </div>

          <div className="space-y-1 border-t border-storm-border/50 pt-4">
            <span className="text-[10px] text-storm-muted uppercase">Interactive Letter Scrambler (Hover me)</span>
            <div>
              <TextScrambler
                text="HOVER_OVER_THIS_TEXT_TO_SCRAMBLE"
                className="text-base text-storm-volt font-bold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Controls & Buttons */}
      <section className="space-y-6">
        <div className="text-xs text-storm-cyan uppercase font-bold tracking-widest flex items-center gap-2">
          <Cpu className="w-4 h-4 text-storm-volt" />
          <span>{"// 03_HARDWARE_CONTROLS"}</span>
        </div>

        <div className="border border-storm-border bg-storm-titanium p-6 sm:p-8 flex flex-wrap items-center gap-4">
          <button className="px-6 py-3 border border-storm-cyan bg-storm-cyan text-storm-void font-bold text-xs uppercase hover:bg-transparent hover:text-storm-cyan transition-all flex items-center gap-2">
            <span>PRIMARY_CYAN</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button className="px-6 py-3 border border-storm-volt bg-storm-volt text-storm-void font-bold text-xs uppercase hover:bg-transparent hover:text-storm-volt transition-all flex items-center gap-2">
            <span>HAZARD_VOLT</span>
            <Zap className="w-4 h-4" />
          </button>

          <button className="px-6 py-3 border border-storm-border bg-storm-panel hover:border-storm-white text-storm-white font-bold text-xs uppercase transition-all">
            <span>OUTLINE_HARDWARE</span>
          </button>

          <button className="px-6 py-3 border border-destructive bg-destructive/10 text-destructive font-bold text-xs uppercase hover:bg-destructive hover:text-white transition-all">
            <span>DESTRUCTIVE_KILL</span>
          </button>
        </div>
      </section>
    </div>
  );
}
