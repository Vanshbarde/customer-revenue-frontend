import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, IndianRupee, Package, ShoppingBag, Sparkles, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/app-shell";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { CategoryDonut, CategoryLegend, ProductTable, RevenueArea, SegmentDonut } from "@/components/reports/report-charts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { INSIGHTS, KPI, MODELS, OPPORTUNITIES, SEGMENTS } from "@/lib/data/platform";
import { useSession } from "@/lib/stores/session";
import { useDatasets, activeDataset } from "@/lib/stores/datasets";
import { inr, num } from "@/lib/utils";

export const Route = createFileRoute("/app/")({ component: DashboardPage });

function DashboardPage() {
  const user = useSession((s) => s.user);
  const items = useDatasets((s) => s.items);
  const active = activeDataset(items);
  const first = INSIGHTS.overview[0];

  return (
    <div className="mx-auto max-w-[1400px] space-y-6 p-4 sm:p-6">
      <PageHeader
        title="Dashboard"
        description={`Welcome back${user ? `, ${user.fullName.split(" ")[0]}` : ""}. Here's what's happening with ${user?.organization ?? "your business"} today.`}
        actions={
          <>
            <Badge variant="muted">{active?.fileName ?? "No dataset"}</Badge>
            <Button variant="outline" size="sm">
              <Download className="size-3.5" />
              Download report
            </Button>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <KpiCard label="Total Revenue" value={inr(KPI.revenue)} delta={KPI.revenueDelta} hint="latest month" icon={IndianRupee} tint="bg-primary-soft text-primary" />
        <KpiCard label="Customers" value={num(KPI.customers)} delta={KPI.customersDelta} icon={Users} tint="bg-accent-soft text-accent" />
        <KpiCard label="Avg. Order Value" value={inr(KPI.aov)} delta={KPI.aovDelta} icon={ShoppingBag} tint="bg-warn-soft text-warn" />
        <KpiCard label="Total Orders" value={num(KPI.orders)} delta={KPI.ordersDelta} icon={Package} tint="bg-good-soft text-good" />
        <KpiCard label="Gross Profit" value={inr(KPI.profit)} delta={KPI.profitDelta} icon={IndianRupee} tint="bg-danger-soft text-danger" />
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Revenue over time</CardTitle>
          </CardHeader>
          <CardContent>
            <RevenueArea />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue by category</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-[1fr_140px] sm:items-center">
            <CategoryDonut />
            <CategoryLegend />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" />
              AI summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-semibold">{first.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{first.detail}</p>
            <Button asChild variant="outline" size="sm" className="mt-4">
              <Link to="/app/reports/$reportId" params={{ reportId: "overview" }}>
                View details <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Customer segmentation</CardTitle>
          </CardHeader>
          <CardContent>
            <SegmentDonut />
            <ul className="mt-2 space-y-1.5 text-xs">
              {SEGMENTS.map((s) => (
                <li key={s.name} className="flex justify-between text-fg-muted">
                  <span>{s.name}</span>
                  <span className="tabular font-medium text-fg">{num(s.count)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Top products</CardTitle>
            <Link to="/app/reports/$reportId" params={{ reportId: "products" }} className="text-xs font-medium text-primary">
              View all
            </Link>
          </CardHeader>
          <CardContent>
            <ProductTable />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Opportunities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {OPPORTUNITIES.slice(0, 3).map((o) => (
              <Link key={o.id} to="/app/reports/$reportId" params={{ reportId: "opportunity" }} className="block rounded-lg bg-paper p-3 hover:bg-paper-2">
                <div className="text-sm font-medium">{o.title}</div>
                <div className="mt-1 text-xs text-fg-muted">{o.body}</div>
                <div className="mt-2 text-sm font-semibold tabular text-good">{inr(o.value)}</div>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Recent uploads</CardTitle>
            <Link to="/app/data" className="text-xs font-medium text-primary">
              View all uploads
            </Link>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs text-fg-muted">
                  <tr className="border-b border-border">
                    <th className="py-2 font-medium">File</th>
                    <th className="py-2 text-right font-medium">Records</th>
                    <th className="py-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((d) => (
                    <tr key={d.id} className="border-b border-border last:border-0">
                      <td className="py-2.5 font-medium">{d.fileName}</td>
                      <td className="py-2.5 text-right tabular">{num(d.rows)}</td>
                      <td className="py-2.5">
                        <Badge variant={d.status === "processed" ? "good" : "warn"}>{d.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Model performance</CardTitle>
            <Link to="/app/reports/$reportId" params={{ reportId: "predictions" }} className="text-xs font-medium text-primary">
              View all models
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {MODELS.map((m) => (
              <div key={m.id} className="flex items-center justify-between rounded-lg bg-paper px-3 py-3">
                <div>
                  <div className="text-sm font-medium">{m.name}</div>
                  <div className="text-xs text-fg-muted">{m.metric}</div>
                </div>
                <div className="text-right">
                  <div className="tabular text-sm font-semibold">{m.score}</div>
                  <Badge variant="good">Good</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
