"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useSearch } from "@/hooks/use-search"
import qs from "query-string"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export const Search = () => {
    const router = useRouter()
    const { isOpen } = useSearch()
    const [value, setValue] = useState<string>("")

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!value) return

        const url = qs.stringifyUrl({
            url: "/search",
            query: { term: value }
        }, { skipEmptyString: true })

        router.push(url)
    }

    const handleClear = () => {
        setValue("")
    }

    return (
        <div className={cn(
            "fixed translate-y-[-100%] left-0 w-full h-[100dvh] bg-[#111] transition-all duration-700 z-40",
            isOpen && "translate-y-0"
        )}>
            <div className="flex flex-col h-full items-center justify-center relative px-[4px] rounded-sm shadow-[0_0_4px_0_rgba(0,0,0,0.3)]">
                <form onSubmit={onSubmit} className="relative flex items-center w-[88%] lg:w-[440px]">
                    <Input
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        placeholder="Search for a streamer..."
                        className="bg-[#222] border-0 text-[#555] placeholder:text-[#555] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    />
                    <div className="flex items-center gap-x-1">
                        {value && (
                            <Button
                                type="submit"
                                size="lg"
                                variant="ghost"
                                onClick={handleClear}
                                className="flex justify-center items-center w-[45px] h-[40px] p-0 hover:bg-[#181818]"
                            >
                            <XIcon className="w-5 h-5 text-[#555]" />
                        </Button>
                        )}
                        <Button
                            type="submit"
                            size="sm"
                            variant="ghost"
                            className="flex justify-center items-center w-[45px] h-[40px] p-0 hover:bg-[#181818]"
                        >
                            <SearchIcon className="w-5 h-5 text-[#555]" />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}