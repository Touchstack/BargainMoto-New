import Benz from "../../assets/images/Benz.svg";
const WhyWeDoIt = () => {
  return (
    <div className="container mx-auto bg-[#000] rounded-md py-4">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
        <div className="py-12 px-8 lg:ml-14">
          <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 text-[#EC970F]">
            Why We Do It
          </h3>
          <div className="py-6">
            <p className="font-Regular max-w-[470px] lg:text-xl md:text-lg sm:text-lg text-lg lg:text-left md:text-left text-[#FFF] text-center">
              By verifying all buyers' and sellers' identities, we prevent
              imposters from committing fraudulent sales. We also verify
              ownership history of cars and conduct pre-purchase inspections,
              using diagnostic scanners to detect if cars are suitable for sale;
              giving our buyers total confidence with their purchase.
            </p>
          </div>
        </div>
        <div className="inline-flex justify-center items-center img-fluid mx-8">
          <span className="border border-[#FA9A00] border-dashed rounded-[30px]">
            <img
              src={Benz}
              alt="Benz"
              style={{ height: "296px", width: "234.025px" }}
              className="w-full p-2"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default WhyWeDoIt;
