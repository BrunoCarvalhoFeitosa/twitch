"use client"
import { useEffect, useState } from "react"
import { useSidebar } from "@/hooks/use-sidebar"
import { cn } from "@/lib/utils"
import { ToggleSkeleton } from "@/components/application/common/sidebar/toggle"
import { RecommendedSkeleton } from "@/components/application/common/sidebar/recommended"

interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
    const [isClient, setIsClient] = useState<boolean>(false)
    const { collapsed } = useSidebar((state) => state)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return (
        <aside className="fixed left-0 w-[70px] lg:w-72 h-full transition-all duration-150">
            <ToggleSkeleton />
            <RecommendedSkeleton />
        </aside>
    )
    
    return (
        <aside className={cn(
            "fixed top-0 left-0 h-full bg-zinc-950 transition-all duration-150",
            collapsed ? "w-[70px]" : "w-72"
        )}>
            {children}
        </aside>
    )
}