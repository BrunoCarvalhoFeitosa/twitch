"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface HintProps {
    label: string
    children: React.ReactNode
    asChild?: boolean
    side?: "top" | "bottom" | "left" | "right"
    align?: "start" | "center" | "end"
}

export const Hint = ({
    label,
    children,
    asChild,
    side,
    align
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={asChild}>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    side={side}
                    align={align}
                    className="bg-[#333] text-white"
                >
                    <p className="font-semibold">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}