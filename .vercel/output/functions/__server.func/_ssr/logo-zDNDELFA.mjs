import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./button-DRodFd0Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-zDNDELFA.js
var import_jsx_runtime = require_jsx_runtime();
function CrioiMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "8",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9 10.5h6.2c3.4 0 5.6 2.1 5.6 5.5S18.6 21.5 15.2 21.5H9V10.5zm3.1 8.4h2.9c1.7 0 2.7-1 2.7-2.9s-1-2.9-2.7-2.9h-2.9v5.8z",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "21.2",
				y: "10.5",
				width: "2.6",
				height: "11",
				rx: "1",
				fill: "#fff",
				opacity: "0.85"
			})
		]
	});
}
function CrioiWordmark({ inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrioiMark, { className: inverted ? "text-primary" : "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("text-sm font-semibold tracking-tight", inverted ? "text-sidebar-fg" : "text-fg"),
				children: "CRIOI"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("text-[10px] tracking-wide uppercase", inverted ? "text-sidebar-muted" : "text-fg-subtle"),
				children: "Revenue Intelligence"
			})]
		})]
	});
}
//#endregion
export { CrioiWordmark as n, CrioiMark as t };
