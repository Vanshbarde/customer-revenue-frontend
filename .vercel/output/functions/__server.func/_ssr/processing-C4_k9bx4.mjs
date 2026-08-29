import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn, t as Button } from "./button-DRodFd0Q.mjs";
import { E as LoaderCircle, F as Circle, R as Check, _ as Play, m as RotateCcw, t as X } from "../_libs/lucide-react.mjs";
import { a as useDatasets, i as activeDataset, r as PageHeader } from "./app-shell-Bx9RxjLu.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-Byc3e1Bd.mjs";
import { t as Badge } from "./badge-CGoJv_81.mjs";
import { t as usePipeline } from "./pipeline-BDHMDtB3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/processing-C4_k9bx4.js
var import_jsx_runtime = require_jsx_runtime();
function StatusIcon({ status }) {
	if (status === "completed") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-good" });
	if (status === "running") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-primary" });
	if (status === "failed") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-danger" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "size-4 text-fg-subtle" });
}
function ProcessingPage() {
	const items = useDatasets((s) => s.items);
	const active = activeDataset(items);
	const { mode, setMode, steps, logs, running, runAll, runOne, reset, history } = usePipeline();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl space-y-6 p-4 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Data Processing",
			description: `Dataset: ${active?.name ?? "None"}. Full runs train models. Updates skip training.`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex rounded-md bg-paper-2 p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode("full"),
						className: cn("rounded-sm px-3 py-1.5 text-xs font-medium", mode === "full" ? "bg-surface shadow-sm" : "text-fg-muted"),
						children: "New dataset"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode("update"),
						className: cn("rounded-sm px-3 py-1.5 text-xs font-medium", mode === "update" ? "bg-surface shadow-sm" : "text-fg-muted"),
						children: "Update path"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: reset,
					disabled: running,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), " Reset"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => void runAll(),
					disabled: running,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }), running ? "Running…" : "Run pipeline"]
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: steps.map((s) => {
					const skipped = mode === "update" && s.id === "train";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "flex items-center gap-4 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-10 place-items-center rounded-lg bg-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { status: skipped ? "idle" : s.status })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-fg-subtle",
											children: s.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-semibold",
											children: s.name
										}),
										skipped && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "warn",
											children: "Skipped on update"
										}),
										!skipped && s.status !== "idle" && s.status !== "waiting" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: s.status === "completed" ? "good" : s.status === "failed" ? "danger" : "default",
											children: s.status
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-fg-muted",
									children: s.blurb
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								disabled: running || skipped,
								onClick: () => void runOne(s.id),
								children: "Run"
							})
						]
					}) }, s.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Pipeline logs" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-80 overflow-auto rounded-lg bg-ink p-3 font-mono text-[11px] leading-6 text-sidebar-fg",
						children: [logs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sidebar-muted",
							children: "No log lines yet."
						}), logs.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sidebar-muted",
								children: [
									"[",
									l.ts,
									"]"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: l.level === "ok" ? "text-good" : l.level === "warn" ? "text-warn" : l.level === "error" ? "text-danger" : "",
								children: l.message
							})]
						}, `${l.ts}-${i}`))]
					}) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Processing history" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-xs text-fg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Dataset"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Operation"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Date"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: history.slice(0, 8).map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: h.dataset
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: h.operation
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "good",
										children: h.status
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 text-fg-muted",
									children: h.date
								})
							]
						}, h.id)) })]
					})
				}) })] })]
			})]
		})]
	});
}
//#endregion
export { ProcessingPage as component };
