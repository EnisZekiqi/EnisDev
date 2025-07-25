import { motion,AnimatePresence } from "framer-motion";
import ThemeToggle from "../utils/ThemeToggle";
import { useState } from "react";
const HeroSectionV3 = () => {

const [menuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = (e) => {
        setMenuOpen(prev =>!(prev))
        e.Pagination()
    }

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
        className="relative  z-10 text-[7.5vw] sm:text-[6.3vw] font-extrabold text-black dark:text-white/80 text-start"
      >
        Designed to Build
      </motion.h1>

      {/* 🔻 Triangle element */}
     

      {/* 📦 Bottom-right stats */}
      <div
        className="
          absolute bottom-2 right-6 flex gap-6 p-4 rounded-xl shadow-lg z-30 text-sm
          border border-[#343434] bg-white text-black
          dark:bg-[#343434]/20 dark:text-white
        "
      >
        <div>
          <p className="font-semibold">15+</p>
          <p className="text-xs opacity-100 dark:opacity-60">Projects</p>
        </div>
        <div>
          <p className="font-semibold">197+</p>
          <p className="text-xs opacity-100 dark:opacity-60">Contributions</p>
        </div>
        <div>
          <p className="font-semibold">110k+</p>
          <p className="text-xs opacity-100 dark:opacity-60">Lines of Code</p>
        </div>
      </div>
    </section>
);

};

function Navbar({menuOpen,toggleMenu}) {


    const themeColor = localStorage.getItem("theme");
    
    
  return (
    <>
    <div className=" fixed bg-white dark:bg-black rounded-3xl  top-1 left-2 z-[500] w-auto pointer-events-none hidden md:flex justify-start items-center">
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
    }

export default HeroSectionV3;
