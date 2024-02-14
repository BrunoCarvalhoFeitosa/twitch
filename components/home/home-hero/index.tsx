// @ts-nocheck
"use client"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules"
import { streamer_info } from "@/utils"

export const HomeHero = () => {
    const progressCircle = useRef<SVGSVGElement | null>(null)
    const progressContent = useRef<HTMLSpanElement | null>(null)

    const onAutoplayTimeLeft = (s, time: any, progress: any) => {
        progressCircle.current?.style.setProperty('--progress', String(1 - progress))
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }

    return (
        <section className="xl:pl-20 py-12 overflow-hidden">
            <div className="w-[95%] mx-auto">
                <Swiper
                    navigation={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={false}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    modules={[Navigation, Autoplay, EffectCoverflow]}
                    breakpoints={{
                        640: {
                          slidesPerView: 2
                        },
                        768: {
                          slidesPerView: 3
                        },
                        1024: {
                          slidesPerView: 4
                        },
                    }}
                    coverflowEffect={{
                        rotate: 25,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                    }}
                >
                    {streamer_info.map((streamer, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative flex items-center justify-center w-full md:w-[290px] h-[280px] 2xl:w-full 2xl:h-[280px] bg-zinc-700">
                                <div className="absolute top-2 right-2 py-1 px-2 bg-red-700 rounded-full text-xs">
                                    Live
                                </div>
                                {/* <div className="absolute bottom-0 w-full h-[50%] bg-black p-3">
                                    <div className="flex justify-between items-center gap-x-3">
                                        <div>
                                            <h4 className="text-sm text-white">
                                                {streamer.name}
                                            </h4>
                                        </div>
                                        <div className="flex items-center gap-x-1">
                                            {streamer.tags.map((tag, index) => (
                                                <div key={index} className="py-1 px-2 rounded-full bg-gray-800 text-[10px]">
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs">
                                            {streamer.spectators}
                                        </div>
                                    </div>
                                    
                                    <div className="mt-3">
                                        <p className="text-xs">
                                            {streamer.text}
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20" />
                        </svg>
                        <span ref={progressContent} />
                    </div>
                </Swiper>
            </div>
        </section>
    )
}