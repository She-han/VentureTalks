import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const slidesData = [
  {
    id: 1,
    videoSrc: "",
    title: "Episode 01",
    description: "How to Change System in Sri Lanka | Malinda Alahakoon",
  },
  {
    id: 1,
    videoSrc: "",
    title: "Episode 01",
    description: "How to Change System in Sri Lanka | Malinda Alahakoon",
  },
  {
    id: 2,
    videoSrc: "",
    title: "Episode 01",
    description: "How to Change System in Sri Lanka | Malinda Alahakoon",
  },
  {
    id: 3,
    videoSrc: "",
    title: "Episode 01",
    description: "How to Change System in Sri Lanka | Malinda Alahakoon",
  },
  {
    id: 4,
    videoSrc: "",
    title: "Episode 01",
    description: "How to Change System in Sri Lanka | Malinda Alahakoon",
  },
  {
    id: 5,
    videoSrc: "",
    title: "Episode 01",
    description: "How to Change System in Sri Lanka | Malinda Alahakoon",
  },
  
];

const Team = () => {
  return (
    <div className="py-12 mt-16 mb-8" id="team">
      <div className="flex flex-col items-center justify-center mt-5 mb-10 mx-auto max-w-[82%] text-center">
        <h2 className="text-2xl text-gray-900 dark:text-gray-200 lg:text-4xl">
          Latest<span> Episodes</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-between"
      >
        <Swiper
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 10 },
            700: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1300: { slidesPerView: 4, spaceBetween: 25 },
          }}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[FreeMode, Autoplay]}
          className="max-w-[81%] h-[350px]"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="gap-2 mx-auto">
                <div className="p-3 m-2 bg-blue-800 dark:bg-[rgba(2,35,95,0.295)] shadow-lg rounded-xl">
                  <iframe
                    width="250"
                    height="160"
                    src={slide.videoSrc}
                    title={`YouTube video player ${slide.id}`}
                    cookiepolicy="single_host_origin"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">
                    {slide.title}
                  </h3>
                  <p className="mt-1 text-base font-normal text-left text-white dark:text-gray-400 opacity-90">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 mt-3 text-2xl text-white dark:text-gray-400">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <HiOutlineDownload className="hover:text-[#FD4101]" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <HiOutlineInformationCircle className="hover:text-[#FD4101]" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Team;
