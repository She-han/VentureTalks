import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi"; // Import icons from react-icons

const DarkModeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const rootElement = document.documentElement;

    if (isLightMode) {
      rootElement.classList.remove("dark"); // Enable light mode
    } else {
      rootElement.classList.add("dark"); // Enable dark mode
    }
  }, [isLightMode]);

  const toggleMode = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center rounded-full md:mr-0 ">
      <div
        onClick={toggleMode}
        className="relative w-20 h-10 p-1 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-700"
      >
        {/* Icons for Light and Dark Mode */}
        <div className="absolute flex items-center justify-between w-full h-full px-3 pb-2 text-2xl text-gray-500 dark:text-gray-300">
          <FiSun className={`transition-opacity ${isLightMode ? "opacity-100 " : "opacity-0"}`} />
          <FiMoon className={`transition-opacity ${!isLightMode ? "opacity-100 " : "opacity-0"}`} />
        </div>

        {/* Animated Ball */}
        <motion.div
          className="absolute w-8 h-8 bg-white rounded-full shadow-md dark:bg-gray-400"
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            left: isLightMode ? "calc(100% - 2rem)" : "0",
          }}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
