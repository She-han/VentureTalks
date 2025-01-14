import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ items, from, to }) => {
  return (
    <div className="flex overflow-hidden MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {items.map((item, index) => {
          return (
            <div
              className="flex items-center justify-center h-20 pr-20 text-6xl font-semibold text-gray-400 uppercase md:text-8xl whitespace-nowrap opacity-30"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {items.map((item, index) => {
          return (
            <div
              className="flex items-center justify-center h-20 pr-20 text-6xl font-semibold text-gray-400 uppercase md:text-8xl whitespace-nowrap opacity-30"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const Marquee = () => {
  const upperMarquee = [
    "venture talks",
    "cssc",
    "university of ruhuna",
    "podcast",
    "tech talks",
    "Motivation",
    "Tech Insights",
    "Inspiring Stories",
    "Interactive Learning",
    "Visionaries",
    "Emerging Technologies",
  ];

  const lowerMarquee = [
    "Cloud Computing",
    "Blockchain",
    "Artificial Intelligence",
    "Data Science",
    "Cybersecurity",
    "trading",
    "smartcontracts",
    "flutter",
    "business",
    "stock market",
    "crypto",
  ];

  return (
    <div className="container mx-auto overflow-hidden">
      <MarqueeItem items={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem items={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;
