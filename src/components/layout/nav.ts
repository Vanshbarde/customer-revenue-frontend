import {
  LayoutDashboard,
  FolderOpen,
  Cog,
  BarChart3,
  Bot,
  Settings,
  Map,
  Users,
  Package,
  Target,
  Sparkles,
  LineChart,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import type { ReportId } from "@/lib/data/platform";

export type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
  children?: { to: string; label: string; icon: LucideIcon; reportId?: ReportId }[];
};

export const NAV: NavItem[] = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/data", label: "Data Management", icon: FolderOpen },
  { to: "/app/processing", label: "Data Processing", icon: Cog },
  {
    to: "/app/reports",
    label: "Reports",
    icon: BarChart3,
    children: [
      { to: "/app/reports/overview", label: "Overview", icon: Gauge, reportId: "overview" },
      { to: "/app/reports/revenue", label: "Revenue", icon: LineChart, reportId: "revenue" },
      { to: "/app/reports/customers", label: "Customers", icon: Users, reportId: "customers" },
      { to: "/app/reports/products", label: "Products", icon: Package, reportId: "products" },
      { to: "/app/reports/geography", label: "Geography", icon: Map, reportId: "geography" },
      { to: "/app/reports/performance", label: "Performance", icon: BarChart3, reportId: "performance" },
      { to: "/app/reports/opportunity", label: "Opportunity", icon: Target, reportId: "opportunity" },
      { to: "/app/reports/predictions", label: "Predictions", icon: Sparkles, reportId: "predictions" },
    ],
  },
  { to: "/app/ai", label: "AI Assistant", icon: Bot },
  { to: "/app/settings", label: "Settings", icon: Settings },
];
