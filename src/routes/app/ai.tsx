import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, Bot, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { askBusinessAi } from "@/lib/ai/ask";
import { REPORTS, type ReportId } from "@/lib/data/platform";
import { cn } from "@/lib/utils";

type ChatMsg = { role: "user" | "assistant"; content: string };

export const Route = createFileRoute("/app/ai")({
  validateSearch: (s: Record<string, unknown>) => ({
    report: typeof s.report === "string" ? s.report : undefined,
  }),
  component: AiAssistantPage,
});

const STARTERS = [
  "Which state generates the most revenue?",
  "Why is revenue declining?",
  "Who are the high-opportunity customers?",
  "What does the churn model say?",
];

function AiAssistantPage() {
  const { report } = Route.useSearch();
  const reportId = REPORTS.some((r) => r.id === report) ? (report as ReportId) : undefined;
  const reportMeta = REPORTS.find((r) => r.id === reportId);
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: "assistant",
      content: reportMeta
        ? `Context is locked to ${reportMeta.title}. Ask anything about this report or the wider workspace.`
        : "I am the CRIOI business assistant. I already know the Olist extract, the eight reports, and the three models.",
    },
  ]);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const message = text.trim();
    if (!message || busy) return;
    const next = [...messages, { role: "user" as const, content: message }];
    setMessages(next);
    setQ("");
    setBusy(true);
    try {
      const res = await askBusinessAi({
        data: {
          message,
          reportId,
          history: next.filter((m) => m.role === "user" || next.indexOf(m) > 0).slice(-8),
        },
      });
      setMessages([...next, { role: "assistant", content: res.text }]);
    } catch {
      toast.error("The assistant is unavailable.");
      setMessages([...next, { role: "assistant", content: "I could not reach the model. Try again in a moment." }]);
    } finally {
      setBusy(false);
      requestAnimationFrame(() => endRef.current?.scrollIntoView({ behavior: "smooth" }));
    }
  }

  return (
    <div className="mx-auto flex h-full max-w-3xl flex-col p-4 sm:p-6">
      <PageHeader
        title="AI Business Assistant"
        description={reportMeta ? `Scoped to ${reportMeta.title}.` : "Ask across the full intelligence workspace."}
      />
      <div className="mt-4 min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
        {messages.map((m, i) => (
          <div key={i} className={cn("flex gap-3", m.role === "user" && "justify-end")}>
            {m.role === "assistant" && (
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                <Bot className="size-4" />
              </span>
            )}
            <div
              className={cn(
                "max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap",
                m.role === "user" ? "bg-ink text-sidebar-fg" : "bg-surface shadow-[var(--shadow-card)]",
              )}
            >
              {m.content}
            </div>
          </div>
        ))}
        {busy && (
          <div className="flex items-center gap-2 text-xs text-fg-muted">
            <Sparkles className="size-3.5 animate-pulse text-primary" />
            Thinking…
          </div>
        )}
        <div ref={endRef} />
      </div>
      {messages.length < 3 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {STARTERS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => void send(s)}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs hover:bg-paper"
            >
              {s}
            </button>
          ))}
        </div>
      )}
      <form
        className="mt-3 flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          void send(q);
        }}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask a business question…"
          className="h-11 flex-1 rounded-lg border border-border bg-surface px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <Button type="submit" size="icon" className="size-11" disabled={busy || !q.trim()} aria-label="Send">
          <ArrowUp className="size-4" />
        </Button>
      </form>
    </div>
  );
}
