import React, { useState } from "react";
import AppLogo from "../../assets/images/bargain-auto-logo.svg";

export default function Footer() {
  const [hoverIcon, setHoverIcon] = useState("");

  const hoverOver = (icon) => {
    return setHoverIcon(icon);
  };

  return (
    <div className="">
      <footer className="p-4 sm:p-6 bg-[#0C0B0B] font-Regular">
        <div className="md:flex md:justify-center p-4">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 sm:gap-6">
            <div className="">
              <a href="/" className="flex justify-start items-start">
                <img
                  src={AppLogo}
                  alt="App Logo"
                  style={{ width: 88.727, height: 80.495 }}
                />
              </a>
              <div className="flex md:justify-between text-gray-600 dark:text-gray-400 pt-4 pr-8">
                <a
                  href="https://web.facebook.com/Bargain-Motogh-105355808755769"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-white"
                  onMouseOver={() => hoverOver("facebook")}
                  onMouseLeave={() => hoverOver()}
                >
                  {hoverIcon === "facebook" ? (
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="8" fill="#F0AE43" />
                      <path
                        d="M21.1325 27.23V20.2942H23.4723L23.8201 17.5786H21.1325V15.8489C21.1325 15.0652 21.3508 14.5287 22.4755 14.5287H23.9005V12.1076C23.2072 12.0333 22.5102 11.9974 21.8129 12.0001C19.7446 12.0001 18.3246 13.2627 18.3246 15.5806V17.5735H16V20.2891H18.3297V27.23H21.1325Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="8" fill="black" />
                      <path
                        d="M21.1325 27.23V20.2942H23.4723L23.8201 17.5786H21.1325V15.8489C21.1325 15.0652 21.3508 14.5287 22.4755 14.5287H23.9005V12.1076C23.2072 12.0333 22.5102 11.9974 21.8129 12.0001C19.7446 12.0001 18.3246 13.2627 18.3246 15.5806V17.5735H16V20.2891H18.3297V27.23H21.1325Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </a>
                <a
                  href="https://www.linkedin.com/company/bargainmoto/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-white"
                  onMouseOver={() => hoverOver("linkedIn")}
                  onMouseLeave={() => hoverOver()}
                >
                  {hoverIcon === "linkedIn" ? (
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="8" fill="#F0AE43" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.961 17.53H21.441V19.2634C21.9423 18.2664 23.2278 17.3707 25.159 17.3707C28.8611 17.3707 29.74 19.3552 29.74 22.9964V29.74H25.992V23.8257C25.992 21.7521 25.4907 20.5827 24.2145 20.5827C22.4445 20.5827 21.709 21.843 21.709 23.8247V29.74H17.961V17.53V17.53ZM11.5341 29.5807H15.2821V17.3707H11.5341V29.5807V29.5807ZM15.819 13.3894C15.8191 13.7035 15.7568 14.0145 15.6357 14.3044C15.5146 14.5943 15.337 14.8572 15.1134 15.0778C14.6603 15.5282 14.0469 15.7802 13.4081 15.7787C12.7704 15.7783 12.1584 15.5268 11.7046 15.0788C11.4818 14.8574 11.3049 14.5942 11.184 14.3043C11.0631 14.0144 11.0005 13.7035 11 13.3894C11 12.755 11.253 12.1478 11.7056 11.6999C12.159 11.2513 12.7712 10.9997 13.409 11C14.0481 11 14.6609 11.2521 15.1134 11.6999C15.5651 12.1478 15.819 12.755 15.819 13.3894Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="8" fill="black" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.961 17.53H21.441V19.2634C21.9423 18.2664 23.2278 17.3707 25.159 17.3707C28.8611 17.3707 29.74 19.3552 29.74 22.9964V29.74H25.992V23.8257C25.992 21.7521 25.4907 20.5827 24.2145 20.5827C22.4445 20.5827 21.709 21.843 21.709 23.8247V29.74H17.961V17.53V17.53ZM11.5341 29.5807H15.2821V17.3707H11.5341V29.5807V29.5807ZM15.819 13.3894C15.8191 13.7035 15.7568 14.0145 15.6357 14.3044C15.5146 14.5943 15.337 14.8572 15.1134 15.0778C14.6603 15.5282 14.0469 15.7802 13.4081 15.7787C12.7704 15.7783 12.1584 15.5268 11.7046 15.0788C11.4818 14.8574 11.3049 14.5942 11.184 14.3043C11.0631 14.0144 11.0005 13.7035 11 13.3894C11 12.755 11.253 12.1478 11.7056 11.6999C12.159 11.2513 12.7712 10.9997 13.409 11C14.0481 11 14.6609 11.2521 15.1134 11.6999C15.5651 12.1478 15.819 12.755 15.819 13.3894Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </a>
                <a
                  href="https://www.instagram.com/bargain_moto"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-white"
                  onMouseOver={() => hoverOver("instagram")}
                  onMouseLeave={() => hoverOver()}
                >
                  {hoverIcon === "instagram" ? (
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="8" fill="#F0AE43" />
                      <path
                        d="M20.3663 17.2444C18.646 17.2444 17.2421 18.6484 17.2421 20.3687C17.2421 22.089 18.646 23.4929 20.3663 23.4929C22.0866 23.4929 23.4905 22.089 23.4905 20.3687C23.4905 18.6484 22.0866 17.2444 20.3663 17.2444ZM29.7366 20.3687C29.7366 19.0749 29.7484 17.7929 29.6757 16.5015C29.603 15.0015 29.2609 13.6702 28.164 12.5734C27.0648 11.4741 25.7359 11.1343 24.2359 11.0616C22.9421 10.989 21.6601 11.0007 20.3687 11.0007C19.0749 11.0007 17.7929 10.989 16.5015 11.0616C15.0015 11.1343 13.6702 11.4765 12.5734 12.5734C11.4741 13.6726 11.1343 15.0015 11.0616 16.5015C10.989 17.7952 11.0007 19.0773 11.0007 20.3687C11.0007 21.6601 10.989 22.9444 11.0616 24.2359C11.1343 25.7359 11.4765 27.0671 12.5734 28.164C13.6726 29.2632 15.0015 29.603 16.5015 29.6757C17.7952 29.7484 19.0773 29.7366 20.3687 29.7366C21.6624 29.7366 22.9444 29.7484 24.2359 29.6757C25.7359 29.603 27.0671 29.2609 28.164 28.164C29.2632 27.0648 29.603 25.7359 29.6757 24.2359C29.7507 22.9444 29.7366 21.6624 29.7366 20.3687V20.3687ZM20.3663 25.1757C17.7062 25.1757 15.5593 23.0288 15.5593 20.3687C15.5593 17.7085 17.7062 15.5616 20.3663 15.5616C23.0265 15.5616 25.1734 17.7085 25.1734 20.3687C25.1734 23.0288 23.0265 25.1757 20.3663 25.1757ZM25.3702 16.4874C24.7491 16.4874 24.2476 15.9859 24.2476 15.3648C24.2476 14.7437 24.7491 14.2421 25.3702 14.2421C25.9913 14.2421 26.4929 14.7437 26.4929 15.3648C26.4931 15.5122 26.4642 15.6583 26.4078 15.7946C26.3515 15.9309 26.2688 16.0547 26.1645 16.159C26.0602 16.2633 25.9364 16.346 25.8001 16.4023C25.6638 16.4587 25.5177 16.4876 25.3702 16.4874V16.4874Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="8" fill="black" />
                      <path
                        d="M20.3663 17.2444C18.646 17.2444 17.2421 18.6484 17.2421 20.3687C17.2421 22.089 18.646 23.4929 20.3663 23.4929C22.0866 23.4929 23.4905 22.089 23.4905 20.3687C23.4905 18.6484 22.0866 17.2444 20.3663 17.2444ZM29.7366 20.3687C29.7366 19.0749 29.7484 17.7929 29.6757 16.5015C29.603 15.0015 29.2609 13.6702 28.164 12.5734C27.0648 11.4741 25.7359 11.1343 24.2359 11.0616C22.9421 10.989 21.6601 11.0007 20.3687 11.0007C19.0749 11.0007 17.7929 10.989 16.5015 11.0616C15.0015 11.1343 13.6702 11.4765 12.5734 12.5734C11.4741 13.6726 11.1343 15.0015 11.0616 16.5015C10.989 17.7952 11.0007 19.0773 11.0007 20.3687C11.0007 21.6601 10.989 22.9444 11.0616 24.2359C11.1343 25.7359 11.4765 27.0671 12.5734 28.164C13.6726 29.2632 15.0015 29.603 16.5015 29.6757C17.7952 29.7484 19.0773 29.7366 20.3687 29.7366C21.6624 29.7366 22.9444 29.7484 24.2359 29.6757C25.7359 29.603 27.0671 29.2609 28.164 28.164C29.2632 27.0648 29.603 25.7359 29.6757 24.2359C29.7507 22.9444 29.7366 21.6624 29.7366 20.3687V20.3687ZM20.3663 25.1757C17.7062 25.1757 15.5593 23.0288 15.5593 20.3687C15.5593 17.7085 17.7062 15.5616 20.3663 15.5616C23.0265 15.5616 25.1734 17.7085 25.1734 20.3687C25.1734 23.0288 23.0265 25.1757 20.3663 25.1757ZM25.3702 16.4874C24.7491 16.4874 24.2476 15.9859 24.2476 15.3648C24.2476 14.7437 24.7491 14.2421 25.3702 14.2421C25.9913 14.2421 26.4929 14.7437 26.4929 15.3648C26.4931 15.5122 26.4642 15.6583 26.4078 15.7946C26.3515 15.9309 26.2688 16.0547 26.1645 16.159C26.0602 16.2633 25.9364 16.346 25.8001 16.4023C25.6638 16.4587 25.5177 16.4876 25.3702 16.4874V16.4874Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </a>
              </div>
            </div>

            <div>
              <h2 className="mb-4 p-0 py-0 text-base font-Regular text-[#EC970F]">
                For Seller
              </h2>
              <ul className="text-[#CACACA]">
                <li className="mb-2">
                  <a href="/sellacar" className="hover:underline">
                    Buy a car
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/buyacar" className="hover:underline">
                    Sell a car
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/aboutus" className="hover:underline">
                    Dealers Guide
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/sellacar" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 p-0 py-0 text-base font-Regular text-[#EC970F]">
                For Buyer
              </h2>
              <ul className="text-[#CACACA]">
                <li className="mb-2">
                  <a
                    href="https://portal.bargainmotogh.com/car-listings"
                    className="hover:underline"
                  >
                    Browse listing
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://portal.bargainmotogh.com/sellers"
                    className="hover:underline"
                  >
                    How it works
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/sellacar" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 p-0 py-0 text-base font-Regular text-[#EC970F]">
                Company
              </h2>
              <ul className="text-[#CACACA]">
                <li className="mb-2">
                  <a href="/dealersguide" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/faqs" className="hover:underline">
                    Contact Us
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
              <h2 className="mb-4 p-0 py-0 text-base font-Regular text-[#EC970F]">
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
                      className="block w-full p-4 text-[#666666] mb-4 font-Regular border border-[#DEDEDE] rounded-md bg-[#FFFAF5] sm:text-md focus:ring-blue-500 focus:border-blue-500"
                    />

                    {/*Netlify Form Handling*/}
                    <input type="hidden" name="form-name" value="subscribe" />
                    {/*Netlify Form Handling*/}
                    <button
                      type="submit"
                      className="font-SemiBold text-[#5C2E14] bg-[#F3B757]  hover:bg-amber-500 focus:ring-1 focus:outline-none focus:ring-amber-100 font-medium rounded-lg text-xl px-5 py-3 w-full
                      text-center mr-3 md:mr-0"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className="my-6 p-0 bg-[#4D4949] w-1360 h-px sm:mx-auto lg:my-8" />
        <div className="flex sm:flex sm:items-center sm:justify-between justify-between">
          <div className="flex lg:w-2/6 md:w-3/6 sm:w-auto w-auto justify-around">
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
              © Bargain Motors Ltd. 2023. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
