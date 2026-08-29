import { type ReactNode, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function ClientChart({ children, className }: { children: ReactNode; className?: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return <Skeleton className={className ?? "h-56 w-full"} />;
  return <>{children}</>;
}
