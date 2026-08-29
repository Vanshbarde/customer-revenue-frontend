import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as num, i as inr, t as Button } from "./button-DRodFd0Q.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useSession } from "./session-DQPX8hFQ.mjs";
import { M as Download, O as IndianRupee, W as ArrowRight, b as Package, l as Sparkles, n as Users, u as ShoppingBag } from "../_libs/lucide-react.mjs";
import { a as useDatasets, i as activeDataset, r as PageHeader } from "./app-shell-Bx9RxjLu.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-Byc3e1Bd.mjs";
import { a as KPI, c as OPPORTUNITIES, d as SEGMENTS, i as INSIGHTS, o as MODELS } from "./platform-D1qRX5YW.mjs";
import { t as Badge } from "./badge-CGoJv_81.mjs";
import { a as KpiCard, c as RevenueArea, l as SegmentDonut, n as CategoryLegend, s as ProductTable, t as CategoryDonut } from "./report-charts-B_IAekBB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-BjQiDRFR.js
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	const user = useSession((s) => s.user);
	const items = useDatasets((s) => s.items);
	const active = activeDataset(items);
	const first = INSIGHTS.overview[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] space-y-6 p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Dashboard",
				description: `Welcome back${user ? `, ${user.fullName.split(" ")[0]}` : ""}. Here's what's happening with ${user?.organization ?? "your business"} today.`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "muted",
					children: active?.fileName ?? "No dataset"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "Download report"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Total Revenue",
						value: inr(KPI.revenue),
						delta: KPI.revenueDelta,
						hint: "latest month",
						icon: IndianRupee,
						tint: "bg-primary-soft text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Customers",
						value: num(KPI.customers),
						delta: KPI.customersDelta,
						icon: Users,
						tint: "bg-accent-soft text-accent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Avg. Order Value",
						value: inr(KPI.aov),
						delta: KPI.aovDelta,
						icon: ShoppingBag,
						tint: "bg-warn-soft text-warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Total Orders",
						value: num(KPI.orders),
						delta: KPI.ordersDelta,
						icon: Package,
						tint: "bg-good-soft text-good"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Gross Profit",
						value: inr(KPI.profit),
						delta: KPI.profitDelta,
						icon: IndianRupee,
						tint: "bg-danger-soft text-danger"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 xl:grid-cols-[1.4fr_1fr_0.9fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Revenue over time" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueArea, {}) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Revenue by category" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "grid gap-3 sm:grid-cols-[1fr_140px] sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryDonut, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryLegend, {})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
						className: "flex-row items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }), "AI summary"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: first.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-fg-muted",
							children: first.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/reports/$reportId",
								params: { reportId: "overview" },
								children: ["View details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
							})
						})
					] })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[1fr_1.1fr_0.9fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Customer segmentation" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentDonut, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1.5 text-xs",
						children: SEGMENTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between text-fg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular font-medium text-fg",
								children: num(s.count)
							})]
						}, s.name))
					})] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex-row items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Top products" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/reports/$reportId",
							params: { reportId: "products" },
							className: "text-xs font-medium text-primary",
							children: "View all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductTable, {}) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Opportunities" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
						className: "space-y-3",
						children: OPPORTUNITIES.slice(0, 3).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/reports/$reportId",
							params: { reportId: "opportunity" },
							className: "block rounded-lg bg-paper p-3 hover:bg-paper-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium",
									children: o.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-fg-muted",
									children: o.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-sm font-semibold tabular text-good",
									children: inr(o.value)
								})
							]
						}, o.id))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex-row items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Recent uploads" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/data",
						className: "text-xs font-medium text-primary",
						children: "View all uploads"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
										children: "File"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 text-right font-medium",
										children: "Records"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-medium",
										children: "Status"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: items.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5 font-medium",
									children: d.fileName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5 text-right tabular",
									children: num(d.rows)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: d.status === "processed" ? "good" : "warn",
										children: d.status
									})
								})
							]
						}, d.id)) })]
					})
				}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex-row items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Model performance" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/reports/$reportId",
						params: { reportId: "predictions" },
						className: "text-xs font-medium text-primary",
						children: "View all models"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "space-y-3",
					children: MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-lg bg-paper px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: m.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-fg-muted",
							children: m.metric
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "tabular text-sm font-semibold",
								children: m.score
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "good",
								children: "Good"
							})]
						})]
					}, m.id))
				})] })]
			})
		]
	});
}
//#endregion
export { DashboardPage as component };
