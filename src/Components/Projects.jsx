import { useMotionValue, motion,useSpring, useTransform,useScroll } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import dd from '../assets/dd.jpg'
import github from '../assets/9919.png'
import rr from '../assets/rr.jpg'
import { AiOutlineFire } from "react-icons/ai";
import travium from '../assets/travium.jpg'
import kazeanime from '../assets/KazeAnime.png'
const Projects = () => {
 

  return (
    <div
    id="projects"
    className="min-h-screen w-full px-8 flex flex-col justify-center mt-[21%]"
  >
    <p className="text-[#66666e] dark:text-[#757575] font-normal text-lg uppercase text-center mb-10">
      My work
    </p>
    <HoverImageLinks />
  </div>
  );
}
 
export default Projects;


const HoverImageLinks = () => {
  return (
    <section className="dark:bg-[#000] bg-white transition-colors duration-300 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
      <Link
          heading="Reactify"
          subheading="React Component Library"
          imgSrc={rr}
          href="https://reactify-c4a.pages.dev/"
          icon={<AiOutlineFire size={23} />}
        
        />
        <Link
          heading="DevTrove"
          subheading="Dev Tools & Resources"
          imgSrc={dd}
          href="https://dev-trove.vercel.app/"
          icon={<AiOutlineFire size={23} />}
        />
        <Link
          heading="Travium"
          subheading="Travel Explorer Project"
          imgSrc={travium}
          href="https://travium.vercel.app/"
        />
        <Link
          heading="KazeAnime"
          subheading="Anime & Manga Discovery"
          imgSrc={kazeanime}
          href="https://kaze-anime.vercel.app/"
        />
        
        
        <Link
          heading="GitHub"
          subheading="See more about me"
          imgSrc={github}
          href="https://github.com/EnisZekiqi"
        />
       
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href, icon, text }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
    >
      <motion.a
        href={href}
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center z-[400] justify-between border-b-2 border-[#000] dark:border-neutral-700 py-4 transition-colors duration-300 dark:hover:border-white hover:border-black md:py-8"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-[400] block text-2xl sm:text-4xl font-bold dark:text-[#9f9fac] text-[#000] transition-colors duration-300 group-hover-text-[#000] dark:group-hover:text-neutral-50 md:text-6xl"
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
            {icon && text && (
              <div className="absolute flex items-center gap-1 -top-6 text-sm p-0.5 bg-[#08CAED] rounded-xl text-black">
                {icon}
                {text}
              </div>
            )}
          </motion.span>
          <span className="relative z-[400] mt-2 block text-base dark:text-[#9f9fac] text-[#000] transition-colors duration-300 dark:group-hover:text-white">
            {subheading}
          </span>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-[400] h-24 w-32 rounded-lg object-contain md:h-48 md:w-64"
          alt={`Image representing a link for ${heading}`}
        />

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-[400] p-4"
        >
          <FiArrowRight className="text-5xl text-black dark:text-white" />
        </motion.div>
      </motion.a>
    </motion.div>
  );
};
