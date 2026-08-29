import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as num, i as inr, n as cn, t as Button } from "./button-DRodFd0Q.mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useUi } from "./ui-DT3hGaqz.mjs";
import { C as Maximize2, O as IndianRupee, U as ArrowUp, V as Bot, b as Package, c as Target, i as TriangleAlert, l as Sparkles, n as Users, u as ShoppingBag, v as PanelRightOpen, x as Minimize2, y as PanelRightClose } from "../_libs/lucide-react.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-Byc3e1Bd.mjs";
import { a as KPI, c as OPPORTUNITIES, d as SEGMENTS, f as SELLERS, i as INSIGHTS, n as CATEGORIES, o as MODELS, p as STATES, u as REPORTS } from "./platform-D1qRX5YW.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route } from "./router-YTelVdr5.mjs";
import { t as askBusinessAi } from "./ask-DUGdZgxz.mjs";
import { t as Badge } from "./badge-CGoJv_81.mjs";
import { a as KpiCard, c as RevenueArea, d as StateBars, i as DelayScatter, l as SegmentDonut, n as CategoryLegend, o as OrdersLine, r as CityTable, s as ProductTable, t as CategoryDonut, u as SellerBars } from "./report-charts-B_IAekBB.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-CUfaBCY5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports._reportId-BsUE2J1q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TONE = {
	danger: "bg-danger-soft text-danger",
	warn: "bg-warn-soft text-warn",
	good: "bg-good-soft text-good",
	info: "bg-primary-soft text-primary"
};
function AiPanel({ reportId }) {
	const open = useUi((s) => s.aiPanelOpen);
	const setOpen = useUi((s) => s.setAiPanelOpen);
	const report = REPORTS.find((r) => r.id === reportId);
	const insights = INSIGHTS[reportId];
	const [active, setActive] = (0, import_react.useState)(null);
	const [q, setQ] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [reply, setReply] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	if (!open) return null;
	async function ask(text) {
		const message = text.trim();
		if (!message || busy) return;
		setBusy(true);
		setReply(null);
		try {
			const res = await askBusinessAi({ data: {
				message,
				reportId
			} });
			setReply(res.text);
		} catch {
			toast.error("The assistant could not answer just now.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex h-full w-full flex-col border-l border-border bg-surface lg:w-[340px] lg:shrink-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-14 items-center justify-between border-b border-border px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }), "AI Insights"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "flex size-8 items-center justify-center rounded-sm text-fg-muted hover:bg-paper",
					onClick: () => setOpen(false),
					"aria-label": "Hide AI panel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRightClose, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 px-1 text-xs text-fg-muted",
						children: ["Context updates with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-fg",
							children: report.title
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: insights.map((ins) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActive(ins),
							className: "w-full rounded-lg border border-border bg-paper/60 p-3 text-left transition-[box-shadow,background-color] duration-150 hover:bg-paper",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("rounded-sm px-1.5 py-0.5 text-[10px] font-medium", TONE[ins.tone]),
										children: ins.tone === "danger" ? "Alert" : ins.tone === "warn" ? "Watch" : ins.tone === "good" ? "Signal" : "Insight"
									}), ins.metric && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular text-xs font-semibold text-fg",
										children: ins.metric
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 text-sm font-medium",
									children: ins.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-xs text-fg-muted",
									children: ins.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-[11px] font-medium text-primary",
									children: "Click to explore"
								})
							]
						}, ins.id))
					}),
					reply && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-lg bg-primary-soft p-3 text-sm text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex items-center gap-1.5 text-xs font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-3.5" }), " Assistant"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-pre-wrap leading-relaxed",
							children: reply
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex items-center gap-2",
					onSubmit: (e) => {
						e.preventDefault();
						ask(q);
						setQ("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Ask about this report…",
						className: "h-10 flex-1 rounded-md border border-border bg-paper px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "icon",
						disabled: busy || !q.trim(),
						"aria-label": "Send",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-2 w-full text-center text-xs font-medium text-primary hover:underline",
					onClick: () => void navigate({
						to: "/app/ai",
						search: { report: reportId }
					}),
					children: "Open full AI Assistant"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!active,
				onOpenChange: (v) => !v && setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: active.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: active.summary }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-fg",
						children: active.detail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium tracking-wide text-fg-subtle uppercase",
							children: "Recommended next analysis"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1.5 text-sm",
							children: active.next.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 size-1.5 shrink-0 rounded-full bg-primary" }), n]
							}, n))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => {
								const prompt = `Explain this insight in more depth and suggest actions: ${active.title}. ${active.detail}`;
								setActive(null);
								ask(prompt);
							},
							children: "Ask AI about this"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/ai",
								search: { report: reportId },
								children: "Open assistant"
							})
						})]
					})
				] }) })
			})
		]
	});
}
function AiPanelToggle() {
	const open = useUi((s) => s.aiPanelOpen);
	const setOpen = useUi((s) => s.setAiPanelOpen);
	if (open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: "fixed right-4 bottom-4 z-20 flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-sidebar-fg shadow-[var(--shadow-pop)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }), "Show AI"]
	});
}
function Grid({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children
	});
}
function ReportCanvas({ reportId }) {
	switch (reportId) {
		case "overview": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewCanvas, {});
		case "revenue": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueCanvas, {});
		case "customers": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomersCanvas, {});
		case "products": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsCanvas, {});
		case "geography": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeographyCanvas, {});
		case "performance": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PerformanceCanvas, {});
		case "opportunity": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpportunityCanvas, {});
		case "predictions": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PredictionsCanvas, {});
	}
}
function OverviewCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Revenue over time" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueArea, {}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Revenue by category" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-4 sm:grid-cols-[1fr_160px] sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryDonut, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryLegend, {})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Customer segmentation" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-4 sm:grid-cols-[1fr_1fr] sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentDonut, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 text-sm",
					children: SEGMENTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-fg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-2 rounded-full",
								style: { background: s.color }
							}), s.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular font-medium",
							children: num(s.count)
						})]
					}, s.name))
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Top products by revenue" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductTable, {}) })] })
		] })]
	});
}
function RevenueCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Recorded revenue",
						value: inr(KPI.revenue),
						delta: KPI.revenueDelta,
						hint: "Sep vs Aug 2018",
						icon: IndianRupee,
						tint: "bg-primary-soft text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Best month",
						value: "₹4.82M",
						hint: "November 2017",
						icon: IndianRupee,
						tint: "bg-good-soft text-good"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Strongest state",
						value: "SP · ₹5.99M",
						hint: "29% share",
						icon: Target,
						tint: "bg-accent-soft text-accent"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Monthly revenue" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueArea, { height: 300 }) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Named category mix" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-4 sm:grid-cols-[1fr_180px] sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryDonut, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryLegend, {})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Order volume" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersLine, {}) })] })] })
		]
	});
}
function CustomersCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Customers",
					value: num(KPI.customers),
					icon: Users,
					tint: "bg-primary-soft text-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "High opportunity",
					value: num(KPI.highOpportunity),
					icon: Target,
					tint: "bg-good-soft text-good"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "At risk",
					value: num(KPI.atRisk),
					icon: TriangleAlert,
					tint: "bg-warn-soft text-warn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "VIP revenue",
					value: "₹6.18M",
					hint: "2,790 customers",
					icon: IndianRupee,
					tint: "bg-accent-soft text-accent"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Segments" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "grid gap-4 sm:grid-cols-2 sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentDonut, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2 text-sm",
				children: SEGMENTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular font-medium",
						children: num(s.count)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 h-1.5 overflow-hidden rounded-full bg-paper-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full",
						style: {
							width: `${s.share}%`,
							background: s.color
						}
					})
				})] }, s.name))
			})]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Revenue by segment" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: SEGMENTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between rounded-lg bg-paper px-3 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: s.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular text-sm font-semibold",
					children: inr(s.revenue)
				})]
			}, s.name))
		}) })] })] })]
	});
}
function ProductsCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Top category",
					value: "Health & Beauty",
					hint: inr(144e4),
					icon: Package,
					tint: "bg-primary-soft text-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Top SKU",
					value: "Hegon Serum Kit",
					hint: "₹412K",
					icon: Sparkles,
					tint: "bg-accent-soft text-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Long tail",
					value: "60.3%",
					hint: "of revenue in Others",
					icon: TriangleAlert,
					tint: "bg-warn-soft text-warn"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Category contribution" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid grid-cols-[1fr_auto] items-center gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular text-fg-muted",
						children: [c.share.toFixed(1), "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 h-1.5 overflow-hidden rounded-full bg-paper-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-primary",
						style: { width: `${Math.min(100, c.share * (c.key === "others" ? 1 : 4))}%` }
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular font-medium",
					children: inr(c.revenue)
				})]
			}, c.key))
		}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Top SKUs" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductTable, {}) })] })] })]
	});
}
function GeographyCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "São Paulo",
					value: inr(STATES[0].revenue),
					hint: "29% of revenue",
					icon: Target,
					tint: "bg-primary-soft text-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "RJ + MG",
					value: "₹4.01M",
					hint: "Expansion corridor",
					icon: Target,
					tint: "bg-accent-soft text-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Top city",
					value: "São Paulo",
					hint: "₹3.21M",
					icon: Users,
					tint: "bg-good-soft text-good"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Revenue by state" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateBars, {}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Top cities" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityTable, {}) })] })] })]
	});
}
function PerformanceCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Top seller",
						value: "Atlas Commerce",
						hint: "₹1.12M · 4.7 rating",
						icon: ShoppingBag,
						tint: "bg-primary-soft text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Worst delay",
						value: "6.2 days",
						hint: "Casa Forte Home",
						icon: TriangleAlert,
						tint: "bg-warn-soft text-warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Sep 2018 orders",
						value: "1,140",
						delta: -76.7,
						hint: "vs August",
						icon: Package,
						tint: "bg-danger-soft text-danger"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Seller revenue" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SellerBars, {}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Delay vs rating" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DelayScatter, {}) })] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Seller table" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
									children: "Seller"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 text-right font-medium",
									children: "Orders"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 text-right font-medium",
									children: "Revenue"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 text-right font-medium",
									children: "Rating"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 text-right font-medium",
									children: "Delay"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: SELLERS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 font-medium",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 text-right tabular",
								children: num(s.orders)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 text-right tabular",
								children: inr(s.revenue)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 text-right tabular",
								children: s.rating.toFixed(1)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-2.5 text-right tabular",
								children: [s.delay.toFixed(1), "d"]
							})
						]
					}, s.name)) })]
				})
			}) })] })
		]
	});
}
function OpportunityCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: OPPORTUNITIES.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium text-fg-muted",
						children: o.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-2xl font-semibold tabular",
						children: inr(o.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs text-fg-subtle",
						children: o.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-fg-muted",
						children: o.body
					})
				]
			}, o.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Recommended plays" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "space-y-3",
			children: [
				"Protect 2,790 VIP customers before spraying the full base.",
				"Convert a slice of 12,230 Potential Loyalists with a second-purchase offer.",
				"Run housewares attach on 3,200 high-propensity buyers.",
				"Reuse the SP playbook in RJ and MG for ₹0.89M modelled lift."
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 rounded-lg bg-paper px-3 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "mt-0.5 size-4 shrink-0 text-primary" }), t]
			}, t))
		})] })]
	});
}
function PredictionsCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 lg:grid-cols-3",
			children: MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: m.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "good",
							children: m.status === "good" ? "Good" : m.status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-3xl font-semibold tabular",
						children: m.score
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs text-fg-muted",
						children: m.metric
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-fg-muted",
						children: m.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 text-[11px] text-fg-subtle",
						children: ["Last trained ", m.trained]
					})
				]
			}, m.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Scoring policy" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-2 text-sm text-fg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "New datasets run the full path: ETL → clean → database → training → inference → BI → AI." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dataset updates skip training and reuse the 15 Jun 2024 models unless drift is detected." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "41,599 customers currently have churn, CLV and propensity scores written back to the mart." })
			]
		})] })]
	});
}
function ReportViewer({ reportId }) {
	const report = REPORTS.find((r) => r.id === reportId);
	const fullscreen = useUi((s) => s.fullscreen);
	const setFullscreen = useUi((s) => s.setFullscreen);
	const aiOpen = useUi((s) => s.aiPanelOpen);
	const setAi = useUi((s) => s.setAiPanelOpen);
	const [mobileAi, setMobileAi] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		return () => setFullscreen(false);
	}, [setFullscreen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex h-full min-h-0", fullscreen && "fixed inset-0 z-50 bg-paper"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-14 shrink-0 items-center justify-between gap-3 border-b border-border bg-surface px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-sm font-semibold",
							children: report.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-xs text-fg-muted",
							children: report.blurb
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "lg:hidden",
								onClick: () => {
									setAi(true);
									setMobileAi(true);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), "AI"]
							}),
							!aiOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "hidden lg:inline-flex",
								onClick: () => setAi(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRightOpen, { className: "size-3.5" }), "Show AI"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setFullscreen(!fullscreen),
								children: [fullscreen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-3.5" }), fullscreen ? "Exit" : "Full screen"]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 overflow-auto p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between text-[11px] text-fg-subtle",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Report canvas · Power BI embed slot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ABC Retail · Jan 2017 – Sep 2018" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCanvas, { reportId })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden h-full lg:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiPanel, { reportId })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiPanelToggle, {}),
			mobileAi && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-ink/50",
					"aria-label": "Close AI",
					onClick: () => setMobileAi(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-y-0 right-0 w-[min(100%,360px)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiPanel, { reportId })
				})]
			})
		]
	});
}
function ReportRoute() {
	const { reportId } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportViewer, { reportId });
}
//#endregion
export { ReportRoute as component };
