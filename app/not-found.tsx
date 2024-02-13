"use client"
import { Logo } from "@/components/home/home-navbar/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const NotFoundPage = () => {
    return (
        <div className="w-full">
            <div className="w-full py-2 px-5">
                <Logo />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[calc(100%-60px)]">
                <h1 className="text-[70px] font-bold leading-none text-[#A970FF]">
                    404
                </h1>
                <h2 className="text-[15px] font-light leading-none">
                    Ooops, page not found.
                </h2>
                <Button
                    variant="default"
                    size="lg"
                    className="p-0 mt-5"
                >
                    <Link
                        href="/"
                        className="px-8 flex justify-center items-center w-full h-full outline-none"
                    >
                        Go to home
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default NotFoundPage