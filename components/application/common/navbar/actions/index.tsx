"use client"
import Link from "next/link"
import { useSearch } from "@/hooks/use-search"
import { UserButton, useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { SearchIcon, UserIcon, XIcon } from "lucide-react"

export const Actions = () => {
    const { user } = useUser()
    const { onOpen, onClose, isOpen } = useSearch()

    return (
        <div>
            {user ? (
                <div className="flex items-center gap-x-2">
                    <div>
                        {isOpen ? (
                            <Button
                                variant="ghost"
                                onClick={onClose}
                                className="p-0 m-0 hover:bg-transparent hover:opacity-60 transition-all duration-300"
                            >
                                <XIcon />
                            </Button>
                        ) : (
                            <Button
                                variant="ghost"
                                onClick={onOpen}
                                className="p-0 m-0 hover:bg-transparent hover:opacity-60 transition-all duration-300"
                            >
                                <SearchIcon />
                            </Button>
                        )}
                    </div>
                    <div>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex items-center gap-x-2">
                        <Link href="/sign-in" className="no-underline">
                            <Button
                                type="button"
                                size="sm"
                                variant="link"
                                className="p-2 m-0 h-8"
                            >
                                Sign in
                            </Button>
                        </Link>
                        <Link href="sign-up">
                            <Button
                                type="button"
                                size="sm"
                                variant="default"
                                className="p-2 m-0 h-7 rounded-sm"
                            >
                                Sign up now
                            </Button>
                        </Link>
                        <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            className="flex justify-center items-center w-[35px] h-[30px] p-0 hover:bg-[#181818]"
                        >
                            <UserIcon className="w-6 h-6 text-[#EEE]" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}