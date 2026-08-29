import { createFileRoute } from "@tanstack/react-router";
import { Check, Circle, Loader2, Play, RotateCcw, X } from "lucide-react";
import { PageHeader } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activeDataset, useDatasets } from "@/lib/stores/datasets";
import { usePipeline, type StepStatus } from "@/lib/stores/pipeline";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/processing")({
  validateSearch: (s: Record<string, unknown>) => ({
    dataset: typeof s.dataset === "string" ? s.dataset : undefined,
  }),
  component: ProcessingPage,
});

function StatusIcon({ status }: { status: StepStatus }) {
  if (status === "completed") return <Check className="size-4 text-good" />;
  if (status === "running") return <Loader2 className="size-4 animate-spin text-primary" />;
  if (status === "failed") return <X className="size-4 text-danger" />;
  return <Circle className="size-4 text-fg-subtle" />;
}

function ProcessingPage() {
  const items = useDatasets((s) => s.items);
  const active = activeDataset(items);
  const { mode, setMode, steps, logs, running, runAll, runOne, reset, history } = usePipeline();

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4 sm:p-6">
      <PageHeader
        title="Data Processing"
        description={`Dataset: ${active?.name ?? "None"}. Full runs train models. Updates skip training.`}
        actions={
          <>
            <div className="flex rounded-md bg-paper-2 p-1">
              <button
                type="button"
                onClick={() => setMode("full")}
                className={cn("rounded-sm px-3 py-1.5 text-xs font-medium", mode === "full" ? "bg-surface shadow-sm" : "text-fg-muted")}
              >
                New dataset
              </button>
              <button
                type="button"
                onClick={() => setMode("update")}
                className={cn("rounded-sm px-3 py-1.5 text-xs font-medium", mode === "update" ? "bg-surface shadow-sm" : "text-fg-muted")}
              >
                Update path
              </button>
            </div>
            <Button variant="outline" size="sm" onClick={reset} disabled={running}>
              <RotateCcw className="size-3.5" /> Reset
            </Button>
            <Button size="sm" onClick={() => void runAll()} disabled={running}>
              <Play className="size-3.5" />
              {running ? "Running…" : "Run pipeline"}
            </Button>
          </>
        }
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          {steps.map((s) => {
            const skipped = mode === "update" && s.id === "train";
            return (
              <Card key={s.id}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="grid size-10 place-items-center rounded-lg bg-paper">
                    <StatusIcon status={skipped ? "idle" : s.status} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-fg-subtle">{s.n}</span>
                      <h2 className="text-sm font-semibold">{s.name}</h2>
                      {skipped && <Badge variant="warn">Skipped on update</Badge>}
                      {!skipped && s.status !== "idle" && s.status !== "waiting" && (
                        <Badge variant={s.status === "completed" ? "good" : s.status === "failed" ? "danger" : "default"}>
                          {s.status}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-fg-muted">{s.blurb}</p>
                  </div>
                  <Button size="sm" variant="outline" disabled={running || skipped} onClick={() => void runOne(s.id)}>
                    Run
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Pipeline logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 overflow-auto rounded-lg bg-ink p-3 font-mono text-[11px] leading-6 text-sidebar-fg">
                {logs.length === 0 && <div className="text-sidebar-muted">No log lines yet.</div>}
                {logs.map((l, i) => (
                  <div key={`${l.ts}-${i}`} className="flex gap-2">
                    <span className="text-sidebar-muted">[{l.ts}]</span>
                    <span
                      className={
                        l.level === "ok"
                          ? "text-good"
                          : l.level === "warn"
                            ? "text-warn"
                            : l.level === "error"
                              ? "text-danger"
                              : ""
                      }
                    >
                      {l.message}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Processing history</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs text-fg-muted">
                    <tr className="border-b border-border">
                      <th className="py-2 font-medium">Dataset</th>
                      <th className="py-2 font-medium">Operation</th>
                      <th className="py-2 font-medium">Status</th>
                      <th className="py-2 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.slice(0, 8).map((h) => (
                      <tr key={h.id} className="border-b border-border last:border-0">
                        <td className="py-2">{h.dataset}</td>
                        <td className="py-2">{h.operation}</td>
                        <td className="py-2">
                          <Badge variant="good">{h.status}</Badge>
                        </td>
                        <td className="py-2 text-fg-muted">{h.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
