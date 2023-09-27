import React from "react";
import { motion } from "framer-motion";

function InfoTabs() {
  const [activeTab, setActiveTab] = React.useState("buy");
  const [hideBuy, setHideBuy] = React.useState(null);
  const [hideSellerTab, setHideSellerTab] = React.useState(null);
  const [hideSell, setHideSell] = React.useState("show");
  const activeBuyClass =
    activeTab === "buy"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-Bold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none"
      : "inline-block px-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100";
  const activeSellClass =
    activeTab === "sell"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-Bold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none"
      : "inline-block px-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100";

  const activeSellerTabClass =
    activeTab === "sellerTab"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-[#EC970F] font-Bold border-amber-500 hover:border-b-4 hover:text-[#EC970F] focus:outline-none"
      : "inline-block px-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100";
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
          className="flex justify-center my-4 font-medium font-Bold text-xl border-b border-gray-200 w-full"
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
              }}
            >
              Seller
            </button>
          </li>
        </ul>
      </div>

      <div id="myTabContent">
        <motion.div
          id="profile"
          role="tabpanel"
          variants={tabContentVariant}
          animate={hideBuy ? { opacity: 1 } : "inactive"}
          initial={{ opacity: 1 }}
          aria-labelledby="profile-tab"
          transition={{
            easings: "linear",
            duration: 1,
          }}
        >
          <p className="text-dark font-Regular text-xl">Some Details</p>
        </motion.div>

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
          <p className="text-dark font-Regular text-xl">Some Description</p>
        </motion.div>

        <motion.div
          id="seller"
          role="tabpanel"
          variants={tabContentVariant}
          animate={hideSellerTab ? { opacity: 1 } : "inactive"}
          initial={{ opacity: 1 }}
          aria-labelledby="seller-tab"
          transition={{
            easings: "linear",
            duration: 1,
          }}
        >
          <p className="text-dark font-Regular text-xl">Seller Description</p>
        </motion.div>
      </div>
    </div>
  );
}

export default InfoTabs;
