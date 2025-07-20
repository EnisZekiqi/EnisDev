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
    <section className="relative min-h-screen flex items-center justify-start bg-white dark:bg-black overflow-hidden px-6">
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {/* 🔵 Top floating glow orbs */}
      <motion.div
        className="w-20 h-20  sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-blue-800 to-purple-800 blur-xl opacity-40 dark:from-blue-500 dark:to-purple-500 absolute right-[5%] top-[20%] z-0"
        animate={{ scale: [1, 1.2, 1], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="w-18 h-18 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-green-800 to-cyan-800 blur-xl opacity-50 dark:from-green-500 dark:to-cyan-500 absolute top-[30%] sm:top-[42%] right-[40%] sm:right-[20%] z-0"
        animate={{ x: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 🔙 Faded large background text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{opacity:1,transition:{duration:0.5,delay:0.7}}}
        className="blur-xs sm:blur-sm absolute z-[100]">
          <h2 className=" text-[13vw] font-bold opacity-80  sm:opacity-20 text-start pointer-events-none select-none  text-gray-800 dark:text-white/20 text-balance leading-tight">
        Dev Story in Code
      </h2>

    </motion.div>
      {/* 🔠 Main Portfolio text */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
        className="relative z-10 text-[6.5vw] font-extrabold text-black dark:text-white text-start">
        Visionary
      </motion.h1>

      {/* 🔻 Triangle diagonal overlay */}
      <motion.div
      initial={{opacity:0,x:-10,y:-10}}
      animate={{opacity:1,x:0,y:0,transition:{duration:0.5,delay:0.2}}}
        className="absolute top-[48%] left-[59%] sm:left-[29%] shadow-[0_0_40px_#fff] dark:shadow-[0_0_40px_#000] rotate-35 w-40 bg-white dark:bg-black h-36 z-[100] sm:z-20"
        style={{
          borderLeft: '1px solid #343434',
        }}
      >
        {/* 🏷️ Name label inside the triangle */}
        <p className="absolute bottom-25 right-18 -rotate-35 text-xs text-black dark:text-white opacity-100 dark:opacity-60 tracking-wide">
          Enis Zekiqi
        </p>
      </motion.div>

      {/* 📦 Bottom-right stat card */}
     <div className="absolute bottom-2  text-center   right-6 flex gap-6 border border-[#343434] bg-white  text-black dark:text-white dark:bg-[#343434]/20 dark:text-white p-4 rounded-xl shadow-lg z-30 text-sm">
        <div>
          <p className="font-semibold">15+ </p>
          <p className="opacity-100 dark:opacity-60 text-xs">Projects</p>
        </div>
        <div>
          <p className="font-semibold">197+</p>
          <p className="opacity-100 dark:opacity-60 text-xs">Contributions</p>
        </div>
        <div>
          <p className="font-semibold">110k+</p>
          <p className="opacity-100 dark:opacity-60 text-xs">Lines of Code</p>
        </div>
      </div>
    </section>
  );
};

function Navbar({menuOpen,toggleMenu}) {


    const themeColor = localStorage.getItem("theme");
    
    
  return (
    <>
    <div className=" fixed top-0 left-0 z-[500] w-auto pointer-events-none hidden md:flex justify-start items-center">
    <h1 className='nametext p-6 bg-white dark:bg-black transition-colors duration-300 w-fit font-bold text-lg'>Enis Zekiqi</h1>
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
    </div>
          <div className=" flex md:hidden justify-between items-center p-6 fixed top-0 bg-white dark:bg-black transition-colors duration-300 left-0 w-full z-[1000]">
          <h1 className='nametext  bg-white dark:bg-black transition-colors duration-300 w-fit font-bold text-lg'>Enis Zekiqi</h1>

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
