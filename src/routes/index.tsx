import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Bot, Database, Shield } from "lucide-react";
import { CrioiWordmark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { useHydrated } from "@/components/auth/session-gate";
import { useSession } from "@/lib/stores/session";

export const Route = createFileRoute("/")({ component: Landing });

function Landing() {
  const ready = useHydrated();
  const user = useSession((s) => s.user);
  const authed = ready && !!user;

  return (
    <div className="min-h-dvh bg-ink text-sidebar-fg">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <CrioiWordmark inverted />
        <nav className="flex items-center gap-2">
          <Link to="/about" className="hidden px-3 py-2 text-sm text-sidebar-muted hover:text-sidebar-fg sm:inline">
            About
          </Link>
          {authed ? (
            <Button asChild>
              <Link to="/app">Open workspace</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" className="text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Get started</Link>
              </Button>
            </>
          )}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
          Customer Revenue Opportunity Intelligence
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          See the revenue hiding in your customers.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sidebar-muted sm:text-lg">
          CRIOI turns transactions into a working system: datasets, ETL, models, eight intelligence reports, and an analyst that already knows the numbers.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to={authed ? "/app" : "/login"}>
              {authed ? "Go to dashboard" : "Enter the platform"}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/15 bg-transparent text-sidebar-fg hover:bg-ink-hover">
            <Link to="/register">Create an account</Link>
          </Button>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {[
            ["₹20.58M", "Recorded revenue"],
            ["41,599", "Customers scored"],
            ["8", "Intelligence reports"],
            ["92.4%", "Churn model accuracy"],
          ].map(([k, v]) => (
            <div key={v}>
              <dt className="text-2xl font-semibold tabular">{k}</dt>
              <dd className="mt-1 text-sm text-sidebar-muted">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Database, title: "Data center", body: "Add or append datasets. Health, schema, and quality before a single model runs." },
            { icon: Shield, title: "Processing", body: "ETL, cleaning, training, inference — with a live logger and an update path that does not retrain blindly." },
            { icon: BarChart3, title: "Eight reports", body: "Overview, revenue, customers, products, geography, performance, opportunity, predictions." },
            { icon: Bot, title: "AI analyst", body: "Insights belong to the open report. Ask a question; the context is already loaded." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-ink-soft p-5">
              <f.icon className="size-5 text-primary" />
              <h2 className="mt-4 text-sm font-semibold">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-sidebar-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
