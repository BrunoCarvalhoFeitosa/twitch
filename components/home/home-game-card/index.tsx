"use client"
import { useGameCardModal } from "@/hooks/use-game-card-modal"
import { useSelectedGameStore } from "@/hooks/use-selected-game"
import { Game } from "@/types"

interface HomeGameCardProps {
    game: Game
}

export const HomeGameCard: React.FC<HomeGameCardProps> = ({ game }) => {
    const { onOpen } = useGameCardModal()
    const { setGame } = useSelectedGameStore()

    const handleOpenGameCardModal = () => {
        onOpen()
        setGame(game)
    }

    return (
        <div>
            <div role="button" onClick={handleOpenGameCardModal}>
                <figure>
                    <div className="bg-zinc-800 overflow-hidden">
                        <img
                            src={game.thumbnail}
                            alt={game.title}
                            className="object-cover hover:scale-125 transition-all duration-300"
                        />
                    </div>
                    <figcaption className="mt-2">
                        <h5 className="w-[85%] md:w-full text-sm truncate">
                            {game.title}
                        </h5>
                        <span className="text-xs text-zinc-600">
                            {game.release_date}
                        </span>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}