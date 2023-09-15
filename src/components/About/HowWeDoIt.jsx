import Driving from "../../assets/images/Driving.svg";
import Mercedes from "../../assets/images/Mercedes.Coupe.svg";
const HowWeDoIt = () => {
  return (
    <div className="bg-[#FAFAFA] p-12 text-center lg:text-xl md:text-xl sm:text-lg">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-4">
          <div className="flex justify-center items-center mx-8 lg:mt-0 md:mt-0 mt-12">
            <img
              src={Mercedes}
              alt="Mercedes"
              style={{ height: "320px", width: "158px" }}
            />
            <div className="flex justify-center items-center ml-4">
              <span className="border border-[#FA9A00] border-dashed rounded-[25px]">
                <img
                  src={Driving}
                  alt="Driving"
                  style={{ height: "296px", width: "234.025px" }}
                  className="p-4"
                />
              </span>
            </div>
          </div>
          <div className="md:mt-0 sm:mt-16 mt-16">
            <p className="font-Regular text-[#6D6D6D] text-xl lg:text-xl md:text-lg sm:text-lg lg:text-left md:text-left text-center max-w-[3000px]">
              <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 text-[#191919]">
                How We Do It
              </h3>
              By verifying all buyer's and seller's identities, we prevent
              imposters from committing fraudulent sales. We also verify
              ownership history of cars and conduct pre-purchase inspections,
              using diagnostic scanners to detect if cars are suitabe for sales;
              giving our buyers total confidence with their purchase.
              <p className="mt-6">
                The marketplace includes a feature for sellers to either set a
                fixed price or allow buyers to directly place bids on their
                cars. Personal contact information is only shared when a bid has
                been accepted, ensuring the convenience of a private shopping
                experience. Our integrated banking feature guarantees a secure
                flow of funds from buyer to seller through our escrow payment.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowWeDoIt;
