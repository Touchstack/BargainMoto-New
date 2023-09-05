import { useState } from "react";
import { NavBarDropdown } from "./NavBarDropdown";
import AppLogo from "../../assets/images/bargain-auto-logo.svg";

const Navbar = () => {
  const [hidden, setHiddenState] = useState("hidden"); //show or hide navbar
  const [ariaExpanded, setAriaExpanded] = useState("false"); //expanded or collapsed state
  const [showMenu, setShowMenu] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const navBarToggler = () => {
    if (hidden && ariaExpanded === "false") {
      setHiddenState();
      setAriaExpanded("true");
      return setShowMenu(true);
    } else {
      setAriaExpanded("false");
      setHiddenState("hidden");
      return setShowMenu(false);
    }
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="flex px-2 text-center font-Regular lg:pt-2 md:pt-2 sm:px-4 py-2 lg:bg-[#8C394C] md:bg-[#974d5e] sm:bg-[#974d5e] bg-[#974d5e]">
      <div className="container md:pl-25 flex-wrap justify-between items-center flex m-auto max-w-[1550px]">
        <a
          href="/"
          className="transition duration-500 ease-in-out hover:scale-110 flex items-center"
        >
          <img
            src={AppLogo}
            alt="App Logo"
            className="md:h-[80px] lg:w-[88px] sm:h-[70px] sm:w-[78px] h-[60px] w-[68px]"
          />
        </a>
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:border"
          aria-controls="navbar-cta"
          aria-expanded={ariaExpanded}
          onTouchStartCapture={() => showMenu && setShowMenu(false)}
          onClick={() => navBarToggler()}
          onMouseEnter={() => hidden && setShowMenu(false)}
          onMouseLeave={() => setShowMenu(true)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${hidden} lg:flex justify-between w-full md:w-auto`}
          id="navbar-cta"
        >
          <ul className="flex flex-col text-lg p-4 md:p-0 mt-4 border text-center rounded-lg  md:shadow-none sm:shadow-lg shadow-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li className="list-none inline-block px-5 text-[#D5FFFF] hover:scale-105 duration-200 hover:font-SemiBold lg:ml-40 md:ml-0 sm:ml-0 ml-0">
              <a href="/" className="">
                Home
              </a>
            </li>
            <li className="list-none inline-block px-5 text-[#FBFBFB] hover:scale-105 duration-200 hover:font-SemiBold">
              <a href="/sellacar" className="">
                Sell a Car
              </a>
            </li>
            <li className="list-none inline-block px-5 text-[#FBFBFB] hover:scale-105 duration-200 hover:font-SemiBold">
              <a href="/buyacar" className="">
                Buy a Car
              </a>
            </li>
            <li className="list-none inline-block px-5 text-[#FFF]">
              <button
                onClick={handleShowDropdown}
                className="flex justify-center items-center mx-auto"
              >
                <span className="hover:scale-105 duration-200 hover:font-SemiBold">
                  {" "}
                  Company
                </span>
                <svg
                  className="mr-1 h-5 w-5 text-white md:hover:text-fleetBlue hover:scale-105 duration-200 hover:font-SemiBold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown && <NavBarDropdown />}
            </li>
          </ul>
        </div>
        {/* Menu End */}

        {/* Log In Button */}
        <div
          className={`${hidden} w-full lg:flex md:w-auto`}
          id="navbar-buttons"
        >
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
      </div>
    </nav>
  );
};
export default Navbar;
