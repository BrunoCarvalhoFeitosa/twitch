"use client"
import { useSidebar } from "@/hooks/use-sidebar"
import { Follow, User } from "@prisma/client"
import { UserItem, UserItemSkeleton } from "@/components/application/common/sidebar/user-item"

interface FollowingProps {
    data: (Follow & { following: User })[]
}

export const Following = ({ data }: FollowingProps) => {
    const { collapsed } = useSidebar((state) => state)

    if (!data.length) {
        return null
    }

    return (
        <div className="mb-7 space-y-4">
            {!collapsed && (
                <div className="pl-4 mb-1">
                    <p className="text-sm text-muted-foreground">
                        Following
                    </p>
                </div>
            )}
            <div>
                <ul>
                    {data?.map((follow) => (
                        <UserItem
                            key={follow.following.id}
                            username={follow.following.username}
                            imageUrl={follow.following.imageUrl}
                            isLive={false}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export const FollowingSkeleton = () => {
    return (
        <ul className="px-2 pt-2 lg:pt-0">
            {[...Array(3)].map((_, i) => (
                <UserItemSkeleton key={i} />
            ))}
        </ul>
    )
}