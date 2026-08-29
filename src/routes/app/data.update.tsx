import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDatasets } from "@/lib/stores/datasets";
import { usePipeline } from "@/lib/stores/pipeline";

export const Route = createFileRoute("/app/data/update")({
  validateSearch: (s: Record<string, unknown>) => ({
    id: typeof s.id === "string" ? s.id : undefined,
  }),
  component: UpdateDatasetPage,
});

function UpdateDatasetPage() {
  const { id } = Route.useSearch();
  const items = useDatasets((s) => s.items);
  const update = useDatasets((s) => s.update);
  const setMode = usePipeline((s) => s.setMode);
  const navigate = useNavigate();
  const selected = useMemo(() => items.find((d) => d.id === id) ?? items[0], [items, id]);
  const [fileName, setFileName] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!selected) return;
    update(selected.id, {
      fileName: fileName || selected.fileName,
      status: "pending",
      uploadedAt: new Date().toISOString(),
    });
    setMode("update");
    toast.success("Update queued. Training will be skipped.");
    void navigate({ to: "/app/processing", search: { dataset: selected.id } });
  }

  return (
    <div className="mx-auto max-w-xl space-y-6 p-4 sm:p-6">
      <PageHeader
        title="Update dataset"
        description="Appends history. The pipeline will run ETL, cleaning, database update and inference — not a full retrain."
      />
      <Card>
        <CardContent className="p-6">
          <form className="space-y-4" onSubmit={submit}>
            <div className="space-y-1.5">
              <Label htmlFor="ds">Dataset</Label>
              <select
                id="ds"
                className="flex h-10 w-full rounded-md border border-border bg-surface px-3 text-sm"
                defaultValue={selected?.id}
                onChange={() => undefined}
              >
                {items.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="file">Replacement / append file</Label>
              <Input id="file" type="file" accept=".csv,.parquet,.xlsx,.xls" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
            </div>
            <div className="rounded-lg bg-warn-soft p-3 text-sm text-warn">
              Training is skipped on update unless you later opt into a full run.
            </div>
            <Button type="submit" className="w-full">
              Queue update pipeline
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
