import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DRodFd0Q.mjs";
import { n as CrioiWordmark } from "./logo-zDNDELFA.mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useSession } from "./session-DQPX8hFQ.mjs";
import { t as Input } from "./input-ope_MEJ_.mjs";
import { t as RedirectIfAuthed } from "./session-gate-C216SPEt.mjs";
import { t as Label } from "./label-D2oji22S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-WXNTcfQf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RegisterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectIfAuthed, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterForm, {}) });
}
function RegisterForm() {
	const login = useSession((s) => s.login);
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		fullName: "",
		email: "",
		organization: "",
		role: "Analyst",
		country: "India",
		orgType: "Retail",
		contactNumber: "",
		address: ""
	});
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	function set(key, value) {
		setForm((f) => ({
			...f,
			[key]: value
		}));
	}
	function submit(e) {
		e.preventDefault();
		if (!form.fullName.trim() || !form.email.trim() || !password || !form.organization.trim()) {
			setError("Name, email, organization and password are required.");
			return;
		}
		login(form);
		navigate({ to: "/app" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl px-6 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrioiWordmark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-8 text-2xl font-semibold tracking-tight",
					children: "Create your workspace"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-fg-muted",
					children: "Registration is local for this preview — nothing is stored on a server yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					onSubmit: submit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							value: form.fullName,
							onChange: (v) => set("fullName", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							type: "email",
							value: form.email,
							onChange: (v) => set("email", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Password",
							type: "password",
							value: password,
							onChange: setPassword
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Organization",
							value: form.organization,
							onChange: (v) => set("organization", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Role",
							value: form.role,
							onChange: (v) => set("role", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Organization type",
							value: form.orgType,
							onChange: (v) => set("orgType", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Country",
							value: form.country,
							onChange: (v) => set("country", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Contact number",
							value: form.contactNumber,
							onChange: (v) => set("contactNumber", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address",
								value: form.address,
								onChange: (v) => set("address", v)
							})
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sm:col-span-2 text-sm text-danger",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								size: "lg",
								children: "Enter CRIOI"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-fg-muted",
					children: [
						"Already registered?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "font-medium text-primary hover:underline",
							children: "Sign in"
						})
					]
				})
			]
		})
	});
}
function Field({ label, value, onChange, type = "text" }) {
	const id = label.toLowerCase().replace(/\s+/g, "-");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			type,
			value,
			onChange: (e) => onChange(e.target.value)
		})]
	});
}
//#endregion
export { RegisterPage as component };
