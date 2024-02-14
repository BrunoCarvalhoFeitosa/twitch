"use client"
import { useTransition } from "react"
import { toast } from "sonner"
import { updateStream } from "@/actions/stream"
import { Switch } from "@/components/ui/switch"
import { Skeleton } from "@/components/ui/skeleton"

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly"

interface ToggleCardProps {
    label: string
    value: boolean
    field: FieldTypes
}

export const ToggleCard = ({ label, value = false, field }: ToggleCardProps) => {
    const [isPending, startTransition] = useTransition()

    const onChange = () => {
        startTransition(() => {
            updateStream({ [field]: !value })
                .then(() => toast.success("Chat settings updated!"))
                .catch(() => toast.error("Something went wrong"))
        })
    }
    
    return (
        <div className="p-6 bg-[#222] rounded-xl xl:w-2/3">
            <div className="flex justify-between items-center gap-x-4">
                <p className="font-semibold shrink-0">
                    {label}
                </p>
                <div className="space-y-2"> 
                    <Switch
                        disabled={isPending}
                        onCheckedChange={onChange}
                        checked={value}
                    >
                        {value ? "On" : "Off"}
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export const ToggleCardSkeleton = () => {
    return (
        <Skeleton className="p-10 w-full rounded-xl bg-[#222]" />
    )
}