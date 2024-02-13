"use client"
import Link from "next/link"
import { useDashboardCreatorSidebar } from "@/hooks/use-dashboard-creator-sidebar"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface NavItemProps {
    label: string
    href: string
    icon: LucideIcon
    isActive: boolean
}

export const NavItem = ({ label, href, icon: Icon, isActive }: NavItemProps) => {
    const { collapsed } = useDashboardCreatorSidebar()
    
    return (
        <li>
            <Button
                asChild
                variant="ghost"
                className={cn(
                    "w-full h-12 hover:bg-[#222]",
                    collapsed ? "justify-center" : "justify-start",
                    isActive && "bg-[#222]"
                )}
            >
                <Link href={href}>
                    <div className="flex items-center gap-x-4">
                        <Icon className={cn(
                            "w-4 h-4",
                            collapsed ? "mr-0": "mr-2"
                        )} />
                        {!collapsed && (
                            <span>
                                {label}
                            </span>
                        )}
                    </div>
                </Link>
            </Button>
        </li>
    )
}

export const NavItemSkeleton = () => {
    return (
        <li className="flex items-center gap-x-4 py-2 px-3">
            <Skeleton className="min-w-[48px] min-h-[48px] rounded-md bg-[#222]" />
            <div className="hidden lg:block flex-1">
                <Skeleton className="h-6 bg-[#222]" />
            </div>
        </li>
    )
}