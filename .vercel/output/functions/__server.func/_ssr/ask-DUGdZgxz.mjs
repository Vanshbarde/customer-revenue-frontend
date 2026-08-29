import { n as createServerFn, r as getServerFnById, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask-DUGdZgxz.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askBusinessAi = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("8c9c9a46815f0da2c7efa04a248a4d8443ad92b85dc45c10be00d93fb925ee8e"));
//#endregion
export { askBusinessAi as t };
