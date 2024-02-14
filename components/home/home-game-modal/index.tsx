"use client"
import { Fragment, useEffect, useState } from "react"
import axios from "axios"
import { useGameCardModal } from "@/hooks/use-game-card-modal"
import { useSelectedGameStore } from "@/hooks/use-selected-game"
import { GameData } from "@/types"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"
import { FaChrome, FaWindows } from "react-icons/fa6"

export const HomeGameModal = () => {
    const { isOpen, onClose } = useGameCardModal()
    const { selectedGame } = useSelectedGameStore()
    const [game, setGame] = useState<GameData | null>(null)

    useEffect(() => {
        if (!selectedGame) {
            return
        }

        const options = {
            method: "GET",
            url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
            params: { id: selectedGame?.id },
            headers: {
                "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
                "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST
            }
        }

        const fetchData = async () => {
            try {
                const response = await axios.request(options)
                setGame(response.data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [selectedGame?.id])

    useEffect(() => {
        const closeOnEscapePressed = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        window.addEventListener("keydown", closeOnEscapePressed)

        return () =>
          window.removeEventListener("keydown", closeOnEscapePressed)
    }, [])

    return (
        <Fragment>
            {isOpen && selectedGame && (
                <div>
                    <div className="fixed top-0 left-0 w-full h-[100dvh] bg-black/95 z-[99]" />
                    <div className="fixed top-0 right-0 w-[85%] h-[100dvh] bg-[#121212] z-[100]">
                        <div className="absolute top-0 right-0">
                            <Button
                                size="default"
                                variant="default"
                                onClick={() => onClose()}
                                className="rounded-none"
                            >
                                <XIcon className="w-5 h-5" />
                            </Button>
                        </div>
                        <div className="h-full overflow-y-auto">
                            <div className="flex flex-col xl:flex-row gap-x-4 w-full xl:w-[90%]">
                                <div className="w-full xl:w-[300px]">
                                    <img
                                        src={game?.thumbnail}
                                        alt={game?.title}
                                        className="w-full xl:w-[300px] h-full object-contain"
                                    />
                                </div>
                                <div className="pt-4 px-5 xl:px-0 xl:pt-0 mt-3 flex-1">
                                    <h4 className="text-xl font-bold">
                                        {game?.title}
                                    </h4>
                                    <div className="flex items-center gap-x-2 text-[#888]">
                                        <p className="text-xs">
                                            {game?.release_date}
                                        </p>
                                        <div className="text-sm font-thin">
                                            -
                                        </div>
                                        {game?.platform === "Windows" && (
                                            <div className="flex items-center gap-x-1">
                                                <FaWindows className="w-3 h-3" />
                                                <span className="text-xs">
                                                    ({game?.platform})
                                                </span>
                                            </div>
                                        )}
                                        {game?.platform === "Web Browser" && (
                                            <div className="flex items-center gap-x-1">
                                                <FaChrome className="w-3 h-3" />
                                                <span className="text-xs">
                                                    ({game?.platform})
                                                </span>
                                            </div>
                                        )}
                                        {game?.platform === "Windows, Web Browser" && (
                                            <div className="flex items-center gap-x-1">
                                                <FaChrome className="w-3 h-3" />
                                                <span className="text-xs">
                                                    ({game?.platform})
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <p className="mt-3 w-full xl:w-2/3">
                                            {game?.short_description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {game?.minimum_system_requirements && (
                                <div className="mt-8 px-4">
                                    <div className="mb-4">
                                        <h4 className="font-bold text-[#777]">
                                            Minimum System Requirements
                                        </h4>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-16">
                                        <div>
                                            <h5 className="text-sm font-bold text-[#777]">
                                                -OS
                                            </h5>
                                            <p className="text-xs">
                                                {game?.minimum_system_requirements?.os}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-[#777]">
                                                -Processor
                                            </h5>
                                            <p className="text-xs">
                                                {game?.minimum_system_requirements?.processor}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-[#777]">
                                                -Memory
                                            </h5>
                                            <p className="text-xs">
                                                {game?.minimum_system_requirements?.memory}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-[#777]">
                                                -Graphics
                                            </h5>
                                            <p className="text-xs">
                                                {game?.minimum_system_requirements?.graphics}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-[#777]">
                                                -Storage
                                            </h5>
                                            <p className="text-xs">
                                                {game?.minimum_system_requirements?.storage}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-[#777]">
                                                -Additional Notes
                                            </h5>
                                            <p className="text-xs">
                                                Specifications may change during development
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {game?.screenshots && (
                                <div className="mt-8 px-4">
                                    <div className="mb-4">
                                        <h4 className="font-bold text-[#777]">
                                            Screenshots
                                        </h4>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                                        {game.screenshots.map((screenshot, id) => (
                                            <div key={id} className=" overflow-hidden">
                                                <img
                                                    src={screenshot.image}
                                                    className="object-cover transition-all duration-300 hover:scale-150 cursor-zoom-in"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}