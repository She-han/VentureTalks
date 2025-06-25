import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";
import { AiFillFacebook } from "react-icons/ai";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      className="relative flex items-center justify-center py-8 mt-4 md:mb-12 md:px-3"
      id="contact"
    >
      <div className="mx-auto  w-[82%]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Side: Google Map */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className="rounded-lg overflow-hidden w-full h-[300px] md:h-[400px] lg:h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.399161387324!2d80.57371417480084!3d5.939593994044815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13904aaa6ab35%3A0xd4d8a1376614f3a4!2sDepartment%20of%20Computer%20Science!5e0!3m2!1sen!2slk!4v1736065692829!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Right Side: Contact Details */}
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col justify-around p-4 bg-gray-200 dark:bg-gray-800 rounded-xl md:p-8"
          >
            <div>
              <h1 className="text-2xl text-gray-900 dark:text-white lg:text-4xl">
                Contact<span> Us</span>
              </h1>
              <p className="my-4 text-base text-gray-700 dark:text-gray-400">
                Get in touch
              </p>
            </div>

            {/* Location Section */}
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-400">
              <HiLocationMarker className="w-14 h-14 md:w-10 md:h-10" />
              <div className="ml-4 text-sm tracking-wide sm:text-base">
                <p>Department of Computer Science, University of Ruhuna</p>
              </div>
            </div>

            {/* Facebook Section */}
            <div className="flex items-center mt-6 text-[40px] text-gray-700 dark:text-gray-400">
              <AiFillFacebook />
              <div className="ml-4 text-sm tracking-wide sm:text-base">
                <a href="https://web.facebook.com/csscuor">
                  Computer Science Students' Community
                </a>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-400">
              <HiMail className="w-8 h-8 md:w-10 md:h-10" />
              <div className="ml-4 text-sm tracking-wide sm:text-base">
                <a
                  href="mailto:venturetalkscssc@gmail.com"
                  className="cursor-pointer"
                >
                  venturetalkscssc@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-400">
              <HiPhone className="w-8 h-8 md:w-10 md:h-10" />
              <div className="ml-4 text-sm tracking-wide sm:text-base">
                <a href="tel:+94123456789" className="cursor-pointer">
                  +94 76 276 5844
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
