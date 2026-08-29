import { createFileRoute, Link } from "@tanstack/react-router";
import { CrioiWordmark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({ component: PublicAbout });

const STAGES = [
  "Login / Register",
  "Dashboard",
  "Data Management",
  "ETL & Cleaning",
  "Training / Inference",
  "Power BI Reports",
  "AI Insights",
  "AI Assistant",
];

function PublicAbout() {
  return (
    <div className="min-h-dvh bg-paper">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <CrioiWordmark />
        <Button asChild variant="outline" size="sm">
          <Link to="/login">Sign in</Link>
        </Button>
      </header>
      <main className="mx-auto max-w-3xl space-y-6 px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">About CRIOI</h1>
        <p className="text-sm leading-relaxed text-fg-muted">
          Customer Revenue Opportunity Intelligence — a product surface for pipelines, models, reports and a business-aware chatbot. Phase 1 is the complete UI. Live Python, Power BI embeds and stored accounts come next.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {STAGES.map((s, i) => (
            <div key={s} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-card)]">
              <span className="tabular text-xs font-medium text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-medium">{s}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
