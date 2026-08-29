import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Card, CardContent } from "@/components/ui/card";
import { REPORTS } from "@/lib/data/platform";
import { NAV } from "@/components/layout/nav";

export const Route = createFileRoute("/app/reports/")({ component: ReportsGallery });

function ReportsGallery() {
  const icons = Object.fromEntries(
    (NAV.find((n) => n.to === "/app/reports")?.children ?? []).map((c) => [c.reportId, c.icon]),
  );

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4 sm:p-6">
      <PageHeader
        title="Reports"
        description="Eight intelligence canvases. Open one to keep the report large and the AI panel on the right."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {REPORTS.map((r) => {
          const Icon = icons[r.id];
          return (
            <Link key={r.id} to="/app/reports/$reportId" params={{ reportId: r.id }}>
              <Card className="h-full transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-card-hover)]">
                <CardContent className="p-5">
                  {Icon && (
                    <span className="grid size-10 place-items-center rounded-lg bg-primary-soft text-primary">
                      <Icon className="size-4" />
                    </span>
                  )}
                  <h2 className="mt-4 text-sm font-semibold">{r.title}</h2>
                  <p className="mt-1 text-sm text-fg-muted">{r.blurb}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
