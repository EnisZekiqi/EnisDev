import { motion,AnimatePresence } from "framer-motion";
import ThemeToggle from "../utils/ThemeToggle";
import { useState,useCallback,useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import tanstack from '../assets/tanstack.svg'
import react from '../assets/react.svg'
import nextjs from '../assets/nextjsv2.svg'
import React from "react";
const HeroSectionV3 = () => {

const [menuOpen, setMenuOpen] = useState(false)
const [showText,setShowText]=useState('')

    const toggleMenu = (e) => {
        setMenuOpen(prev =>!(prev))
    }


  const learnMore = [
  {
    id: 1,
    text: "Plain React & Vite",
    link: "react",
    description:
      "React felt different from plain JavaScript at first, but switching to Vite made the workflow faster and way more enjoyable.",
    img: react
  },
  {
    id: 2,
    text: "Next.js — My First Ecosystem",
    link: "nextjs",
    description:
      "Next.js helped me level up with SSR, CSR, ISR, routing, and server components. It made me understand the full power of the React ecosystem.",
    img: nextjs
  },
  {
    id: 3,
    text: "TanStack Start",
    link: "tanstack",
    description:
      "TanStack Start mixes the best of React and Next.js. Flexible routing and SSR options make it fun to build with.",
    img: tanstack
  }
];


  const toggleShow = useCallback((info) => {
    setShowText((prev)=>info)
  }, [])





  const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};


 return (
  <section
     className="
        relative min-h-screen flex items-center justify-start overflow-hidden px-6
        bg-[radial-gradient(circle_at_center,theme(colors.white),theme(colors.gray.100)_20%)]
        dark:bg-[radial-gradient(circle_at_center,#050505,#000_20%)]
      "
    >
      {/* 🔵 Layer 1: Grid lines */}
      <div
        className="
          absolute inset-0 z-0
          bg-[repeating-linear-gradient(-95deg,rgba(0,0,0,0.04)_0,rgba(0,0,0,0.04)_0.5px,transparent_1px,transparent_20px)]
          dark:bg-[repeating-linear-gradient(-95deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_0.5px,transparent_1px,transparent_20px)]
          animate-gridMove
        "
      ></div>
  <div
       className="
        top-light
          absolute top-0 left-0 w-[90%] h-[35%] z-5
          bg-[conic-gradient(from_180deg_at_50%_50%,rgba(0,255,200,0.15),rgba(0,150,255,0.1),rgba(255,0,200,0.1),rgba(0,255,200,0.15))]
          blur-[80px]
          mix-blend-hard-light
          opacity-60
          animate-auroraWave
        "
      ></div>
      {/* 🌈 Layer 2: Side glow */}
      <div
        className="
          absolute top-0 bottom-0 left-[-10%] right-[-10%] z-1
          bg-[radial-gradient(circle_at_20%_center,rgba(0,255,200,0.02),transparent_40%),radial-gradient(circle_at_80%_center,rgba(0,255,200,0.04),transparent_40%)]
          blur-[40px]
          animate-glow
        "
      ></div>

      {/* 🌈 Layer 3: Aurora top wave */}

      {/* 🔽 Bottom fade-out mask */}
      <div
        className="
          absolute bottom-0 w-full h-[25%] z-20
          bg-gradient-to-b from-transparent to-white
          dark:to-black
          pointer-events-none
        "
      ></div>

      {/* ====== Content ====== */}
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* 🔙 Large faded background text */}
    <AnimatePresence mode='wait'>
      {showText ?
      <motion.div
      key={showText}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:0.3}}
      className="h-full"
      >
          {learnMore
                .filter((example) => example.link === showText) // Filter by Text Animation
                .map((example) => (
                  <span className="flex flex-col items-start">
                   <div className="flex items-center gap-2">
                     <h1 className="font-semibold text-3xl sm:text-4xl text-white uppercase">{example.link}</h1>
                     <img src={example.img} className="w-14 h-14" alt="" />
                   </div>
       <motion.p
        key={example.link}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full text-md md:text-lg text-start lg:text-2xl font-light mt-10 w-[80%] lg:w-[60%] text-black dark:text-[#fff]/70 z-10"
      >
        {example.description}
      </motion.p>

      <motion.button
      initial={{opacity:0}}
       animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:0.3,delay:1.5}}
      className="text-white bg-black dark:text-black dark:bg-white z-[100] rounded-full p-2 mt-10 cursor-pointer" onClick={()=>setShowText('')}>Go Back</motion.button>
                  </span>
                ))}
                
        </motion.div>
      : (
      <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.7 } }}
        className="absolute z-[100] blur-xs sm:blur-sm"
      >
        <h2
          className="
            text-[15vw] sm:text-[13vw] font-bold opacity-80 sm:opacity-20 
            text-start pointer-events-none select-none 
            text-gray-800 dark:text-white/20 leading-tight text-balance
          "
        >
          Dev Story in Code
        </h2>
      </motion.div>

      {/* 🔠 Main Heading */}
     <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="relative uppercase  z-10 text-[7.5vw] sm:text-[6.3vw] font-extrabold text-black dark:text-white/80 text-start flex flex-col leading-[0.9]"
>
  <span className="mb-4">
    Front
    <em className="lowercase italic text-[7vw] sm:text-[6vw] font-light ml-1 ">end</em>
  </span>
  <span>Developer</span>
</motion.h1>



      {/* 🔻 Triangle element */}

      {/* 📦 Bottom-right stats */}
        <div
        className="
          absolute bottom-[70%] right-[35%] sm:right-[20%] flex gap-4 p-4 rounded-xl shadow-lg z-30 text-sm
        "
      >
        <img src={react}  className=" w-10 h-10 sm:w-20 sm:h-20" alt="" />
      </div>
       <div
        className="
          absolute bottom-[55%] right-12 flex gap-4 p-4 rounded-xl shadow-lg z-30 text-sm
        "
      >
        <img src={tanstack} className="w-14 h-14 sm:w-24 sm:h-24 rotate-15"  alt="" />
      </div>
      <div
        className="
          absolute bottom-[30%] right-[20%] sm:bottom-[35%] sm:right-[15%]  flex gap-4 p-4 rounded-xl shadow-lg z-30 text-sm
        "
      >
        <img src={nextjs} className="w-10 h-10 sm:w-20 sm:h-20 -rotate-[20deg]"  alt="" />
      </div>
     
      </>
      )}
      </AnimatePresence>
      <div
        className="
          absolute  bottom-2 right-0 sm:right-6 flex flex-col gap-4 p-4 rounded-xl shadow-lg text-sm
           w-full max-w-sm
          z-[100]
        "
      >
        
       {learnMore.map((item)=>(

        <span key={item.id} onClick={()=>toggleShow(item.link)} className="pt-2 cursor-pointer pb-2 border-b border-[#343434] w-full pointer-events-auto flex items-center justify-between">
          <p className="text-sm font-light hover:text-white/80 transition-colors duration-300">• {item.text}</p>
                   <span className="rounded-full bg-gray-200 dark:bg-[#343434] p-1.5 sm:p-3"><FiArrowUpRight/></span>
          
        </span>
       ))
        }
      </div>
    </section>
);

};

function Navbar({menuOpen,toggleMenu}) {


    const themeColor = localStorage.getItem("theme");
    
    
  return (
    <>
    <div className=" fixed bg-white dark:bg-black rounded-3xl  top-0 left-0 z-[500] w-auto pointer-events-none hidden md:flex justify-start items-center">
    <h1 className='nametext p-6 bg-white dark:bg-black transition-colors duration-300 w-fit font-bold text-lg'>Enis Zekiqi</h1>
    <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{opacity:1,x:0,transition:{duration:1,ease:'easeInOut'}}}
                    className="navbarselection bg-white/50 dark:bg-black/20 hidden md:flex items-center font-medium gap-4 blu py-4 px-5 text-[#000] dark:text-white shadow-2xl">
                    <a href="#projects " className="cursor-pointer">
                 <p className="text-md font-light  hover:text-[#343434] transition-colors duration-300">Projects</p>
                </a>
                    <a href="#about">
                        <p className="text-md font-light hover:text-[#343434] transition-colors duration-300">About</p></a>
                    <a href="#skills">
                    <p className="text-md font-light  hover:text-[#343434]] transition-colors duration-300">Skills</p>
                      </a>
                    <a href="#contact">
                        <p className="text-md font-light  hover:text-[#343434] transition-colors duration-300">Contact</p>
                    </a>
                    <ThemeToggle/>
                </motion.div>
    </div>
          <div className=" flex md:hidden justify-between items-center p-6 fixed top-0 bg-white dark:bg-black transition-colors duration-300 left-0 w-full z-[1000]">
          <h1 className='nametext  transition-colors duration-300 w-fit font-bold text-lg'>Enis Zekiqi</h1>

          <div className="relative flex flex-col items-end">
            <button
              onClick={toggleMenu}
              className="py-1 px-2.5 rounded-full text-black border font-semibold cursor-pointer pointer-events-auto bg-transparent border-black dark:border-white relative z-[1010]"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
        
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  key="mobileMenu"
                  initial={{ clipPath: 'circle(0% at 90% 5%)' }}
                  animate={{ clipPath: 'circle(150% at 90% 5%)', transition: { duration: 0.6, ease: 'easeInOut' } }}
                  exit={{ clipPath: 'circle(0% at 90% 5%)', transition: { duration: 0.5, ease: 'easeInOut' } }}
                  className="fixed top-0 left-0 w-full h-screen bg-[#5C54F9] dark:bg-[#5C54F9] flex flex-col gap-8 p-8 z-[1000] text-white"
                >
                  <motion.div
                    className="mt-20 flex flex-col gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 1 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15,delay:1 },
                      },
                    }}
                  >
                    <motion.a
                      href="#projects"
                      onClick={toggleMenu}
                      variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                    >
                      <h2 className="text-2xl font-semibold border-b">Projects</h2>
                    </motion.a>
                    <motion.a
                      href="#about"
                      onClick={toggleMenu}
                      variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                    >
                      <h2 className="text-2xl font-semibold border-b">About</h2>
                    </motion.a>
                    <motion.a
                      href="#skills"
                      onClick={toggleMenu}
                      variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                    >
                      <h2 className="text-2xl font-semibold border-b">Skills</h2>
                    </motion.a>
                    <motion.a
                      href="#contact"
                      onClick={toggleMenu}
                      variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                    >
                      <h2 className="text-2xl font-semibold border-b">Contact</h2>
                    </motion.a>
                  </motion.div>
        
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.6 } }}
                    className="mt-auto flex items-center gap-2"
                  >
                    <div className="bg-white dark:bg-black pr-2 pl-2 py-2 rounded-full">
                      <ThemeToggle />
                    </div>
                    <p className="dark:text-white text-black">
                      {themeColor === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
    </>
        
        );
    };

export default HeroSectionV3;
