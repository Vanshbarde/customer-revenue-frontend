import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";
import { type ReactNode, useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useUi } from "@/lib/stores/ui";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children?: ReactNode }) {
  const mobile = useUi((s) => s.mobileNavOpen);
  const setMobile = useUi((s) => s.setMobileNavOpen);
  const fullscreen = useUi((s) => s.fullscreen);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const fill =
    fullscreen ||
    pathname === "/app/ai" ||
    (pathname.startsWith("/app/reports/") && pathname !== "/app/reports/");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "[" && !e.metaKey && !e.ctrlKey) useUi.getState().toggleSidebar();
      if (e.key === "]" && !e.metaKey && !e.ctrlKey) useUi.getState().toggleAiPanel();
      if (e.key === "Escape" && useUi.getState().fullscreen) useUi.getState().setFullscreen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <TooltipProvider>
      <div className="flex h-dvh overflow-hidden bg-paper">
        <div className="hidden lg:block">
          {!fullscreen && <Sidebar />}
        </div>

        {mobile && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-ink/50"
              aria-label="Close navigation"
              onClick={() => setMobile(false)}
            />
            <div className="relative h-full w-[248px]">
              <Sidebar />
              <button
                type="button"
                className="absolute top-3 right-3 size-8 rounded-sm text-sidebar-muted hover:bg-ink-hover"
                onClick={() => setMobile(false)}
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          {!fullscreen && <Topbar />}
          <main className={cn("min-h-0 flex-1", fill ? "overflow-hidden" : "overflow-auto")}>
            {children ?? <Outlet />}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <div className="mb-1 text-[11px] font-medium tracking-wider text-fg-subtle uppercase">{eyebrow}</div>
        )}
        <h1 className="text-2xl font-semibold tracking-tight text-fg">{title}</h1>
        {description && <p className="mt-1 max-w-2xl text-sm text-fg-muted">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

export function EmptyHint({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-border-strong bg-surface px-6 py-10 text-center text-sm text-fg-muted">
      {children}
    </div>
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="font-medium text-primary hover:underline">
      {children}
    </Link>
  );
}
