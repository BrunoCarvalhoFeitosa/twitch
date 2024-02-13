"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard } from "swiper/modules"
import { HomeGameCard } from "../home-game-card"
import { Game } from "@/types"

interface HomeGamesListProps {
    category: string
}

export const HomeGamesList: React.FC<HomeGamesListProps> = ({ category }) => {
    const [games, setGames] = useState([])

    const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: { "category": `${category}`, "sort-by": "popularity" },
        headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options)
                setGames(response.data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [options])

    return (
        <div className="pl-6 xl:pl-20 pb-12">
            <h2 className="mb-4 font-bold">
                <strong className="font-extrabold capitalize text-purple-500">
                    {category}
                </strong> games
            </h2>
            <Swiper
                slidesPerView={3}
                loop={true}
                grabCursor={true}
                keyboard={{ enabled: true }}
                modules={[Keyboard]}
                breakpoints={{
                    640: {
                      slidesPerView: 3
                    },
                    768: {
                      slidesPerView: 4
                    },
                    1024: {
                      slidesPerView: 5
                    },
                }}
            >
                {games.map((game: Game) => (
                    <SwiperSlide key={game.id}>
                        <HomeGameCard game={game} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
