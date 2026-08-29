import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as CrioiMark } from "./logo-zDNDELFA.mjs";
import { y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useSession } from "./session-DQPX8hFQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/session-gate-C216SPEt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useHydrated() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const unsub = useSession.persist.onFinishHydration(() => setReady(true));
		if (useSession.persist.hasHydrated()) setReady(true);
		return unsub;
	}, []);
	return ready;
}
function Splash() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-ink text-sidebar-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrioiMark, { className: "size-10 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-sidebar-muted",
				children: "Loading CRIOI…"
			})]
		})
	});
}
function RequireSession({ children }) {
	const ready = useHydrated();
	const user = useSession((s) => s.user);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Splash, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/login" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function RedirectIfAuthed({ children }) {
	const ready = useHydrated();
	const user = useSession((s) => s.user);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Splash, {});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/app" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
//#endregion
export { RequireSession as n, useHydrated as r, RedirectIfAuthed as t };
