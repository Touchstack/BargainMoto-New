import Navbar from "../Navbar/Navbar";
import PrimaryButton from "../Buttons/PrimaryButton";
import Car1 from "../../assets/images/Car-1.svg";
import Car2 from "../../assets/images/Car-2.svg";
import Car3 from "../../assets/images/Car-3.svg";
import Car4 from "../../assets/images/Car-4.svg";

const SellACarHeroSection = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-[#8C394C]">
        <div className="py-18 px-2">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
              {/* Left Col */}
              <div className="text-left items-center lg:p-32 md:p-24">
                <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-[#FFF] text-4xl mt-6 break-normal md:break-all text-left">
                  Sell Your Car Fast to Serious Buyers!
                </h3>

                <p className="font-Regular lg:text-lg md:text-lg sm:text-base pt-4 break-normal md:break-all text-[#EFEFEF] text-xl mt-10">
                  Get the exposure you need to sell fast to the righ audience,
                  at the best price possible!
                </p>

                <div className="font-Regular inline-flex text-[#6D6D6D] lg:text-xl md:text-lg sm:text-base text-base pt-9 break-normal md:break-all">
                  <PrimaryButton
                    buttonText={"Sell Your Car Now"}
                    className=""
                  />
                </div>
              </div>

              {/* Right Col */}

              <div className="relative inline-flex lg:mt-0 md:mt-0 mt-2 space-x-6">
                <img
                  src={Car1}
                  alt="Car-1"
                  style={{ height: "auto" }}
                  className=""
                />
                <img
                  src={Car2}
                  alt="Car-2"
                  style={{ height: "auto" }}
                  className=""
                />
                <img
                  src={Car3}
                  alt="Car-3"
                  style={{ height: "auto" }}
                  className=""
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
  );
};
export default SellACarHeroSection;
