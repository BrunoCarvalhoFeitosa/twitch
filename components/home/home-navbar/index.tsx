"use client"
import { Logo } from "./logo"
import { Items } from "./items"
import { Streamers } from "./streamers"
import { useNavbar } from "@/hooks/use-navbar"

export const HomeNavbar = () => {
    const { isOpen } = useNavbar()

    return (
        <div className={`fixed top-0 ${isOpen ? "left-0 xl:left-[-64px]" : "left-[-64px] xl:left-0"} h-[100dvh] bg-[#121212] shadow-[0_0_4px_0_rgba(0,0,0,0.3)] transition-all duration-500 z-50`}>
            <nav className="pt-3 flex flex-col justify-between items-center h-full">
                <Logo />
                <Items />
                <Streamers />
            </nav>
        </div>
    )
}