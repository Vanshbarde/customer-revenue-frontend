import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Upload } from "lucide-react";
import { useState } from "react";
import { CrioiWordmark, CrioiMark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { NAV } from "@/components/layout/nav";
import { cn } from "@/lib/utils";
import { useUi } from "@/lib/stores/ui";
import { activeDataset, useDatasets } from "@/lib/stores/datasets";

export function Sidebar() {
  const collapsed = useUi((s) => s.sidebarCollapsed);
  const toggle = useUi((s) => s.toggleSidebar);
  const setMobile = useUi((s) => s.setMobileNavOpen);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = useDatasets((s) => s.items);
  const active = activeDataset(items);
  const [openReports, setOpenReports] = useState(pathname.startsWith("/app/reports"));

  return (
    <aside
      className={cn(
        "flex h-full flex-col bg-sidebar text-sidebar-fg transition-[width] duration-250 ease-[var(--ease-out)]",
        collapsed ? "w-[72px]" : "w-[248px]",
      )}
    >
      <div className={cn("flex h-16 items-center gap-2 px-3", collapsed ? "justify-center" : "justify-between")}>
        {collapsed ? <CrioiMark className="text-primary size-8" /> : <CrioiWordmark inverted />}
        <button
          type="button"
          onClick={toggle}
          className={cn(
            "hidden size-8 items-center justify-center rounded-sm text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg lg:flex",
            collapsed && "absolute top-4 left-[72px] z-20 size-8 rounded-r-md bg-sidebar text-sidebar-muted",
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu className="size-4" />
        </button>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-2 py-2">
        {NAV.map((item) => {
          const Icon = item.icon;
          const activeNav =
            item.to === "/app"
              ? pathname === "/app"
              : pathname === item.to || pathname.startsWith(item.to + "/");
          if (item.children) {
            return (
              <div key={item.to}>
                {collapsed ? (
                  <Tooltip content={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => setMobile(false)}
                      className={cn(
                        "flex size-11 items-center justify-center rounded-md",
                        activeNav ? "bg-primary text-white" : "text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg",
                      )}
                    >
                      <Icon className="size-4" />
                    </Link>
                  </Tooltip>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenReports((v) => !v)}
                      className={cn(
                        "flex h-10 w-full items-center gap-3 rounded-md px-3 text-sm font-medium",
                        activeNav ? "bg-ink-hover text-sidebar-fg" : "text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg",
                      )}
                    >
                      <Icon className="size-4 shrink-0" />
                      <span className="flex-1 text-left">{item.label}</span>
                      <ChevronDown className={cn("size-3.5 transition-transform", openReports && "rotate-180")} />
                    </button>
                    {openReports && (
                      <div className="mt-0.5 ml-4 space-y-0.5 border-l border-white/10 pl-2">
                        {item.children.map((child) => {
                          const CIcon = child.icon;
                          const on = child.reportId
                            ? pathname === `/app/reports/${child.reportId}`
                            : pathname === child.to;
                          return (
                            <Link
                              key={child.to}
                              to={child.reportId ? "/app/reports/$reportId" : child.to}
                              params={child.reportId ? { reportId: child.reportId } : undefined}
                              onClick={() => setMobile(false)}
                              className={cn(
                                "flex h-9 items-center gap-2.5 rounded-md px-2.5 text-[13px]",
                                on
                                  ? "bg-primary text-white"
                                  : "text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg",
                              )}
                            >
                              <CIcon className="size-3.5" />
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          }
          const link = (
            <Link
              to={item.to}
              onClick={() => setMobile(false)}
              className={cn(
                "flex items-center rounded-md text-sm font-medium",
                collapsed ? "size-11 justify-center" : "h-10 gap-3 px-3",
                activeNav ? "bg-primary text-white" : "text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg",
              )}
            >
              <Icon className="size-4 shrink-0" />
              {!collapsed && item.label}
            </Link>
          );
          return collapsed ? (
            <Tooltip key={item.to} content={item.label}>
              {link}
            </Tooltip>
          ) : (
            <div key={item.to}>{link}</div>
          );
        })}
      </nav>

      {!collapsed && active && (
        <div className="mx-2 mb-3 rounded-lg bg-ink-soft p-3">
          <div className="flex items-center justify-between text-[10px] font-medium tracking-wide text-sidebar-muted uppercase">
            Current dataset
            <span className="inline-flex items-center gap-1 rounded-full bg-good/20 px-1.5 py-0.5 text-[10px] text-good normal-case">
              <span className="size-1.5 rounded-full bg-good" />
              Active
            </span>
          </div>
          <div className="mt-1.5 truncate text-sm font-medium">{active.fileName}</div>
          <div className="mt-0.5 text-[11px] text-sidebar-muted">
            {active.rows.toLocaleString("en-IN")} rows
          </div>
          <Button asChild size="sm" className="mt-3 w-full">
            <Link to="/app/data/new" onClick={() => setMobile(false)}>
              <Upload className="size-3.5" />
              Upload dataset
            </Link>
          </Button>
        </div>
      )}
    </aside>
  );
}
