import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as cn, r as initials, t as Button } from "./button-DRodFd0Q.mjs";
import { n as CrioiWordmark, t as CrioiMark } from "./logo-zDNDELFA.mjs";
import { b as useNavigate, d as useRouterState, m as Outlet, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as useSession } from "./session-DQPX8hFQ.mjs";
import { t as useUi } from "./ui-DT3hGaqz.mjs";
import { t as Input } from "./input-ope_MEJ_.mjs";
import { A as FolderOpen, B as ChartLine, D as LayoutDashboard, H as Bell, I as CircleHelp, L as ChevronDown, P as Cog, S as Menu, T as LogOut, V as Bot, b as Package, c as Target, f as Settings, k as Gauge, l as Sparkles, n as Users, p as Search, r as Upload, t as X, w as Map, z as ChartColumn } from "../_libs/lucide-react.mjs";
import { a as Root2, i as Portal2, n as Item2, o as Separator2, r as Label2, s as Trigger, t as Content2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as Trigger$1, i as Root3, n as Portal, r as Provider, t as Content2$1 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-Bx9RxjLu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TooltipProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration: 250,
		skipDelayDuration: 80,
		children
	});
}
function Tooltip({ content, children, side = "right" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root3, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
		asChild: true,
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
		side,
		sideOffset: 8,
		className: cn("z-50 rounded-sm bg-ink px-2 py-1 text-xs font-medium text-sidebar-fg shadow-[var(--shadow-pop)]"),
		children: content
	}) })] });
}
var NAV = [
	{
		to: "/app",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/app/data",
		label: "Data Management",
		icon: FolderOpen
	},
	{
		to: "/app/processing",
		label: "Data Processing",
		icon: Cog
	},
	{
		to: "/app/reports",
		label: "Reports",
		icon: ChartColumn,
		children: [
			{
				to: "/app/reports/overview",
				label: "Overview",
				icon: Gauge,
				reportId: "overview"
			},
			{
				to: "/app/reports/revenue",
				label: "Revenue",
				icon: ChartLine,
				reportId: "revenue"
			},
			{
				to: "/app/reports/customers",
				label: "Customers",
				icon: Users,
				reportId: "customers"
			},
			{
				to: "/app/reports/products",
				label: "Products",
				icon: Package,
				reportId: "products"
			},
			{
				to: "/app/reports/geography",
				label: "Geography",
				icon: Map,
				reportId: "geography"
			},
			{
				to: "/app/reports/performance",
				label: "Performance",
				icon: ChartColumn,
				reportId: "performance"
			},
			{
				to: "/app/reports/opportunity",
				label: "Opportunity",
				icon: Target,
				reportId: "opportunity"
			},
			{
				to: "/app/reports/predictions",
				label: "Predictions",
				icon: Sparkles,
				reportId: "predictions"
			}
		]
	},
	{
		to: "/app/ai",
		label: "AI Assistant",
		icon: Bot
	},
	{
		to: "/app/settings",
		label: "Settings",
		icon: Settings
	}
];
var SEED = [{
	id: "ds-olist",
	name: "Brazilian E-Commerce Dataset",
	fileName: "olist_ecommerce_2017_2018.csv",
	description: "Olist store orders, customers, products, payments and reviews for 2017–2018.",
	type: "CSV",
	status: "processed",
	rows: 112650,
	columns: 20,
	missing: 0,
	duplicates: 0,
	quality: 96,
	uploadedAt: "2024-06-15T10:30:00",
	lastProcessedAt: "2024-06-15T10:42:00",
	active: true
}, {
	id: "ds-olist-may",
	name: "May 2024 Snapshot",
	fileName: "May_2024_Data.csv",
	description: "Monthly refresh used for inference-only scoring.",
	type: "CSV",
	status: "processed",
	rows: 118250,
	columns: 20,
	missing: 12,
	duplicates: 4,
	quality: 94,
	uploadedAt: "2024-05-18T11:20:00",
	lastProcessedAt: "2024-05-18T11:41:00",
	active: false
}];
var useDatasets = create()(persist((set) => ({
	items: SEED,
	add: (ds) => set((s) => ({ items: [ds, ...s.items] })),
	update: (id, patch) => set((s) => ({ items: s.items.map((d) => d.id === id ? {
		...d,
		...patch
	} : d) })),
	setActive: (id) => set((s) => ({ items: s.items.map((d) => ({
		...d,
		active: d.id === id
	})) })),
	remove: (id) => set((s) => ({ items: s.items.filter((d) => d.id !== id) }))
}), { name: "crioi-datasets" }));
function activeDataset(items) {
	return items.find((d) => d.active) ?? items[0];
}
function Sidebar() {
	const collapsed = useUi((s) => s.sidebarCollapsed);
	const toggle = useUi((s) => s.toggleSidebar);
	const setMobile = useUi((s) => s.setMobileNavOpen);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const active = activeDataset(useDatasets((s) => s.items));
	const [openReports, setOpenReports] = (0, import_react.useState)(pathname.startsWith("/app/reports"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("flex h-full flex-col bg-sidebar text-sidebar-fg transition-[width] duration-250 ease-[var(--ease-out)]", collapsed ? "w-[72px]" : "w-[248px]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex h-16 items-center gap-2 px-3", collapsed ? "justify-center" : "justify-between"),
				children: [collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrioiMark, { className: "text-primary size-8" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrioiWordmark, { inverted: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: toggle,
					className: cn("hidden size-8 items-center justify-center rounded-sm text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg lg:flex", collapsed && "absolute top-4 left-[72px] z-20 size-8 rounded-r-md bg-sidebar text-sidebar-muted"),
					"aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 space-y-0.5 overflow-y-auto px-2 py-2",
				children: NAV.map((item) => {
					const Icon = item.icon;
					const activeNav = item.to === "/app" ? pathname === "/app" : pathname === item.to || pathname.startsWith(item.to + "/");
					if (item.children) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: item.label,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setMobile(false),
							className: cn("flex size-11 items-center justify-center rounded-md", activeNav ? "bg-primary text-white" : "text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpenReports((v) => !v),
						className: cn("flex h-10 w-full items-center gap-3 rounded-md px-3 text-sm font-medium", activeNav ? "bg-ink-hover text-sidebar-fg" : "text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-left",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 transition-transform", openReports && "rotate-180") })
						]
					}), openReports && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 ml-4 space-y-0.5 border-l border-white/10 pl-2",
						children: item.children.map((child) => {
							const CIcon = child.icon;
							const on = child.reportId ? pathname === `/app/reports/${child.reportId}` : pathname === child.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: child.reportId ? "/app/reports/$reportId" : child.to,
								params: child.reportId ? { reportId: child.reportId } : void 0,
								onClick: () => setMobile(false),
								className: cn("flex h-9 items-center gap-2.5 rounded-md px-2.5 text-[13px]", on ? "bg-primary text-white" : "text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CIcon, { className: "size-3.5" }), child.label]
							}, child.to);
						})
					})] }) }, item.to);
					const link = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						onClick: () => setMobile(false),
						className: cn("flex items-center rounded-md text-sm font-medium", collapsed ? "size-11 justify-center" : "h-10 gap-3 px-3", activeNav ? "bg-primary text-white" : "text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }), !collapsed && item.label]
					});
					return collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: item.label,
						children: link
					}, item.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: link }, item.to);
				})
			}),
			!collapsed && active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-2 mb-3 rounded-lg bg-ink-soft p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[10px] font-medium tracking-wide text-sidebar-muted uppercase",
						children: ["Current dataset", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-good/20 px-1.5 py-0.5 text-[10px] text-good normal-case",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-good" }), "Active"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 truncate text-sm font-medium",
						children: active.fileName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-0.5 text-[11px] text-sidebar-muted",
						children: [active.rows.toLocaleString("en-IN"), " rows"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "mt-3 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/data/new",
							onClick: () => setMobile(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-3.5" }), "Upload dataset"]
						})
					})
				]
			})
		]
	});
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
function DropdownMenuContent({ className, sideOffset = 8, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset,
		className: cn("z-50 min-w-48 overflow-hidden rounded-lg bg-surface p-1 shadow-[var(--shadow-pop)]", className),
		...props
	}) });
}
function DropdownMenuItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		className: cn("flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm text-fg outline-none select-none hover:bg-paper data-[highlighted]:bg-paper", className),
		...props
	});
}
function DropdownMenuSeparator({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, { className: cn("my-1 h-px bg-border", className) });
}
function DropdownMenuLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
		className: cn("px-2.5 py-1.5 text-xs font-medium text-fg-subtle", className),
		...props
	});
}
var NOTICES = [
	{
		title: "Churn scores refreshed",
		body: "41,599 customers scored · 15 Jun 10:41",
		unread: true
	},
	{
		title: "Revenue decline flagged",
		body: "Latest growth -76.68% on the Sep 2018 slice",
		unread: true
	},
	{
		title: "ETL completed",
		body: "Brazilian E-Commerce Dataset processed",
		unread: false
	}
];
function Topbar() {
	const user = useSession((s) => s.user);
	const logout = useSession((s) => s.logout);
	const setMobile = useUi((s) => s.setMobileNavOpen);
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const hits = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		if (!query) return [];
		return NAV.flatMap((n) => [{
			to: n.to,
			label: n.label
		}, ...(n.children ?? []).map((c) => ({
			to: c.to,
			label: c.label
		}))]).filter((x) => x.label.toLowerCase().includes(query)).slice(0, 6);
	}, [q]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				document.getElementById("crioi-search")?.focus();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex h-16 shrink-0 items-center gap-3 border-b border-border bg-surface px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-paper lg:hidden",
				onClick: () => setMobile(true),
				"aria-label": "Open navigation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-xl flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-subtle" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "crioi-search",
						value: q,
						onChange: (e) => {
							setQ(e.target.value);
							setOpen(true);
						},
						onFocus: () => setOpen(true),
						onBlur: () => setTimeout(() => setOpen(false), 150),
						placeholder: "Search reports, customers, products…",
						className: "h-10 border-transparent bg-paper pl-9"
					}),
					open && hits.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-11 z-30 w-full rounded-lg bg-surface p-1 shadow-[var(--shadow-pop)]",
						children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-paper",
							onMouseDown: () => {
								navigate({ to: h.to });
								setQ("");
							},
							children: h.label
						}, h.to))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "relative flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-paper",
							"aria-label": "Notifications",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-2 right-2 size-1.5 rounded-full bg-danger" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						className: "w-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Notifications" }), NOTICES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							className: "flex-col items-start gap-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: n.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-fg-muted",
								children: n.body
							})]
						}, n.title))]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/about",
						className: "hidden size-10 items-center justify-center rounded-md text-fg-muted hover:bg-paper sm:flex",
						"aria-label": "About",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "ml-1 flex items-center gap-2 rounded-md py-1 pr-1 pl-2 hover:bg-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden text-right sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium leading-tight",
									children: user?.fullName ?? "Guest"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[11px] text-fg-muted",
									children: user?.role ?? "Viewer"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-full bg-primary-soft text-xs font-semibold text-primary",
								children: initials(user?.fullName ?? "U")
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: user?.organization }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: () => void navigate({ to: "/app/settings" }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" }), "Settings"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: () => {
									logout();
									navigate({ to: "/login" });
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Sign out"]
							})
						]
					})] })
				]
			})
		]
	});
}
function AppShell({ children }) {
	const mobile = useUi((s) => s.mobileNavOpen);
	const setMobile = useUi((s) => s.setMobileNavOpen);
	const fullscreen = useUi((s) => s.fullscreen);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const fill = fullscreen || pathname === "/app/ai" || pathname.startsWith("/app/reports/") && pathname !== "/app/reports/";
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "[" && !e.metaKey && !e.ctrlKey) useUi.getState().toggleSidebar();
			if (e.key === "]" && !e.metaKey && !e.ctrlKey) useUi.getState().toggleAiPanel();
			if (e.key === "Escape" && useUi.getState().fullscreen) useUi.getState().setFullscreen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh overflow-hidden bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden lg:block",
				children: !fullscreen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {})
			}),
			mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-ink/50",
					"aria-label": "Close navigation",
					onClick: () => setMobile(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-full w-[248px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute top-3 right-3 size-8 rounded-sm text-sidebar-muted hover:bg-ink-hover",
						onClick: () => setMobile(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [!fullscreen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Topbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: cn("min-h-0 flex-1", fill ? "overflow-hidden" : "overflow-auto"),
					children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			})
		]
	}) });
}
function PageHeader({ eyebrow, title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-[11px] font-medium tracking-wider text-fg-subtle uppercase",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight text-fg",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-2xl text-sm text-fg-muted",
				children: description
			})
		] }), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: actions
		})]
	});
}
//#endregion
export { useDatasets as a, activeDataset as i, NAV as n, PageHeader as r, AppShell as t };
