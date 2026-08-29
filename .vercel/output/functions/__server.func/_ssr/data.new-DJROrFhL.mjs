import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as cn, t as Button } from "./button-DRodFd0Q.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Input } from "./input-ope_MEJ_.mjs";
import { a as useDatasets, r as PageHeader } from "./app-shell-Bx9RxjLu.mjs";
import { n as CardContent, t as Card } from "./card-Byc3e1Bd.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-D2oji22S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data.new-DJROrFhL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-fg transition-[border-color,box-shadow] duration-150 placeholder:text-fg-subtle focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Progress({ value, className }) {
	const clamped = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-1.5 w-full overflow-hidden rounded-full bg-paper-2", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-primary transition-[width] duration-300 ease-out",
			style: { width: `${clamped}%` }
		})
	});
}
function AddDatasetPage() {
	const add = useDatasets((s) => s.add);
	const navigate = useNavigate();
	const [name, setName] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("CSV");
	const [fileName, setFileName] = (0, import_react.useState)("");
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [busy, setBusy] = (0, import_react.useState)(false);
	function onFile(f) {
		if (!f) return;
		setFileName(f.name);
		if (!name) setName(f.name.replace(/\.[^.]+$/, "").replace(/[_-]/g, " "));
	}
	async function submit(e) {
		e.preventDefault();
		if (!name.trim() || !fileName) {
			toast.error("Name and a file are required.");
			return;
		}
		setBusy(true);
		for (let i = 1; i <= 10; i++) {
			await new Promise((r) => setTimeout(r, 120));
			setProgress(i * 10);
		}
		add({
			id: crypto.randomUUID(),
			name: name.trim(),
			fileName,
			description: description.trim() || "Uploaded from the CRIOI workspace.",
			type,
			status: "pending",
			rows: 0,
			columns: 20,
			missing: 0,
			duplicates: 0,
			quality: 0,
			uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
			lastProcessedAt: null,
			active: false
		});
		toast.success("Dataset added. Run the full pipeline next.");
		navigate({
			to: "/app/processing",
			search: { dataset: void 0 }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl space-y-6 p-4 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Add new dataset",
			description: "New extracts run the full path, including training."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: submit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ds-name",
							children: "Dataset name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "ds-name",
							value: name,
							onChange: (e) => setName(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ds-desc",
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "ds-desc",
							value: description,
							onChange: (e) => setDescription(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ds-type",
							children: "Dataset type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "ds-type",
							value: type,
							onChange: (e) => setType(e.target.value),
							className: "flex h-10 w-full rounded-md border border-border bg-surface px-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "CSV" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Parquet" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Excel" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "ds-file",
								children: "Upload file"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "ds-file",
								type: "file",
								accept: ".csv,.parquet,.xlsx,.xls",
								onChange: (e) => onFile(e.target.files?.[0])
							}),
							fileName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-fg-muted",
								children: fileName
							})
						]
					}),
					busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: progress }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						disabled: busy,
						children: busy ? "Uploading…" : "Continue to processing"
					})
				]
			})
		}) })]
	});
}
//#endregion
export { AddDatasetPage as component };
