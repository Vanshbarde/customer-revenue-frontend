import { create } from "zustand";
import { persist } from "zustand/middleware";

type UiState = {
  sidebarCollapsed: boolean;
  aiPanelOpen: boolean;
  mobileNavOpen: boolean;
  fullscreen: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: (v: boolean) => void;
  toggleAiPanel: () => void;
  setAiPanelOpen: (v: boolean) => void;
  setMobileNavOpen: (v: boolean) => void;
  setFullscreen: (v: boolean) => void;
};

export const useUi = create<UiState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      aiPanelOpen: true,
      mobileNavOpen: false,
      fullscreen: false,
      toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
      setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),
      toggleAiPanel: () => set((s) => ({ aiPanelOpen: !s.aiPanelOpen })),
      setAiPanelOpen: (aiPanelOpen) => set({ aiPanelOpen }),
      setMobileNavOpen: (mobileNavOpen) => set({ mobileNavOpen }),
      setFullscreen: (fullscreen) => set({ fullscreen }),
    }),
    {
      name: "crioi-ui",
      partialize: (s) => ({
        sidebarCollapsed: s.sidebarCollapsed,
        aiPanelOpen: s.aiPanelOpen,
      }),
    },
  ),
);
