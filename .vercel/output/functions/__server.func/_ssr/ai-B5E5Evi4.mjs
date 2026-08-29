import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as cn, t as Button } from "./button-DRodFd0Q.mjs";
import { U as ArrowUp, V as Bot, l as Sparkles } from "../_libs/lucide-react.mjs";
import { r as PageHeader } from "./app-shell-Bx9RxjLu.mjs";
import { u as REPORTS } from "./platform-D1qRX5YW.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Route$9 } from "./router-YTelVdr5.mjs";
import { t as askBusinessAi } from "./ask-DUGdZgxz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-B5E5Evi4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STARTERS = [
	"Which state generates the most revenue?",
	"Why is revenue declining?",
	"Who are the high-opportunity customers?",
	"What does the churn model say?"
];
function AiAssistantPage() {
	const { report } = Route$9.useSearch();
	const reportId = REPORTS.some((r) => r.id === report) ? report : void 0;
	const reportMeta = REPORTS.find((r) => r.id === reportId);
	const [messages, setMessages] = (0, import_react.useState)([{
		role: "assistant",
		content: reportMeta ? `Context is locked to ${reportMeta.title}. Ask anything about this report or the wider workspace.` : "I am the CRIOI business assistant. I already know the Olist extract, the eight reports, and the three models."
	}]);
	const [q, setQ] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const endRef = (0, import_react.useRef)(null);
	async function send(text) {
		const message = text.trim();
		if (!message || busy) return;
		const next = [...messages, {
			role: "user",
			content: message
		}];
		setMessages(next);
		setQ("");
		setBusy(true);
		try {
			const res = await askBusinessAi({ data: {
				message,
				reportId,
				history: next.filter((m) => m.role === "user" || next.indexOf(m) > 0).slice(-8)
			} });
			setMessages([...next, {
				role: "assistant",
				content: res.text
			}]);
		} catch {
			toast.error("The assistant is unavailable.");
			setMessages([...next, {
				role: "assistant",
				content: "I could not reach the model. Try again in a moment."
			}]);
		} finally {
			setBusy(false);
			requestAnimationFrame(() => endRef.current?.scrollIntoView({ behavior: "smooth" }));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex h-full max-w-3xl flex-col p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "AI Business Assistant",
				description: reportMeta ? `Scoped to ${reportMeta.title}.` : "Ask across the full intelligence workspace."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 min-h-0 flex-1 space-y-3 overflow-y-auto pr-1",
				children: [
					messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex gap-3", m.role === "user" && "justify-end"),
						children: [m.role === "assistant" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap", m.role === "user" ? "bg-ink text-sidebar-fg" : "bg-surface shadow-[var(--shadow-card)]"),
							children: m.content
						})]
					}, i)),
					busy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-fg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 animate-pulse text-primary" }), "Thinking…"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
				]
			}),
			messages.length < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: STARTERS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => void send(s),
					className: "rounded-full border border-border bg-surface px-3 py-1.5 text-xs hover:bg-paper",
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-3 flex items-center gap-2",
				onSubmit: (e) => {
					e.preventDefault();
					send(q);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Ask a business question…",
					className: "h-11 flex-1 rounded-lg border border-border bg-surface px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					className: "size-11",
					disabled: busy || !q.trim(),
					"aria-label": "Send",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
				})]
			})
		]
	});
}
//#endregion
export { AiAssistantPage as component };
