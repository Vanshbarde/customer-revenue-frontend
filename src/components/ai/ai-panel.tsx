import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowUp, Bot, PanelRightClose, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { INSIGHTS, REPORTS, type Insight, type ReportId } from "@/lib/data/platform";
import { askBusinessAi } from "@/lib/ai/ask";
import { useUi } from "@/lib/stores/ui";
import { cn } from "@/lib/utils";

const TONE: Record<Insight["tone"], string> = {
  danger: "bg-danger-soft text-danger",
  warn: "bg-warn-soft text-warn",
  good: "bg-good-soft text-good",
  info: "bg-primary-soft text-primary",
};

export function AiPanel({ reportId }: { reportId: ReportId }) {
  const open = useUi((s) => s.aiPanelOpen);
  const setOpen = useUi((s) => s.setAiPanelOpen);
  const report = REPORTS.find((r) => r.id === reportId)!;
  const insights = INSIGHTS[reportId];
  const [active, setActive] = useState<Insight | null>(null);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [reply, setReply] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!open) return null;

  async function ask(text: string) {
    const message = text.trim();
    if (!message || busy) return;
    setBusy(true);
    setReply(null);
    try {
      const res = await askBusinessAi({ data: { message, reportId } });
      setReply(res.text);
    } catch {
      toast.error("The assistant could not answer just now.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <aside className="flex h-full w-full flex-col border-l border-border bg-surface lg:w-[340px] lg:shrink-0">
      <div className="flex h-14 items-center justify-between border-b border-border px-4">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Sparkles className="size-4 text-primary" />
          AI Insights
        </div>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-sm text-fg-muted hover:bg-paper"
          onClick={() => setOpen(false)}
          aria-label="Hide AI panel"
        >
          <PanelRightClose className="size-4" />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        <p className="mb-3 px-1 text-xs text-fg-muted">
          Context updates with <span className="font-medium text-fg">{report.title}</span>
        </p>
        <div className="space-y-2">
          {insights.map((ins) => (
            <button
              key={ins.id}
              type="button"
              onClick={() => setActive(ins)}
              className="w-full rounded-lg border border-border bg-paper/60 p-3 text-left transition-[box-shadow,background-color] duration-150 hover:bg-paper"
            >
              <div className="flex items-start justify-between gap-2">
                <div className={cn("rounded-sm px-1.5 py-0.5 text-[10px] font-medium", TONE[ins.tone])}>
                  {ins.tone === "danger" ? "Alert" : ins.tone === "warn" ? "Watch" : ins.tone === "good" ? "Signal" : "Insight"}
                </div>
                {ins.metric && <span className="tabular text-xs font-semibold text-fg">{ins.metric}</span>}
              </div>
              <div className="mt-1.5 text-sm font-medium">{ins.title}</div>
              <div className="mt-0.5 text-xs text-fg-muted">{ins.summary}</div>
              <div className="mt-2 text-[11px] font-medium text-primary">Click to explore</div>
            </button>
          ))}
        </div>

        {reply && (
          <div className="mt-3 rounded-lg bg-primary-soft p-3 text-sm text-fg">
            <div className="mb-1 flex items-center gap-1.5 text-xs font-medium text-primary">
              <Bot className="size-3.5" /> Assistant
            </div>
            <p className="whitespace-pre-wrap leading-relaxed">{reply}</p>
          </div>
        )}
      </div>

      <div className="border-t border-border p-3">
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            void ask(q);
            setQ("");
          }}
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask about this report…"
            className="h-10 flex-1 rounded-md border border-border bg-paper px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <Button type="submit" size="icon" disabled={busy || !q.trim()} aria-label="Send">
            <ArrowUp className="size-4" />
          </Button>
        </form>
        <button
          type="button"
          className="mt-2 w-full text-center text-xs font-medium text-primary hover:underline"
          onClick={() => void navigate({ to: "/app/ai", search: { report: reportId } })}
        >
          Open full AI Assistant
        </button>
      </div>

      <Dialog open={!!active} onOpenChange={(v) => !v && setActive(null)}>
        <DialogContent>
          {active && (
            <>
              <DialogTitle>{active.title}</DialogTitle>
              <DialogDescription>{active.summary}</DialogDescription>
              <p className="mt-4 text-sm leading-relaxed text-fg">{active.detail}</p>
              <div className="mt-4">
                <div className="text-xs font-medium tracking-wide text-fg-subtle uppercase">Recommended next analysis</div>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {active.next.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    const prompt = `Explain this insight in more depth and suggest actions: ${active.title}. ${active.detail}`;
                    setActive(null);
                    void ask(prompt);
                  }}
                >
                  Ask AI about this
                </Button>
                <Button asChild>
                  <Link to="/app/ai" search={{ report: reportId }}>
                    Open assistant
                  </Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </aside>
  );
}

export function AiPanelToggle() {
  const open = useUi((s) => s.aiPanelOpen);
  const setOpen = useUi((s) => s.setAiPanelOpen);
  if (open) return null;
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="fixed right-4 bottom-4 z-20 flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-sidebar-fg shadow-[var(--shadow-pop)]"
    >
      <Sparkles className="size-4 text-primary" />
      Show AI
    </button>
  );
}

export function MobileAiSheet({ reportId, open, onClose }: { reportId: ReportId; open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <button type="button" className="absolute inset-0 bg-ink/50" aria-label="Close AI" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 flex w-[min(100%,360px)] flex-col bg-surface">
        <button type="button" className="absolute top-3 right-3 z-10 size-8" onClick={onClose} aria-label="Close">
          <X className="size-4" />
        </button>
        <AiPanel reportId={reportId} />
      </div>
    </div>
  );
}
