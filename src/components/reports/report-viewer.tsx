import { Maximize2, Minimize2, PanelRightOpen, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AiPanel, AiPanelToggle } from "@/components/ai/ai-panel";
import { ReportCanvas } from "@/components/reports/report-canvas";
import { Button } from "@/components/ui/button";
import { REPORTS, type ReportId } from "@/lib/data/platform";
import { useUi } from "@/lib/stores/ui";
import { cn } from "@/lib/utils";

export function ReportViewer({ reportId }: { reportId: ReportId }) {
  const report = REPORTS.find((r) => r.id === reportId)!;
  const fullscreen = useUi((s) => s.fullscreen);
  const setFullscreen = useUi((s) => s.setFullscreen);
  const aiOpen = useUi((s) => s.aiPanelOpen);
  const setAi = useUi((s) => s.setAiPanelOpen);
  const [mobileAi, setMobileAi] = useState(false);

  useEffect(() => {
    return () => setFullscreen(false);
  }, [setFullscreen]);

  return (
    <div className={cn("flex h-full min-h-0", fullscreen && "fixed inset-0 z-50 bg-paper")}>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-border bg-surface px-4">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{report.title}</div>
            <div className="truncate text-xs text-fg-muted">{report.blurb}</div>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => {
                setAi(true);
                setMobileAi(true);
              }}
            >
              <Sparkles className="size-3.5" />
              AI
            </Button>
            {!aiOpen && (
              <Button variant="outline" size="sm" className="hidden lg:inline-flex" onClick={() => setAi(true)}>
                <PanelRightOpen className="size-3.5" />
                Show AI
              </Button>
            )}
            <Button variant="outline" size="sm" onClick={() => setFullscreen(!fullscreen)}>
              {fullscreen ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
              {fullscreen ? "Exit" : "Full screen"}
            </Button>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-auto p-4">
          <div className="mb-3 flex items-center justify-between text-[11px] text-fg-subtle">
            <span>Report canvas · Power BI embed slot</span>
            <span>ABC Retail · Jan 2017 – Sep 2018</span>
          </div>
          <ReportCanvas reportId={reportId} />
        </div>
      </div>

      <div className="hidden h-full lg:flex">
        <AiPanel reportId={reportId} />
      </div>
      <AiPanelToggle />

      {mobileAi && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button type="button" className="absolute inset-0 bg-ink/50" aria-label="Close AI" onClick={() => setMobileAi(false)} />
          <div className="absolute inset-y-0 right-0 w-[min(100%,360px)]">
            <AiPanel reportId={reportId} />
          </div>
        </div>
      )}
    </div>
  );
}
