import { useState,useEffect } from "react";
import { motion } from "motion/react";
const About = () => {

     const containerVariants = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.5 * i },
    }),
    };

     const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

    const text = 'I am a web developer & designer based in Vushtrri-Kosovo.I specialize in Frontend Development,focusing on building interactive and quality websites'

    return ( 
        <div className="flex flex-col items-center justify-center w-full mt-[15%]">
            <p className="text-[#757575] font-normal text-lg uppercase text-center mb-12">About Me</p>
             <motion.p
        className="text-sm md:text-lg lg:text-xl font-light mt-1 w-[50%] text-[#f9f8f6]"
        variants={containerVariants}
        initial="hidden"
         whileInView="visible"
        viewport={{once:true}}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
                variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
        <br />
        <em
          className="font-light ml-1 text-sm text-[rgba(222,222,222,0.6)] underline decoration-solid cursor-pointer"
        >
          Create Goal
        </em>
        or
        <em
          className="font-light ml-1 text-sm text-[rgba(222,222,222,0.6)] underline decoration-solid cursor-pointer"
        >
          Proceed Analyzing without a Goal
        </em>
      </motion.p>
        </div>
     );
}
 
export default About;