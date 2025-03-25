import { useState, useEffect } from "react";
import Carousel from "../utils/Carousel";
import Carousel2 from "../utils/Carousel2";
import { motion } from "motion/react";
const HeroSection = () => {

    
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5
    }
  }
}
  
const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
      opacity: 1,
      transition: {
        duration:1,ease:'easeInOut'
    }
  }
}
    return ( 
        <div className="flex flex-col">
            <div className="gradient w-full h-screen flex ">
                <Navbar />
                
                {/* Left and Right content container */}
                <div className="flex w-full items-center justify-between pl-14">
                    <div className="text-left text-white w-[40%]">
                        <h1 className="text-4xl font-bold opacity-0">
                            Welcome to My Portfolio
                        </h1>
                        <motion.p className="mt-4 text-lg opacity-0">
                            Equal parts creative developer & designer.
                        </motion.p>
                    </div>

                    {/* Content on the right of gradient */}
                    <div className="text-right w-[30%] h-full flex flex-col gap-8 justify-between bg-[#000] text-white p-6">
                        <p className="mt-2">
                        <Carousel/>
                        </p>
                        <div className="secondCard bg-[#5C54F9] mt-10 flex flex-col items-center justify-center rounded-lg px-3 py-3 -mx-2.5">
                           <Carousel2/>
                        </div>
                    </div>
                </div>
            </div>

            <p className="w-[32%] bg-[#000] h-[100px] -mt-24 ml-[2%] p-6 rounded-tr-2xl">
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
                    <motion.p
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className="mt-4 text-4xl opacity-0">
                            <motion.p variants={item} initial="hidden" animate="visible">
                          Equal parts creative
                            </motion.p>
                            <motion.p variants={item} initial="hidden" animate="visible">
                           developer & designer
                            </motion.p>
                        </motion.p>
                </div>
            </p>
        </div>
    );
}

export default HeroSection;

function Navbar() {
    return (
<div className="fixed top-0 left-0 z-[500] w-auto h-auto pointer-events-none">
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
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{opacity:1,x:0,transition:{duration:1,ease:'easeInOut'}}}
                            className="navbarselection flex items-center font-medium gap-4 blu py-4 px-5 text-[#000] shadow-2xl">
                            <a href="#projects " className="cursor-pointer">
                         <p className="text-md hover:text-[#00000086] transition-colors duration-300">Projects</p>
                        </a>
                            <a href="#about">
                                <p className="text-md hover:text-[#00000086] transition-colors duration-300">About</p></a>
                            <a href="#skills">
                            <p className="text-md hover:text-[#00000086] transition-colors duration-300">Skills</p>
                              </a>
                            <a href="#contact">
                                <p className="text-md hover:text-[#00000086] transition-colors duration-300">Contact</p>
                            </a>
                        </motion.div>
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
