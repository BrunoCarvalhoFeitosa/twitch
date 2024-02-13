import { create } from "zustand"

interface NavbarStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useNavbar = create<NavbarStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))