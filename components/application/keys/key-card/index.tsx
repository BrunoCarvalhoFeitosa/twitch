"use client"
import { CopyButton } from "@/components/application/keys/copy-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface KeyCardProps {
    value: string | null
}

export const KeyCard = ({ value }: KeyCardProps) => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <div className="mt-8 p-6 rounded-xl bg-[#222] 2xl:w-2/3">
            <div className="flex items-center gap-x-10">
                <div className="xl:w-[108px]">
                    <p className="font-bold">
                        Stream Key
                    </p>
                </div>
                <div className="space-y-4 flex-1 w-full">
                    <div className="flex items-center gap-x-2 w-full">
                        <Input
                            disabled
                            type={show ? "text" : "password"}
                            placeholder="Stream key"
                            value={value || ""}
                        />
                        <CopyButton
                            value={value || ""}
                        />
                    </div>
                    <Button
                        variant="link"
                        size="sm"
                        onClick={() => setShow(!show)}
                        className="text-purple-600"
                    >
                        {show ? "Hide": "Show"}
                    </Button>
                </div>
            </div>
        </div>
    )
}