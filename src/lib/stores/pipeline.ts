import { create } from "zustand";

export type StepStatus = "idle" | "waiting" | "running" | "completed" | "failed";

export type PipelineMode = "full" | "update";

export type PipelineStep = {
  id: string;
  n: string;
  name: string;
  blurb: string;
  status: StepStatus;
  skipOnUpdate?: boolean;
};

export type LogLine = {
  ts: string;
  level: "info" | "ok" | "warn" | "error";
  message: string;
};

const FULL_STEPS: PipelineStep[] = [
  { id: "etl", n: "01", name: "ETL Pipeline", blurb: "Extract → Transform → Load", status: "idle" },
  { id: "clean", n: "02", name: "Data Cleaning", blurb: "Nulls, types, duplicates", status: "waiting" },
  { id: "db", n: "03", name: "Database Load", blurb: "Star schema + indexes", status: "waiting" },
  { id: "train", n: "04", name: "Training Pipeline", blurb: "Churn, CLV, propensity", status: "waiting" },
  { id: "infer", n: "05", name: "Inference Pipeline", blurb: "Score the full customer base", status: "waiting" },
  { id: "bi", n: "06", name: "Business Intelligence", blurb: "Refresh report marts", status: "waiting" },
  { id: "ai", n: "07", name: "AI Layer", blurb: "Rebuild insight context", status: "waiting" },
];

function stamp() {
  return new Date().toLocaleTimeString("en-IN", { hour12: false });
}

type PipelineState = {
  mode: PipelineMode;
  steps: PipelineStep[];
  logs: LogLine[];
  running: boolean;
  history: { id: string; dataset: string; operation: string; status: "completed" | "failed"; date: string }[];
  setMode: (mode: PipelineMode) => void;
  reset: () => void;
  runAll: () => Promise<void>;
  runOne: (id: string) => Promise<void>;
};

const HISTORY_SEED = [
  { id: "h1", dataset: "Brazilian E-Commerce", operation: "ETL", status: "completed" as const, date: "15 Jun 2024 10:32" },
  { id: "h2", dataset: "Brazilian E-Commerce", operation: "Training", status: "completed" as const, date: "15 Jun 2024 10:38" },
  { id: "h3", dataset: "Brazilian E-Commerce", operation: "Inference", status: "completed" as const, date: "15 Jun 2024 10:41" },
  { id: "h4", dataset: "May 2024 Snapshot", operation: "Update", status: "completed" as const, date: "18 May 2024 11:36" },
];

const MESSAGES: Record<string, string[]> = {
  etl: ["ETL pipeline started", "Dataset loaded (112,650 rows)", "Data transformation completed", "Staging tables written"],
  clean: ["Cleaning started", "Type coercion complete", "0 missing values", "0 duplicates removed"],
  db: ["Database insertion started", "Fact_orders upserted", "Indexes rebuilt", "Database insertion completed"],
  train: ["Training pipeline started", "Churn model fitted · acc 92.4%", "CLV model fitted · R² 0.88", "Propensity model fitted · AUC 0.91"],
  infer: ["Inference started", "41,599 customers scored", "Opportunity flags written", "Inference completed"],
  bi: ["Refreshing report marts", "8 Power BI datasets marked stale→ready", "Business intelligence completed"],
  ai: ["Rebuilding ContextBuilder", "Insight cards regenerated", "AI layer completed"],
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export const usePipeline = create<PipelineState>((set, get) => ({
  mode: "full",
  steps: FULL_STEPS,
  logs: [
    { ts: "10:32:01", level: "info", message: "ETL pipeline started" },
    { ts: "10:32:03", level: "ok", message: "Dataset loaded" },
    { ts: "10:32:05", level: "ok", message: "Data transformation completed" },
    { ts: "10:32:07", level: "ok", message: "Database insertion completed" },
    { ts: "10:32:08", level: "ok", message: "Pipeline completed successfully" },
  ],
  running: false,
  history: HISTORY_SEED,
  setMode: (mode) =>
    set({
      mode,
      steps: FULL_STEPS.map((s) => ({
        ...s,
        status: s.id === "train" && mode === "update" ? "idle" : s.status,
        skipOnUpdate: s.id === "train",
      })),
    }),
  reset: () =>
    set({
      steps: FULL_STEPS.map((s, i) => ({ ...s, status: i === 0 ? "idle" : "waiting" })),
      logs: [],
    }),
  runOne: async (id) => {
    const { steps, mode } = get();
    const step = steps.find((s) => s.id === id);
    if (!step || get().running) return;
    if (mode === "update" && step.id === "train") {
      set((s) => ({
        logs: [...s.logs, { ts: stamp(), level: "warn", message: "Training skipped on dataset update (inference-only path)" }],
      }));
      return;
    }
    set({ running: true });
    set((s) => ({
      steps: s.steps.map((x) => (x.id === id ? { ...x, status: "running" } : x)),
      logs: [...s.logs, { ts: stamp(), level: "info", message: `${step.name} started` }],
    }));
    const lines = MESSAGES[id] ?? ["Running"];
    for (const line of lines) {
      await sleep(420);
      set((s) => ({ logs: [...s.logs, { ts: stamp(), level: "ok", message: line }] }));
    }
    set((s) => ({
      running: false,
      steps: s.steps.map((x) => (x.id === id ? { ...x, status: "completed" } : x)),
      logs: [...s.logs, { ts: stamp(), level: "ok", message: `${step.name} completed successfully` }],
      history: [
        {
          id: crypto.randomUUID(),
          dataset: "Brazilian E-Commerce",
          operation: step.name,
          status: "completed",
          date: new Date().toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
        },
        ...s.history,
      ],
    }));
  },
  runAll: async () => {
    if (get().running) return;
    const { mode } = get();
    set({ running: true, logs: [{ ts: stamp(), level: "info", message: `Pipeline started (${mode} mode)` }] });
    const queue = get().steps.filter((s) => !(mode === "update" && s.id === "train"));
    for (const step of queue) {
      set((s) => ({
        steps: s.steps.map((x) => (x.id === step.id ? { ...x, status: "running" } : x)),
      }));
      const lines = MESSAGES[step.id] ?? [];
      for (const line of lines) {
        await sleep(380);
        set((s) => ({ logs: [...s.logs, { ts: stamp(), level: "ok", message: line }] }));
      }
      set((s) => ({
        steps: s.steps.map((x) => (x.id === step.id ? { ...x, status: "completed" } : x)),
      }));
    }
    if (mode === "update") {
      set((s) => ({
        logs: [...s.logs, { ts: stamp(), level: "warn", message: "Training skipped — update path uses existing models" }],
        steps: s.steps.map((x) => (x.id === "train" ? { ...x, status: "idle" } : x)),
      }));
    }
    set((s) => ({
      running: false,
      logs: [...s.logs, { ts: stamp(), level: "ok", message: "Pipeline completed successfully" }],
      history: [
        {
          id: crypto.randomUUID(),
          dataset: "Brazilian E-Commerce",
          operation: mode === "full" ? "Full run" : "Update",
          status: "completed",
          date: new Date().toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
        },
        ...s.history,
      ],
    }));
  },
}));
