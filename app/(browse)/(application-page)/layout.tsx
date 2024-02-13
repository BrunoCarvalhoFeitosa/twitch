import { Suspense } from "react"
import { Navbar } from "@/components/application/common/navbar"
import { Sidebar, SidebarSkeleton } from "@/components/application/common/sidebar"
import { Container } from "@/components/application/common/container"

const Applicationlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="flex pt-16">
                <Suspense fallback={<SidebarSkeleton />}>
                    <Sidebar />
                </Suspense>
                <Container>
                    {children}
                </Container>
            </div>
        </div>
    )
}

export default Applicationlayout