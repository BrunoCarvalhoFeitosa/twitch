"use client"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/hooks/use-sidebar"
import { Hint } from "@/components/application/common/hint"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react"

export const Toggle = () => {
    const { collapsed, onCollapse, onExpand } = useSidebar((state) => state)
    const label = collapsed ? "Expand" : "Collapse"

    return (
        <>
            {collapsed && (
                <div className="p-3 pl-6 mb-2 w-full">
                    <Hint label={label} side="right" asChild>
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={onExpand}
                            className="p-0 hover:bg-transparent"
                        >
                            <ArrowRightFromLine className="w-5 h-5 text-white" />
                        </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 w-full">
                    <div className="flex justify-end">
                        <Hint label={label} side="right" asChild>
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={onCollapse}
                                className="p-0 hover:bg-transparent"
                            >
                                <ArrowLeftFromLine className="w-5 h-5 text-white" />
                            </Button>
                        </Hint>
                    </div>
                </div>
            )}
        </>
    )
}

export const ToggleSkeleton = () => {
    return (
        <div className="p-3 pl-6 mb-2 hidden lg:flex justify-between items-center w-full">
            <Skeleton className="w-[100px] h-6 bg-[#222]" />
            <Skeleton className="w-6 h-6 bg-[#222]" />
        </div>
    )
}