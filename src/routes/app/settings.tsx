import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "@/lib/stores/session";

export const Route = createFileRoute("/app/settings")({ component: SettingsPage });

function SettingsPage() {
  const user = useSession((s) => s.user);
  const login = useSession((s) => s.login);

  function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) return;
    const fd = new FormData(e.currentTarget);
    login({
      ...user,
      fullName: String(fd.get("fullName") ?? user.fullName),
      organization: String(fd.get("organization") ?? user.organization),
      role: String(fd.get("role") ?? user.role),
      contactNumber: String(fd.get("contactNumber") ?? user.contactNumber),
    });
    toast.success("Profile saved on this device.");
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4 sm:p-6">
      <PageHeader title="Settings" description="Workspace preferences for this preview. Backend auth comes later." />
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={save}>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" name="fullName" defaultValue={user?.fullName} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="organization">Organization</Label>
              <Input id="organization" name="organization" defaultValue={user?.organization} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="role">Role</Label>
              <Input id="role" name="role" defaultValue={user?.role} />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="contactNumber">Contact</Label>
              <Input id="contactNumber" name="contactNumber" defaultValue={user?.contactNumber} />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Power BI connection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-fg-muted">
          <p>Report canvases are interactive stand-ins. When your workspace is ready, paste embed URLs here.</p>
          <Input placeholder="https://app.powerbi.com/reportEmbed?reportId=…" disabled />
          <p className="text-xs">Embed wiring is deferred to the backend phase.</p>
        </CardContent>
      </Card>
    </div>
  );
}
