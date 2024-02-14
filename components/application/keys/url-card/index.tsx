import { CopyButton } from "@/components/application/keys/copy-button"
import { Input } from "@/components/ui/input"

interface UrlCardProps {
    value: string | null
}

export const UrlCard = ({ value }: UrlCardProps) => {
    return (
        <div className="mt-8 p-6 rounded-xl bg-[#222] 2xl:w-2/3">
            <div className="flex items-center gap-x-10">
                <div className="xl:w-[108px]">
                    <p className="font-bold">
                        Server URL
                    </p>
                </div>
                <div className="space-y-4 flex-1 w-full">
                    <div className="flex items-center gap-x-2 w-full">
                        <Input
                            disabled
                            placeholder="Server URL"
                            value={value || ""}
                        />
                        <CopyButton
                            value={value || ""}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}