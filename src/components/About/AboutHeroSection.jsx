import React, { useState } from "react";
import AppLogo from "../../assets/images/bargain-auto-logo.svg";
const AboutHeroSection = () => {
  return (
    <div>
     <nav className="flex px-2 text-center font-Regular lg:pt-2 md:pt-8 sm:px-4 py-40 bg-[#8C394C]">
       <div className="container md:pl-25 flex-wrap justify-between items-center flex m-auto max-w-[1550px]">  
         <a
          href="/"
          className="transition duration-500 ease-in-out hover:scale-110 flex items-center"
        >
          <img src={AppLogo} alt="App Logo" style={{ width: 88.727, height: 80.485 }} />
        </a>
          <ul className="flex-1 text-center text-lg">
         <li className="list-none inline-block text-[#FFF] px-5 ml-40">
            <a
              href="https://portal.bargainmotogh.com/car-listings"
              className=""
            >
              Home
            </a>
          </li>
          <li className="list-none inline-block px-5 text-[#FBFBFB]">
            <a
              href="https://portal.bargainmotogh.com/car-listings"
              className=""
            >
              Sell a Car
            </a>
          </li>
          <li className="list-none inline-block px-5 text-[#FBFBFB]">
            <a
              href="https://portal.bargainmotogh.com/my-listings"
              className=""
            >
              Buy a Car
            </a>
          </li>
          <li className="list-none inline-block text-[#EC970F] hover:scale-105 duration-200 px-5">
            <a href="/company" className="">
              Company
            </a>
          </li>
          </ul> 
         {/* Menu End */}
        
       {/* Log In Button */}
       <ul className='flex items-center py-2 font-SemiBold text-lg'> 
      <p className='p-2'> <li className="text-[#FFF] pr-5">Log In</li> </p>
      <button className='bg-[#FFF] text-[#8C394C] px-9 h-[50px] p-3 rounded-lg'><li>Sign Up</li></button>
      </ul>
      <div className="m-12 font-Bold text-5xl max-w-[800px] p-9 text-[#FFFFFF]"> 
       Get to know about us & meet our amazing team 
        </div>
        </div>
        </nav> 
        </div>
  )
}
export default AboutHeroSection

