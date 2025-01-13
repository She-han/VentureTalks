import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Gototop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const top = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className={
        visible
          ? "fixed bottom-[40px] right-[40px] p-3 bg-primary-color text-white rounded-full shadow-md group-hover:bg-indigo-600 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition ease-in-out"
          : "hidden"
      }
      onClick={top}
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default Gototop;
