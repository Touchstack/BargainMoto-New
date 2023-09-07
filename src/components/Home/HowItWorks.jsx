import React from "react";
import { motion } from "framer-motion";
import HowItWorksImg from "../../assets/images/howitworks.svg";
import RegisterIcon from "../../assets/images/register-icon.svg";
import VehicleIcon from "../../assets/images/vehicle.svg";
import TestDrive from "../../assets/images/test-drive.svg";
import MoneyImg from "../../assets/images/money.svg";

const model_obj_buy = [
  {
    img: RegisterIcon,
    color: "bg-purple-500",
    title: "Register & Get Verified",
    text: "To make our platform safe, we require a few details: E-mail, Phone number, ID verification and DVLA Vehicle registration certificate (VRC).",
  },
  {
    img: VehicleIcon,
    color: "bg-appYellow",
    title: "List Your Vehicle",
    text: "Take excellent photos of your car and upload on Bargain Moto to get the best offer. Once the registration is complete, we'll contact you to schedule a FREE pre-purchase inspection to get your car verified for sale.",
  },

  {
    img: TestDrive,
    color: "bg-green-400",
    title: "Bargain & Schedule Test Drives",
    text: "Manage all offers through your account with the ability to Accept or Reject a bid, and schedule test drives with buyers who have committed to the transaction.",
  },
  {
    img: MoneyImg,
    color: "bg-blue-500",
    title: "Get Paid",
    text: "After you and the buyer have agreed on the sale price, we collect payment from the buyer and then transfer the payment to you electronically.",
  },
];

const model_obj_sell = [
  {
    img: RegisterIcon,
    color: "bg-purple-500",
    title: "Search & Create Account",
    text: "Find cars on our site and register to make offers.",
  },
  {
    img: VehicleIcon,
    color: "bg-appYellow",
    title: "Bargain With Sellers",
    text: "Submit and keep track of your offers all in one place without sharing your personal contact information. You will receive direct feedback from the seller through the platform whether your bid has been accepted or rejected.",
  },
  {
    img: TestDrive,
    color: "bg-green-400",
    title: "Schedule Test Drive",
    text: "Pay the minimum deposit and Schedule a date and time with the Seller for a test drive. Your deposit will be refunded if you reject the car after the test drive.",
  },
  {
    img: MoneyImg,
    color: "bg-blue-500",
    title: "Final Payment",
    text: "Avoid fraud by using our escrow-like payment service. Simply send any remaining funds by using our Partner banks. Your money will be transferred to the seller after we have confirmation you have received the car with all the necessary documentation.",
  },
];

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = React.useState("buy");
  const [hideBuy, setHideBuy] = React.useState(null);
  const [hideSell, setHideSell] = React.useState("hidden");
  const activeBuyClass =
    activeTab === "buy"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-gray-800 font-Bold border-amber-500 hover:border-b-4 hover:text-gray-900 focus:outline-none"
      : "inline-block px-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500 border-gray-100";
  const activeSellClass =
    activeTab === "sell"
      ? "inline-block px-4 rounded-t-lg border-b-4 text-gray-800 font-Bold border-amber-500 hover:border-b-4 hover:text-gray-900 focus:outline-none border-appYellow"
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

  const cardVariant = {
    active: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    inactive: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto">
      <div
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 lg:py-8 py-4"
        id="services"
      >
        <div className="py-12 lg:pl-24 md:pl-16 sm:pl-12 pl-12 lg:pt-2">
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl py-4">
            How it works
          </h3>
          <div className="mb-4 dark:border-gray-700">
            <ul
              className="flex flex-wrap justify-start py-4 font-medium font-Bold text-xl"
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
                    setHideSell("hidden");
                  }}
                >
                  For Sellers
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
                    setHideBuy("hidden");
                  }}
                >
                  For Buyers
                </button>
              </li>
            </ul>
          </div>

          <div id="myTabContent">
            <motion.div
              id="profile"
              role="tabpanel"
              variants={tabContentVariant}
              animate={hideBuy ? "active" : "inactive"}
              initial="inactive"
              aria-labelledby="profile-tab"
            >
              <ol
                className={`${hideSell} border-l border-gray-300 border-dashed`}
              >
                {model_obj_sell.map((e, i) => {
                  return (
                    <motion.li
                      key={i}
                      className="my-12 flex"
                      variants={cardVariant}
                    >
                      <span className="font-Light flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-full -ml-4 mr-4 ring-8 ring-white">
                        {i + 1}
                      </span>
                      <div className="inline-flex justify-start items-center tracking-tighter font-Regular lg:text-xl md:text-lg sm:text-lg text-lg py-0">
                        <img src={e.img} className="mr-2" />
                        {e.title}
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </motion.div>

            <motion.div
              id="dashboard"
              role="tabpanel"
              variants={tabContentVariant}
              animate={hideSell ? "active" : "inactive"}
              initial="inactive"
              aria-labelledby="dashboard-tab"
            >
              <ol
                className={`${hideBuy} border-l border-gray-300 border-dashed`}
              >
                {model_obj_buy.map((e, i) => {
                  return (
                    <motion.li
                      key={i}
                      className="my-12 flex"
                      variants={cardVariant}
                    >
                      <span className="font-Light flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-full -ml-4 mr-4 ring-8 ring-white">
                        {i + 1}
                      </span>
                      <div className="inline-flex justify-start items-center tracking-tighter font-Regular lg:text-xl md:text-lg sm:text-lg text-lg py-0">
                        <img src={e.img} className="mr-2" />
                        {e.title}
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center img-fluid ml-8 mr-8">
          <img
            src={HowItWorksImg}
            alt="How It Works Img"
            style={{ height: "auto" }}
            className="self-center"
          />
        </div>
      </div>
    </div>
  );
};
