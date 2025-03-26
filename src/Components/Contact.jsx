import { PiStarFour } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const animationControls = useAnimation();

  return (
    <div id="contact" className="flex items-center justify-center mt-[15%]">
      <div className="gradient mx-10 sm:mx-16 rounded-3xl mb-10 flex flex-col items-center lg:items-start justify-center lg:justify-start">
        <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl text-center text-white font-medium w-[100%] -mt-[15%] lg:mt-[15%] h-full  md:pl-16">
          Want to Collaborate something <b>awesome</b> together?
        </h1>
        <div className="w-full flex items-center lg:items-end justify-center lg:justify-end pr-0 lg:pr-16 mt-10 lg:mt-0">
          <a
            href="mailto:enis_zekiqi@hotmail.com" // Replace with your actual email
            className="text-center lg:text-end text-[#fbfbfb] hover:text-[#000] border-2 gap-4 border-[#fbfbfb] bg-transparent hover:bg-[#fbfbfb] mb-[10%] transition-colors duration-500 rounded-full p-3 flex items-center"
            onMouseEnter={() => animationControls.stop()}
            onMouseLeave={() => animationControls.start("rotate")}
          >
            <motion.div
              animate={animationControls}
              initial="rotate"
              variants={{
                rotate: {
                  rotate: [0, 360],
                  transition: {
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                  },
                },
                stop: { rotate: 0 },
              }}
              className="text-2xl"
            >
              <PiStarFour />
            </motion.div>

            <p className="text-lg font-semibold">Let's Talk</p>

            <motion.div
              animate={animationControls}
              initial="rotate"
              variants={{
                rotate: {
                  rotate: [0, 360],
                  transition: {
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                  },
                },
                stop: { rotate: 0 },
              }}
              className="text-2xl"
            >
              <PiStarFour />
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
