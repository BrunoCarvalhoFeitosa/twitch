"use client"
import { useSearch } from "@/hooks/use-search"
import { Actions } from "@/components/application/common/navbar/actions"
import { Logo } from "@/components/application/common/navbar/logo"
import { Search } from "@/components/application/common/navbar/search"

export const Navbar = () => {
    const { isOpen } = useSearch()

    return (
        <div>
            <nav className="fixed top-0 left-0 py-2 px-5 flex justify-between items-center w-full bg-[#121212] shadow-[0_0_4px_0_rgba(0,0,0,0.3)] z-50">
                <Logo />
                <Actions />
            </nav>
            {isOpen && <Search />}
        </div>
    )
}