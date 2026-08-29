import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./button-DRodFd0Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-ope_MEJ_.js
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg shadow-[inset_0_1px_0_rgba(15,23,42,0.02)] transition-[border-color,box-shadow] duration-150 placeholder:text-fg-subtle focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
//#endregion
export { Input as t };
