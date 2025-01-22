import React, { Suspense, lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Lazy load components for performance
const Navbar = lazy(() => import("../vtcomponents/VTnavbar"));
const Footer = lazy(() => import("../vtcomponents/VTfooter"));
const Episodes = lazy(() => import("../vtcomponents/Episodes"));

// Reusable Slide Component
const VideoSlide = React.memo(({ title, description, videoId, downloadLink, infoLink }) => (
  <div className="gap-2 mx-auto">
    <div className="p-4 bg-blue-800 dark:bg-[rgba(2,35,95,0.295)] cursor-pointer group rounded-xl">
      <div className="duration-300">
        {/* Lazy Load YouTube Iframe */}
        <iframe
          loading="lazy"
          width="100%"
          height="650"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        {/* Text Content */}
        <h3 className="mt-4 text-lg text-left text-white dark:text-gray-300">{title}</h3>
        <p className="mt-1 font-normal text-left text-white dark:text-gray-400 opacity-90">{description}</p>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-3 text-2xl text-white dark:text-gray-400 md:gap-4 lg:gap-8 lg:text-3xl">
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <a className="hover:text-[#FD4101]" href={downloadLink} role="button">
              <HiOutlineDownload />
            </a>
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <a className="hover:text-[#FD4101]" href={infoLink} role="button">
              <HiOutlineInformationCircle />
            </a>
          </motion.button>
        </div>
      </div>
    </div>
  </div>
));

// Main Component
const Explore = () => {
  const slidesData = [
    {
      title: "Episode 01",
      description: "How to Change System in Sri Lanka | Malinda Alahakoon",
      videoId: "",
      downloadLink: "https://www.linkedin.com/",
      infoLink: "https://www.linkedin.com/",
    },
    {
      title: "Episode 02",
      description: "How to Change System in Sri Lanka | Malinda Alahakoon",
      videoId: "",
      downloadLink: "https://www.linkedin.com/",
      infoLink: "https://www.linkedin.com/",
    },

    
  ];

  return (
    <div>
      {/* Lazy load Navbar */}
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <div className="py-12" id="team">
        <div className="flex items-center justify-center">
          <Swiper
            breakpoints={{
              300: { slidesPerView: 1, spaceBetween: 10 },
              700: { slidesPerView: 1, spaceBetween: 10 },
              1024: { slidesPerView: 1, spaceBetween: 10 },
            }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="max-w-[81%] shadow-lg dark:shadow-gray-300 rounded-xl px-4"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <VideoSlide {...slide} />
              </SwiperSlide>
            ))}
            <div className="absolute z-10 text-white transform -translate-y-1/2 top-1/2 left-4 swiper-button-prev">
              &#8249;
            </div>
            <div className="absolute z-10 text-white transform -translate-y-1/2 top-1/2 right-4 swiper-button-next">
              &#8250;
            </div>
          </Swiper>
        </div>
      </div>

      {/* Lazy load Footer and Episodes */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Episodes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Explore;
