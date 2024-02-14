import { redirect } from "next/navigation"
import { getSelfByUsername } from "@/lib/auth-service"
import { Navbar } from "@/components/application/common/navbar"
import { Sidebar } from "@/components/application/dashboard-creator/sidebar"
import { Container } from "@/components/application/dashboard-creator/container"

interface DashboardCreatorLayoutProps {
    params: { username: string }
    children: React.ReactNode
}

const DashboardCreatorLayout = async ({ params, children }: DashboardCreatorLayoutProps) => {
    const self = getSelfByUsername(params.username)

    if (!self) {
        redirect("/application")
    }

    return (
        <>
            <Navbar />
            <div className="pt-[56px] flex w-full h-full">
                <Sidebar />
                <Container>
                    {children}
                </Container>
            </div>
        </>
    )
}

export default DashboardCreatorLayout