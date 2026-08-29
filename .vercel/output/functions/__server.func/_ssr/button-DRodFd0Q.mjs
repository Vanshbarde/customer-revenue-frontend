import { r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DRodFd0Q.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function inr(value, compact = true) {
	if (!compact) return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(value);
	const abs = Math.abs(value);
	const sign = value < 0 ? "-" : "";
	if (abs >= 1e7) return `${sign}₹${(abs / 1e7).toFixed(2)}Cr`;
	if (abs >= 1e6) return `${sign}₹${(abs / 1e6).toFixed(2)}M`;
	if (abs >= 1e3) return `${sign}₹${(abs / 1e3).toFixed(1)}K`;
	return `${sign}₹${abs.toFixed(0)}`;
}
function pct(value, digits = 1) {
	return `${value > 0 ? "+" : ""}${value.toFixed(digits)}%`;
}
function num(value) {
	return new Intl.NumberFormat("en-IN").format(value);
}
function initials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("");
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,color,box-shadow,opacity,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-sm hover:bg-primary-hover",
			secondary: "bg-paper-2 text-fg hover:bg-border",
			outline: "border border-border bg-surface text-fg hover:bg-paper",
			ghost: "text-fg-muted hover:bg-paper-2 hover:text-fg",
			danger: "bg-danger text-white hover:bg-danger/90",
			sidebar: "justify-start text-sidebar-muted hover:bg-ink-hover hover:text-sidebar-fg",
			ink: "bg-ink text-sidebar-fg hover:bg-ink-soft"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-8 rounded-sm px-3 text-xs",
			lg: "h-11 rounded-lg px-5",
			icon: "size-10",
			"icon-sm": "size-8"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
export { num as a, inr as i, cn as n, pct as o, initials as r, Button as t };
