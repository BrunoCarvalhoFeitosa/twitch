import { getSelf } from "@/lib/auth-service"
import { getStreamByUserId } from "@/lib/stream-service"
import { ConnectModal } from "@/components/application/keys/connect-modal"
import { UrlCard } from "@/components/application/keys/url-card"
import { KeyCard } from "@/components/application/keys/key-card"

const KeysPage = async () => {
    const self = await getSelf()
    const stream = await getStreamByUserId(self.id)

    if (!stream) {
        throw new Error("Stream not found")
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center gap-x-5 2xl:w-2/3">
                <h1 className="text-2xl font-bold">
                    Keys & URLs
                </h1>
                <ConnectModal />
            </div>
            <div className="space-y-4">
                <UrlCard value={stream.serverUrl} />
                <KeyCard value={stream.streamKey} />
            </div>
        </div>
    )
}
 
export default KeysPage