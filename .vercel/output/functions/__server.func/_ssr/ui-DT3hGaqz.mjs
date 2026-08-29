import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-DT3hGaqz.js
var useUi = create()(persist((set) => ({
	sidebarCollapsed: false,
	aiPanelOpen: true,
	mobileNavOpen: false,
	fullscreen: false,
	toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
	setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),
	toggleAiPanel: () => set((s) => ({ aiPanelOpen: !s.aiPanelOpen })),
	setAiPanelOpen: (aiPanelOpen) => set({ aiPanelOpen }),
	setMobileNavOpen: (mobileNavOpen) => set({ mobileNavOpen }),
	setFullscreen: (fullscreen) => set({ fullscreen })
}), {
	name: "crioi-ui",
	partialize: (s) => ({
		sidebarCollapsed: s.sidebarCollapsed,
		aiPanelOpen: s.aiPanelOpen
	})
}));
//#endregion
export { useUi as t };
