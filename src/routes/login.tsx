import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CrioiWordmark } from "@/components/brand/logo";
import { RedirectIfAuthed } from "@/components/auth/session-gate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEMO_USER, useSession } from "@/lib/stores/session";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  return (
    <RedirectIfAuthed>
      <LoginForm />
    </RedirectIfAuthed>
  );
}

function LoginForm() {
  const login = useSession((s) => s.login);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError("Enter an email and password to continue.");
      return;
    }
    login({
      ...DEMO_USER,
      email: email.trim(),
      fullName: email.split("@")[0]?.replace(/[._]/g, " ") || DEMO_USER.fullName,
    });
    void navigate({ to: "/app" });
  }

  return (
    <div className="grid min-h-dvh lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative hidden flex-col justify-between bg-ink p-10 text-sidebar-fg lg:flex">
        <CrioiWordmark inverted />
        <div>
          <p className="text-xs tracking-[0.2em] text-primary uppercase">ABC Retail workspace</p>
          <h1 className="mt-3 max-w-md text-4xl font-semibold tracking-tight">Intelligence that stays next to the report.</h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-sidebar-muted">
            Eight Power BI canvases, a collapsible analyst, and the pipeline that produced them — in one product surface.
          </p>
        </div>
        <p className="text-xs text-sidebar-muted">Demo sign-in accepts any email and password.</p>
      </div>
      <div className="flex items-center justify-center bg-paper px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <CrioiWordmark />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">Welcome back</h2>
          <p className="mt-1 text-sm text-fg-muted">Sign in to the CRIOI workspace.</p>
          <form className="mt-8 space-y-4" onSubmit={submit}>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            </div>
            {error && <p className="text-sm text-danger">{error}</p>}
            <Button type="submit" className="w-full" size="lg">
              Sign in
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => {
                login(DEMO_USER);
                void navigate({ to: "/app" });
              }}
            >
              Continue as Rohit Sharma
            </Button>
          </form>
          <p className="mt-6 text-sm text-fg-muted">
            No account?{" "}
            <Link to="/register" className="font-medium text-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
