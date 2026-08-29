import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DRodFd0Q.mjs";
import { n as CrioiWordmark } from "./logo-zDNDELFA.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useSession } from "./session-DQPX8hFQ.mjs";
import { N as Database, V as Bot, W as ArrowRight, d as Shield, z as ChartColumn } from "../_libs/lucide-react.mjs";
import { r as useHydrated } from "./session-gate-C216SPEt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CmFb822Q.js
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	const ready = useHydrated();
	const user = useSession((s) => s.user);
	const authed = ready && !!user;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-ink text-sidebar-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrioiWordmark, { inverted: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "hidden px-3 py-2 text-sm text-sidebar-muted hover:text-sidebar-fg sm:inline",
					children: "About"
				}), authed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app",
						children: "Open workspace"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					className: "text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						children: "Sign in"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						children: "Get started"
					})
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-6 py-16 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.2em] text-primary uppercase",
					children: "Customer Revenue Opportunity Intelligence"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl",
					children: "See the revenue hiding in your customers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-sidebar-muted sm:text-lg",
					children: "CRIOI turns transactions into a working system: datasets, ETL, models, eight intelligence reports, and an analyst that already knows the numbers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: authed ? "/app" : "/login",
							children: [authed ? "Go to dashboard" : "Enter the platform", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-white/15 bg-transparent text-sidebar-fg hover:bg-ink-hover",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							children: "Create an account"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4",
					children: [
						["₹20.58M", "Recorded revenue"],
						["41,599", "Customers scored"],
						["8", "Intelligence reports"],
						["92.4%", "Churn model accuracy"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-2xl font-semibold tabular",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm text-sidebar-muted",
						children: v
					})] }, v))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							icon: Database,
							title: "Data center",
							body: "Add or append datasets. Health, schema, and quality before a single model runs."
						},
						{
							icon: Shield,
							title: "Processing",
							body: "ETL, cleaning, training, inference — with a live logger and an update path that does not retrain blindly."
						},
						{
							icon: ChartColumn,
							title: "Eight reports",
							body: "Overview, revenue, customers, products, geography, performance, opportunity, predictions."
						},
						{
							icon: Bot,
							title: "AI analyst",
							body: "Insights belong to the open report. Ask a question; the context is already loaded."
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-white/10 bg-ink-soft p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-sm font-semibold",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-sidebar-muted",
								children: f.body
							})
						]
					}, f.title))
				})
			]
		})]
	});
}
//#endregion
export { Landing as component };
