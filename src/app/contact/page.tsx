"use client";

import React, { useState } from "react";
import { Terminal, Send, MessageSquare, CheckCircle2, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Collaboration Inquiry",
    payload: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.payload) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#00f0ff", "#ccff00", "#bd00ff"],
      });
    } catch {}

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-volt">
          <Terminal className="w-3.5 h-3.5" />
          <span>COMMS_TRANSMISSION // SECURE CHANNEL</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          TRANSMIT MESSAGE.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          Open a direct transmission channel with CodeStorm&apos;s lead software architects. 
          Whether discussing enterprise SaaS integration, open-source sponsorships, or complex software development, our communications line is active.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form: Terminal Transmitter (7 cols) */}
        <div className="lg:col-span-7 border-2 border-storm-border bg-storm-titanium p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-storm-border pb-4">
            <span className="text-xs text-storm-cyan font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-storm-cyan animate-ping" />
              TERMINAL // PAYLOAD_DISPATCHER
            </span>
            <span className="text-[10px] text-storm-muted font-mono">ENCRYPTED // TLS 1.3</span>
          </div>

          {submitted ? (
            <div className="p-8 border border-storm-volt/50 bg-storm-panel text-center space-y-4">
              <div className="w-12 h-12 mx-auto border border-storm-volt flex items-center justify-center text-storm-volt">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase text-storm-white">
                PAYLOAD DISPATCHED SUCCESSFULLY.
              </h3>
              <p className="text-xs text-storm-muted font-sans max-w-md mx-auto">
                Thank you, <strong className="text-storm-white">{formData.name}</strong>. Your message has been queued in our operations console. A software architect will review and respond shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "Collaboration Inquiry", payload: "" });
                }}
                className="px-4 py-2 text-xs border border-storm-border hover:border-storm-volt text-storm-white hover:text-storm-volt transition-colors"
              >
                TRANSMIT ANOTHER DISPATCH
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <label className="text-storm-muted text-[11px] uppercase block">
                  01 // OPERATOR NAME / ENTITY *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Vance / CyberTech Labs"
                  className="w-full bg-storm-void border border-storm-border p-3 text-storm-white focus:outline-none focus:border-storm-cyan transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-storm-muted text-[11px] uppercase block">
                  02 // RETURN SIGNAL / EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. operator@domain.com"
                  className="w-full bg-storm-void border border-storm-border p-3 text-storm-white focus:outline-none focus:border-storm-cyan transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-storm-muted text-[11px] uppercase block">
                  03 // TRANSMISSION SUBJECT
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-storm-void border border-storm-border p-3 text-storm-white focus:outline-none focus:border-storm-volt transition-colors"
                >
                  <option value="Collaboration Inquiry">Collaboration Inquiry</option>
                  <option value="Commercial SaaS Integration (StormCom / StormERP)">
                    Commercial SaaS Integration (StormCom / StormERP)
                  </option>
                  <option value="Open Source Contribution / Sponsorship">
                    Open Source Contribution / Sponsorship
                  </option>
                  <option value="Security Disclosure">Security Disclosure</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-storm-muted text-[11px] uppercase block">
                  04 // PAYLOAD BODY / MESSAGE *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.payload}
                  onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                  placeholder="Enter technical specifications, project details, or collaboration requirements..."
                  className="w-full bg-storm-void border border-storm-border p-3 text-storm-white focus:outline-none focus:border-storm-cyan transition-colors font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 border border-storm-cyan bg-storm-cyan text-storm-void font-bold text-xs uppercase hover:bg-transparent hover:text-storm-cyan transition-all flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(0,240,255,0.25)]"
              >
                <Send className="w-4 h-4" />
                <span>DISPATCH PAYLOAD TO ARCHITECTS</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Info: Comms Channels & FAQ (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-storm-border bg-storm-titanium p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase text-storm-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-storm-volt" />
              <span>DIRECT DISPATCH CHANNELS</span>
            </h3>

            <div className="space-y-3 text-xs">
              <a
                href="https://github.com/orgs/CodeStorm-Hub/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-storm-border bg-storm-panel hover:border-storm-cyan flex items-center justify-between transition-colors block"
              >
                <div>
                  <div className="text-storm-white font-bold">GitHub Discussions</div>
                  <div className="text-storm-muted text-[11px] font-sans">Open community forums & inquiries</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-storm-cyan" />
              </a>

              <a
                href="https://github.com/CodeStorm-Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-storm-border bg-storm-panel hover:border-storm-volt flex items-center justify-between transition-colors block"
              >
                <div>
                  <div className="text-storm-white font-bold">Issue Tracker & Bug Reports</div>
                  <div className="text-storm-muted text-[11px] font-sans">Submit code defects across 32 repos</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-storm-volt" />
              </a>

              <div className="p-3 border border-storm-border bg-storm-panel">
                <div className="text-storm-white font-bold">General Transmission Signal</div>
                <div className="text-storm-cyan text-[11px] font-mono mt-0.5">hello@codestorm-hub.org</div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Accordion Box */}
          <div className="border border-storm-border bg-storm-titanium p-6 space-y-4">
            <h3 className="text-xs font-bold uppercase text-storm-white">
              [COMMUNICATIONS FAQ]
            </h3>
            <div className="space-y-3 text-xs font-sans">
              <div>
                <p className="text-storm-white font-bold font-mono text-[11px]">Can I deploy StormCom or StormERP in my business?</p>
                <p className="text-storm-muted text-[11px] mt-1 leading-relaxed">
                  Yes. Both platforms provide hosted SaaS access as well as bespoke dedicated deployments for mid-market and enterprise requirements.
                </p>
              </div>
              <div className="border-t border-storm-border/50 pt-2">
                <p className="text-storm-white font-bold font-mono text-[11px]">Are all 32 projects open source?</p>
                <p className="text-storm-muted text-[11px] mt-1 leading-relaxed">
                  Yes, public repositories are released under permissive MIT or Apache 2.0 open-source licenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
