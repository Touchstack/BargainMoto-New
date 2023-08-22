import React, { useState } from "react";
import AppLogo from "../../assets/images/bargain-auto-logo.svg";

export default function Footer() {
  const [hoverIcon, setHoverIcon] = useState("");

  const hoverOver = (icon) => {
    return setHoverIcon(icon);
  };

  return ( 
    <div className="bg-appYellowLight pt-14 px-4">
    <div className="container mx-auto"> 
    <footer className="grid-cols-2 p-4 sm:p-6 bg-[#0C0B0B] font-Regular"> 
              <div className="md:flex md:justify-center p-14">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"> 
              <div className="max-w-7xl mx-auto pr-12"> 
                <a href="/" className="flex sm:justify-center items-center">
                  <img
                    src={AppLogo}
                    alt="App Logo"
                    style={{ width: 88.727, height: 80.495}}
                  />
                </a>
                </div>
              <div>
                <h2 className="mb-4 p-0 py-0 text-base font-MontserratSemiBold text-[#EC970F]">
                  Navigation
                </h2>
                <ul className="text-[#CACACA]">
                  <li className="mb-2">
                    <a
                      href="https://portal.bargainmotogh.com/car-listings"
                      className="hover:underline"
                    >
                      Buy a car
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://portal.bargainmotogh.com/sellers"
                      className="hover:underline"
                    >
                      Sell a car
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/dealersguide" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/contact" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 p-0 py-0 text-base font-MontserratBold text-[#EC970F]"> 
                  Top brands
                </h2>
                <ul className="text-[#CACACA]">
                  <li className="mb-2">
                    <a
                      href="https://portal.bargainmotogh.com/car-listings"
                      className="hover:underline"
                    >
                      Toyota
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://portal.bargainmotogh.com/sellers"
                      className="hover:underline"
                    >
                      Kia
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/dealersguide" className="hover:underline">
                      Honda
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/contact" className="hover:underline">
                      Hyundai
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/contact" className="hover:underline">
                      Mercedes
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/contact" className="hover:underline">
                      See More
                    </a>
                  </li>
                 </ul>
              </div>
              <div>
                <h2 className="mb-4 p-0 py-0 text-base font-MontserratSemiBold text-[#EC970F]">
                  Learn More
                </h2>
                <ul className="text-[#CACACA]">
                  <li className="mb-2">
                    <a href="/dealersguide" className="hover:underline">
                      Dealers Guide
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/faqs" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/blogs" className="hover:underline">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 p-0 py-0 text-base font-MontserratSemiBold text-[#EC970F]">
                  Get latest deals, promos, discounts & more
                </h2>
                 <p className="text-[#FFFFFF] mb-2 p-4 py-0"> Email</p> 
                <ul className="text-[#CACACA]">
                  <li>
                    <form name="subscribe" method="post">
                      <input
                        type="text"
                        id="large-input"
                        placeholder="e.g derrik@hey.com" 
                        name="subscriptionemail"
                        required
                        className="block w-full p-4 text-[#666666] mb-4 font-MontserratRegular border border-[#DEDEDE] rounded-lg bg-[#FFFAF5] sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />

                      {/*Netlify Form Handling*/}
                      <input type="hidden" name="form-name" value="subscribe" />
                      {/*Netlify Form Handling*/}
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="my-6 p-0 bg-[#4D4949] w-1360 h-px sm:mx-auto lg:my-8" />  
          <div className="flex sm:flex sm:items-center sm:justify-between justify-between">
            <div className="flex lg:w-2/6 md:w-3/6 sm:w-auto w-auto justify-between">
              <div className="text-sm sm:text-center text-[#CACACA]">
                <a href="/termsofuse" className="hover:underline">
                  Privacy Policy
                </a>
              </div>
              <div className="text-sm sm:text-center text-[#CACACA]">
                <a href="/privacypolicy" className="hover:underline">
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="flex lg:mt-4 md:mt-4 space-x-6 sm:justify-center sm:mt-0">
              <span className="text-sm sm:text-center text-[#CACACA]">
               © Bargain Motors Ltd. 2023. All Rights Reserved.{" "}
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
































  
  
