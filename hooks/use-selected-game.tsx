import { create } from "zustand"
import { Game } from "@/types"

type GameStore = {
  selectedGame: Game | null
  setGame: (game: Game) => void
}

export const useSelectedGameStore = create<GameStore>((set) => ({
  selectedGame: null,
  setGame: (game) => set({ selectedGame: game }),
}))