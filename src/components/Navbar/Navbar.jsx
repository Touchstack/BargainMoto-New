import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavBarDropdown } from "./NavBarDropdown";
import AppLogo from "../../assets/images/bargain-auto-logo.svg";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const hidden = "hidden"; //show or hide navbar
  const [ariaExpanded, setAriaExpanded] = useState("false"); //expanded or collapsed state
  const [showMenu, setShowMenu] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [open, cycleOpen] = useCycle(false, true);
  const location = useLocation();

  const navBarToggler = () => {
    if (hidden && ariaExpanded === "false") {
      cycleOpen();
      setAriaExpanded("true");
      return setShowMenu(true);
    } else {
      setAriaExpanded("false");
      cycleOpen();
      return setShowMenu(false);
    }
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "Sell a Car", to: "/sellacar", id: 2 },
    { name: "Buy a Car", to: "/buyacar", id: 3 },
    { name: "Company", to: "#", id: 4 },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <main>
      <AnimatePresence>
        {open ? (
          <motion.aside
            className="bg-white w-full h-[100vh] fixed z-40"
            initial={{ width: 0 }}
            animate={{
              width: "100%",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <div className="flex justify-between items-center p-4">
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
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="46"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <rect
                    x="3.52734"
                    y="0.526855"
                    width="19.8799"
                    height="2"
                    rx="1"
                    transform="rotate(45 3.52734 0.526855)"
                    fill="#8C394C"
                  />
                  <rect
                    x="2"
                    y="15"
                    width="19.9357"
                    height="2"
                    rx="1"
                    transform="rotate(-45 2 15)"
                    fill="#8C394C"
                  />
                </svg>
              </button>
            </div>
            <motion.div
              className="text-dark font-Regular text-xl flex flex-col justify-center items-start m-5"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <span key={id}>
                  <a
                    href={to}
                    className={`flex justify-center items-center ${
                      showDropdown && name === "Company" ? "mb-1" : "mb-10"
                    } ${
                      location.pathname === to && "text-[#8C394C] font-SemiBold"
                    }`}
                    onClick={() =>
                      name === "Company" ? handleShowDropdown() : null
                    }
                  >
                    {name}
                    {name === "Company" && (
                      <svg
                        className="mr-1 h-5 w-5 md:hover:text-fleetBlue hover:scale-105 duration-200 hover:font-SemiBold"
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
                    )}
                  </a>
                  {showDropdown && name === "Company" ? (
                    <div className="">
                      <NavBarDropdown />
                    </div>
                  ) : null}
                </span>
              ))}
              <div className="absolute bottom-20 flex flex-col">
                <motion.a
                  href="/login"
                  className="font-Regular text-xl mb-10"
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  Login
                </motion.a>
                <motion.button
                  className="text-[#8C394C] font-SemiBold bg-[#F3B757] px-9 h-[50px] p-3 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  Sign Up
                </motion.button>
              </div>
            </motion.div>
          </motion.aside>
        ) : (
          <nav className="flex px-2 text-center font-Regular lg:pt-2 md:pt-2 sm:px-4 py-2 lg:bg-[#8C394C] md:bg-[#974d5e] sm:bg-[#974d5e] bg-[#974d5e]">
            <div className="container md:pl-25 flex justify-between items-center m-auto">
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
                <ul className="flex flex-col text-lg p-4 md:p-0 mt-4 border text-center rounded-lg  md:shadow-none sm:shadow-lg shadow-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                  <li
                    className={`list-none inline-block px-5 ${
                      location.pathname === "/"
                        ? "font-SemiBold text-[#F3B757]"
                        : `text-[#FFF]`
                    } hover:scale-105 duration-200 hover:font-SemiBold lg:ml-40 md:ml-0 sm:ml-0 ml-0`}
                  >
                    <a href="/" className="">
                      Home
                    </a>
                  </li>
                  <li
                    className={`list-none inline-block px-5 ${
                      location.pathname === "/sellacar"
                        ? "font-SemiBold text-[#F3B757]"
                        : `text-[#FFF]`
                    } hover:scale-105 duration-200 hover:font-SemiBold`}
                  >
                    <a href="/sellacar" className="">
                      Sell a Car
                    </a>
                  </li>
                  <li
                    className={`list-none inline-block px-5 ${
                      location.pathname === "/buyacar"
                        ? "font-SemiBold text-[#F3B757]"
                        : `text-[#FFF]`
                    } hover:scale-105 duration-200 hover:font-SemiBold`}
                  >
                    <a href="/buyacar" className="">
                      Buy a Car
                    </a>
                  </li>
                  <li className={`list-none inline-block px-5 text-[#FFF]`}>
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
                    <button
                      className="text-[#FFF] pr-5"
                      onClick={() =>
                        (window.location.href =
                          "https://bargainmotogh.com/register")
                      }
                    >
                      Log In
                    </button>
                  </p>
                  <button
                    className="bg-[#FFF] text-[#8C394C] px-9 h-[50px] p-3 rounded-lg"
                    buttonText={"Contact Us"}
                    onClick={() =>
                      (window.location.href =
                        "https://bargainmotogh.com/register")
                    }
                  >
                    Sign Up
                  </button>
                </ul>
              </div>
            </div>
          </nav>
        )}
      </AnimatePresence>
    </main>
  );
};
export default Navbar;
