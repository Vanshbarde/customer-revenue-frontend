import { Link, useNavigate } from "@tanstack/react-router";
import { Bell, HelpCircle, LogOut, Menu, Search, Settings } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { NAV } from "@/components/layout/nav";
import { initials } from "@/lib/utils";
import { useSession } from "@/lib/stores/session";
import { useUi } from "@/lib/stores/ui";

const NOTICES = [
  { title: "Churn scores refreshed", body: "41,599 customers scored · 15 Jun 10:41", unread: true },
  { title: "Revenue decline flagged", body: "Latest growth -76.68% on the Sep 2018 slice", unread: true },
  { title: "ETL completed", body: "Brazilian E-Commerce Dataset processed", unread: false },
];

export function Topbar() {
  const user = useSession((s) => s.user);
  const logout = useSession((s) => s.logout);
  const setMobile = useUi((s) => s.setMobileNavOpen);
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const hits = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    const flat = NAV.flatMap((n) => [
      { to: n.to, label: n.label },
      ...(n.children ?? []).map((c) => ({ to: c.to, label: c.label })),
    ]);
    return flat.filter((x) => x.label.toLowerCase().includes(query)).slice(0, 6);
  }, [q]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        document.getElementById("crioi-search")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border bg-surface px-4">
      <button
        type="button"
        className="flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-paper lg:hidden"
        onClick={() => setMobile(true)}
        aria-label="Open navigation"
      >
        <Menu className="size-5" />
      </button>

      <div className="relative max-w-xl flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-subtle" />
        <Input
          id="crioi-search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="Search reports, customers, products…"
          className="h-10 border-transparent bg-paper pl-9"
        />
        {open && hits.length > 0 && (
          <div className="absolute top-11 z-30 w-full rounded-lg bg-surface p-1 shadow-[var(--shadow-pop)]">
            {hits.map((h) => (
              <button
                key={h.to}
                type="button"
                className="flex w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-paper"
                onMouseDown={() => {
                  void navigate({ to: h.to });
                  setQ("");
                }}
              >
                {h.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="ml-auto flex items-center gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-paper"
              aria-label="Notifications"
            >
              <Bell className="size-4" />
              <span className="absolute top-2 right-2 size-1.5 rounded-full bg-danger" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            {NOTICES.map((n) => (
              <DropdownMenuItem key={n.title} className="flex-col items-start gap-0.5">
                <span className="text-sm font-medium">{n.title}</span>
                <span className="text-xs text-fg-muted">{n.body}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          to="/app/about"
          className="hidden size-10 items-center justify-center rounded-md text-fg-muted hover:bg-paper sm:flex"
          aria-label="About"
        >
          <HelpCircle className="size-4" />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button" className="ml-1 flex items-center gap-2 rounded-md py-1 pr-1 pl-2 hover:bg-paper">
              <span className="hidden text-right sm:block">
                <span className="block text-sm font-medium leading-tight">{user?.fullName ?? "Guest"}</span>
                <span className="block text-[11px] text-fg-muted">{user?.role ?? "Viewer"}</span>
              </span>
              <span className="grid size-9 place-items-center rounded-full bg-primary-soft text-xs font-semibold text-primary">
                {initials(user?.fullName ?? "U")}
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{user?.organization}</DropdownMenuLabel>
            <DropdownMenuItem onSelect={() => void navigate({ to: "/app/settings" })}>
              <Settings className="size-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => {
                logout();
                void navigate({ to: "/login" });
              }}
            >
              <LogOut className="size-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
