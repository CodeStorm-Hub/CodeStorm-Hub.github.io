"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Terminal, X, CornerDownLeft } from "lucide-react";

interface StormOSDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export function StormOSDrawer({ isOpen, onClose }: StormOSDrawerProps) {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "init",
      command: "sys.boot",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-storm-cyan font-bold">
            ⚡ STORM-OS [Kernel v2.6.0-release] INITIALIZED
          </p>
          <p className="text-storm-muted">
            CodeStorm Mainframe Telemetry Online. Type <span className="text-storm-volt font-mono font-bold">help</span> to list available operations.
          </p>
        </div>
      ),
      timestamp: "00:00:01",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Scroll to bottom on new log
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const time = new Date().toTimeString().split(" ")[0];

    let output: React.ReactNode;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-storm-muted">
            <p className="text-storm-white font-bold mb-1">AVAILABLE PROTOCOLS:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono">
              <div><span className="text-storm-volt">projects</span> - View open-source archive</div>
              <div><span className="text-storm-volt">products</span> - Inspect StormCom & StormERP</div>
              <div><span className="text-storm-volt">team</span> - Load core engineering architects</div>
              <div><span className="text-storm-volt">status</span> - Core engine & server telemetry</div>
              <div><span className="text-storm-volt">overclock</span> - Toggle CRT scanlines overdrive</div>
              <div><span className="text-storm-volt">clear</span> - Flush terminal screen</div>
              <div><span className="text-storm-volt">close</span> - Exit terminal drawer</div>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-storm-cyan font-bold">📁 ARCHIVE DISPATCH: 32 ACTIVE PROJECTS</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-storm-muted">
              <div className="border border-storm-border p-2 bg-storm-titanium">
                <p className="text-storm-white font-bold">AlloraBD</p>
                <p className="text-xs">Full-stack E-Commerce platform & ecosystem.</p>
              </div>
              <div className="border border-storm-border p-2 bg-storm-titanium">
                <p className="text-storm-white font-bold">ATM Tester</p>
                <p className="text-xs">Hardware/software diagnostics simulation suite.</p>
              </div>
              <div className="border border-storm-border p-2 bg-storm-titanium">
                <p className="text-storm-white font-bold">CBRMS & NetEmp</p>
                <p className="text-xs">Enterprise resource & workforce management.</p>
              </div>
              <div className="border border-storm-border p-2 bg-storm-titanium">
                <p className="text-storm-white font-bold">Storm Funnel</p>
                <p className="text-xs">High-throughput lead ingestion & conversion engine.</p>
              </div>
            </div>
            <Link
              href="/projects"
              onClick={onClose}
              className="text-storm-volt underline inline-block mt-1 font-bold"
            >
              &gt; ACCESS FULL SPATIAL VAULT (/projects)
            </Link>
          </div>
        );
        break;

      case "products":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-storm-volt font-bold">⚡ FLAGSHIP SAAS PRODUCT SUITE</p>
            <div className="border border-storm-border p-2.5 bg-storm-titanium space-y-1">
              <span className="text-storm-cyan font-bold">01 // StormCom</span>
              <p className="text-storm-muted">AI-powered multi-vendor e-commerce platform with autonomous predictive analytics and inventory intelligence.</p>
            </div>
            <div className="border border-storm-border p-2.5 bg-storm-titanium space-y-1">
              <span className="text-storm-volt font-bold">02 // StormERP</span>
              <p className="text-storm-muted">Unified cloud ERP engine: multi-currency ledger, supply chain operations, HR, and automated manufacturing pipelines.</p>
            </div>
            <Link
              href="/showcase"
              onClick={onClose}
              className="text-storm-cyan underline inline-block mt-1 font-bold"
            >
              &gt; INSPECT LIVE PRODUCT SHOWCASE (/showcase)
            </Link>
          </div>
        );
        break;

      case "team":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-storm-cyan font-bold">👥 CORE SYSTEM ARCHITECTS (7 IDENTIFIERS)</p>
            <ul className="space-y-1 text-storm-muted list-disc list-inside">
              <li><strong className="text-storm-white">Syed Salman Reza:</strong> Lead Architect & Sr. Software Engineer</li>
              <li><strong className="text-storm-white">Rafiqul Islam Susmoy:</strong> Full-Stack Software Engineer</li>
              <li><strong className="text-storm-white">Azizul Hakim Akash:</strong> Scalable Systems Engineer</li>
              <li><strong className="text-storm-white">Maruf Mustal Moon:</strong> DevOps & Platform Infrastructure</li>
              <li><strong className="text-storm-white">Afsan Khan:</strong> AI / ML Specialist</li>
              <li><strong className="text-storm-white">Neamul Islam Razib:</strong> Systems Developer</li>
              <li><strong className="text-storm-white">Md Mehedi Hasan:</strong> Business Analysis & Growth</li>
            </ul>
            <Link
              href="/team"
              onClick={onClose}
              className="text-storm-volt underline inline-block mt-1 font-bold"
            >
              &gt; OPEN ARCHITECTS DOSSIER (/team)
            </Link>
          </div>
        );
        break;

      case "status":
        output = (
          <div className="space-y-1 text-xs font-mono text-storm-muted border border-storm-border p-2.5 bg-storm-titanium">
            <p className="text-storm-cyan font-bold">MAINFRAME TELEMETRY:</p>
            <p>HOST: GitHub Pages CDN (Static Edge Distribution)</p>
            <p>RENDER: Next.js 15 App Router (Static Export)</p>
            <p>STATUS: <span className="text-storm-volt">OPTIMAL (0 ERROR CODES)</span></p>
            <p>UPTIME: 99.998% // LATENCY: &lt;14ms</p>
          </div>
        );
        break;

      case "overclock":
        document.body.classList.toggle("crt-scanlines");
        output = (
          <p className="text-xs text-storm-volt font-bold">
            ⚡ OVERCLOCK CYCLES TOGGLED. CRT SCANLINES STATE INVERTED.
          </p>
        );
        break;

      case "clear":
        setLogs([]);
        return;

      case "close":
      case "exit":
        onClose();
        return;

      default:
        output = (
          <p className="text-xs text-destructive">
            Command not recognized: &quot;{trimmed}&quot;. Type <span className="text-storm-volt font-bold">help</span> for command list.
          </p>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: cmd,
        output,
        timestamp: time,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal("");
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="STORM-OS Command Shell"
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-md transition-all"
    >
      <div className="w-full max-w-xl h-full bg-[#0a0d14] border-l border-storm-border flex flex-col font-mono shadow-2xl relative">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-storm-border bg-storm-titanium select-none">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-storm-cyan" />
            <span className="text-xs text-storm-white font-bold tracking-widest uppercase">
              STORM-OS // v2.6.0 SHELL
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-storm-volt animate-ping" />
          </div>
          <button
            onClick={onClose}
            aria-label="Close STORM-OS Shell"
            className="p-1 text-storm-muted hover:text-storm-white transition-colors border border-transparent hover:border-storm-border"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Logs Viewport */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-mono">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-storm-muted text-[11px]">
                <span className="text-storm-volt font-bold">&gt;</span>
                <span className="text-storm-white font-bold">{log.command}</span>
                <span className="text-storm-border">[{log.timestamp}]</span>
              </div>
              <div className="pl-3 border-l border-storm-border/50">{log.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form
          onSubmit={handleSubmit}
          className="p-3 border-t border-storm-border bg-storm-titanium flex items-center gap-2"
        >
          <span className="text-storm-cyan font-bold text-sm">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'projects', 'products', 'team'..."
            className="flex-1 bg-transparent text-xs text-storm-white font-mono focus:outline-none placeholder:text-storm-muted"
          />
          <button
            type="submit"
            aria-label="Execute command"
            className="px-2 py-1 text-[11px] bg-storm-border hover:bg-storm-cyan hover:text-storm-void text-storm-white font-bold transition-colors flex items-center gap-1"
          >
            <CornerDownLeft className="w-3 h-3" />
            EXEC
          </button>
        </form>
      </div>
    </div>
  );
}
