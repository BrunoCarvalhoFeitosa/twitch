
import { create } from "zustand"

interface DashboardCreatorSidebarStore {
    collapsed: boolean
    onExpand: () => void
    onCollapse: () => void
}

export const useDashboardCreatorSidebar = create<DashboardCreatorSidebarStore>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollapse: () => set(() => ({ collapsed: true })),
}))