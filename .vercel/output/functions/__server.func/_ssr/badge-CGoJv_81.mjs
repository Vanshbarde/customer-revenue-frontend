import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn } from "./button-DRodFd0Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-CGoJv_81.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium", {
	variants: { variant: {
		default: "bg-primary-soft text-primary",
		muted: "bg-paper-2 text-fg-muted",
		good: "bg-good-soft text-good",
		warn: "bg-warn-soft text-warn",
		danger: "bg-danger-soft text-danger",
		ink: "bg-ink/8 text-ink"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({
			variant,
			className
		})),
		...props
	});
}
//#endregion
export { Badge as t };
