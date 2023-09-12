import Navbar from "../Navbar/Navbar";
import Search from "../../assets/images/search-1.svg";
import SearchIcon from "../../assets/images/search-2.svg";

const BuyACarHero = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-[#8C394C] text-center p-28">
        <h3 className="font-Bold text-5xl text-[#FFF]">
          Your New Ride is just a <p className="m-2">Few clicks Away!</p>
        </h3>
        <form className="flex justify-between items-center mt-12 p-1 text-[#A4A6A8] bg-[#FFFAF5]  max-w-[500px] mx-auto w-full border rounded-md">
          <div className="inline-flex">
            <img
              src={SearchIcon}
              alt="search-2.svg"
              style={{ height: "auto" }}
              className="mr-2 p-2"
            />
            <input
              type="text"
              id="large-input"
              placeholder="Search by brand, model, colour, etc"
              name="HONDA"
              required
              className="inline-flex py-2 font-Regular bg-[#FFFAF5] w-200px sm:w-[300px] text-xs"
            />
          </div>
          <div className="mr-4">
            <button
              type="submit"
              className="font-Bold text-[#5C2E14] bg-[#F3B757] rounded-xl focus:outline-none text-md px-7 py-2"
            >
              Search
            </button>
          </div>
          <input type="hidden" name="form-name" value="subscribe" />
        </form>
      </div>
    </div>
  );
};
export default BuyACarHero;