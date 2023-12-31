import Navbar from "../Navbar/Navbar";
import PrimaryButton from "../Buttons/PrimaryButton";
import CarImage from "../../assets/images/sell-car.png";

const SellACarHeroSection = () => {
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
              <div className="flex justify-center items-center pb-5">
                <img
                  src={CarImage}
                  alt="sell-car.png"
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
