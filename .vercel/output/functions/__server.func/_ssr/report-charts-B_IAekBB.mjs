import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as num, i as inr, n as cn, o as pct } from "./button-DRodFd0Q.mjs";
import { a as TrendingUp, o as TrendingDown } from "../_libs/lucide-react.mjs";
import { d as SEGMENTS, f as SELLERS, l as PRODUCTS, n as CATEGORIES, p as STATES, r as CITIES, s as MONTHLY_REVENUE } from "./platform-D1qRX5YW.mjs";
import { a as LineChart, c as Scatter, d as CartesianGrid, f as Bar, g as Tooltip, h as ResponsiveContainer, i as BarChart, l as Area, m as Cell, n as ScatterChart, o as YAxis, p as Pie, r as PieChart, s as XAxis, t as AreaChart, u as Line } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-charts-B_IAekBB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function KpiCard({ label, value, delta, hint, icon: Icon, tint }) {
	const up = (delta ?? 0) >= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-card)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-medium text-fg-muted",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-2xl font-semibold tracking-tight tabular",
				children: value
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid size-10 place-items-center rounded-lg", tint),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
			})]
		}), delta !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center gap-1.5 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("inline-flex items-center gap-0.5 font-medium", up ? "text-good" : "text-danger"),
				children: [up ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "size-3.5" }), pct(delta)]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-fg-subtle",
				children: hint ?? "vs prior period"
			})]
		})]
	});
}
function Skeleton({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("animate-pulse rounded-md bg-paper-2", className) });
}
function ClientChart({ children, className }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: className ?? "h-56 w-full" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var TOOLTIP_STYLE = {
	borderRadius: 8,
	border: "1px solid var(--color-border)",
	fontSize: 12,
	boxShadow: "var(--shadow-pop)"
};
function RevenueArea({ height = 260 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
		className: "h-64 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { height },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
					data: MONTHLY_REVENUE,
					margin: {
						top: 8,
						right: 8,
						left: 0,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "revFill",
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "var(--color-primary)",
								stopOpacity: .28
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "var(--color-primary)",
								stopOpacity: .02
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "var(--color-border)",
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "month",
							tick: {
								fontSize: 11,
								fill: "var(--color-fg-muted)"
							},
							axisLine: false,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tickFormatter: (v) => `${(v / 1e6).toFixed(0)}M`,
							tick: {
								fontSize: 11,
								fill: "var(--color-fg-muted)"
							},
							axisLine: false,
							tickLine: false,
							width: 36
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							contentStyle: TOOLTIP_STYLE,
							formatter: (v) => [inr(Number(v)), "Revenue"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							type: "monotone",
							dataKey: "revenue",
							stroke: "var(--color-primary)",
							strokeWidth: 2,
							fill: "url(#revFill)"
						})
					]
				})
			})
		})
	});
}
function CategoryDonut() {
	const data = CATEGORIES.filter((c) => c.key !== "others").concat({
		name: "Others",
		key: "others",
		revenue: CATEGORIES.find((c) => c.key === "others").revenue,
		orders: 0,
		share: 60.3
	});
	const colors = [
		"var(--color-chart-1)",
		"var(--color-chart-2)",
		"var(--color-chart-3)",
		"var(--color-chart-5)",
		"var(--color-chart-6)",
		"var(--color-chart-7)",
		"var(--color-chart-8)",
		"var(--color-chart-4)",
		"#94a3b8",
		"#cbd5e1"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-56",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data,
					dataKey: "revenue",
					nameKey: "name",
					innerRadius: 52,
					outerRadius: 80,
					paddingAngle: 2,
					children: data.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: colors[i % colors.length] }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					formatter: (v) => inr(Number(v)),
					contentStyle: TOOLTIP_STYLE
				})] })
			})
		})
	});
}
function SegmentDonut() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-56",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: SEGMENTS,
					dataKey: "count",
					nameKey: "name",
					innerRadius: 52,
					outerRadius: 80,
					paddingAngle: 2,
					children: SEGMENTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: s.color }, s.name))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					formatter: (v) => num(Number(v)),
					contentStyle: TOOLTIP_STYLE
				})] })
			})
		})
	});
}
function StateBars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
		className: "h-64 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-64",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: STATES,
					layout: "vertical",
					margin: {
						left: 8,
						right: 8
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "var(--color-border)",
							horizontal: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							type: "number",
							tickFormatter: (v) => `${(v / 1e6).toFixed(1)}M`,
							tick: {
								fontSize: 11,
								fill: "var(--color-fg-muted)"
							},
							axisLine: false,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							type: "category",
							dataKey: "code",
							width: 36,
							tick: {
								fontSize: 11,
								fill: "var(--color-fg-muted)"
							},
							axisLine: false,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							formatter: (v) => inr(Number(v)),
							contentStyle: TOOLTIP_STYLE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "revenue",
							fill: "var(--color-primary)",
							radius: [
								0,
								6,
								6,
								0
							],
							barSize: 12
						})
					]
				})
			})
		})
	});
}
function OrdersLine() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-56",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
					data: MONTHLY_REVENUE,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "var(--color-border)",
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "month",
							tick: {
								fontSize: 11,
								fill: "var(--color-fg-muted)"
							},
							axisLine: false,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: {
								fontSize: 11,
								fill: "var(--color-fg-muted)"
							},
							axisLine: false,
							tickLine: false,
							width: 40
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: TOOLTIP_STYLE }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "monotone",
							dataKey: "orders",
							stroke: "var(--color-accent)",
							strokeWidth: 2,
							dot: false
						})
					]
				})
			})
		})
	});
}
function SellerBars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-56",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: SELLERS,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "var(--color-border)",
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "name",
							tick: {
								fontSize: 10,
								fill: "var(--color-fg-muted)"
							},
							axisLine: false,
							tickLine: false,
							interval: 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tickFormatter: (v) => `${(v / 1e6).toFixed(1)}M`,
							tick: {
								fontSize: 11,
								fill: "var(--color-fg-muted)"
							},
							axisLine: false,
							tickLine: false,
							width: 36
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							formatter: (v) => inr(Number(v)),
							contentStyle: TOOLTIP_STYLE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "revenue",
							fill: "var(--color-chart-2)",
							radius: [
								6,
								6,
								0,
								0
							]
						})
					]
				})
			})
		})
	});
}
function DelayScatter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-56",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScatterChart, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { stroke: "var(--color-border)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "delay",
						name: "Delay (days)",
						tick: {
							fontSize: 11,
							fill: "var(--color-fg-muted)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						dataKey: "rating",
						name: "Rating",
						domain: [3.8, 5],
						tick: {
							fontSize: 11,
							fill: "var(--color-fg-muted)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						cursor: { strokeDasharray: "3 3" },
						contentStyle: TOOLTIP_STYLE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scatter, {
						data: SELLERS,
						fill: "var(--color-primary)"
					})
				] })
			})
		})
	});
}
function ProductTable() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
							children: "Product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 font-medium",
							children: "Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 text-right font-medium",
							children: "Revenue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 text-right font-medium",
							children: "Share"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border last:border-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2.5 font-medium",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2.5 text-fg-muted",
						children: p.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2.5 text-right tabular",
						children: inr(p.revenue)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "py-2.5 text-right tabular text-fg-muted",
						children: [p.contribution.toFixed(1), "%"]
					})
				]
			}, p.name)) })]
		})
	});
}
function CityTable() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
							children: "City"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 font-medium",
							children: "State"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 text-right font-medium",
							children: "Revenue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 text-right font-medium",
							children: "Orders"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border last:border-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2.5 font-medium",
						children: c.city
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2.5 text-fg-muted",
						children: c.state
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2.5 text-right tabular",
						children: inr(c.revenue)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2.5 text-right tabular",
						children: num(c.orders)
					})
				]
			}, c.city)) })]
		})
	});
}
function CategoryLegend() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-1.5 text-xs",
		children: CATEGORIES.slice(0, 6).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 text-fg-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-2 rounded-full",
					style: { background: [
						"var(--color-chart-1)",
						"var(--color-chart-2)",
						"var(--color-chart-3)",
						"var(--color-chart-5)",
						"var(--color-chart-6)",
						"var(--color-chart-7)"
					][i] }
				}), c.name]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular font-medium text-fg",
				children: inr(c.revenue)
			})]
		}, c.key))
	});
}
//#endregion
export { KpiCard as a, RevenueArea as c, StateBars as d, DelayScatter as i, SegmentDonut as l, CategoryLegend as n, OrdersLine as o, CityTable as r, ProductTable as s, CategoryDonut as t, SellerBars as u };
