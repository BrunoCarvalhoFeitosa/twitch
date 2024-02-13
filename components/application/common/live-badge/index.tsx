"use client"
import { cn } from "@/lib/utils"

interface LiveBadgeProps {
    className?: string
}

export const LiveBadge = ({ className }: LiveBadgeProps) => {
    return (
        <div className={cn(
            "p-0.5 px-1.5 rounded-md bg-rose-500 text-[10px] font-semibold tracking-wide uppercase text-center border border-background",
            className
        )}>
            Live
        </div>
    )
}