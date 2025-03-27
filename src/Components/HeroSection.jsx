import { useState, useEffect } from "react";
import Carousel from "../utils/Carousel";
import Carousel2 from "../utils/Carousel2";
import { motion,AnimatePresence } from "motion/react";
import ThemeToggle from "../utils/ThemeToggle";
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

    const [menuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = (e) => {
        setMenuOpen(prev =>!(prev))
        e.Pagination()
    }
    
    return ( 
        <div className="flex flex-col ">
            <div className="gradient2 w-full h-screen  flex flex-col lg:flex-row items-center">
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleMenu={toggleMenu}/>
                
                {/* Left and Right content container */}
                <div className="flex w-full items-center justify-between pl-14">
                    <div className="text-left text-black dark:text-white transition-colors duration-300 w-[40%]">
                        <h1 className="text-4xl font-bold opacity-0">
                            Welcome to My Portfolio
                        </h1>
                        <motion.p className="mt-4 text-lg opacity-0">
                            Equal parts creative developer & designer.
                        </motion.p>
                    </div>

                    {/* Content on the right of gradient */}
                    <div className="text-right w-[30%] h-full hidden lg:flex flex-col gap-0 justify-between transition-colors duration-300 dark:bg-[#000] dark:text-white bg-white text-black p-6">
                        <p className="mt-2">
                        <Carousel/>
                        </p>
                        <div className="secondCard bg-[#5C54F9] w-fit mt-10 -mb-5 flex flex-col items-center justify-center rounded-lg px-3 py-3 -mx-2.5">
                           <Carousel2/>
                        </div>
                    </div>
                </div>
            </div>

            <p className="w-[55%] sm:w-[45%] md:w-[40%] dark:bg-[#000] bg-[#fff] transition-colors duration-300 h-[205px] sm:h-[160px] -mt-[200px] sm:-mt-38 ml-[2%] p-6 rounded-tr-2xl">
                <div className="relative">
                    <svg className="svg-corner corner-content-box-two rotate-270 -mt-13 transition-colors duration-300 -ml-3 dark:fill-black fill-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_310_2)">
                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" ></path>
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
                            className="mt-5 text-[26px] sm:text-[22px] md:text-[26px] w-[50%] sm:w-[90%] md:w-[100%] ml-4 sm:ml-5.5 md:ml-2.5 lg:text-3xl font-semibold xl:text-5xl opacity-0">
                            <motion.p variants={item} initial="hidden" animate="visible">
                          Equal parts creative
                            </motion.p>
                            <motion.p variants={item} initial="hidden" animate="visible">
                           developer & designer
                            </motion.p>
                        </motion.p>
                </div>
            </p>
            <div className="flex lg:hidden flex-col items-center gap-0 justify-center w-full mt-[28%]">
            <div className="ml-0 w-full">
                  <Carousel />
            </div>
<div className="secondCard bg-[#5C54F9] ml-2 sm:ml-0 w-[85%] mt-10 -mb-5 flex flex-col items-center justify-center rounded-xl px-3 py-3 -mx-2.5">
                           <Carousel2/>
                        </div>    
            </div>
        </div>
    );
}

export default HeroSection;

function Navbar({setMenuOpen,menuOpen,toggleMenu}) {


const themeColor = localStorage.getItem("theme");


    return (
<div className="fixed top-0 left-0 z-[500] w-auto h-auto pointer-events-none">
            <div className="flex flex-col">
                <div className="line -mt-4 bg-[#fff] dark:bg-[#000] transition-colors duration-300 h-[10px] md:h-[20px] w-screen"></div>
                <div className="-mt  ">
<div className="flex items-center justify-between pr-0 md:justify-stretch w-[100%] bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent gap-4">
                        <div className="relative">
                            <h1 className="nametext p-6 bg-[#fff] dark:bg-[#000] transition-colors duration-300 w-fit font-bold text-lg">
                                Enis Zekiqi
                            </h1>
                            <div className="absolute">
                                <svg
                                className="svg-corner corner-logo-box-two ml-[138px] -mt-[76px] transition-colors duration-300 dark:fill-black fill-white"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_310_2)">
                                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z"></path>
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
                            className="navbarselection hidden md:flex items-center font-medium gap-4 blu py-4 px-5 text-[#000] shadow-2xl">
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
                            <ThemeToggle/>
                        </motion.div>
                        <div className="flex flex-col md:hidden 123 bg-white dark:bg-[#000] p-6">
                            <div
                            className="relative flex flex-col pr- rounded-full"
                            style={{ backgroundColor: menuOpen ? '#5C54F9' : '' }}
                            >
                            <button
                                onClick={toggleMenu}
                                className={`py-1 px-2.5 rounded-full border font-semibold cursor-pointer pointer-events-auto 
                                            ${menuOpen ? 'border-y border-b' : 'border border-black dark:border-white'}`}
                            >
                                {menuOpen ? 'Close' : 'Menu'}
                            </button>
                            </div>

                            <div className="absolute ">
                                 <svg
                                className="svg-corner rotate-90 mt-14 corner-logo-box-two ml-[51px] sm:-ml-[2.5px] transition-colors duration-300 dark:fill-black fill-white"
                                width="32"
                                height="32"
                                viewBox="0 0 30 30"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_310_2)">
                                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_310_2">
                                    <rect width="30" height="30" fill="white"></rect>
                                    </clipPath>
                                </defs>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {menuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                                        className="absolute top-0 left-0 w-[88%] h-[80%] mt-13 ml-9 rounded-2xl bg-[#5C54F9] dark:bg-[#5C54F9] 
             transition-all duration-300 flex flex-col gap-8 z-[1000] items-start p-4 border border-[#373297]"
                                    >
                                        <motion.div
                                            className="w-full flex flex-col gap-8 mt-5 pointer-events-auto"
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                hidden: { opacity: 1 },
                                                visible: {
                                                    opacity: 1,
                                                    transition: {
                                                        staggerChildren: 0.2, // Staggering effect between child animations
                                                    },
                                                },
                                            }}
                                        >
                                            {/** Defining motion for each anchor */}
                                            <motion.a
                                                href="#projects"
                                                onClick={toggleMenu}
                                                variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                                            >
                                                <h2 className="text-2xl font-semibold border-b text-white cursor-pointer">Projects</h2>
                                            </motion.a>

                                            <motion.a
                                                href="#about"
                                                onClick={toggleMenu}
                                                variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                                            >
                                                <h2 className="text-2xl font-semibold border-b text-white">About</h2>
                                            </motion.a>

                                            <motion.a
                                                href="#skills"
                                                onClick={toggleMenu}
                                                variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                                            >
                                                <h2 className="text-2xl font-semibold border-b text-white">Skills</h2>
                                            </motion.a>

                                            <motion.a
                                                href="#contact"
                                                onClick={toggleMenu}
                                                variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                                            >
                                                <h2 className="text-2xl font-semibold border-b text-white">Contact</h2>
                                            </motion.a>
                                        </motion.div>

                                        <motion.div
                                        initial={{opacity:0}}
                                            animate={{ opacity: 1, transition: {duration:0.5,delay:0.7} }}
                                            className="flex items-center gap-2 mt-[65%]">
                                            <div className="w-fit bg-white dark:bg-black pr-2 pl-2 pb-2.5 pt-2 rounded-full">
                                                <ThemeToggle />
                                            </div>
                                            <p className="dark:text-white w-[20%] text-black">
                                                {themeColor === 'dark' ? 'Dark Mode' : 'Light Mode'}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}
            </AnimatePresence>

                        </div>
                    </div>
                    <svg className="svg-corner corner-logo-box-two -mt-[1px] ml-9.5 transition-colors duration-300 dark:fill-black fill-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_310_2)">
                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_310_2">
                                <rect width="30" height="30" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="line bg-[#fff] dark:bg-[#000] transition-colors duration-300 h-screen w-[40px] -mt-10"></div>
            </div>
        </div>
    );
}
