"use client"
import { useDashboardCreatorSidebar } from "@/hooks/use-dashboard-creator-sidebar"
import { cn } from "@/lib/utils"

interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
    const { collapsed } = useDashboardCreatorSidebar()
    
    return (
        <aside className={cn(
            "fixed left-0 flex flex-col h-full w-[70px] lg:w-72 bg-zinc-950 z-30",
            collapsed && "lg:w-[70px]"
        )}>
            {children}
        </aside>
    )
}