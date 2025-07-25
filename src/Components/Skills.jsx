import { useState,useEffect } from "react";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import { FaReact, FaTools } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const services = [
    {
      category: "Web Development",
      description: "Building robust, responsive websites using modern frameworks.",
      icon: <FaReact className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]" />,
      skills: ["React", "JavaScript", "TypeScript"],
    },
    {
      category: "Interactive Design",
      description: "Creating clean, user-friendly, and interactive interfaces.",
      icon: <SiTailwindcss className="text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]" />,
      skills: ["Tailwind CSS", "UX/UI Design"],
    },
    {
      category: "Animation Motion",
      description: "Adding smooth animations to improve user experience.",
      icon: <SiFramer className="text-purple-500 drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]" />,
      skills: ["Framer Motion", "GSAP"],
    },
    {
      category: "Additional Skills",
      description: "Tools and best practices for optimized development.",
      icon: <FaTools className="text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.7)]" />,
      skills: ["Git", "Libraries", "Optimization"],
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
  const iconVariants = (isLargeScreen) => ({
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: isLargeScreen ? 1 : 0.8,
      opacity: 1,
      transition: {
        duration: isLargeScreen ? 1 : 0.5,
        type: isLargeScreen ? 'spring' : 'tween',
        stiffness: isLargeScreen ? 200 : 100,
        damping: isLargeScreen ? 30 : 20,
      },
    },
  });
  
  return (
    <div id="skills"  className="flex flex-col items-center justify-center mt-[15%]">
      <p className="text-[#757575] font-normal text-lg uppercase text-center mb-12">
        Skills & Services
      </p>

      <div className="relative z-10 mt-0 w-[70%]">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4  rounded-lg "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Animated Icon with Expanding Effect */}
              <motion.div
                className="bg-white dark:bg-black text-white p-2 rounded-full flex items-center justify-center transition-all duration-500"
                initial={{ width: 40, height: 40 }}
                whileInView={{ width: 60, height: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
              </motion.div>

              {/* Category Title with Icon Inline */}
              <motion.h3
  className="mt-4 text-white text-xl sm:text-3xl text-black dark:text-white md:text-7xl font-bold gap-0 flex items-center justify-center"
  layout
>
  {/* Left word (e.g., "Web") */}
  <motion.span
    layout
    initial={{ opacity: 0, x: 0 }}
    whileInView={{ opacity: 1, x: -20 }}
    viewport={{ once: true,amount: 0.2  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                  className="-mr-2 sm:-mr-1 text-black dark:text-white"
  >
    {service.category.split(' ')[0]}
  </motion.span>

  {/* Icon in center */}
  <motion.span
    layout
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.2 }}
    className="border border-black dark:border-[#fff] bg-black rounded-2xl px-4 py-2 sm:py-4 sm:px-6 flex-shrink-0 flex items-center justify-center"
  >
    {service.icon}
  </motion.span>

  {/* Right word (e.g., "Development") */}
  <motion.span
    layout
    initial={{ opacity: 0, x: 0 }}
    whileInView={{ opacity: 1, x: 20 }}
    viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                  className="-ml-3 sm:-ml-2 text-black dark:text-white"

  >
    {service.category.split(' ')[1]}
  </motion.span>
</motion.h3>






              {/* Description and Skills */}
              <p className="text-black dark:text-white text-center text-sm mb-2 mt-2">{service.description}</p>
              <div className="flex gap-2 flex-wrap">
                {service.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-black/70 dark:bg-[#ffffff20] text-white text-xs rounded-full"
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
