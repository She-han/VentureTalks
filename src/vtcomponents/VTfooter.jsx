import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
// Import your logo images
import ruh from "../assets/ruhuna.gif"; // Adjust path as needed
import cssc from "../assets/CSSC Logo.png"; // Adjust path as needed
import ventureLogo from "../assets/logoo.png"; // Your venture talks logo

const Footer = () => {
  return (
    <footer className="px-3 lg:px-20 xl:px-32 text-gray-300 py-12 bg-[rgba(2,35,95,1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]  md:rounded-t-[72px] xl:rounded-t-[108px]">
      <div className="max-w-screen-xl px-4 mx-auto">
        {/* Logo Partnership Section */}
        <div className="flex items-center justify-center pb-6 mb-8 border-b border-gray-700">
          <div className="flex items-center space-x-8">
            <img 
              src={ruh}
              alt="University of Ruhuna" 
              className="object-contain w-16 h-16 transition-opacity filter brightness-200 opacity-80 hover:opacity-100"
            />
            <div className="text-2xl text-gray-400">×</div>
            <img 
              src={cssc}
              alt="CSSC Logo" 
              className="object-contain w-16 h-16 transition-opacity filter brightness-200 opacity-80 hover:opacity-100"
            />
            <div className="text-2xl text-gray-400">×</div>
            <img 
              src={ventureLogo}
              alt="Venture Talks Logo" 
              className="object-contain w-16 h-16 transition-opacity filter brightness-200 opacity-80 hover:opacity-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center mb-4 md:justify-start">
              <img 
                src={ventureLogo}
                alt="Venture Talks Logo" 
                className="object-contain w-10 h-10 mr-3 filter brightness-200"
              />
              <h2 className="text-3xl font-semibold text-[#FD4101]">
                Venture Talks
              </h2>
            </div>
            <p className="mb-4 font-normal text-md">
              Inspiring tech enthusiasts and industry professionals through the
              journey of success in technology.
            </p>
            <div className="flex justify-center space-x-6 md:justify-start">
              <a
                href="https://web.facebook.com/csscuor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FD4101] transition-colors"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.youtube.com/@CSSC_RUHUNA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FD4101] transition-colors"
              >
                <FaYoutube size={30} />
              </a>
              <a
                href="https://www.instagram.com/csscuor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FD4101] transition-colors"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/csscuor/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FD4101] transition-colors"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Right Section (Contact Info) */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center mb-4 md:justify-end">
              <img 
                src={cssc}
                alt="CSSC Logo" 
                className="object-contain w-10 h-10 mr-3 filter brightness-200"
              />
              <h3 className="text-2xl font-medium">Contact Us</h3>
            </div>
            <p className="flex items-center justify-center mb-2 md:justify-end">
              <IoMdMail className="mr-2" size={20} />
              <a
                href="mailto:venturetalkscssc@gmail.com"
                className="font-normal hover:text-[#FD4101] transition-colors"
              >
                venturetalkscssc@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center mb-2 md:justify-end">
              <span className="mr-2">📞</span>
              <a 
                href="tel:+94762765844" 
                className="font-normal hover:text-[#FD4101] transition-colors"
              >
                +94 76 276 5844
              </a>
            </p>
            <div className="flex items-center justify-center mt-4 text-sm text-gray-400 md:justify-end">
              <img 
                src={ruh}
                alt="University of Ruhuna" 
                className="object-contain w-6 h-6 mr-2 filter brightness-200 opacity-60"
              />
              <span>University of Ruhuna</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-12 text-center border-t border-gray-700">
          <p className="mb-2 font-normal text-md">
            &copy; {new Date().getFullYear()} Venture Talks CSSC | All rights
            reserved.
          </p>
          <div className="flex items-center justify-center space-x-2 text-base font-normal">
            <span>created by</span>
            <a 
              href="https://web.facebook.com/akilashehan.induwara/"
              className="hover:text-[#FD4101] transition-colors"
            >
              <span>Shehan Induwara</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;