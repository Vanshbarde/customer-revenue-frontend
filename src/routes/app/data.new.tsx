import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useDatasets } from "@/lib/stores/datasets";

export const Route = createFileRoute("/app/data/new")({ component: AddDatasetPage });

function AddDatasetPage() {
  const add = useDatasets((s) => s.add);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<"CSV" | "Parquet" | "Excel">("CSV");
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [busy, setBusy] = useState(false);

  function onFile(f?: File) {
    if (!f) return;
    setFileName(f.name);
    if (!name) setName(f.name.replace(/\.[^.]+$/, "").replace(/[_-]/g, " "));
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !fileName) {
      toast.error("Name and a file are required.");
      return;
    }
    setBusy(true);
    for (let i = 1; i <= 10; i++) {
      await new Promise((r) => setTimeout(r, 120));
      setProgress(i * 10);
    }
    add({
      id: crypto.randomUUID(),
      name: name.trim(),
      fileName,
      description: description.trim() || "Uploaded from the CRIOI workspace.",
      type,
      status: "pending",
      rows: 0,
      columns: 20,
      missing: 0,
      duplicates: 0,
      quality: 0,
      uploadedAt: new Date().toISOString(),
      lastProcessedAt: null,
      active: false,
    });
    toast.success("Dataset added. Run the full pipeline next.");
    void navigate({ to: "/app/processing", search: { dataset: undefined } });
  }

  return (
    <div className="mx-auto max-w-xl space-y-6 p-4 sm:p-6">
      <PageHeader title="Add new dataset" description="New extracts run the full path, including training." />
      <Card>
        <CardContent className="p-6">
          <form className="space-y-4" onSubmit={submit}>
            <div className="space-y-1.5">
              <Label htmlFor="ds-name">Dataset name</Label>
              <Input id="ds-name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ds-desc">Description</Label>
              <Textarea id="ds-desc" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ds-type">Dataset type</Label>
              <select
                id="ds-type"
                value={type}
                onChange={(e) => setType(e.target.value as typeof type)}
                className="flex h-10 w-full rounded-md border border-border bg-surface px-3 text-sm"
              >
                <option>CSV</option>
                <option>Parquet</option>
                <option>Excel</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ds-file">Upload file</Label>
              <Input id="ds-file" type="file" accept=".csv,.parquet,.xlsx,.xls" onChange={(e) => onFile(e.target.files?.[0])} />
              {fileName && <p className="text-xs text-fg-muted">{fileName}</p>}
            </div>
            {busy && <Progress value={progress} />}
            <Button type="submit" className="w-full" disabled={busy}>
              {busy ? "Uploading…" : "Continue to processing"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
