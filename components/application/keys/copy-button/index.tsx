"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCheckIcon, CopyIcon } from "lucide-react"

interface CopyButtonProps {
    value?: string
}

export const CopyButton = ({ value }: CopyButtonProps) => {
    const [isCopied, setIsCopied] = useState<boolean>(false)

    const onCopy = () => {
        if (!value) return

        setIsCopied(true)
        navigator.clipboard.writeText(value)
        setTimeout(() => {
            setIsCopied(false)
        }, 1000)
    }

    const Icon = isCopied ? CheckCheckIcon : CopyIcon
    
    return (
        <Button
            disabled={!value || isCopied}
            variant="ghost"
            size="sm"
            onClick={onCopy}
            className="hover:bg-transparent disabled:cursor-not-allowed"
        >
            <Icon className="w-4 h-4" />
        </Button>
    )
}