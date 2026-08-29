import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as NAV, r as PageHeader } from "./app-shell-Bx9RxjLu.mjs";
import { n as CardContent, t as Card } from "./card-Byc3e1Bd.mjs";
import { u as REPORTS } from "./platform-D1qRX5YW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports.index-DCmmZb2N.js
var import_jsx_runtime = require_jsx_runtime();
function ReportsGallery() {
	const icons = Object.fromEntries((NAV.find((n) => n.to === "/app/reports")?.children ?? []).map((c) => [c.reportId, c.icon]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl space-y-6 p-4 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Reports",
			description: "Eight intelligence canvases. Open one to keep the report large and the AI panel on the right."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: REPORTS.map((r) => {
				const Icon = icons[r.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app/reports/$reportId",
					params: { reportId: r.id },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "h-full transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-card-hover)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "p-5",
							children: [
								Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 place-items-center rounded-lg bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-sm font-semibold",
									children: r.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-fg-muted",
									children: r.blurb
								})
							]
						})
					})
				}, r.id);
			})
		})]
	});
}
//#endregion
export { ReportsGallery as component };
