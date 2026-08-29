import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DRodFd0Q.mjs";
import { n as CrioiWordmark } from "./logo-zDNDELFA.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BEe8Tv7q.js
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
function PublicAbout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto flex max-w-3xl items-center justify-between px-6 py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrioiWordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				size: "sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					children: "Sign in"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl space-y-6 px-6 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight",
					children: "About CRIOI"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-fg-muted",
					children: "Customer Revenue Opportunity Intelligence — a product surface for pipelines, models, reports and a business-aware chatbot. Phase 1 is the complete UI. Live Python, Power BI embeds and stored accounts come next."
				}),
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
		})]
	});
}
//#endregion
export { PublicAbout as component };
