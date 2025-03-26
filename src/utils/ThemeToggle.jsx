import { useEffect, useState } from "react";
import { IoIosSunny , IoIosMoon } from "react-icons/io"; // Correct icons
import { motion } from "framer-motion"; // Correct import

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="pointer-events-auto -mb-1 border border-[#000] rounded-full p-1">
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 30,
              },
            }}
          >
            <IoIosSunny className="w-[22px] h-[22px] -mb-1" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 30,
              },
            }}
          >
            <IoIosMoon className="w-[22px] h-[22px] -mb-1" />
          </motion.div>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
