"use client"
import Link from "next/link"
import { useNavbar } from "@/hooks/use-navbar"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/home/home-navbar/logo"
import { CgMenuLeft } from "react-icons/cg"
import { useUser } from "@clerk/nextjs"
import { RadioIcon, WebcamIcon } from "lucide-react"

export const HomeActions = () => {
    const { isOpen, onOpen, onClose } = useNavbar()
    const { isSignedIn } = useUser()

    const handleOpen = () => {
        isOpen ? onClose() : onOpen()
    }

    return (
        <div className="sticky top-0 pl-2 xl:pl-16 py-3 pr-3 flex justify-between xl:justify-end items-center bg-[#121212] z-30">
            <div className="xl:hidden">
                <Logo />
            </div>
            {isSignedIn ? (
                <div>
                    <Button
                        type="button"
                        variant="default"
                        className="p-0 text-white"
                    >
                        <Link
                            href="/application"
                            className="px-4 flex items-center gap-x-1"
                        >
                            <RadioIcon className="w-5 h-5" />
                            <span className="text-sm">
                                Go to channels
                            </span>
                        </Link>
                    </Button>
                </div>
            ) : (
                <div className="flex items-center">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={handleOpen}
                        className="xl:hidden p-0 bg-transparent hover:bg-transparent"
                    >
                        <CgMenuLeft className="w-7 h-7" />
                    </Button>
                    <Button
                        type="button"
                        size="sm"
                        variant="link"
                        className="text-xs md:text-sm text-white"
                    >
                        <Link href="/sign-in">
                            Sign in
                        </Link>
                    </Button>
                    <Button
                        type="button"
                        size="sm"
                        variant="default"
                        className="text-xs md:text-sm"
                    >
                        <Link href="/sign-up">
                            Sign up
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    )
}