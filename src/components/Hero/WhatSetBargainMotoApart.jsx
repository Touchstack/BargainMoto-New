import Yellow from "../../assets/images/yellow-model.svg";
import Purple from "../../assets/images/purple-model.svg";
import Green from "../../assets/images/green-model.svg";
import VectorIcon from "../../assets/images/Vector.svg";
const WhatSetBargainMotoApart = () => {
  return (
    <div className="bg-[#FAFAFA] text-center py-11 md:px-4">
      <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-4xl text-3xl pb-14">
        What Sets
        <p>BargainMoto Apart</p>
      </h3>
      <div className="py-4">
        <div className="my-3 container mx-auto text-center text-dark">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-5 gap-2">
            <div className="px-12">
              <div className="px-4">
                <img
                  src={Yellow}
                  alt="yellow-model"
                  className="img-fluid lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px] w-[80px] h-[80px]"
                />
              </div>
              <h3 className="font-SemiBold text-[#191919] lg:text-2xl md:text-2xl sm:text-lg text-xl mt-6 text-start">
                Identity Check
              </h3>
              <p className="font-Regular text-[#333] text-lg pt-2 pb-4 mx-auto text-start mt-4">
                We verify buyers’ and sellers' identities before every sale.
              </p>
            </div>

            <div className="pl-12">
              <div className="px-4">
                <img
                  src={Purple}
                  alt="purple-model"
                  className="img-fluid lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px] w-[80px] h-[80px]"
                />
              </div>
              <h3 className="font-SemiBold text-[#191919] lg:text-2xl md:text-2xl sm:text-lg text-xl mt-6 text-start">
                History Check
              </h3>
              <p className="font-Regular text-[#333] text-lg pt-2 pb-4 mx-auto text-start mt-4">
                We confirm maintenance history so there are no costly surprises
                after you buy.
              </p>
            </div>

            <div className="pl-12">
              <div className="px-4">
                <img
                  src={Green}
                  alt="green-model"
                  className="img-fluid lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px] w-[80px] h-[80px]"
                />
              </div>
              <h3 className="font-SemiBold text-[#191919] lg:text-2xl md:text-2xl sm:text-lg text-xl mt-6 text-start">
                Secured Payments
              </h3>
              <p className="font-Regular text-[#333] text-lg pt-2 pb-4 mx-auto text-start mt-4">
                Protect yourself from fraud through our secure online payment
                platform. Anytime, Anywhere.
              </p>
            </div>

            <div className="pl-12">
              <div className="px-4">
                <img
                  src={VectorIcon}
                  alt="Vector"
                  className="img-fluid lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px] w-[80px] h-[80px]"
                />
              </div>
              <h3 className="font-SemiBold text-[#191919] text-start lg:text-2xl md:text-2xl sm:text-lg text-xl mt-6">
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
    </div>
  );
};
export default WhatSetBargainMotoApart;
