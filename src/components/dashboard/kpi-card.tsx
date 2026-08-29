import type { LucideIcon } from "lucide-react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn, pct } from "@/lib/utils";

export function KpiCard({
  label,
  value,
  delta,
  hint,
  icon: Icon,
  tint,
}: {
  label: string;
  value: string;
  delta?: number;
  hint?: string;
  icon: LucideIcon;
  tint: string;
}) {
  const up = (delta ?? 0) >= 0;
  return (
    <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-medium text-fg-muted">{label}</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight tabular">{value}</div>
        </div>
        <span className={cn("grid size-10 place-items-center rounded-lg", tint)}>
          <Icon className="size-4" />
        </span>
      </div>
      {delta !== undefined && (
        <div className="mt-3 flex items-center gap-1.5 text-xs">
          <span className={cn("inline-flex items-center gap-0.5 font-medium", up ? "text-good" : "text-danger")}>
            {up ? <TrendingUp className="size-3.5" /> : <TrendingDown className="size-3.5" />}
            {pct(delta)}
          </span>
          <span className="text-fg-subtle">{hint ?? "vs prior period"}</span>
        </div>
      )}
    </div>
  );
}
