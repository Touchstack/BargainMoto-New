import React from "react";
import PropTypes from "prop-types";
import PrimaryButton from "../Buttons/PrimaryButton";
// import HollardImg from "../../assets/images/hollard.svg";
// import StarAssuranceImg from "../../assets/images/star-assurance.svg";
import Engine from "../../assets/images/engine.svg";
import GasPump from "../../assets/images/gas-pump.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import BrandIcon from "../../assets/images/car_details.svg";
import TransmissionIcon from "../../assets/images/transmission.svg";
import GaugeIcon from "../../assets/images/gauge.svg";
import CalendarIcon from "../../assets/images/calendar.svg";
import { motion } from "framer-motion";

const InfoTabs = ({ vehicleData }) => {
  const [activeTab, setActiveTab] = React.useState("buy");
  const [hideBuy, setHideBuy] = React.useState(null);
  const [hideSellerTab, setHideSellerTab] = React.useState(null);
  const [hideSell, setHideSell] = React.useState("show");
  // const [hideAddOn, setHideAddOn] = React.useState(null);
  const activeBuyClass =
    activeTab === "buy"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-SemiBold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none"
      : "inline-block px-4 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100";
  const activeSellClass =
    activeTab === "sell"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-SemiBold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none"
      : "inline-block px-4 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100";

  const activeSellerTabClass =
    activeTab === "sellerTab"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-SemiBold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none"
      : "inline-block px-4 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100";

  /* const activeAddOnClass =
    activeTab === "addOnTab"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-SemiBold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none truncate"
      : "inline-block px-4 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100 truncate";
*/

  const tabContentVariant = {
    active: {
      display: "block",
      transition: {
        staggerChildren: 0.15,
      },
    },
    inactive: {
      display: "none",
    },
  };

  return (
    <div className="my-12">
      <div className="mb-4">
        <ul
          className="flex justify-center lg:overflow-hidden md:overflow-hidden sm:overflow-auto overflow-auto my-4 font-medium font-Regular text-xl border-b border-gray-200"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={activeBuyClass}
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
              onClick={() => {
                setActiveTab("buy");
                setHideBuy(null);
                setHideSell("show");
                setHideSellerTab(null);
                // setHideAddOn(null);
              }}
            >
              Details
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={activeSellClass}
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
              onClick={() => {
                setActiveTab("sell");
                setHideSell(null);
                setHideBuy("show");
                setHideSellerTab(null);
                //  setHideAddOn(null);
              }}
            >
              Description
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={activeSellerTabClass}
              id="seller"
              data-tabs-target="#seller"
              type="button"
              role="tab"
              aria-controls="seller"
              aria-selected="false"
              onClick={() => {
                setActiveTab("sellerTab");
                setHideSellerTab("show");
                setHideBuy(null);
                setHideSell(null);
                //  setHideAddOn(null);
              }}
            >
              Seller
            </button>
          </li>
          {/* <li className="mr-2" role="presentation">
            <button
              className={activeAddOnClass}
              id="addOn"
              data-tabs-target="#addOn"
              type="button"
              role="tab"
              aria-controls="addOn"
              aria-selected="false"
              onClick={() => {
                setActiveTab("addOnTab");
                // setHideAddOn("show");
                setHideBuy(null);
                setHideSell(null);
                // setHideSellerTab(null);
              }}
            >
              Add-on services
            </button>
          </li>*/}
        </ul>
      </div>

      <div id="myTabContent">
        <motion.div
          id="dashboard"
          role="tabpanel"
          variants={tabContentVariant}
          animate={hideSell ? { opacity: 1 } : "inactive"}
          initial={{ opacity: 0 }}
          aria-labelledby="dashboard-tab"
          transition={{
            easings: "linear",
            duration: 1,
          }}
        >
          <p className="text-dark font-SemiBold text-2xl tracking-tighter mt-8 mb-2">
            Vehicle Details
          </p>

          <div className="container mx-auto">
            <div className="flex flex-col md:justify-evenly justify-center md:items-stretch items-center my-16">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 px-12">
                <div className="flex">
                  <img src={BrandIcon} className="h-[30px] self-center" />
                  <div className="flex-col justify-start items-start ml-4 w-10/12">
                    <p className="font-SemiBold text-xl text-[#6D6D6D] text-left truncate">
                      {vehicleData?.name}
                    </p>
                    <p className="font-Regular text-left text-[#6D6D6D]">
                      {" "}
                      Brand
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src={TransmissionIcon}
                    className="h-[30px] self-center"
                  />
                  <div className="flex-col justify-start items-start ml-4">
                    <p className="font-SemiBold text-xl text-[#6D6D6D] text-left">
                      {vehicleData?.transmission_type}
                    </p>
                    <p className="font-Regular text-left text-[#6D6D6D]">
                      {" "}
                      Transmission
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <img src={GaugeIcon} className="h-[30px] self-center" />
                  <div className="flex-col justify-start items-start ml-4">
                    <p className="font-SemiBold text-xl text-[#6D6D6D] text-ellipsis">
                      {vehicleData?.mileage}
                    </p>
                    <p className="font-Regular text-left text-[#6D6D6D]">
                      {" "}
                      Mileage
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <img src={CalendarIcon} className="h-[30px] self-center" />
                  <div className="flex-col justify-start items-start ml-4">
                    <p className="font-SemiBold text-xl text-left text-[#6D6D6D] text-ellipsis">
                      {vehicleData?.year}
                    </p>
                    <p className="font-Regular text-left text-[#6D6D6D]">
                      {" "}
                      Registration Year
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <HiOutlineLocationMarker
                    size={40}
                    className="text-[#A4A6A8] self-center"
                  />
                  <div className="flex-col justify-start items-start ml-4 w-10/12">
                    <p className="font-SemiBold text-xl text-left text-[#6D6D6D] truncate">
                      {vehicleData?.location}
                    </p>
                    <p className="font-Regular text-left text-[#6D6D6D]">
                      {" "}
                      Location
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <img src={GasPump} className="h-[30px] self-center" />
                  <div className="flex-col justify-start items-start ml-4">
                    <p className="font-SemiBold text-xl text-left text-[#6D6D6D] text-ellipsis">
                      {vehicleData?.fuel_type}
                    </p>
                    <p className="font-Regular text-left text-[#6D6D6D]">
                      {" "}
                      Fuel
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <img src={Engine} className="h-[30px] self-center" />
                  <div className="flex-col justify-start items-start ml-4">
                    <p className="font-SemiBold text-xl text-left text-[#6D6D6D] text-ellipsis">
                      {vehicleData?.engine}
                    </p>
                    <p className="font-Regular text-left text-[#6D6D6D]">
                      {" "}
                      Engine
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <img src={BrandIcon} className="h-[30px] self-center" />
                  <div className="flex-col justify-start items-start ml-4">
                    <p className="font-SemiBold text-xl text-left text-[#6D6D6D] text-ellipsis">
                      {vehicleData?.color}
                    </p>
                    <p className="font-Regular text-left text-[#6D6D6D]">
                      {" "}
                      Colour
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center my-8">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="profile"
          role="tabpanel"
          variants={tabContentVariant}
          animate={hideBuy ? { opacity: 1 } : "inactive"}
          initial={{ opacity: 0 }}
          aria-labelledby="profile-tab"
          transition={{
            easings: "linear",
            duration: 1,
          }}
        >
          <p className="text-dark font-SemiBold text-2xl tracking-tighter mt-8 mb-2">
            Description
          </p>

          {vehicleData?.modification ? (
            <div className="container mx-auto px-12">
              <span className="font-Regular text-xl text-[#6D6D6D]">
                {vehicleData?.modification}
              </span>
            </div>
          ) : (
            <p className="font-Bold text-gray-400 lg:text-2xl md:text-2xl sm:text-xl text-xl lg:py-12 md:py-8 py-4 bg-gray-100 rounded-3xl w-11/12 mx-auto my-8">
              No Available Description
            </p>
          )}
        </motion.div>

        <motion.div
          id="seller"
          role="tabpanel"
          variants={tabContentVariant}
          animate={hideSellerTab ? { opacity: 1 } : "inactive"}
          initial={{ opacity: 0 }}
          aria-labelledby="seller-tab"
          transition={{
            easings: "linear",
            duration: 1,
          }}
        >
          <p className="text-dark font-SemiBold text-2xl tracking-tighter mt-8 mb-2">
            Seller
          </p>

          <div className="container mx-auto px-12">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12 md:px-0 sm:px-8 px-8 py-8">
              <div className="flex flex-col justify-center items-end">
                <p className="font-Regular underline text-2xl md:self-end sm:self-center self-center text-black">
                  {vehicleData?.seller}
                </p>
                <p className="font-Light text-base text-black md:self-end sm:self-center self-center my-2">
                  Joined {vehicleData?.doj}
                </p>
                {vehicleData?.is_verified === "1" ? (
                  <div className="text-center lg:m-0 md:m-0 sm:mx-auto mx-auto md:self-end sm:self-center self-center">
                    <span className="flex font-Regular text-lg text-[#6D6D6D] lg:m-0 md:mb-4 sm:mb-4 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M19.5 4.25H4.5C4.10218 4.25 3.72064 4.40804 3.43934 4.68934C3.15804 4.97064 3 5.35218 3 5.75V11.2597C3 19.6606 10.1081 22.4478 11.5312 22.9212C11.8352 23.0246 12.1648 23.0246 12.4688 22.9212C13.8938 22.4478 21 19.6606 21 11.2597V5.75C21 5.35218 20.842 4.97064 20.5607 4.68934C20.2794 4.40804 19.8978 4.25 19.5 4.25ZM16.2806 10.7806L11.0306 16.0306C10.961 16.1004 10.8783 16.1557 10.7872 16.1934C10.6962 16.2312 10.5986 16.2506 10.5 16.2506C10.4014 16.2506 10.3038 16.2312 10.2128 16.1934C10.1217 16.1557 10.039 16.1004 9.96937 16.0306L7.71937 13.7806C7.57864 13.6399 7.49958 13.449 7.49958 13.25C7.49958 13.051 7.57864 12.8601 7.71937 12.7194C7.86011 12.5786 8.05098 12.4996 8.25 12.4996C8.44902 12.4996 8.63989 12.5786 8.78063 12.7194L10.5 14.4387L15.2194 9.71937C15.2891 9.64969 15.3718 9.59442 15.4628 9.5567C15.5539 9.51899 15.6515 9.49958 15.75 9.49958C15.8485 9.49958 15.9461 9.51899 16.0372 9.5567C16.1282 9.59442 16.2109 9.64969 16.2806 9.71937C16.3503 9.78906 16.4056 9.87178 16.4433 9.96283C16.481 10.0539 16.5004 10.1515 16.5004 10.25C16.5004 10.3485 16.481 10.4461 16.4433 10.5372C16.4056 10.6282 16.3503 10.7109 16.2806 10.7806Z"
                          fill="black"
                        />
                      </svg>
                      Verified Seller
                    </span>
                  </div>
                ) : (
                  <div className="text-center lg:m-0 md:m-0 sm:mx-auto mx-auto md:self-end sm:self-center self-center">
                    <span className="flex font-Regular text-lg tracking-tighter text-[#6D6D6D] lg:m-0 md:mb-4 sm:mb-4 mb-4">
                      <svg
                        className=" text-black"
                        width="30"
                        height="35"
                        viewBox="0 0 24 25"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      UnVerified Seller
                    </span>
                  </div>
                )}
              </div>

              <div className="flex text-center lg:ml-4 md:m-0 sm:mx-auto mx-auto">
                {/*<PrimaryButton
                  buttonText={
                    vehicleData?.sale_type === "Fixed Price Sale"
                      ? "Buy Now"
                      : "Make an Offer"
                  }
                  className={"self-center"}
                  onClick={() =>
                    (window.location.href = `https://bargainmotogh.com/car-details/${vehicleData?.uuid}`)
                  }
                />*/}
              </div>
            </div>
          </div>
        </motion.div>

        {/*<motion.div
          id="addOn"
          role="tabpanel"
          variants={tabContentVariant}
          animate={hideAddOn ? { opacity: 1 } : "inactive"}
          initial={{ opacity: 0 }}
          aria-labelledby="addon-tab"
          transition={{
            easings: "linear",
            duration: 1,
          }}
        >
          <p className="text-dark font-SemiBold text-2xl tracking-tighter mt-8 mb-2">
            Add-on services
          </p>

          <div className="container mx-auto">
            <p className="text-dark font-SemiBold text-xl tracking-tighter mt-8 mb-2">
              Motor insurance
            </p>

            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center md:items-center sm:items-center items-center md:px-0 sm:px-8 px-8 py-8">
             
              <div className="border-2 cursor-pointer hover:border-2 hover:border-[#F3B757] rounded-3xl lg:w-3/12 md:w-5/12 sm:w-10/12 w-10/12 ">
                <div className="flex justify-start items-start p-5">
                  <img src={HollardImg} />
                  <span className="ml-3 text-left">
                    <p className="text-dark font-SemiBold text-xl">Hollard</p>
                    <p className="text-dark font-Regular text-xl tracking-tighter">
                      GHS 1100/year
                    </p>

                    <p className="text-left font-Light text-md text-[#F3B757] underline mt-5">
                      Read Policy
                    </p>
                  </span>
                </div>
              </div>

              <div className="border-2 cursor-pointer hover:border-2 hover:border-[#F3B757] rounded-3xl lg:w-3/12 md:w-5/12 sm:w-10/12 w-10/12 lg:ml-4 md:ml-4 sm:mt-0 mt-4">
                <div className="flex justify-start items-start p-5">
                  <img src={StarAssuranceImg} />
                  <span className="ml-3 text-left">
                    <p className="text-dark font-SemiBold text-xl">
                      Star Assurance
                    </p>
                    <p className="text-dark font-Regular text-xl tracking-tighter">
                      GHS 1200/year
                    </p>

                    <p className="text-left font-Light text-md text-[#F3B757] underline mt-5">
                      Read Policy
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>*/}
      </div>
    </div>
  );
};

InfoTabs.propTypes = {
  vehicleData: PropTypes.object,
};

InfoTabs.defaultProps = {
  vehicleData: {},
};

export default InfoTabs;
