"use client"
import { useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"
import { useDashboardCreatorSidebar } from "@/hooks/use-dashboard-creator-sidebar"
import { cn } from "@/lib/utils"

interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    const { onExpand, onCollapse, collapsed } = useDashboardCreatorSidebar(state => state)
    const matches = useMediaQuery(`(max-width: 1024px)`)

    useEffect(() => {
        if (matches) {
            onCollapse()
        } else {
            onExpand()
        }
    }, [matches, onExpand, onCollapse])

    return (
        <div className={cn(
            "flex-1",
            collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-72"
        )}>
            {children}
        </div>
    )
}