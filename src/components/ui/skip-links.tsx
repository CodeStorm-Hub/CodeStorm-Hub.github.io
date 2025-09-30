import { cn } from "@/lib/utils";

const skipLinks = [
  { href: "#main-content", label: "Skip to main content" },
  { href: "#navigation", label: "Skip to navigation" },
  { href: "#footer", label: "Skip to footer" },
];

export function SkipLinks() {
  return (
    <div className="fixed top-4 left-4 z-[9999]" role="navigation" aria-label="Skip navigation">
      {skipLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={cn(
            // Hidden by default, visible when focused
            "sr-only focus:not-sr-only focus-visible:not-sr-only",
            // Styling when visible
            "block px-4 py-2 mb-2 text-sm font-medium",
            "bg-primary text-primary-foreground rounded-md shadow-lg",
            "transition-all duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
            "hover:bg-primary/90",
            // Ensure proper contrast and visibility
            "border-2 border-primary-foreground/20"
          )}
          // Enhanced accessibility attributes
          tabIndex={0}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}