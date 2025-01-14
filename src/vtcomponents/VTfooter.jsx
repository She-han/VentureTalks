import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="px-3 lg:px-20 xl:px-32 text-gray-300 py-12 bg-[rgba(2,35,95,1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]  md:rounded-t-[72px] xl:rounded-t-[108px]">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-3">
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
                href="https://www.instagram.com"
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

          {/* Middle Section (Contact Info) */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-2xl font-medium">Contact Us</h3>
            <p className="flex items-center justify-center mb-2 md:justify-start">
              <IoMdMail className="mr-2 " size={20} />
              <a
                href="mailto:venturetalkscssc@gmail.com"
                className="font-normal "
              >
                venturetalkscssc@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center mb-2 md:justify-start">
              <span className="mr-2">📞</span>
              <a href="tel:+94123456789" className="font-normal ">
                +94 123 456 789
              </a>
            </p>
          </div>

          {/* Right Section (Links) */}
          <div className="text-center md:text-right">
            <h3 className="mb-4 text-2xl font-medium">Quick Links</h3>
            <ul className="space-y-2 font-normal">
              <li>
                <a href="/" className="hover:text-[#6366f1]">
                  Home
                </a>
              </li>
              <li>
                <a href="/join" className="hover:text-[#6366f1]">
                  Join
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#6366f1]">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#6366f1]">
                  Contact
                </a>
              </li>
              <li>
                <a href="/episodes" className="hover:text-[#6366f1]">
                  Episodes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-12 text-center border-t border-gray-700">
          <p className="font-normal text-md">
            &copy; {new Date().getFullYear()} Venture Talks CSSC. All rights
            reserved.
          </p>
          <p className="text-base font-normal ">
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
