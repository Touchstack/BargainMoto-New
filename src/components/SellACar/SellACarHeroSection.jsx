import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import PrimaryButton from "../Buttons/PrimaryButton";
import Car1 from "../../assets/images/Car-1.svg";
import Car2 from "../../assets/images/Car-2.svg";
import Car3 from "../../assets/images/Car-3.svg";
import Car4 from "../../assets/images/Car-4.svg";

const SellACarHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="bg-[#8C394C]">
        <div className="py-18 px-2">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-4">
              {/* Left Col */}
              <div className="text-left items-center lg:p-24 md:p-18 sm:p-8 p-8">
                <h3 className="font-Bold lg:text-5xl md:text-4xl sm:text-4xl text-[#FFF] text-4xl mt-6 text-left">
                  Sell Your Car Fast to Serious Buyers!
                </h3>
                <p className="font-Regular lg:text-lg md:text-lg sm:text-base pt-8 text-[#EFEFEF] text-xl">
                  Get the exposure you need to sell fast to the right audience,
                  at the best price possible!
                </p>
                <div className="font-Regular inline-flex text-[#6D6D6D] lg:text-xl md:text-lg sm:text-base text-base pt-9 break-normal md:break-all">
                  <PrimaryButton
                    buttonText={"Sell Your Car Now"}
                    className=""
                    onClick={() =>
                      (window.location.href =
                        "https://bargainmotogh.com/register")
                    }
                  />
                </div>
              </div>

              {/* Right Col */}

              <div className="grid grid-cols-3 gap-x-3 p-8">
                <div className="flex justify-center items-center">
                  <img
                    src={Car1}
                    alt="Car-1"
                    style={{ height: "auto" }}
                    className=""
                  />
                </div>
                <div className="flex justify-center items-center">
                  <span className="border border-[#FA9A00] border-dashed rounded-[25px]">
                    <img
                      src={Car2}
                      alt="Car-2"
                      style={{ height: "auto" }}
                      className="p-2"
                    />
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={Car3}
                    alt="Car-3"
                    style={{ height: "auto" }}
                    className="mb-4"
                  />
                  <img
                    src={Car4}
                    alt="Car-4"
                    style={{ height: "auto" }}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellACarHeroSection;
