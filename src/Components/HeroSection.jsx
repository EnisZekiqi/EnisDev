import { useState, useEffect } from "react";
import Carousel from "../utils/Carousel";

const HeroSection = () => {
    return ( 
        <div className="flex flex-col">
            <div className="gradient w-full h-screen flex ">
                <Navbar />
                
                {/* Left and Right content container */}
                <div className="flex w-full items-center justify-between pl-14">
                    <div className="text-left text-white w-[40%]">
                        <h1 className="text-4xl font-bold">
                            Welcome to My Portfolio
                        </h1>
                        <p className="mt-4 text-lg">
                            Equal parts creative developer & designer.
                        </p>
                    </div>

                    {/* Content on the right of gradient */}
                    <div className="text-right w-[40%] h-full bg-[#000] text-white p-6">
                        
                        <p className="text-2xl font-medium">Right Content</p>
                        <p className="mt-2">
                        <Carousel/>
                        </p>
                    </div>
                </div>
            </div>

            <p className="w-[30%] bg-[#000] h-[100px] -mt-24 ml-[2%] p-6 rounded-tr-2xl">
                <div className="relative">
                    <svg className="svg-corner corner-content-box-two rotate-270 -mt-13 -ml-3" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_310_2)">
                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_310_2">
                                <rect width="30" height="30" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>                
                </div>
                <div className="absolute">
                    <p className="p-4 text-2xl font-normal w-[70%]">
                        Equal parts creative developer & designer
                    </p>
                </div>
            </p>
        </div>
    );
}

export default HeroSection;

function Navbar() {
    return (
        <div className="fixed top-0 left-0">
            <div className="flex flex-col">
                <div className="line bg-[#000] h-[20px] w-screen"></div>
                <div className="-mt">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <h1 className="nametext p-6 bg-[#000] w-fit font-bold text-lg">
                                Enis Zekiqi
                            </h1>
                            <div className="absolute">
                                <svg className="svg-corner corner-logo-box-two ml-[138px] -mt-[76px]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_310_2)">
                                        <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_310_2">
                                            <rect width="30" height="30" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="navbarselection flex items-center font-medium gap-4 p-3 text-[#000] shadow-2xl">
                            <p className="text-md hover:text-[#00000086] transition-colors duration-300">Projects</p>
                            <p className="text-md hover:text-[#00000086] transition-colors duration-300">About</p>
                            <p className="text-md hover:text-[#00000086] transition-colors duration-300">Skills</p>
                            <p className="text-md hover:text-[#00000086] transition-colors duration-300">Contact</p>
                        </div>
                    </div>
                    <svg className="svg-corner corner-logo-box-two ml-10" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_310_2)">
                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_310_2">
                                <rect width="30" height="30" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="line bg-[#000] h-screen w-[40px] -mt-10"></div>
            </div>
        </div>
    );
}
