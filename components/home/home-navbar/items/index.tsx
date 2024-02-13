"use client"
import { IoIosVideocam, IoMdInformationCircle, IoMdSettings, IoMdStar } from "react-icons/io"
import { BiSolidJoystick } from "react-icons/bi"
import { FaPeopleGroup } from "react-icons/fa6"

export const Items = () => {
    return (
        <div className="px-5">
            <ul className="my-6 flex flex-col gap-y-3 items-center justify-center">
                <li className="cursor-pointer">
                    <IoIosVideocam className="w-6 h-6 text-[#999] hover:text-purple-500" />
                </li>
                <li className="cursor-pointer">
                    <BiSolidJoystick className="w-6 h-6 text-[#999] hover:text-purple-500" />
                </li>
                <li className="cursor-pointer">
                    <FaPeopleGroup className="w-6 h-6 text-[#999] hover:text-purple-500" />
                </li>
                <li className="cursor-pointer">
                    <IoMdStar className="w-6 h-6 text-[#999] hover:text-purple-500" />
                </li>
                <li className="cursor-pointer">
                    <IoMdInformationCircle className="w-6 h-6 text-[#999] hover:text-purple-500" />
                </li>
                <li className="cursor-pointer">
                    <IoMdSettings className="w-6 h-6 text-[#999] hover:text-purple-500" />
                </li>
            </ul>
        </div>
    )
}