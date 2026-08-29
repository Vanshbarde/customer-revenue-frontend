import type { ReactNode } from "react";
import {
  AlertTriangle,
  IndianRupee,
  Package,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KpiCard } from "@/components/dashboard/kpi-card";
import {
  CategoryDonut,
  CategoryLegend,
  CityTable,
  DelayScatter,
  OrdersLine,
  ProductTable,
  RevenueArea,
  SegmentDonut,
  SellerBars,
  StateBars,
} from "@/components/reports/report-charts";
import {
  CATEGORIES,
  KPI,
  MODELS,
  OPPORTUNITIES,
  SEGMENTS,
  SELLERS,
  STATES,
  type ReportId,
} from "@/lib/data/platform";
import { inr, num } from "@/lib/utils";

function Grid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 lg:grid-cols-2">{children}</div>;
}

export function ReportCanvas({ reportId }: { reportId: ReportId }) {
  switch (reportId) {
    case "overview":
      return <OverviewCanvas />;
    case "revenue":
      return <RevenueCanvas />;
    case "customers":
      return <CustomersCanvas />;
    case "products":
      return <ProductsCanvas />;
    case "geography":
      return <GeographyCanvas />;
    case "performance":
      return <PerformanceCanvas />;
    case "opportunity":
      return <OpportunityCanvas />;
    case "predictions":
      return <PredictionsCanvas />;
  }
}

function OverviewCanvas() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <KpiCard label="Total Revenue" value={inr(KPI.revenue)} delta={KPI.revenueDelta} hint="latest month" icon={IndianRupee} tint="bg-primary-soft text-primary" />
        <KpiCard label="Customers" value={num(KPI.customers)} delta={KPI.customersDelta} icon={Users} tint="bg-accent-soft text-accent" />
        <KpiCard label="Avg. Order Value" value={inr(KPI.aov)} delta={KPI.aovDelta} icon={ShoppingBag} tint="bg-warn-soft text-warn" />
        <KpiCard label="Total Orders" value={num(KPI.orders)} delta={KPI.ordersDelta} icon={Package} tint="bg-good-soft text-good" />
        <KpiCard label="Gross Profit" value={inr(KPI.profit)} delta={KPI.profitDelta} icon={IndianRupee} tint="bg-danger-soft text-danger" />
      </div>
      <Grid>
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
          <CardContent className="grid gap-4 sm:grid-cols-[1fr_160px] sm:items-center">
            <CategoryDonut />
            <CategoryLegend />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer segmentation</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-[1fr_1fr] sm:items-center">
            <SegmentDonut />
            <ul className="space-y-2 text-sm">
              {SEGMENTS.map((s) => (
                <li key={s.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-fg-muted">
                    <span className="size-2 rounded-full" style={{ background: s.color }} />
                    {s.name}
                  </span>
                  <span className="tabular font-medium">{num(s.count)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top products by revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductTable />
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

function RevenueCanvas() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <KpiCard label="Recorded revenue" value={inr(KPI.revenue)} delta={KPI.revenueDelta} hint="Sep vs Aug 2018" icon={IndianRupee} tint="bg-primary-soft text-primary" />
        <KpiCard label="Best month" value="₹4.82M" hint="November 2017" icon={IndianRupee} tint="bg-good-soft text-good" />
        <KpiCard label="Strongest state" value="SP · ₹5.99M" hint="29% share" icon={Target} tint="bg-accent-soft text-accent" />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Monthly revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <RevenueArea height={300} />
        </CardContent>
      </Card>
      <Grid>
        <Card>
          <CardHeader>
            <CardTitle>Named category mix</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-[1fr_180px] sm:items-center">
            <CategoryDonut />
            <CategoryLegend />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order volume</CardTitle>
          </CardHeader>
          <CardContent>
            <OrdersLine />
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

function CustomersCanvas() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-4">
        <KpiCard label="Customers" value={num(KPI.customers)} icon={Users} tint="bg-primary-soft text-primary" />
        <KpiCard label="High opportunity" value={num(KPI.highOpportunity)} icon={Target} tint="bg-good-soft text-good" />
        <KpiCard label="At risk" value={num(KPI.atRisk)} icon={AlertTriangle} tint="bg-warn-soft text-warn" />
        <KpiCard label="VIP revenue" value="₹6.18M" hint="2,790 customers" icon={IndianRupee} tint="bg-accent-soft text-accent" />
      </div>
      <Grid>
        <Card>
          <CardHeader>
            <CardTitle>Segments</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 sm:items-center">
            <SegmentDonut />
            <ul className="space-y-2 text-sm">
              {SEGMENTS.map((s) => (
                <li key={s.name}>
                  <div className="flex justify-between">
                    <span>{s.name}</span>
                    <span className="tabular font-medium">{num(s.count)}</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-paper-2">
                    <div className="h-full rounded-full" style={{ width: `${s.share}%`, background: s.color }} />
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue by segment</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {SEGMENTS.map((s) => (
                <li key={s.name} className="flex items-center justify-between rounded-lg bg-paper px-3 py-2.5">
                  <span className="text-sm">{s.name}</span>
                  <span className="tabular text-sm font-semibold">{inr(s.revenue)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

function ProductsCanvas() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <KpiCard label="Top category" value="Health & Beauty" hint={inr(1_440_000)} icon={Package} tint="bg-primary-soft text-primary" />
        <KpiCard label="Top SKU" value="Hegon Serum Kit" hint="₹412K" icon={Sparkles} tint="bg-accent-soft text-accent" />
        <KpiCard label="Long tail" value="60.3%" hint="of revenue in Others" icon={AlertTriangle} tint="bg-warn-soft text-warn" />
      </div>
      <Grid>
        <Card>
          <CardHeader>
            <CardTitle>Category contribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {CATEGORIES.map((c) => (
                <li key={c.key} className="grid grid-cols-[1fr_auto] items-center gap-3 text-sm">
                  <div>
                    <div className="flex justify-between">
                      <span>{c.name}</span>
                      <span className="tabular text-fg-muted">{c.share.toFixed(1)}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-paper-2">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(100, c.share * (c.key === "others" ? 1 : 4))}%` }} />
                    </div>
                  </div>
                  <span className="tabular font-medium">{inr(c.revenue)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top SKUs</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductTable />
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

function GeographyCanvas() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <KpiCard label="São Paulo" value={inr(STATES[0].revenue)} hint="29% of revenue" icon={Target} tint="bg-primary-soft text-primary" />
        <KpiCard label="RJ + MG" value="₹4.01M" hint="Expansion corridor" icon={Target} tint="bg-accent-soft text-accent" />
        <KpiCard label="Top city" value="São Paulo" hint="₹3.21M" icon={Users} tint="bg-good-soft text-good" />
      </div>
      <Grid>
        <Card>
          <CardHeader>
            <CardTitle>Revenue by state</CardTitle>
          </CardHeader>
          <CardContent>
            <StateBars />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top cities</CardTitle>
          </CardHeader>
          <CardContent>
            <CityTable />
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

function PerformanceCanvas() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <KpiCard label="Top seller" value="Atlas Commerce" hint="₹1.12M · 4.7 rating" icon={ShoppingBag} tint="bg-primary-soft text-primary" />
        <KpiCard label="Worst delay" value="6.2 days" hint="Casa Forte Home" icon={AlertTriangle} tint="bg-warn-soft text-warn" />
        <KpiCard label="Sep 2018 orders" value="1,140" delta={-76.7} hint="vs August" icon={Package} tint="bg-danger-soft text-danger" />
      </div>
      <Grid>
        <Card>
          <CardHeader>
            <CardTitle>Seller revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <SellerBars />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Delay vs rating</CardTitle>
          </CardHeader>
          <CardContent>
            <DelayScatter />
          </CardContent>
        </Card>
      </Grid>
      <Card>
        <CardHeader>
          <CardTitle>Seller table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-fg-muted">
                <tr className="border-b border-border">
                  <th className="py-2 font-medium">Seller</th>
                  <th className="py-2 text-right font-medium">Orders</th>
                  <th className="py-2 text-right font-medium">Revenue</th>
                  <th className="py-2 text-right font-medium">Rating</th>
                  <th className="py-2 text-right font-medium">Delay</th>
                </tr>
              </thead>
              <tbody>
                {SELLERS.map((s) => (
                  <tr key={s.name} className="border-b border-border last:border-0">
                    <td className="py-2.5 font-medium">{s.name}</td>
                    <td className="py-2.5 text-right tabular">{num(s.orders)}</td>
                    <td className="py-2.5 text-right tabular">{inr(s.revenue)}</td>
                    <td className="py-2.5 text-right tabular">{s.rating.toFixed(1)}</td>
                    <td className="py-2.5 text-right tabular">{s.delay.toFixed(1)}d</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function OpportunityCanvas() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {OPPORTUNITIES.map((o) => (
          <Card key={o.id} className="p-4">
            <div className="text-xs font-medium text-fg-muted">{o.title}</div>
            <div className="mt-2 text-2xl font-semibold tabular">{inr(o.value)}</div>
            <div className="mt-1 text-xs text-fg-subtle">{o.label}</div>
            <p className="mt-3 text-sm text-fg-muted">{o.body}</p>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recommended plays</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            "Protect 2,790 VIP customers before spraying the full base.",
            "Convert a slice of 12,230 Potential Loyalists with a second-purchase offer.",
            "Run housewares attach on 3,200 high-propensity buyers.",
            "Reuse the SP playbook in RJ and MG for ₹0.89M modelled lift.",
          ].map((t) => (
            <div key={t} className="flex gap-3 rounded-lg bg-paper px-3 py-3 text-sm">
              <Target className="mt-0.5 size-4 shrink-0 text-primary" />
              {t}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function PredictionsCanvas() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 lg:grid-cols-3">
        {MODELS.map((m) => (
          <Card key={m.id} className="p-5">
            <div className="flex items-start justify-between">
              <div className="text-sm font-semibold">{m.name}</div>
              <Badge variant="good">{m.status === "good" ? "Good" : m.status}</Badge>
            </div>
            <div className="mt-4 text-3xl font-semibold tabular">{m.score}</div>
            <div className="mt-1 text-xs text-fg-muted">{m.metric}</div>
            <p className="mt-3 text-sm text-fg-muted">{m.description}</p>
            <div className="mt-4 text-[11px] text-fg-subtle">Last trained {m.trained}</div>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Scoring policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-fg-muted">
          <p>New datasets run the full path: ETL → clean → database → training → inference → BI → AI.</p>
          <p>Dataset updates skip training and reuse the 15 Jun 2024 models unless drift is detected.</p>
          <p>41,599 customers currently have churn, CLV and propensity scores written back to the mart.</p>
        </CardContent>
      </Card>
    </div>
  );
}
