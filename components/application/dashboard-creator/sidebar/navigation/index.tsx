"use client"
import { useUser } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { FullscreenIcon, KeyRoundIcon, MessageSquareIcon, UsersIcon } from "lucide-react"
import { NavItem, NavItemSkeleton } from "@/components/application/dashboard-creator/sidebar/nav-item"

export const Navigation = () => {
    const { user } = useUser()
    const pathname = usePathname()

    const routes = [
        {
            label: "Stream",
            href: `/u/${user?.username}`,
            icon: FullscreenIcon
        },
        {
            label: "Keys",
            href: `/u/${user?.username}/keys`,
            icon: KeyRoundIcon
        },
        {
            label: "Chat",
            href: `/u/${user?.username}/chat`,
            icon: MessageSquareIcon
        },
        {
            label: "Community",
            href: `/u/${user?.username}/community`,
            icon: UsersIcon
        }
    ]

    if (!user?.username) {
        return (
            <ul className="space-y-2">
                {[...Array(4)].map((_, i) => (
                    <NavItemSkeleton key={i} />
                ))}
            </ul>
        )
    }

    return (
        <ul className="space-y-2 pt-4 lg:pt-0 px-2">
            {routes.map((route) => ((
                <NavItem
                    key={route.href}
                    label={route.label}
                    href={route.href}
                    icon={route.icon}
                    isActive={pathname === route.href}
                />
            )))}
        </ul>
    )
}