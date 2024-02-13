import { create } from "zustand"

interface SearchStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useSearch = create<SearchStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))