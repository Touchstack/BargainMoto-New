import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Yellow from "../../assets/images/yellow-model.svg";
import Purple from "../../assets/images/purple-model.svg";
import Green from "../../assets/images/green-model.svg";
import VectorIcon from "../../assets/images/Vector.svg";

const WhatSetBargainMotoApart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAFAFA] text-center py-11 md:px-4">
      <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-4xl text-3xl pb-14">
        What Sets <br /> BargainMoto Apart
      </h3>
      <div className="py-4">
        <div className="my-3 container mx-auto text-center text-dark">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:mt-5 md:mt-4 sm:mt-1 mt-1 gap-y-12 gap-x-4">
            <div className="px-12">
              <img
                src={Yellow}
                alt="yellow-model"
                className="lg:h-[120px] lg:w-[120px] md:h-[100px] md:w-[100px] sm:h-[80px] sm:w-[80px] h-[80px] w-[80px]"
              />

              <h3 className="font-SemiBold text-[#191919] lg:text-2xl md:text-2xl sm:text-xl text-xl mt-6 text-start">
                Identity Check
              </h3>
              <p className="font-Regular text-[#333] text-lg pt-2 pb-4 mx-auto text-start mt-4">
                We verify buyers’ and sellers' identities before every sale.
              </p>
            </div>
            <div className="px-12">
              <img
                src={Purple}
                alt="purple-model"
                className="lg:h-[120px] lg:w-[120px] md:h-[100px] md:w-[100px] sm:h-[80px] sm:w-[80px] h-[80px] w-[80px]"
              />

              <h3 className="font-SemiBold text-[#191919] lg:text-2xl md:text-2xl sm:text-xl text-xl mt-6 text-start">
                History Check
              </h3>
              <p className="font-Regular text-[#333] text-lg pt-2 pb-4 mx-auto text-start mt-4">
                We confirm maintenance history so there are no costly surprises
                after you buy.
              </p>
            </div>

            <div className="px-12">
              <img
                src={Green}
                alt="green-model"
                className="lg:h-[120px] lg:w-[120px] md:h-[100px] md:w-[100px] sm:h-[80px] sm:w-[80px] h-[80px] w-[80px]"
              />

              <h3 className="font-SemiBold text-[#191919] lg:text-2xl md:text-2xl sm:text-xl text-xl mt-6 text-start">
                Secured Payments
              </h3>
              <p className="font-Regular text-[#333] text-lg pt-2 pb-4 mx-auto text-start mt-4">
                Protect yourself from fraud through our secure online payment
                platform. Anytime, Anywhere.
              </p>
            </div>

            <div className="px-12">
              <img
                src={VectorIcon}
                alt="Vector"
                className="lg:h-[120px] lg:w-[120px] md:h-[100px] md:w-[100px] sm:h-[80px] sm:w-[80px] h-[80px] w-[80px]"
              />

              <h3 className="font-SemiBold text-[#191919] text-start lg:text-2xl md:text-2xl sm:text-xl text-xl mt-6">
                After Sales Services
              </h3>
              <p className="font-Regular text-[#333] text-lg pt-2 pb-4 mx-auto text-start mt-4">
                Car registration, insurance, road side assitance and many more.
                Our Journey with you doesnt end after your purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="font-SemiBold bg-[#F3B757] text-center text-xl text-[#5C2E14] rounded-lg p-3 w-60 mt-6 
        hover:bg-amber-500 focus:ring-1 focus:outline-none focus:ring-amber-100"
        buttonText={"Create An Account"}
        onClick={() => navigate("https://bargainmotogh.com/register")}
      >
        Create An Account
      </button>
    </div>
  );
};
export default WhatSetBargainMotoApart;
