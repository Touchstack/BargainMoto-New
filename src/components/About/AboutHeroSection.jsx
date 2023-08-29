import React, { useState } from "react";
import AppLogo from "../../assets/images/bargain-auto-logo.svg";
import Navbar from "../Navbar/Navbar";

const AboutHeroSection = () => {
  return (
        <div className=" bg-[#8C394C] lg:pt-2 md:pt-8 sm:px-4 py-40">
        <Navbar/>
        <div className="m-12 font-Bold text-5xl max-w-[800px] p-9 text-[#FFFFFF]"> 
        Get to know about us & meet our amazing team 
        </div>
        </div> 
  )
}

export default AboutHeroSection
