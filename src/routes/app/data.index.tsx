import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Plus, RefreshCw, Trash2 } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { type Dataset, useDatasets } from "@/lib/stores/datasets";
import { num } from "@/lib/utils";

export const Route = createFileRoute("/app/data/")({ component: DataPage });

function DataPage() {
  const items = useDatasets((s) => s.items);
  const setActive = useDatasets((s) => s.setActive);
  const remove = useDatasets((s) => s.remove);
  const [view, setView] = useState<Dataset | null>(null);

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4 sm:p-6">
      <PageHeader
        title="Data Management"
        description="Add a new extract or append to an existing one. Processing comes next."
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/app/data/update" search={{ id: undefined }}>
                Update dataset
              </Link>
            </Button>
            <Button asChild>
              <Link to="/app/data/new">
                <Plus className="size-4" />
                Add dataset
              </Link>
            </Button>
          </>
        }
      />

      <div className="space-y-3">
        {items.map((d) => (
          <Card key={d.id}>
            <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-sm font-semibold">{d.name}</h2>
                  <Badge variant={d.status === "processed" ? "good" : d.status === "failed" ? "danger" : "warn"}>
                    {d.status}
                  </Badge>
                  {d.active && <Badge>Active</Badge>}
                </div>
                <p className="mt-1 text-sm text-fg-muted">{d.description}</p>
                <p className="mt-2 text-xs text-fg-subtle">
                  {d.fileName} · {num(d.rows)} rows · {d.columns} columns · quality {d.quality}%
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline" onClick={() => setView(d)}>
                  <Eye className="size-3.5" /> View
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/app/data/update" search={{ id: d.id }}>
                    <RefreshCw className="size-3.5" /> Update
                  </Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/app/processing" search={{ dataset: d.id }}>
                    Process
                  </Link>
                </Button>
                {!d.active && (
                  <Button size="sm" variant="ghost" onClick={() => setActive(d.id)}>
                    Set active
                  </Button>
                )}
                {items.length > 1 && !d.active && (
                  <Button size="sm" variant="ghost" onClick={() => remove(d.id)} aria-label="Remove">
                    <Trash2 className="size-3.5" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!view} onOpenChange={(o) => !o && setView(null)}>
        <DialogContent>
          {view && (
            <>
              <DialogTitle>{view.name}</DialogTitle>
              <DialogDescription>Dataset health</DialogDescription>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <Stat k="Rows" v={num(view.rows)} />
                <Stat k="Columns" v={String(view.columns)} />
                <Stat k="Missing values" v={String(view.missing)} />
                <Stat k="Duplicates" v={String(view.duplicates)} />
                <Stat k="Data quality" v={`${view.quality}%`} />
                <Stat k="Type" v={view.type} />
              </dl>
              <ul className="mt-4 space-y-1 text-sm text-fg-muted">
                <li>Schema validated</li>
                <li>Cleaning completed</li>
                <li>Database loaded</li>
              </ul>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg bg-paper p-3">
      <div className="text-xs text-fg-muted">{k}</div>
      <div className="mt-1 font-semibold tabular">{v}</div>
    </div>
  );
}
