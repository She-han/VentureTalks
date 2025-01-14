import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { HiOutlineInformationCircle } from "react-icons/hi2";
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Autoplay } from "swiper/modules";

const Team = () => {
  return (
    <div className="py-12 mt-16 mb-8" id="team">
      <div className="flex flex-col items-center justify-center mt-5 mb-10 mx-auto max-w-[80%] text-center">
        <h2 className="text-2xl text-gray-900 dark:text-gray-200 lg:text-4xl">
          Latest<span> Episodes</span>
        </h2>
        <p className="mt-2 text-white dark:text-gray-400"></p>
      </div>

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col items-center justify-between "
      >
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[FreeMode, Autoplay]}
          className="max-w-[81%] h-[350px]  "
        >
          <div className="px-4">
            <SwiperSlide>
              <div className="gap-2 mx-auto">
                <div className=" p-3 m-2 bg-blue-800 dark:bg-[rgba(2,35,95,0.295)] shadow-gray-800  cursor-pointer group rounded-xl shadow-lg dark:shadow-gray-300 ">
                  <div className="duration-300">
                    {/* YouTube Video Embed */}
                    <iframe
                      width="250"
                      height="160"
                      src="https://www.youtube.co/embed/DZLZUPyXcQA?si=psal-ng1KU_YWEXa"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    {/* Text Content */}
                    <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">
                      Episode 01
                    </h3>
                    <p className="mt-1 text-base font-normal text-left text-white dark:text-gray-400 opacity-90">
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
                          href="/explore"
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
                          href="/explore"
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
            <SwiperSlide>
              <div className="gap-2 mx-auto">
                <div className=" p-3 m-2 bg-blue-800 dark:bg-[rgba(2,35,95,0.295)] shadow-gray-800  cursor-pointer group rounded-xl shadow-lg dark:shadow-gray-300 ">
                  <div className="duration-300">
                    {/* YouTube Video Embed */}
                    <iframe
                      width="250"
                      height="160"
                      src="https://www.youtube.co/embed/DZLZUPyXcQA?si=psal-ng1KU_YWEXa"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    {/* Text Content */}
                    <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">
                      Episode 01
                    </h3>
                    <p className="mt-1 text-base font-normal text-left text-white dark:text-gray-400 opacity-90">
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
                          href="/explore"
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
                          href="/explore"
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
            <SwiperSlide>
              <div className="gap-2 mx-auto">
                <div className=" p-3 m-2 bg-blue-800 dark:bg-[rgba(2,35,95,0.295)] shadow-gray-800  cursor-pointer group rounded-xl shadow-lg dark:shadow-gray-300 ">
                  <div className="duration-300">
                    {/* YouTube Video Embed */}
                    <iframe
                      width="250"
                      height="160"
                      src="https://www.youtube.co/embed/DZLZUPyXcQA?si=psal-ng1KU_YWEXa"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    {/* Text Content */}
                    <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">
                      Episode 01
                    </h3>
                    <p className="mt-1 text-base font-normal text-left text-white dark:text-gray-400 opacity-90">
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
                          href="/explore"
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
                          href="/explore"
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
            <SwiperSlide>
              <div className="gap-2 mx-auto">
                <div className=" p-3 m-2 bg-blue-800 dark:bg-[rgba(2,35,95,0.295)] shadow-gray-800  cursor-pointer group rounded-xl shadow-lg dark:shadow-gray-300 ">
                  <div className="duration-300">
                    {/* YouTube Video Embed */}
                    <iframe
                      width="250"
                      height="160"
                      src="https://www.youtube.co/embed/DZLZUPyXcQA?si=psal-ng1KU_YWEXa"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    {/* Text Content */}
                    <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">
                      Episode 01
                    </h3>
                    <p className="mt-1 text-base font-normal text-left text-white dark:text-gray-400 opacity-90">
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
                          href="/explore"
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
                          href="/explore"
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
            <SwiperSlide>
              <div className="gap-2 mx-auto">
                <div className=" p-3 m-2 bg-blue-800 dark:bg-[rgba(2,35,95,0.295)] shadow-gray-800  cursor-pointer group rounded-xl shadow-lg dark:shadow-gray-300 ">
                  <div className="duration-300">
                    {/* YouTube Video Embed */}
                    <iframe
                      width="250"
                      height="160"
                      src="https://www.youtube.co/embed/DZLZUPyXcQA?si=psal-ng1KU_YWEXa"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    {/* Text Content */}
                    <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">
                      Episode 01
                    </h3>
                    <p className="mt-1 text-base font-normal text-left text-white dark:text-gray-400 opacity-90">
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
                          href="/explore"
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
                          href="/explore"
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
            <SwiperSlide>
              <div className="gap-2 mx-auto">
                <div className=" p-3 m-2 bg-blue-800 dark:bg-[rgba(2,35,95,0.295)] shadow-gray-800  cursor-pointer group rounded-xl shadow-lg dark:shadow-gray-300 ">
                  <div className="duration-300">
                    {/* YouTube Video Embed */}
                    <iframe
                      width="250"
                      height="160"
                      src="https://www.youtube.co/embed/DZLZUPyXcQA?si=psal-ng1KU_YWEXa"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    {/* Text Content */}
                    <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">
                      Episode 01
                    </h3>
                    <p className="mt-1 text-base font-normal text-left text-white dark:text-gray-400 opacity-90">
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
                          href="/explore"
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
                          href="/explore"
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
            <SwiperSlide>
              <div className="gap-2 mx-auto">
                <div className=" p-3 m-2 bg-blue-800 dark:bg-[rgba(2,35,95,0.295)] shadow-gray-800  cursor-pointer group rounded-xl shadow-lg dark:shadow-gray-300 ">
                  <div className="duration-300">
                    {/* YouTube Video Embed */}
                    <iframe
                      width="250"
                      height="160"
                      src="https://www.youtube.co/embed/DZLZUPyXcQA?si=psal-ng1KU_YWEXa"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    {/* Text Content */}
                    <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">
                      Episode 01
                    </h3>
                    <p className="mt-1 text-base font-normal text-left text-white dark:text-gray-400 opacity-90">
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
                          href="/explore"
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
                          href="/explore"
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
          </div>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Team;
