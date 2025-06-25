import React, { useMemo } from "react";
import me from "../assets/images/mike.png";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

const Hero = React.memo(() => {
  const blobAnimationValues = useMemo(
    () =>
      `
      M442,314Q414,378,356.5,412.5Q299,447,233,444.5Q167,442,113,404.5Q59,367,44,303.5Q29,240,52.5,178.5Q76,117,127,90Q178,63,244.5,56.5Q311,50,358.5,90.5Q406,131,440,190.5Q474,250,442,314Z;
      M433,303Q397,356,352,399.5Q307,443,239,440.5Q171,438,118.5,396Q66,354,53.5,293.5Q41,233,64.5,176Q88,119,136,92.5Q184,66,242,55Q300,44,351.5,77.5Q403,111,440.5,180.5Q478,250,433,303Z;
      M430.5,316.5Q414,383,362.5,423.5Q311,464,243,450Q175,436,127.5,393Q80,350,47,300Q14,250,42,189.5Q70,129,123.5,97.5Q177,66,239.5,58Q302,50,357.5,84.5Q413,119,436.5,184.5Q460,250,430.5,316.5Z;
      M427,307.5Q395,365,342.5,392Q290,419,228.5,437Q167,455,109.5,417Q52,379,44,314Q36,249,61.5,189Q87,129,133.5,88.5Q180,48,241,47.5Q302,47,348,84Q394,121,424.5,185.5Q455,250,427,307.5Z;
      M423,305Q391,360,346,400Q301,440,235,446.5Q169,453,115.5,415Q62,377,53,313.5Q44,250,67.5,193.5Q91,137,135,96.5Q179,56,244,48.5Q309,41,353,81Q397,121,426,185.5Q455,250,423,305Z;
      M442,314Q414,378,356.5,412.5Q299,447,233,444.5Q167,442,113,404.5Q59,367,44,303.5Q29,240,52.5,178.5Q76,117,127,90Q178,63,244.5,56.5Q311,50,358.5,90.5Q406,131,440,190.5Q474,250,442,314Z
    `,
    []
  );

  // Function to scroll to form section
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <div className=" lg:my-12 sm:my-24 max-w-[81%] mx-auto flex flex-col-reverse sm:flex-row justify-between pt-0 md:pt-0 bg-gray-100 dark:bg-gray-900">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex-col mx-auto my-auto md:mx-0"
      >
        <p className="text-5xl font-bold text-gray-900 dark:text-gray-200 md:text-8xl">
          Venture Talks
        </p>
        <h1 className="text-3xl font-bold md:text-4xl sm:text-3xl lg:text-5xl md:py-4">
          <TypeAnimation
            sequence={["Tech Talks That Matter", 1000, "Stories That Inspire", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="mt-4 text-lg font-bold text-gray-500 md:text-2xl sm:text-xl">
          Computer Science Students' Community <br /> University of Ruhuna
        </p>
        
        {/* Social Icons */}
        <div className="flex gap-6 text-3xl md:gap-8 lg:gap-8 md:text-4xl lg:text-5xl my-7 text-[#2563eb]">
          {[
            {
              link: "https://www.linkedin.com/company/csscuor/posts/?feedView=all",
              icon: <AiFillLinkedin />,
            },
            {
              link: "https://www.youtube.com/@CSSC_RUHUNA",
              icon: <AiFillYoutube />,
            },
            {
              link: "https://web.facebook.com/csscuor/",
              icon: <AiFillFacebook />,
            },
            {
              link: "https://www.instagram.com/csscuor/",
              icon: <AiFillInstagram />,
            },
          ].map(({ link, icon }, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={link} role="button" target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </motion.button>
          ))}
        </div>

        {/* Availability Button */}
        <motion.button
          onClick={scrollToForm}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 mt-4 text-lg font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Let us know when you are available
        </motion.button>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative flex items-center justify-center my-auto"
      >
        {/* SVG Background */}
        <svg
          viewBox="0 0 460 460"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          className="absolute z-10"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(37, 99, 235)" />
              <stop offset="100%" stopColor="rgb(234, 88, 12)" />
            </linearGradient>
          </defs>
          <path id="blob" fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values={blobAnimationValues}
            />
          </path>
        </svg>

        <img
          className="w-[350px] sm:w-[450px] md:w-[500px] z-30 relative"
          src={me}
          alt="profile"
        />
      </motion.div>
    </div>
  );
});

export default Hero;