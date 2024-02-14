"use client"
import { useSidebar } from "@/hooks/use-sidebar"
import { Stream, User } from "@prisma/client"
import { UserItem, UserItemSkeleton } from "@/components/application/common/sidebar/user-item"

interface RecommendedProps {
    data: (User & {
        stream: Stream | null
    })[]
}

export const Recommended = ({ data }: RecommendedProps) => {
    const { collapsed } = useSidebar((state) => state)
    const showLabel = !collapsed && data.length > 0

    return (
        <div className="space-y-4 lg:pt-0">
            {showLabel && (
                <div className="pl-4 mb-1">
                    <p className="text-sm text-muted-foreground">
                        Recommended
                    </p>
                </div>
            )}
            <div>
                <ul>
                    {data.map((user) => (
                        <UserItem
                            key={user.id}
                            username={user.username}
                            imageUrl={user.imageUrl}
                            isLive={user.stream?.isLive}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export const RecommendedSkeleton = () => {
    return (
        <ul className="px-2">
            {[...Array(3)].map((_, i) => (
                <UserItemSkeleton key={i} />
            ))}
        </ul>
    )
}