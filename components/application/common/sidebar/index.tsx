import { Wrapper } from "@/components/application/common/sidebar/wrapper"
import { Toggle, ToggleSkeleton } from "@/components/application/common/sidebar/toggle"
import { Recommended, RecommendedSkeleton } from "@/components/application/common/sidebar/recommended"
import { Following, FollowingSkeleton } from "@/components/application/common/sidebar/following"
import { getRecommended } from "@/lib/recommended-service"
import { getFollowedUsers } from "@/lib/follow-service"

export const Sidebar = async () => {
    const recommended = await getRecommended()
    const follows = await getFollowedUsers()

    return (
        <Wrapper>
            <div className="pt-12 px-3">
                <Toggle />
                <Following data={follows} />
                <Recommended data={recommended} />
            </div>
        </Wrapper>
    )
}

export const SidebarSkeleton = () => {
    return (
        <aside className="fixed top-[55px] left-0 flex flex-col w-[70px] lg:w-72 h-full bg-zinc-950 borer-r border-[#2D2E35] z-50">
            <ToggleSkeleton />
            <FollowingSkeleton />
            <RecommendedSkeleton />
        </aside>
    )
}