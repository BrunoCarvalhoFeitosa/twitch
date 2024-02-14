"use client"
import { useState, useRef, useTransition, ElementRef } from "react"
import { IngressInput } from "livekit-server-sdk"
import { createIngress } from "@/actions/ingress"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangleIcon } from "lucide-react"
import { toast } from "sonner"

const RTMP = String(IngressInput.RTMP_INPUT)
const WHIP = String(IngressInput.WHIP_INPUT)

type IngressType = typeof RTMP | typeof WHIP

export const ConnectModal = () => {
    const closeRef = useRef<ElementRef<"button">>(null)
    const [isPending, startTransition] = useTransition()
    const [ingressType, setIngressType] = useState<IngressType>(RTMP)

    const onSubmit = () => {
        startTransition(() => {
            createIngress(parseInt(ingressType))
                .then(() => {
                    toast.success("Ingress created.")
                    closeRef.current?.click()
                })
                .catch(() => toast.error("Something went wrong."))
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">
                    Generate connection
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-950">
                <DialogHeader>
                    <DialogTitle>
                        Generate connection
                    </DialogTitle>
                </DialogHeader>
                <Select
                    disabled={isPending}
                    value={ingressType}
                    onValueChange={(value) => setIngressType(value)}
                >
                    <SelectTrigger className="w-full bg-zinc-950 outline-none ring-0 ring-offset-0">
                        <SelectValue placeholder="Ingress Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-950">
                        <SelectItem value={RTMP}>
                            RTMP
                        </SelectItem>
                        <SelectItem value={WHIP}>
                            WHIP
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Alert className="bg-zinc-950">
                    <AlertTriangleIcon className="w-4 h-4" />
                    <AlertTitle>
                        Warning
                    </AlertTitle>
                    <AlertDescription>
                        This action will reset all active streams using the current connection
                    </AlertDescription>
                </Alert>
                <div className="flex justify-between items-center">
                    <DialogClose ref={closeRef} asChild>
                        <Button
                            variant="ghost"
                            className="hover:bg-transparent"
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        disabled={isPending}
                        variant="default"
                        onClick={onSubmit}
                    >
                        Generate
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}