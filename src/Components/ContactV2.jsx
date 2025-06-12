import { useState } from "react";
import { motion } from "framer-motion";
import { CiUser, CiMail, CiLinkedin } from "react-icons/ci";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

const Contact = () => {
  const [contact, setContact] = useState("");

  return (
    <>
    <motion.h1
    className="mb-14 text-[#66666e] dark:text-[#757575] text-center mt-[10%] font-normal text-lg uppercase"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
  >
    Want to contact me?
  </motion.h1>
    <div className="mask-herov2 sticky top-0 max-h-screen pb-[15%]  w-full flex items-center justify-center
    bg-gradient-to-br from-[#0f0f0f] via-[#111] to-[#222] dark:from-[#fbfbfb] dark:to-white text-white
    [mask-image:url(https://tailwindcss.com/_next/static/media/mask.4b6d7838.png)]
   
    
    flex flex-col items-center justify-center mt-[5%] text-xl sm:text-3xl md:text-5xl">
      {/* Heading */}
     

      {/* Email */}
      <motion.a
        href="mailto:enis_zekiqi@hotmail.com"
        className="flex items-center transition-all mt-[30px] sm:mt-[80px] duration-300 z-[1000]"
        onMouseEnter={() => setContact("mail")}
        onMouseLeave={() => setContact("")}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.b
          className={`font-normal transition-all duration-300 ${
            contact === "user" || contact === "mail" || contact === "linkedin"
              ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)] scale-105 -mt-3 mr-2"
              : ""
          }`}
        >
          enis
        </motion.b>
        <motion.b
          className={`font-normal transition-all duration-300 ${
            contact === "user" ? "hidden" : contact === 'mail' ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)] scale-105 -mt-3':''
          }`}
        >
          _
        </motion.b>
        <motion.b
          className={`font-normal transition-all duration-300 ${
            contact === "user" || contact === "mail" || contact === "linkedin"
              ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)] scale-105 -mt-3 mr-3"
              : ""
          }`}
        >
          zekiqi
        </motion.b>
        <motion.b
          className={`font-light transition-all duration-300 ${
            contact === "mail"
              ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)] scale-105 -mt-3"
              : ""
          }`}
        >
          @hotmail.com
        </motion.b>
      </motion.a>

      {/* Icons */}
      <motion.div
        className="flex items-center gap-4 mt-[5%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* CiUser */}
        <motion.button
          variants={iconVariants}
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          onMouseEnter={() => setContact("user")}
            onMouseLeave={() => setContact("")}
            className="hidden sm:block"
        >
          <CiUser size={28} />
        </motion.button>

        {/* CiMail */}
        <motion.a
          href="mailto:enis_zekiqi@hotmail.com"
          variants={iconVariants}
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          onMouseEnter={() => setContact("mail")}
          onMouseLeave={() => setContact("")}
        >
          <CiMail size={28} />
        </motion.a>

        {/* CiLinkedin */}
        <motion.a
          href="https://www.linkedin.com/in/enis-zekiqi-090b692b9/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          onMouseEnter={() => setContact("linkedin")}
          onMouseLeave={() => setContact("")}
        >
          <CiLinkedin size={28} />
        </motion.a>
      </motion.div>
    </div>
    </>
  );
};

export default Contact;
