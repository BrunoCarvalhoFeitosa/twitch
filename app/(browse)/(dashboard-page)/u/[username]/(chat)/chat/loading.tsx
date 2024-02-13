import { Skeleton } from "@/components/ui/skeleton"
import { ToggleCardSkeleton } from "@/components/application/chat/toggle-card"

const ChatLoading = () => {
    return (
        <div className="p-6 space-y-4">
            <Skeleton className="w-[200px] h-10 bg-[#222]" />
            <div className="space-y-4">
                <ToggleCardSkeleton />
                <ToggleCardSkeleton />
                <ToggleCardSkeleton />
            </div>
        </div>
    )
}

export default ChatLoading