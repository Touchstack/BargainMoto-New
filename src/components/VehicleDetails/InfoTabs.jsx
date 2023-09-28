import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const InfoTabs = ({ vehicleData }) => {
  const [activeTab, setActiveTab] = React.useState("buy");
  const [hideBuy, setHideBuy] = React.useState(null);
  const [hideSellerTab, setHideSellerTab] = React.useState(null);
  const [hideSell, setHideSell] = React.useState("show");
  const [hideAddOn, setHideAddOn] = React.useState(null);
  const activeBuyClass =
    activeTab === "buy"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-Bold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none"
      : "inline-block px-4 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100";
  const activeSellClass =
    activeTab === "sell"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-Bold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none"
      : "inline-block px-4 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100";

  const activeSellerTabClass =
    activeTab === "sellerTab"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-Bold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none"
      : "inline-block px-4 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100";

  const activeAddOnClass =
    activeTab === "addOnTab"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-Bold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none truncate"
      : "inline-block px-4 rounded-t-lg border-b-4 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100 truncate";

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
          className="flex justify-center lg:overflow-hidden md:overflow-hidden sm:overflow-auto overflow-auto my-4 font-medium font-Bold text-xl border-b border-gray-200 w-full"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2 border-b border-gray-200" role="presentation">
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
                setHideAddOn(null);
              }}
            >
              Details
            </button>
          </li>
          <li className="mr-2 border-b border-gray-200" role="presentation">
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
                setHideAddOn(null);
              }}
            >
              Description
            </button>
          </li>
          <li className="mr-2 border-b border-gray-200" role="presentation">
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
                setHideAddOn(null);
              }}
            >
              Seller
            </button>
          </li>
          <li className="mr-2 border-b border-gray-200" role="presentation">
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
                setHideAddOn("show");
                setHideBuy(null);
                setHideSell(null);
                setHideSellerTab(null);
              }}
            >
              Add-on services
            </button>
          </li>
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
          <p className="text-dark font-SemiBold text-2xl tracking-tighter my-12">
            Vehicle Details
          </p>

          <div className="container mx-auto">
            <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col justify-around md:items-center sm:items-start items-start md:px-0 sm:px-8 px-8 py-8">
              {/*LEFT COL*/}
              <div className="flex flex-col text-left">
                <span className="font-Light text-xl text-[#6D6D6D]">
                  Brand:{" "}
                  <span className="font-SemiBold">{vehicleData?.name}</span>
                </span>
                <span className="font-Light text-xl text-[#6D6D6D]">
                  Model:{" "}
                  <span className="font-SemiBold">{vehicleData?.model}</span>
                </span>
                <span className="font-Light text-xl text-[#6D6D6D]">
                  Year:{" "}
                  <span className="font-SemiBold">{vehicleData?.year}</span>
                </span>
                <span className="font-Light text-xl text-[#6D6D6D]">
                  Vehicle&apos;s Mileage:{" "}
                  <span className="font-SemiBold">{vehicleData?.mileage}</span>
                </span>
                <span className="font-Light text-xl text-[#6D6D6D]">
                  Transmission Type:{" "}
                  <span className="font-SemiBold">
                    {vehicleData?.transmission_type}
                  </span>
                </span>
              </div>
              {/*RIGHT COL*/}
              <div className="flex flex-col text-left">
                <span className="font-Light text-xl text-[#6D6D6D]">
                  Year of Registration:{" "}
                  <span className="font-SemiBold">
                    {vehicleData?.registration_year}
                  </span>
                </span>
                <span className="font-Light text-xl text-[#6D6D6D]">
                  Engine Capacity:{" "}
                  <span className="font-SemiBold">{vehicleData?.engine}</span>
                </span>
                <span className="font-Light text-xl text-[#6D6D6D]">
                  Fuel Type:{" "}
                  <span className="font-SemiBold">
                    {vehicleData?.fuel_type}
                  </span>
                </span>
                <span className="font-Light text-xl text-[#6D6D6D]">
                  Vehicle Color:{" "}
                  <span className="font-SemiBold">{vehicleData?.color}</span>
                </span>
              </div>
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
          <p className="text-dark font-Regular text-xl">Some Description</p>
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
          <p className="text-dark font-Regular text-xl">Seller Description</p>
        </motion.div>

        <motion.div
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
          <p className="text-dark font-Regular text-xl">Add-on Description</p>
        </motion.div>
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
