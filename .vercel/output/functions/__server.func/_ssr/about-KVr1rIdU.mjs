import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as PageHeader } from "./app-shell-Bx9RxjLu.mjs";
import { n as CardContent, t as Card } from "./card-Byc3e1Bd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-KVr1rIdU.js
var import_jsx_runtime = require_jsx_runtime();
var STAGES = [
	"Login / Register",
	"Dashboard",
	"Data Management",
	"ETL & Cleaning",
	"Training / Inference",
	"Power BI Reports",
	"AI Insights",
	"AI Assistant"
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl space-y-6 p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "About CRIOI",
				description: "Customer Revenue Opportunity Intelligence — a product surface for the pipelines, models, reports and chatbot you already built."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-4 p-6 text-sm leading-relaxed text-fg-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This workspace is Phase 1: the complete product UI. Authentication, dataset storage and live Python execution are intentionally not connected yet. Any email signs in. Pipelines animate. Reports are interactive canvases ready to host Power BI embeds." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The AI assistant is grounded in the Brazilian E-Commerce extract: ₹20.58M revenue, 41,599 customers, SP at ₹5.99M, Health & Beauty at ₹1.44M, and a late-period growth of -76.68%." })]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: STAGES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular text-xs font-medium text-fg-subtle",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: s
					})]
				}, s))
			})
		]
	});
}
//#endregion
export { AboutPage as component };
