import { Navigate } from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";
import { useSession } from "@/lib/stores/session";
import { CrioiMark } from "@/components/brand/logo";

export function useHydrated() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const unsub = useSession.persist.onFinishHydration(() => setReady(true));
    if (useSession.persist.hasHydrated()) setReady(true);
    return unsub;
  }, []);
  return ready;
}

export function Splash() {
  return (
    <div className="grid min-h-dvh place-items-center bg-ink text-sidebar-fg">
      <div className="flex flex-col items-center gap-3">
        <CrioiMark className="size-10 text-primary" />
        <div className="text-sm text-sidebar-muted">Loading CRIOI…</div>
      </div>
    </div>
  );
}

export function RequireSession({ children }: { children: ReactNode }) {
  const ready = useHydrated();
  const user = useSession((s) => s.user);
  if (!ready) return <Splash />;
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
}

export function RedirectIfAuthed({ children }: { children: ReactNode }) {
  const ready = useHydrated();
  const user = useSession((s) => s.user);
  if (!ready) return <Splash />;
  if (user) return <Navigate to="/app" />;
  return <>{children}</>;
}
