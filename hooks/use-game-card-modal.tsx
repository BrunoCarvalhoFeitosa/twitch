import { create } from "zustand"

interface GameCardStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useGameCardModal = create<GameCardStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))