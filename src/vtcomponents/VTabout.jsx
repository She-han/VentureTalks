import React from "react";
import logo from "../assets/images/logo.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";
import '../index.css'

const About = () => {
  return (
    <div className="z-[10] py-6 mb-12 text-gray-900 dark:text-white h-auto" id="about">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col-reverse items-center px-10 md:px-20 mx-auto max-w-[1400px] sm:flex-row md:gap-6"
      >
        <div>

          <div className="w-[360px] md:w-[400px] p-2 md:p-0">
            <img
              src={logo}
              alt="propic"
              className="object-cover rounded-xl h-[350px] md:h-[400px] brightness-90 border-solid border-2 border-white"
            />
          </div>
        </div>

        <div>
          <div className="">
            <div className="my-4 text-gray-900 dark:text-gray-200 ">
              <h3 className="mb-8 text-2xl font-semibold lg:text-4xl">
                What is<span className="primary-text"> Venture Talks?</span>
              </h3>
              <p className="w-[100%] mx-auto leading-7 text-justify text-gray-800 dark:text-gray-200 font-medium text-lg ">
              "Venture Talks," curated by the Computer Science Students’ Community (CSSC) of the University of Ruhuna, is a 10-episode podcast series featuring distinguished individuals from the tech and computer science sectors. Each hour-long episode explores their success stories, industry insights, and the latest IT advancements. Available on social media as full episodes and short snippets, the program aims to elevate the university's reputation and enrich IT enthusiasts' knowledge of the industry.
              </p>
              
            </div>

            <div className="grid justify-center grid-cols-1 gap-2 my-12 place-items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-6 lg:gap-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-gray-200 dark:bg-gray-800  p-2 rounded-lg w-[200px]"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white md:text-4xl float">
                  10
                  <span className="primary-text">+</span>
                </h3>
                <span className="text-xs primary-text md:text-base">Episodes</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-gray-200 dark:bg-gray-800  p-2 rounded-lg w-[200px]"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white md:text-4xl float">
                  15<span className="primary-text">+</span>
                </h3>
                <p>
                  <span className="text-xs primary-text md:text-base">
                  Specialists
                  </span>
                </p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-gray-200 dark:bg-gray-800  p-2 rounded-lg w-[200px]"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white md:text-4xl float">
                  1000
                  <span className="primary-text">+</span>
                </h3>
                <p>
                  <span className="text-xs primary-text md:text-base">
                  Listeners
                  </span>
                </p>
              </motion.button>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
