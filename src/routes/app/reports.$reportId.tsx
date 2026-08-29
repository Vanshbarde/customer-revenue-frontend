import { createFileRoute, notFound } from "@tanstack/react-router";
import { ReportViewer } from "@/components/reports/report-viewer";
import { REPORTS, type ReportId } from "@/lib/data/platform";

const IDS = new Set(REPORTS.map((r) => r.id));

export const Route = createFileRoute("/app/reports/$reportId")({
  beforeLoad: ({ params }) => {
    if (!IDS.has(params.reportId as ReportId)) throw notFound();
  },
  component: ReportRoute,
});

function ReportRoute() {
  const { reportId } = Route.useParams();
  return <ReportViewer reportId={reportId as ReportId} />;
}
