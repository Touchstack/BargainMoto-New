import React, { useState } from "react";
import AppLogo from "../../assets/images/bargain-auto-logo.svg";

const Navbar = () => {
  return (
    <nav className="flex px-2 text-center font-Regular lg:pt-2 md:pt-8 sm:px-4 py-2.5 bg-[#8C394C]">
      <div className="container md:pl-25 flex-wrap justify-between items-center flex m-auto max-w-[1550px]">
        <a
          href="/"
          className="transition duration-500 ease-in-out hover:scale-110 flex items-center"
        >
          <img
            src={AppLogo}
            alt="App Logo"
            style={{ width: 88.727, height: 80.485 }}
          />
        </a>
        <ul className="flex-1 text-center text-lg">
          <li className="font-SemiBold list-none inline-block px-5 text-[#D5FFFF] hover:scale-105 duration-200 ml-40">
            <a href="/" className="">
              Home
            </a>
          </li>
          <li className="list-none inline-block px-5 text-[#FBFBFB]">
            <a href="/" className="">
              Sell a Car
            </a>
          </li>
          <li className="list-none inline-block px-5 text-[#FBFBFB]">
            <a href="/" className="">
              Buy a Car
            </a>
          </li>
          <li className="list-none inline-block px-5 text-[#FFF]">
            <a href="/" className="">
              Company
            </a>
          </li>
        </ul>
        {/* Menu End */}

        {/* Log In Button */}
        <ul className="flex items-center py-2 font-SemiBold text-lg">
          <p className="p-2">
            {" "}
            <li className="text-[#FFF] pr-5">Log In</li>{" "}
          </p>
          <button className="bg-[#FFF] text-[#8C394C] px-9 h-[50px] p-3 rounded-lg">
            <li>Sign Up</li>
          </button>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
