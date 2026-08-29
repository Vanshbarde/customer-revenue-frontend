import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DRodFd0Q.mjs";
import { n as useSession } from "./session-DQPX8hFQ.mjs";
import { t as Input } from "./input-ope_MEJ_.mjs";
import { r as PageHeader } from "./app-shell-Bx9RxjLu.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-Byc3e1Bd.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-D2oji22S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CFR3JHpC.js
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	const user = useSession((s) => s.user);
	const login = useSession((s) => s.login);
	function save(e) {
		e.preventDefault();
		if (!user) return;
		const fd = new FormData(e.currentTarget);
		login({
			...user,
			fullName: String(fd.get("fullName") ?? user.fullName),
			organization: String(fd.get("organization") ?? user.organization),
			role: String(fd.get("role") ?? user.role),
			contactNumber: String(fd.get("contactNumber") ?? user.contactNumber)
		});
		toast.success("Profile saved on this device.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl space-y-6 p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Settings",
				description: "Workspace preferences for this preview. Backend auth comes later."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Profile" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: save,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "fullName",
							children: "Full name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "fullName",
							name: "fullName",
							defaultValue: user?.fullName
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "organization",
							children: "Organization"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "organization",
							name: "organization",
							defaultValue: user?.organization
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "role",
							children: "Role"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "role",
							name: "role",
							defaultValue: user?.role
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "contactNumber",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "contactNumber",
							name: "contactNumber",
							defaultValue: user?.contactNumber
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Save"
						})
					})
				]
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Power BI connection" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-3 text-sm text-fg-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Report canvases are interactive stand-ins. When your workspace is ready, paste embed URLs here." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "https://app.powerbi.com/reportEmbed?reportId=…",
						disabled: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs",
						children: "Embed wiring is deferred to the backend phase."
					})
				]
			})] })
		]
	});
}
//#endregion
export { SettingsPage as component };
