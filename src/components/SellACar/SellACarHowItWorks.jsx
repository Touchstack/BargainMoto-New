import { motion } from "framer-motion";
import HowItWorksImg from "../../assets/images/howitworks.svg";
import RegisterIcon from "../../assets/images/register-icon.svg";
import VehicleIcon from "../../assets/images/vehicle.svg";
import TestDrive from "../../assets/images/test-drive.svg";
import MoneyImg from "../../assets/images/money.svg";
import PrimaryButton from "../Buttons/PrimaryButton";

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

export const SellACarHowItWorks = () => {
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
    <div className="container mx-auto pt-8 pb-16">
      <div className="font-Bold flex justify-center items-center lg:text-4xl md:text-3xl sm:text-3xl text-4xl lg:py-18 md:py-16 sm:py-1 py-1">
        How it works
      </div>
      <div
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1"
        id="services"
      >
        <div className="pt-2 pb-16 lg:pl-48 md:pl-12 sm:pl-8 pl-8 lg:pt-2">
          <div id="myTabContent">
            <motion.div
              id="dashboard"
              role="tabpanel"
              variants={tabContentVariant}
              animate={"active"}
              initial="inactive"
              aria-labelledby="dashboard-tab"
            >
              <ol className={``}>
                {model_obj_buy.map((e, i) => {
                  return (
                    <motion.li
                      key={i}
                      className="my-12 flex"
                      variants={cardVariant}
                    >
                      <div className="inline-flex justify-start items-center tracking-tighter font-Regular lg:text-2xl md:text-xl sm:text-xl text-xl py-0">
                        <img src={e.img} className="mr-2" />
                        {e.title}
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </motion.div>
          </div>
          <PrimaryButton
            buttonText={"Sell Your Car Now"}
            className=""
            onClick={() =>
              (window.location.href = "https://bargainmotogh.com/register")
            }
          />
        </div>
        <div className="flex justify-center items-center lg:mx-0 lg:mr-32 md:mx-0 md:mr-16 sm:mx-8 mx-8">
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

export default SellACarHowItWorks;
