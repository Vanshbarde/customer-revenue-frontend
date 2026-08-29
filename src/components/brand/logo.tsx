import { cn } from "@/lib/utils";

export function CrioiMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M9 10.5h6.2c3.4 0 5.6 2.1 5.6 5.5S18.6 21.5 15.2 21.5H9V10.5zm3.1 8.4h2.9c1.7 0 2.7-1 2.7-2.9s-1-2.9-2.7-2.9h-2.9v5.8z"
        fill="#fff"
      />
      <rect x="21.2" y="10.5" width="2.6" height="11" rx="1" fill="#fff" opacity="0.85" />
    </svg>
  );
}

export function CrioiWordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <CrioiMark className={inverted ? "text-primary" : "text-primary"} />
      <div className="leading-tight">
        <div className={cn("text-sm font-semibold tracking-tight", inverted ? "text-sidebar-fg" : "text-fg")}>
          CRIOI
        </div>
        <div className={cn("text-[10px] tracking-wide uppercase", inverted ? "text-sidebar-muted" : "text-fg-subtle")}>
          Revenue Intelligence
        </div>
      </div>
    </div>
  );
}
