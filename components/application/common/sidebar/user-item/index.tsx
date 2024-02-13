"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSidebar } from "@/hooks/use-sidebar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/application/common/user-avatar"
import { LiveBadge } from "@/components/application/common/live-badge"
import { Skeleton } from "@/components/ui/skeleton"

interface UserItemProps {
    username: string
    imageUrl: string
    isLive?: boolean
}

export const UserItem: React.FC<UserItemProps> = ({ username, imageUrl, isLive }) => {
    const pathname = usePathname()
    const { collapsed } = useSidebar((state) => state)
    const href = `/${username}`
    const isActive = pathname === href

    return (
        <li>
            <Button
                asChild
                variant="ghost"
                className={cn(
                    "p-0 w-full h-12 hover:bg-[#222]",
                    collapsed ? "justify-center": "justify-start",
                    isActive && "bg-[#222]"
                )}
            >
                <Link href={href} className="p-2 no-underline">
                    <div className={cn(
                        "flex items-center w-full gap-x-4",
                        collapsed && "justify-center"
                    )}>
                        <UserAvatar
                            imageUrl={imageUrl}
                            username={username}
                            isLive={isLive}
                            showBadge
                        />
                        {!collapsed && (
                            <p className="text-xs truncate">
                                {username}
                            </p>
                        )}
                        {!collapsed && isLive && (
                            <LiveBadge className="ml-auto" />
                        )}
                    </div>
                </Link>
            </Button>
        </li>
    )
}

export const UserItemSkeleton = () => {
    return (
        <li className="flex items-center gap-x-4 py-2 px-3">
            <Skeleton className="min-w-[32px] min-h-[32px] rounded-full bg-[#222]" />
            <div className="flex-1">
                <Skeleton className="h-6 bg-[#222]" />
            </div>
        </li>
    )
}