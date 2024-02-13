import { Wrapper } from "@/components/application/dashboard-creator/sidebar/wrapper"
import { Toggle } from "@/components/application/dashboard-creator/sidebar/toggle"
import { Navigation } from "@/components/application/dashboard-creator/sidebar/navigation"

export const Sidebar = () => {
    return (
        <Wrapper>
            <Toggle />
            <Navigation />
        </Wrapper>
    )
}