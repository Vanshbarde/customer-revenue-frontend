import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/app/about")({ component: AboutPage });

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

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 sm:p-6">
      <PageHeader
        title="About CRIOI"
        description="Customer Revenue Opportunity Intelligence — a product surface for the pipelines, models, reports and chatbot you already built."
      />
      <Card>
        <CardContent className="space-y-4 p-6 text-sm leading-relaxed text-fg-muted">
          <p>
            This workspace is Phase 1: the complete product UI. Authentication, dataset storage and live Python execution are intentionally not connected yet. Any email signs in. Pipelines animate. Reports are interactive canvases ready to host Power BI embeds.
          </p>
          <p>
            The AI assistant is grounded in the Brazilian E-Commerce extract: ₹20.58M revenue, 41,599 customers, SP at ₹5.99M, Health & Beauty at ₹1.44M, and a late-period growth of -76.68%.
          </p>
        </CardContent>
      </Card>
      <div className="grid gap-2 sm:grid-cols-2">
        {STAGES.map((s, i) => (
          <div key={s} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-card)]">
            <span className="tabular text-xs font-medium text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm font-medium">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
