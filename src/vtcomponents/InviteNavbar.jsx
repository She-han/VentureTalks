import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Slider.css";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className=" bg-opacity-95 text-gray-200  flex justify-between items-center  h-24 px-4 lg:px-20 xl:px-36 text-l top-0 z-[8] bg-[#02235f] shadow-[0_4px_30px_rgba(0,0,0,0.1)]  lg:rounded-b-[108px]">
      <Link
        to="/"
        className="m-2 text-2xl md:text-3xl lg:text-4xl font-bold text-[#FD4101] uppercase"
      >
        Venture Talks
      </Link>
      <ul className="text-xl font-medium lg:ml-[500px] md:flex hidden">
        <li className="p-3 ">
          <Link to="/invite01">Welcome!  Mr. Malinda,</Link>
        </li>

      </ul>

      <DarkModeToggle />

      <div onClick={handleNav} className="block md:hidden z-99">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-[9999] text-gray-900 dark:text-gray-100 fixed h-full left-0 top-0 w-[80%] border-r border-r-gray-200 dark:border-r-gray-900 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-90 bg-opacity-90 ease-in-out duration-500 blur-fil px-1 py-4"
            : "fixed left-[-100%] "
        }
      >
        <a href="/">
          <h1 className="m-4 text-4xl font-bold text-[#FD4101] ">
            VENTURE TALKS
          </h1>
        </a>

        <ul className="p-8 text-xl font-medium ">
          <li className="p-3 hover:text-[#2563eb] ">
            <Link to="/invite01">Welcome! Mr. Malinda,</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
