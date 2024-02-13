"use client"

import { streamer_info } from "@/utils"

export const Streamers = () => {
    return (
        <div className="flex justify-center flex-1 w-full h-full bg-purple-800">
            {/* <div className="py-5 flex flex-col gap-y-3">
                {streamer_info.map((streamer, index) => (
                    <div key={index}>
                        <div className="relative w-9 h-9 bg-zinc-900 border-[2px] border-purple-600 rounded-full">
                            <div className="w-full h-full">
                                <img
                                    src={streamer.profileImage}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-600 animate-pulse" />
                        </div>
                    </div>
                ))}    
            </div> */}
        </div>
    )
}