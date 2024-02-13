"use client"
import { toast } from "sonner"
import { useTransition } from "react"
import { onBlock, onUnblock } from "@/actions/block"
import { onFollow, onUnfollow } from "@/actions/follow"
import { Button } from "@/components/ui/button"

interface ActionsProps {
  isFollowing: boolean
  isBlocked: boolean
  userId: string
}

export const Actions = ({ isFollowing, isBlocked, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition()

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => toast.success(`You are now following ${data.following.username}`))
        .catch(() => toast.error("Something went wrong"))
    })
  }

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => toast.success(`You have unfollowed ${data.following.username}`))
        .catch(() => toast.error("Something went wrong"))
    })
  }

  const handleFollowOrUnfollowOnClick = () => {
    if (isFollowing) {
      handleUnfollow()
    } else {
      handleFollow()
    }
  }

  const handleUnblock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) => toast.success(`Unblocked the user ${data.blocked.username}`))
        .catch(() => toast.error("Something went wrong"))
    })
  }

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => toast.success(`Unblocked the user ${data.blocked.username}`))
        .catch(() => toast.error("Something went wrong"))
    })
  }

  const handleBlockOrUnblockOnClick = () => {
    if (isBlocked) {
        handleUnblock()
    } else {
        handleBlock()
    }
  }

  return (
    <>
        <Button 
            disabled={isPending} 
            onClick={handleFollowOrUnfollowOnClick} 
            variant="default"
        >
            {isFollowing ? "Unfollow" : "Follow"}
        </Button>
        <Button
            disabled={isPending}
            onClick={handleBlockOrUnblockOnClick}
            variant="outline"
            className="bg-red-600 hover:bg-red-700"
        >
            {isBlocked ? "Unblock" : "Block"}
        </Button>
    </>
  )
}