import React from 'react';
import Navbar from '../vtcomponents/VTnavbar';
import Footer from '../vtcomponents/VTfooter';
import Episodes from '../vtcomponents/Episodes';

import { Swiper, SwiperSlide } from "swiper/react";

import { HiOutlineInformationCircle } from "react-icons/hi2";
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Navigation } from "swiper/modules";

const Explore = () => {
  return (
    <div>
      <Navbar />

      <div className="py-12" id="team">
        <div className="flex items-center justify-center">
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[FreeMode, Navigation]}
            className="max-w-[81%] shadow-lg dark:shadow-gray-300 rounded-xl px-4"
          >
            <SwiperSlide >
              <div className="gap-2 mx-auto">
                <div className="p-4 bg-indigo-600 dark:bg-[rgba(2,35,95,0.295)] cursor-pointer group rounded-xl ">
                  <div className="duration-300">
                    {/* YouTube Video Embed */}
                    <iframe
                      width="100%"
                      height="650"
                      src="https://www.youtube.com/embed/DZLZUPyXcQA?si=psal-ng1KU_YWEXa"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>

                    {/* Text Content */}
                    <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">
                      Episode 01
                    </h3>
                    <p className="mt-1 font-normal text-left text-white dark:text-gray-400 opacity-90">
                      How to Change System in Sri Lanka | Malinda Alahakoon
                    </p>

                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-3 text-2xl text-white dark:text-gray-400 md:gap-4 lg:gap-8 lg:text-3xl">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          className="hover:text-[#FD4101]"
                          href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                          role="button"
                        >
                          <HiOutlineDownload />
                        </a>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          className="hover:text-[#FD4101]"
                          href="https://www.linkedin.com/"
                          role="button"
                        >
                          <HiOutlineInformationCircle />
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="gap-2 mx-auto">
                <div className="p-4  bg-indigo-600 dark:bg-[rgba(2,35,95,0.295)] cursor-pointer group rounded-xl ">
                  <div className="duration-300">
                    {/* YouTube Video Embed */}
                    <iframe
                      width="100%"
                      height="650"
                      src="https://www.youtube.com/embed/DZLZUPyXcQA?si=psal-ng1KU_YWEXa"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>

                    {/* Text Content */}
                    <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">
                      Episode 01
                    </h3>
                    <p className="mt-1 font-normal text-left text-white dark:text-gray-400 opacity-90">
                      How to Change System in Sri Lanka | Malinda Alahakoon
                    </p>

                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-3 text-2xl text-white dark:text-gray-400 md:gap-4 lg:gap-8 lg:text-3xl">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          className="hover:text-[#FD4101]"
                          href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                          role="button"
                        >
                          <HiOutlineDownload />
                        </a>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          className="hover:text-[#FD4101]"
                          href="https://www.linkedin.com/"
                          role="button"
                        >
                          <HiOutlineInformationCircle />
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="absolute z-10 text-white transform -translate-y-1/2 top-1/2 left-4 swiper-button-prev">
              &#8249;
            </div>
            <div className="absolute z-10 text-white transform -translate-y-1/2 top-1/2 right-4 swiper-button-next">
              &#8250;
            </div>
          </Swiper>
        </div>
      </div>

      <Episodes />
      <Footer />
    </div>
  );
};

export default Explore;
