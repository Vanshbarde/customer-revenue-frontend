import { createFileRoute } from "@tanstack/react-router";
import { RequireSession } from "@/components/auth/session-gate";
import { AppShell } from "@/components/layout/app-shell";

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <RequireSession>
      <AppShell />
    </RequireSession>
  );
}
