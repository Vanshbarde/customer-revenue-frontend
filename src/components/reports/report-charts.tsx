import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ClientChart } from "@/components/charts/client-chart";
import {
  CATEGORIES,
  CITIES,
  MONTHLY_REVENUE,
  PRODUCTS,
  SEGMENTS,
  SELLERS,
  STATES,
} from "@/lib/data/platform";
import { inr, num } from "@/lib/utils";

const TOOLTIP_STYLE = {
  borderRadius: 8,
  border: "1px solid var(--color-border)",
  fontSize: 12,
  boxShadow: "var(--shadow-pop)",
};

export function RevenueArea({ height = 260 }: { height?: number }) {
  return (
    <ClientChart className="h-64 w-full">
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MONTHLY_REVENUE} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.28} />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--color-fg-muted)" }} axisLine={false} tickLine={false} />
            <YAxis
              tickFormatter={(v) => `${(v / 1_000_000).toFixed(0)}M`}
              tick={{ fontSize: 11, fill: "var(--color-fg-muted)" }}
              axisLine={false}
              tickLine={false}
              width={36}
            />
            <Tooltip
              contentStyle={TOOLTIP_STYLE}
              formatter={(v) => [inr(Number(v)), "Revenue"]}
            />
            <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2} fill="url(#revFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ClientChart>
  );
}

export function CategoryDonut() {
  const data = CATEGORIES.filter((c) => c.key !== "others").concat({
    name: "Others",
    key: "others",
    revenue: CATEGORIES.find((c) => c.key === "others")!.revenue,
    orders: 0,
    share: 60.3,
  });
  const colors = [
    "var(--color-chart-1)",
    "var(--color-chart-2)",
    "var(--color-chart-3)",
    "var(--color-chart-5)",
    "var(--color-chart-6)",
    "var(--color-chart-7)",
    "var(--color-chart-8)",
    "var(--color-chart-4)",
    "#94a3b8",
    "#cbd5e1",
  ];
  return (
    <ClientChart className="h-56 w-full">
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="revenue" nameKey="name" innerRadius={52} outerRadius={80} paddingAngle={2}>
              {data.map((_, i) => (
                <Cell key={i} fill={colors[i % colors.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => inr(Number(v))} contentStyle={TOOLTIP_STYLE} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ClientChart>
  );
}

export function SegmentDonut() {
  return (
    <ClientChart className="h-56 w-full">
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={SEGMENTS} dataKey="count" nameKey="name" innerRadius={52} outerRadius={80} paddingAngle={2}>
              {SEGMENTS.map((s) => (
                <Cell key={s.name} fill={s.color} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => num(Number(v))} contentStyle={TOOLTIP_STYLE} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ClientChart>
  );
}

export function StateBars() {
  return (
    <ClientChart className="h-64 w-full">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={STATES} layout="vertical" margin={{ left: 8, right: 8 }}>
            <CartesianGrid stroke="var(--color-border)" horizontal={false} />
            <XAxis type="number" tickFormatter={(v) => `${(v / 1_000_000).toFixed(1)}M`} tick={{ fontSize: 11, fill: "var(--color-fg-muted)" }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="code" width={36} tick={{ fontSize: 11, fill: "var(--color-fg-muted)" }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(v) => inr(Number(v))} contentStyle={TOOLTIP_STYLE} />
            <Bar dataKey="revenue" fill="var(--color-primary)" radius={[0, 6, 6, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ClientChart>
  );
}

export function OrdersLine() {
  return (
    <ClientChart className="h-56 w-full">
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={MONTHLY_REVENUE}>
            <CartesianGrid stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--color-fg-muted)" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "var(--color-fg-muted)" }} axisLine={false} tickLine={false} width={40} />
            <Tooltip contentStyle={TOOLTIP_STYLE} />
            <Line type="monotone" dataKey="orders" stroke="var(--color-accent)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ClientChart>
  );
}

export function SellerBars() {
  return (
    <ClientChart className="h-56 w-full">
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={SELLERS}>
            <CartesianGrid stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: "var(--color-fg-muted)" }} axisLine={false} tickLine={false} interval={0} />
            <YAxis tickFormatter={(v) => `${(v / 1_000_000).toFixed(1)}M`} tick={{ fontSize: 11, fill: "var(--color-fg-muted)" }} axisLine={false} tickLine={false} width={36} />
            <Tooltip formatter={(v) => inr(Number(v))} contentStyle={TOOLTIP_STYLE} />
            <Bar dataKey="revenue" fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ClientChart>
  );
}

export function DelayScatter() {
  return (
    <ClientChart className="h-56 w-full">
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid stroke="var(--color-border)" />
            <XAxis dataKey="delay" name="Delay (days)" tick={{ fontSize: 11, fill: "var(--color-fg-muted)" }} />
            <YAxis dataKey="rating" name="Rating" domain={[3.8, 5]} tick={{ fontSize: 11, fill: "var(--color-fg-muted)" }} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} contentStyle={TOOLTIP_STYLE} />
            <Scatter data={SELLERS} fill="var(--color-primary)" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </ClientChart>
  );
}

export function ProductTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-xs text-fg-muted">
          <tr className="border-b border-border">
            <th className="py-2 font-medium">Product</th>
            <th className="py-2 font-medium">Category</th>
            <th className="py-2 text-right font-medium">Revenue</th>
            <th className="py-2 text-right font-medium">Share</th>
          </tr>
        </thead>
        <tbody>
          {PRODUCTS.map((p) => (
            <tr key={p.name} className="border-b border-border last:border-0">
              <td className="py-2.5 font-medium">{p.name}</td>
              <td className="py-2.5 text-fg-muted">{p.category}</td>
              <td className="py-2.5 text-right tabular">{inr(p.revenue)}</td>
              <td className="py-2.5 text-right tabular text-fg-muted">{p.contribution.toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CityTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-xs text-fg-muted">
          <tr className="border-b border-border">
            <th className="py-2 font-medium">City</th>
            <th className="py-2 font-medium">State</th>
            <th className="py-2 text-right font-medium">Revenue</th>
            <th className="py-2 text-right font-medium">Orders</th>
          </tr>
        </thead>
        <tbody>
          {CITIES.map((c) => (
            <tr key={c.city} className="border-b border-border last:border-0">
              <td className="py-2.5 font-medium">{c.city}</td>
              <td className="py-2.5 text-fg-muted">{c.state}</td>
              <td className="py-2.5 text-right tabular">{inr(c.revenue)}</td>
              <td className="py-2.5 text-right tabular">{num(c.orders)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CategoryLegend() {
  return (
    <ul className="space-y-1.5 text-xs">
      {CATEGORIES.slice(0, 6).map((c, i) => (
        <li key={c.key} className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-fg-muted">
            <span
              className="size-2 rounded-full"
              style={{
                background: ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)", "var(--color-chart-5)", "var(--color-chart-6)", "var(--color-chart-7)"][i],
              }}
            />
            {c.name}
          </span>
          <span className="tabular font-medium text-fg">{inr(c.revenue)}</span>
        </li>
      ))}
    </ul>
  );
}

export { Legend };
