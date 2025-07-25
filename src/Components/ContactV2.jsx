import { motion } from "framer-motion";
import { CiMail, CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden  text-black dark:text-white px-6 py-12 sm:px-10 flex items-center sm:items-end justify-center sm:justify-between flex-wrap">

      {/* 💠 Floating Animated Blobs */}
      <motion.div
        className="w-20 h-20 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r 
                   from-blue-800 to-purple-800 blur-xl opacity-40
                   dark:from-blue-500 dark:to-purple-500 
                   absolute left-[15%] top-[40%] z-0"
        animate={{ scale: [1, 1.2, 1],x:[0,10,0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="w-16 h-16 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r 
                      from-green-800 to-cyan-800 blur-xl opacity-50
                   dark:from-green-500 dark:to-cyan-500 
                   absolute top-[30%] left-[30%] z-0"
        animate={{ x: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 📝 CTA Bottom-Left */}
      <motion.div
        className="z-10 mb-0 sm:mb-20"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className=" tracking-wider  mb-2 text-[#66666e] dark:text-[#757575] font-normal text-lg uppercase ">
          Got a project in mind?
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-center sm:text-start ">LET’S TALK</h1>
      </motion.div>

      {/* 🔗 Contact Links Bottom-Right */}
      <motion.div
        className="flex flex-col items-center sm:items-end gap-4 z-10 mb-10 sm:mb-20 text-right"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:enis_zekiqi@hotmail.com"
          className="flex items-center gap-2 text-lg hover:text-cyan-400 transition-all"
        >
          <CiMail size={24} /> enis_zekiqi@hotmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/enis-zekiqi-090b692b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg hover:text-cyan-400 transition-all"
        >
          <CiLinkedin size={24} /> LinkedIn
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
