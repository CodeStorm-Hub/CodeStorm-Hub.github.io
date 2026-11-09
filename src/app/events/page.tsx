import React from "react";
import Link from "next/link";
import { Calendar, Clock, Zap, Radio } from "lucide-react";

export const metadata = {
  title: "Events & Hackathons // Operational Briefings | CodeStorm Hub",
  description: "Join upcoming CodeStorm Hub community workshops, architecture deep dives, and live virtual briefings.",
};

const UPCOMING = [
  {
    title: "Open Source Engineering Workshop",
    desc: "Hands-on walkthrough on submitting pull requests, writing AST lint checks, and contributing to core modules across our 32 repositories.",
    date: "2025-04-15",
    time: "18:00 UTC",
    duration: "120 MIN",
    type: "WORKSHOP",
    level: "ALL LEVELS",
    attendees: 50,
  },
  {
    title: "Next.js 15 & Concurrency Deep Dive",
    desc: "Architectural teardown: static generation at edge speed, React 19 compiler internals, and memory-safe WebGL canvas integration.",
    date: "2025-04-22",
    time: "19:00 UTC",
    duration: "90 MIN",
    type: "TECH TALK",
    level: "ADVANCED",
    attendees: 100,
  },
  {
    title: "Mainframe Architect Coffee Briefing",
    desc: "Unstructured live voice and terminal session discussing ongoing PRs, roadmap items, and distributed computing patterns.",
    date: "2025-05-01",
    time: "16:00 UTC",
    duration: "60 MIN",
    type: "COMMUNITY",
    level: "OPEN",
    attendees: 30,
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-b border-storm-border pb-8 mb-12 space-y-4">
        <div className="telemetry-badge text-storm-volt">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>LIVE_SCHEDULE // TRANSMISSION_CALENDAR</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-storm-white tracking-tight">
          EVENTS & BRIEFINGS.
        </h1>
        <p className="text-sm sm:text-base text-storm-muted max-w-3xl font-sans font-light leading-relaxed">
          Participate in virtual engineering labs, live architecture teardowns, and interactive developer coffee sessions with the CodeStorm architects.
        </p>
      </div>

      {/* Upcoming Event Tickets */}
      <div className="space-y-6 mb-16">
        <h2 className="text-sm text-storm-cyan font-bold uppercase tracking-wider flex items-center gap-2">
          <Zap className="w-4 h-4 text-storm-volt" />
          <span>{"// UPCOMING VIRTUAL SESSIONS"}</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {UPCOMING.map((evt) => (
            <div
              key={evt.title}
              className="border-2 border-storm-border bg-storm-titanium p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-storm-cyan transition-all group"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 text-xs text-storm-muted">
                  <span className="telemetry-badge text-storm-cyan font-bold">{evt.type}</span>
                  <span className="text-storm-border">|</span>
                  <span className="text-storm-volt font-bold">{evt.level}</span>
                  <span className="text-storm-border">|</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {evt.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold uppercase text-storm-white group-hover:text-storm-cyan transition-colors">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-storm-muted font-sans leading-relaxed">
                  {evt.desc}
                </p>
              </div>

              {/* Ticket Stub Details */}
              <div className="border-t md:border-t-0 md:border-l border-storm-border pt-4 md:pt-0 md:pl-8 flex flex-col items-start md:items-end justify-center space-y-3 min-w-[200px]">
                <div className="text-left md:text-right">
                  <div className="text-xs text-storm-white font-bold flex items-center md:justify-end gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-storm-volt" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="text-xs text-storm-cyan font-mono mt-0.5">{evt.time}</div>
                </div>

                <Link
                  href="/contact"
                  className="w-full md:w-auto px-4 py-2 border border-storm-cyan bg-storm-panel hover:bg-storm-cyan hover:text-storm-void text-storm-cyan font-bold text-xs uppercase transition-colors text-center"
                >
                  RSVP BRIEFING
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
