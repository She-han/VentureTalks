import React from "react";
import me from "../assets/images/mike.png";
import { AiFillLinkedin, AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

const Hero = () => {
  return (
    <div
      className="px-10 md:px-20 my-7 sm:my-24 max-w-[1400px] mx-auto flex flex-col-reverse sm:flex-row justify-between pt-40 md:pt-0 bg-gray-100 dark:bg-gray-900 "
      
    >
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-col mx-auto my-auto md:mx-0"
      >
         <div className="justify-none">
          <p className="text-5xl text-gray-900 dark:text-gray-200 md:text-8xl fond-bold ">
          Venture Talks
          </p>
        
          
   
        </div>
        
        <h1 className="text-3xl font-bold md:text-4xl sm:text-3xl lg:text-5xl md:py-4">
          <TypeAnimation
            sequence={[
              "Tech Talks That Matter",
              1000,
              "Stories That Inspire",
              1000,
           
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className="justify-none">
          <p className="mt-4 text-lg text-gray-500 md:text-2xl sm:text-xl fond-bold">
          Computer Science Students' Community <br/> University of Ruhuna
          </p>
        </div>


        <div className="flex justify-start gap-8 text-3xl md:gap-12 lg:gap-16 md:text-4xl lg:text-5xl my-7 text-[#6366f1] ">
          
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
           <a href="https://www.linkedin.com" role="button">
            <AiFillLinkedin />
            </a>
          </motion.button>
          

          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="https://www.youtube.com" role="button">
              {" "}
              <AiFillYoutube />
            </a>
          </motion.button>

          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="https://www.facebook.com" role="button">
              <AiFillFacebook />
            </a>
          </motion.button>

          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="https://www.instagram.com" role="button">
              <AiFillInstagram />
            </a>
          </motion.button>
        </div>


      </motion.div>

      <motion.div
  variants={fadeIn("left", 0.1)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: true, amount: 0.2 }}
  className="relative flex items-center justify-center my-auto"
>
  {/* SVG Background */}
  <div className="absolute z-10 flex items-center justify-center w-full h-full">
  <svg viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgb(79, 70, 229)" />
        <stop offset="100%" stopColor="rgb(234, 88, 12)" />
      </linearGradient>
    </defs>
    <path id="blob" fill="url(#gradient)">
      <animate 
        attributeName="d"
        dur="10s"
        repeatCount="indefinite"
        values="
          M442,314Q414,378,356.5,412.5Q299,447,233,444.5Q167,442,113,404.5Q59,367,44,303.5Q29,240,52.5,178.5Q76,117,127,90Q178,63,244.5,56.5Q311,50,358.5,90.5Q406,131,440,190.5Q474,250,442,314Z;

          M433,303Q397,356,352,399.5Q307,443,239,440.5Q171,438,118.5,396Q66,354,53.5,293.5Q41,233,64.5,176Q88,119,136,92.5Q184,66,242,55Q300,44,351.5,77.5Q403,111,440.5,180.5Q478,250,433,303Z;

          M430.5,316.5Q414,383,362.5,423.5Q311,464,243,450Q175,436,127.5,393Q80,350,47,300Q14,250,42,189.5Q70,129,123.5,97.5Q177,66,239.5,58Q302,50,357.5,84.5Q413,119,436.5,184.5Q460,250,430.5,316.5Z;

          M427,307.5Q395,365,342.5,392Q290,419,228.5,437Q167,455,109.5,417Q52,379,44,314Q36,249,61.5,189Q87,129,133.5,88.5Q180,48,241,47.5Q302,47,348,84Q394,121,424.5,185.5Q455,250,427,307.5Z;

          M423,305Q391,360,346,400Q301,440,235,446.5Q169,453,115.5,415Q62,377,53,313.5Q44,250,67.5,193.5Q91,137,135,96.5Q179,56,244,48.5Q309,41,353,81Q397,121,426,185.5Q455,250,423,305Z;

          M442,314Q414,378,356.5,412.5Q299,447,233,444.5Q167,442,113,404.5Q59,367,44,303.5Q29,240,52.5,178.5Q76,117,127,90Q178,63,244.5,56.5Q311,50,358.5,90.5Q406,131,440,190.5Q474,250,442,314Z
        "
      />
    </path>
  </svg>
</div>
<div className="absolute z-10 flex items-center justify-center w-full h-full blur-md">
  <svg viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgb(79, 70, 229)" />
        <stop offset="100%" stopColor="rgb(255, 195, 113)" />
      </linearGradient>
    </defs>
    <path id="blob" fill="url(#gradient)">
      <animate 
        attributeName="d"
        dur="10s"
        repeatCount="indefinite"
        values="
          M442,314Q414,378,356.5,412.5Q299,447,233,444.5Q167,442,113,404.5Q59,367,44,303.5Q29,240,52.5,178.5Q76,117,127,90Q178,63,244.5,56.5Q311,50,358.5,90.5Q406,131,440,190.5Q474,250,442,314Z;

          M433,303Q397,356,352,399.5Q307,443,239,440.5Q171,438,118.5,396Q66,354,53.5,293.5Q41,233,64.5,176Q88,119,136,92.5Q184,66,242,55Q300,44,351.5,77.5Q403,111,440.5,180.5Q478,250,433,303Z;

          M430.5,316.5Q414,383,362.5,423.5Q311,464,243,450Q175,436,127.5,393Q80,350,47,300Q14,250,42,189.5Q70,129,123.5,97.5Q177,66,239.5,58Q302,50,357.5,84.5Q413,119,436.5,184.5Q460,250,430.5,316.5Z;

          M427,307.5Q395,365,342.5,392Q290,419,228.5,437Q167,455,109.5,417Q52,379,44,314Q36,249,61.5,189Q87,129,133.5,88.5Q180,48,241,47.5Q302,47,348,84Q394,121,424.5,185.5Q455,250,427,307.5Z;

          M423,305Q391,360,346,400Q301,440,235,446.5Q169,453,115.5,415Q62,377,53,313.5Q44,250,67.5,193.5Q91,137,135,96.5Q179,56,244,48.5Q309,41,353,81Q397,121,426,185.5Q455,250,423,305Z;

          M442,314Q414,378,356.5,412.5Q299,447,233,444.5Q167,442,113,404.5Q59,367,44,303.5Q29,240,52.5,178.5Q76,117,127,90Q178,63,244.5,56.5Q311,50,358.5,90.5Q406,131,440,190.5Q474,250,442,314Z
        "
      />
    </path>
  </svg>
</div>


  {/* Foreground Image */}
  <img
    className="w-[350px] sm:w-[450px] md:w-[500px] z-30 relative"
    src={me}
    alt="profile"
  />
</motion.div>

    </div>
  );
};

export default Hero;
