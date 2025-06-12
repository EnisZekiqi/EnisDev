import {  motion,
    useMotionTemplate,
    useScroll,
    useTransform,AnimatePresence } from 'framer-motion'; // Small fix here: should be from 'framer-motion'
import { useState,useRef } from 'react';
import ThemeToggle from "../utils/ThemeToggle";
import { ReactLenis } from "lenis/dist/lenis-react";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import caffe from '../assets/caffe.png'
import keyboard from '../assets/keyboard.png'
import chair from '../assets/chair.png'
import setup from '../assets/setup.png'
const HeroSectionV2 = () => {

const [menuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = (e) => {
        setMenuOpen(prev =>!(prev))
        e.Pagination()
    }



  return (
      <>
     <div className="bg-white dark:bg-black">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleMenu={toggleMenu}/>
        <Hero />
      </ReactLenis>
    </div>

      </>
  );
};

const SECTION_HEIGHT = 1500;


const Hero = () => {
    return (
      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        className="relative w-full"
      >

        <CenterImage/>

        <ParallaxImages />
  
        <div className="absolute bottom-0 left-0 right-0 h-96 mask-b-from-20% mask-b-to-80%" />
      </div>
    );
  };


 
  const CenterImage = () => {
    const { scrollY } = useScroll();
  
    const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  
    const backgroundSize = useTransform(
      scrollY,
      [0, SECTION_HEIGHT + 500],
      ["170%", "100%"]
    );
    const opacity = useTransform(
      scrollY,
      [SECTION_HEIGHT, SECTION_HEIGHT + 500],
      [1, 0]
    );
  
    return (
        <motion.div
        className="
        mask-hero sticky top-0 h-screen w-full flex items-center justify-center
        bg-gradient-to-br from-[#0f0f0f] via-[#111] to-[#222] dark:from-[#fbfbfb] dark:to-white text-white
        [mask-image:url(https://tailwindcss.com/_next/static/media/mask.4b6d7838.png)]
        mask-center mask-no-repeat
        mask-[length:300px] sm:mask-[length:400px] md:mask-[length:600px] lg:mask-[length:800px]
        max-[840px]:mask-none"
      
  style={{
    clipPath,
    backgroundSize,
    opacity,
  }}
>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center "
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white bg-clip-text">
            Enis Zekiqi
          </h1>
          <p className="mt-4 text-md sm:text-lg md:text-2xl font-light text-gray-300 w-[50%] sm:w-[70%] md:w-2/4 text-center">
          React & NextJs Developer | Animated & Responsive Design
          </p>
        </motion.div>
      </motion.div>
    );
  };
  
  const ParallaxImages = () => {
    return (
      <div className="mx-auto max-w-5xl px-4 pt-[200px] z-[1000]">
        <ParallaxImg
          src={setup}
          alt="And example of a space launch"
          start={-200}
          end={200}
          className="w-1/3"
        />
        <ParallaxImg
          src={keyboard}
          alt="An example of a space launch"
          start={200}
          end={-250}
          className="mx-auto w-2/3"
        />
        <ParallaxImg
          src={caffe}
          alt="Orbiting satellite"
          start={-200}
          end={200}
          className="ml-auto w-1/3"
        />
        <ParallaxImg
          src={chair}
          alt="Orbiting satellite"
          start={0}
          end={-500}
          className="ml-24 w-5/12"
        />
      </div>
    );
  };
  
  const ParallaxImg = ({ className, alt, src, start, end }) => {
    const ref = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: [`${start}px end`, `end ${end * -1}px`],
    });
  
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  
    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  
    return (
      <motion.img
        src={src}
        alt={alt}
        className={className}
        ref={ref}
        style={{ transform, opacity }}
      />
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
          <div className="flex md:hidden justify-between items-center p-6 relative z-[1000]">
          <h1 className='nametext  bg-white dark:bg-black transition-colors duration-300 w-fit font-bold text-lg'>Enis Zekiqi</h1>

          <div className="relative flex flex-col items-end">
            <button
              onClick={toggleMenu}
              className="py-1 px-2.5 rounded-full border font-semibold cursor-pointer pointer-events-auto border-black dark:border-white relative z-[1010]"
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

export default HeroSectionV2;
