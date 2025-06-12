import { useState, useEffect } from "react";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import { FaReact, FaCode, FaTools } from "react-icons/fa"; // Removed unnecessary icons
import { motion } from "motion/react";

const Skills = () => {
  const services = [
  {
    category: "Web Development",
    description: "Building robust, responsive websites using modern frameworks.",
    icon: <FaReact className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]" />, // Blue glow for React
    skills: ["React", "JavaScript", "TypeScript"],
  },
  {
    category: "Interactive Design",
    description: "Creating clean, user-friendly, and interactive interfaces.",
    icon: <SiTailwindcss className="text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]" />, // Cyan glow for Tailwind
    skills: ["Tailwind CSS", "UX/UI Design"],
  },
  {
    category: "Animation Motion",
    description: "Adding smooth animations to improve user experience.",
    icon: <SiFramer className="text-purple-500 drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]" />, // Purple glow for Framer Motion
    skills: ["Framer Motion", "GSAP"],
  },
  {
    category: "Additional Skills",
    description: "Tools and best practices for optimized development.",
    icon: <FaTools className="text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.7)]" />, // Yellow glow for tools
    skills: ["Git", "Libraries", " Optimization"],
  },
];
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsLargeScreen(mediaQuery.matches); // Initial check

    const handleResize = (e) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  
 const variants = {
    hidden: { marginRight: '-15px', scale: 0, opacity: 0, width: 0, height: 0 },
    visible: {
      marginRight: '8px',
      scale: 1,
      opacity: 1,
      width: isLargeScreen ? 120 : 'fit-content', // Adjust based on screen size
      height: isLargeScreen ? 100 : 'fit-content', // Adjust based on screen size
      transition: {
        duration: 1,
        delay: 0.5,
        type: 'spring',
        stiffness: 200,
        damping: 30,
      },
    },
  };

  return (
    <div id="skills"  className="flex flex-col items-center justify-center mt-[20%]">
      <p className="text-[#66666e] dark:text-[#757575] font-normal text-lg uppercase text-center mb-0 ">
        Skills & Services
      </p>

      <div className="relative z-10 mt-0 w-[70%]">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4  rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Animated Icon with Expanding Effect */}
              <motion.div
                className="bg-transparent  text-black dark:text-white p-2 rounded-full flex items-center justify-center transition-all duration-500"
                initial={{ width: 40, height: 40 }}
                whileInView={{ width: 60, height: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
              </motion.div>

              {/* Category Title with Icon Inline */}
                  <motion.h3
  
  className="mt-4 text-black dark:text-white transition-colors duration-300 text-xl md:text-5xl lg:text-7xl font-bold flex items-center"
                  >
  {service.category.split(' ')[0]}
   <motion.span
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className="border border-black dark:border-[#fff] rounded-2xl py-2 px-4 md:py-4 md:px-6 flex-shrink-0"
    >
      <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.7,duration:1}}}>{service.icon}</motion.div>
    </motion.span>

  {service.category.split(' ')[1]}
</motion.h3>




              {/* Description and Skills */}
              <p className="text-black dark:text-white text-xs sm:text-sm mb-2 mt-2 text-center ">{service.description}</p>
              <div className="flex gap-2 ">
                {service.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#000000a2] dark:bg-[#ffffff20] transition-colors duration-300 text-white text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
