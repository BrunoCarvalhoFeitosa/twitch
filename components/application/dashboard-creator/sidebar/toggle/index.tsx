"use client"
import { useDashboardCreatorSidebar } from "@/hooks/use-dashboard-creator-sidebar"
import { Hint } from "@/components/application/common/hint"
import { Button } from "@/components/ui/button"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react"

export const Toggle = () => {
    const { onExpand, onCollapse, collapsed } = useDashboardCreatorSidebar((state) => state)
    const label = collapsed ? "Expand" : "Collapse"

    return (
        <>
            {collapsed && (
                <div className="hidden lg:flex justify-end items-center pt-1 px-4 mb-4 w-full">
                    <Hint label={label} side="right" asChild>
                        <Button
                            variant="ghost"
                            onClick={onExpand}
                            className="p-2 h-auto hover:bg-transparent"
                        >   
                            <ArrowRightFromLine className="w-5 h-5" />
                        </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className="hidden p-3 pl-5 mb-2 lg:flex justify-between items-center w-full">
                    <p className="font-semibold text-white">
                        Dashboard
                    </p>
                    <Hint label={label} side="right" asChild>
                        <Button
                            variant="ghost"
                            onClick={onCollapse}
                            className="p-2 h-auto hover:bg-transparent"
                        >
                            <ArrowLeftFromLine className="w-5 h-5" />
                        </Button>
                    </Hint>
                </div>
            )}
        </>
    )
}