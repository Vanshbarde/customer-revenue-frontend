import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/session-DQPX8hFQ.js
var DEMO_USER = {
	fullName: "Rohit Sharma",
	email: "rohit.sharma@abcretail.in",
	organization: "ABC Retail Pvt. Ltd.",
	role: "Admin",
	country: "India",
	orgType: "Retail",
	contactNumber: "+91 98765 43210",
	address: "Bandra Kurla Complex, Mumbai"
};
var useSession = create()(persist((set) => ({
	user: null,
	login: (user) => set({ user }),
	logout: () => set({ user: null })
}), { name: "crioi-session" }));
//#endregion
export { useSession as n, DEMO_USER as t };
