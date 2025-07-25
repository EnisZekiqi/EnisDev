import { useState, useEffect } from "react";
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

  const text =
    "I am a web developer & designer based in Vushtrri-Kosovo. I specialize in Frontend Development, focusing on building interactive and quality websites.";



  return (
    <div id="about" className="relative flex flex-col items-center justify-center w-full mt-[15%]">
      <p className="text-[#66666e] dark:text-[#757575] font-normal text-lg uppercase text-center mb-12">
        About Me
      </p>

      {/* Abstract Animated Background Shapes */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-30">
       <motion.div
  className="w-20 h-20 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r 
             from-blue-800 to-purple-800 blur-lg 
             dark:from-blue-500 dark:to-purple-500"
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 5, repeat: Infinity }}
/>
<motion.div
  className="w-32 h-32 rounded-full bg-gradient-to-r 
             from-green-800 to-cyan-800 blur-lg absolute top-10 left-[20%] 
             dark:from-green-500 dark:to-cyan-500"
  animate={{ x: [0, 10, -10, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
/>

      </div>

      {/* Text Animation */}
      <motion.p
        className="relative text-md md:text-lg text-center lg:text-2xl font-medium mt-1 w-[80%] lg:w-[50%] text-black dark:text-[#fff] z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
        
      </motion.p>

      {/* Skills Section */}
      
    </div>
  );
};

export default About;
