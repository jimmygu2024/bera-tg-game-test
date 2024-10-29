import { create } from "zustand";


type LayoutState = {
  showTabBar: boolean;
  setShowTabBar: (show: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  showTabBar: true,
  setShowTabBar: (show) => set({ showTabBar: show }),
  activeTab: "home",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
