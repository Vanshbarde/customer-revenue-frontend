import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DRodFd0Q.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Input } from "./input-ope_MEJ_.mjs";
import { a as useDatasets, r as PageHeader } from "./app-shell-Bx9RxjLu.mjs";
import { n as CardContent, t as Card } from "./card-Byc3e1Bd.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as Route$2 } from "./router-YTelVdr5.mjs";
import { t as Label } from "./label-D2oji22S.mjs";
import { t as usePipeline } from "./pipeline-BDHMDtB3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data.update-HE_QG28G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function UpdateDatasetPage() {
	const { id } = Route$2.useSearch();
	const items = useDatasets((s) => s.items);
	const update = useDatasets((s) => s.update);
	const setMode = usePipeline((s) => s.setMode);
	const navigate = useNavigate();
	const selected = (0, import_react.useMemo)(() => items.find((d) => d.id === id) ?? items[0], [items, id]);
	const [fileName, setFileName] = (0, import_react.useState)("");
	function submit(e) {
		e.preventDefault();
		if (!selected) return;
		update(selected.id, {
			fileName: fileName || selected.fileName,
			status: "pending",
			uploadedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		setMode("update");
		toast.success("Update queued. Training will be skipped.");
		navigate({
			to: "/app/processing",
			search: { dataset: selected.id }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl space-y-6 p-4 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Update dataset",
			description: "Appends history. The pipeline will run ETL, cleaning, database update and inference — not a full retrain."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: submit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ds",
							children: "Dataset"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "ds",
							className: "flex h-10 w-full rounded-md border border-border bg-surface px-3 text-sm",
							defaultValue: selected?.id,
							onChange: () => void 0,
							children: items.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: d.id,
								children: d.name
							}, d.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "file",
							children: "Replacement / append file"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "file",
							type: "file",
							accept: ".csv,.parquet,.xlsx,.xls",
							onChange: (e) => setFileName(e.target.files?.[0]?.name ?? "")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg bg-warn-soft p-3 text-sm text-warn",
						children: "Training is skipped on update unless you later opt into a full run."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Queue update pipeline"
					})
				]
			})
		}) })]
	});
}
//#endregion
export { UpdateDatasetPage as component };
