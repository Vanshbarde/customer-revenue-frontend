import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CrioiWordmark } from "@/components/brand/logo";
import { RedirectIfAuthed } from "@/components/auth/session-gate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession, type SessionUser } from "@/lib/stores/session";

export const Route = createFileRoute("/register")({ component: RegisterPage });

function RegisterPage() {
  return (
    <RedirectIfAuthed>
      <RegisterForm />
    </RedirectIfAuthed>
  );
}

function RegisterForm() {
  const login = useSession((s) => s.login);
  const navigate = useNavigate();
  const [form, setForm] = useState<SessionUser>({
    fullName: "",
    email: "",
    organization: "",
    role: "Analyst",
    country: "India",
    orgType: "Retail",
    contactNumber: "",
    address: "",
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function set<K extends keyof SessionUser>(key: K, value: SessionUser[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim() || !password || !form.organization.trim()) {
      setError("Name, email, organization and password are required.");
      return;
    }
    login(form);
    void navigate({ to: "/app" });
  }

  return (
    <div className="min-h-dvh bg-paper">
      <div className="mx-auto max-w-xl px-6 py-10">
        <CrioiWordmark />
        <h1 className="mt-8 text-2xl font-semibold tracking-tight">Create your workspace</h1>
        <p className="mt-1 text-sm text-fg-muted">
          Registration is local for this preview — nothing is stored on a server yet.
        </p>
        <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={submit}>
          <Field label="Full name" value={form.fullName} onChange={(v) => set("fullName", v)} />
          <Field label="Email" type="email" value={form.email} onChange={(v) => set("email", v)} />
          <Field label="Password" type="password" value={password} onChange={setPassword} />
          <Field label="Organization" value={form.organization} onChange={(v) => set("organization", v)} />
          <Field label="Role" value={form.role} onChange={(v) => set("role", v)} />
          <Field label="Organization type" value={form.orgType} onChange={(v) => set("orgType", v)} />
          <Field label="Country" value={form.country} onChange={(v) => set("country", v)} />
          <Field label="Contact number" value={form.contactNumber} onChange={(v) => set("contactNumber", v)} />
          <div className="sm:col-span-2">
            <Field label="Address" value={form.address} onChange={(v) => set("address", v)} />
          </div>
          {error && <p className="sm:col-span-2 text-sm text-danger">{error}</p>}
          <div className="sm:col-span-2">
            <Button type="submit" className="w-full" size="lg">
              Enter CRIOI
            </Button>
          </div>
        </form>
        <p className="mt-6 text-sm text-fg-muted">
          Already registered?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
