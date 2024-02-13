"use client"
import { useEffect, useState } from "react"
import { HomeNavbar } from "@/components/home/home-navbar"
import { HomeActions } from "@/components/home/home-actions"
import { HomeHero } from "@/components/home/home-hero"
import { HomeGamesList } from "@/components/home/home-games-list"
import { HomeGameModal } from "@/components/home/home-game-modal"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

const HomePage = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <div className="w-full">
            <HomeNavbar />
            <HomeActions />
            <HomeHero />
            <HomeGamesList category="battle-royale" />
            <HomeGamesList category="racing" />
            <HomeGamesList category="action" />
            <HomeGamesList category="zombie" />
            <HomeGamesList category="superhero" />
            <HomeGameModal />
        </div>
    )
}

export default HomePage