import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="px-3 lg:px-20 xl:px-32 text-gray-300 py-12 bg-[rgba(2,35,95,1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]  md:rounded-t-[72px] xl:rounded-t-[108px]">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-[#FD4101] mb-4">
              Venture Talks
            </h2>
            <p className="mb-4 font-normal text-md">
              Inspiring tech enthusiasts and industry professionals through the
              journey of success in technology.
            </p>
            <div className="flex justify-center space-x-6 md:justify-start">
              <a
                href="https://web.facebook.com/csscuor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FD4101]"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.youtube.com/@CSSC_RUHUNA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FD4101]"
              >
                <FaYoutube size={30} />
              </a>
              <a
                href="https://www.instagram.com/csscuor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FD4101]"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/csscuor/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FD4101]"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Right Section (Contact Info) */}
          <div className="text-center md:text-right">
            <h3 className="mb-4 text-2xl font-medium">Contact Us</h3>
            <p className="flex items-center justify-center mb-2 md:justify-end">
              <IoMdMail className="mr-2" size={20} />
              <a
                href="mailto:venturetalkscssc@gmail.com"
                className="font-normal"
              >
                venturetalkscssc@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center mb-2 md:justify-end">
              <span className="mr-2">📞</span>
              <a href="tel:+94 76 276 5844" className="font-normal">
                +94 76 276 5844
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-12 text-center border-t border-gray-700">
          <p className="font-normal text-md">
            &copy; {new Date().getFullYear()} Venture Talks CSSC | All rights
            reserved.
          </p>
          <p className="text-base font-normal">
            created by{" "}
            <a href="https://web.facebook.com/akilashehan.induwara/">
              <span>Shehan Induwara</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;