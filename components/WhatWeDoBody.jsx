import {MdOutlineArrowForwardIos} from "react-icons/md"
import Link from "next/link";

const WhatWeDoBody = () => {
    return(
        <div className="mx-10 md:mx-28 lg:mx-44 font-ubuntu text-[#3c0c3e]/80">
            {/* Mobile Screen */}
            <div className="text-2xl font-bold lg:hidden">OUR</div>
            <div className="text-5xl font-bold lg:hidden">SERVICE</div>
            <div className="mt-8 flex flex-col space-y-6 pb-10 lg:hidden">
                <Link href="/whatwedo/content-marketing">
                    <div className="flex items-center border-b-2 border-dashed border-[#7a3d48] pb-3 hover:cursor-pointer">
                        <img className="w-[55px]" src="./image 32.svg" alt="Content Marketing"/>
                        <div className="ml-2 w-full">
                            <div className="text-lg font-bold text-[#7a3d48]">Content Marketing</div>
                            <div className="text-sm">Creative, Story and Production</div>
                        </div>
                        <div className="text-xl">
                            <MdOutlineArrowForwardIos/>
                        </div>
                    </div>
                </Link>
                <Link href="/whatwedo/community-management">
                    <div className="flex items-center border-b-2 border-dashed border-[#7a3d48] pb-3 hover:cursor-pointer">
                        <img className="w-[55px]" src="./image 33.svg" alt="Community Management"/>
                        <div className="ml-2 w-full">
                            <div className="text-lg font-bold text-[#7a3d48]">Community Management</div>
                            <div className="text-sm">Consumer Acquisition, Engangement and Retention</div>
                        </div>
                        <div className="text-xl">
                            <MdOutlineArrowForwardIos/>
                        </div>
                    </div>
                </Link>
                <Link href="/whatwedo/kol-marketing">
                    <div className="flex items-center border-b-2 border-dashed border-[#7a3d48] pb-3 hover:cursor-pointer">
                        <img className="w-[55px]" src="./image 34.svg" alt="KOL Marketing"/>
                        <div className="ml-2 w-full">
                            <div className="text-lg font-bold text-[#7a3d48]">KOL Marketing</div>
                            <div className="text-sm">End to End process from planning, executing and reporting</div>
                        </div>
                        <div className="text-xl">
                            <MdOutlineArrowForwardIos/>
                        </div>
                    </div>
                </Link>
                <Link href="/whatwedo/social-conditioning">
                    <div className="flex items-center border-b-2 border-dashed border-[#7a3d48] pb-3 hover:cursor-pointer">
                        <img className="w-[55px]" src="./image 35.svg" alt="Social Conditioning"/>
                        <div className="ml-2 w-full">
                            <div className="text-lg font-bold text-[#7a3d48]">Social Conditioning</div>
                            <div className="text-sm">Crisis management, strengthening brand image</div>
                        </div>
                        <div className="text-xl">
                            <MdOutlineArrowForwardIos/>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Large Screen */}
            <div className="hidden lg:flex space-x-4">
                <div className="w-full bg-yellow-500">INSERT CONTENT HERE</div>
                <div className="w-full">
                    <div className="text-2xl font-bold">OUR</div>
                    <div className="text-5xl font-bold">SERVICE</div>
                    <div className="mt-8 pb-10 flex flex-col space-y-6">
                        <Link href="/whatwedo/content-marketing">
                            <div className="flex items-center border-b-2 border-dashed border-[#7a3d48] pb-3 hover:cursor-pointer">
                                <img className="w-[55px]" src="./image 32.svg" alt="Content Marketing"/>
                                <div className="ml-2 w-full">
                                    <div className="text-lg font-bold text-[#7a3d48]">Content Marketing</div>
                                    <div className="text-sm">Creative, Story and Production</div>
                                </div>
                                <div className="text-xl">
                                    <MdOutlineArrowForwardIos/>
                                </div>
                            </div>
                        </Link>
                        <Link href="/whatwedo/community-management">
                            <div className="flex items-center  border-b-2 border-dashed border-[#7a3d48] pb-3 hover:cursor-pointer">
                                <img className="w-[55px]" src="./image 33.svg" alt="Community Management"/>
                                <div className="ml-2 w-full">
                                    <div className="text-lg font-bold text-[#7a3d48]">Community Management</div>
                                    <div className="text-sm">Consumer Acquisition, Engangement and Retention</div>
                                </div>
                                <div className="text-xl">
                                    <MdOutlineArrowForwardIos/>
                                </div>
                            </div>
                        </Link>
                        <Link href="/whatwedo/kol-marketing">
                            <div className="flex items-center  border-b-2 border-dashed border-[#7a3d48] pb-3 hover:cursor-pointer">
                                <img className="w-[55px]" src="./image 34.svg" alt="KOL Marketing"/>
                                <div className="ml-2 w-full">
                                    <div className="text-lg font-bold text-[#7a3d48]">KOL Marketing</div>
                                    <div className="text-sm">End to End process from planning, executing and reporting</div>
                                </div>
                                <div className="text-xl">
                                    <MdOutlineArrowForwardIos/>
                                </div>
                            </div>
                        </Link>
                        <Link href="/whatwedo/social-conditioning">
                            <div className="flex items-center  border-b-2 border-dashed border-[#7a3d48] pb-3 hover:cursor-pointer">
                                <img className="w-[55px]" src="./image 35.svg" alt="Social Conditioning"/>
                                <div className="ml-2 w-full">
                                    <div className="text-lg font-bold text-[#7a3d48]">Social Conditioning</div>
                                    <div className="text-sm">Crisis management, strengthening brand image</div>
                                </div>
                                <div className="text-xl">
                                    <MdOutlineArrowForwardIos/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoBody;