import Navbar from "../Navbar/Navbar";
import Search from "../../assets/images/search-1.svg";
import SearchIcon from "../../assets/images/search-2.svg";
import sliders from "../../assets/images/sliders.svg";
import Mappin from "../../assets/images/map-pin.svg";
import Footer from "../Footer/Footer";

const SearchBuyACar = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <form className="flex justify-between items-center mt-16 p-1 text-[#A4A6A8] bg-[#FFF]  max-w-[500px] mx-auto w-full border rounded-md">
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
              className="inline-flex py-2 font-Regular bg-[#FFF] w-200px sm:w-[300px] text-xs"
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
      <div className="flex justify-center items-center space-x-6 mt-6 mb-4">
        <div className="font-Regular text-[#EC970F] text-sm text-underline">
          <img
            src={Mappin}
            alt="map-pin.svg"
            className="inline-flex py-1 p-2 font-Regular bg-[#FFF] text-xs"
          />
          Current location
        </div>
        <div>
          <button className="font-Regular border rounded-2xl px-5 py-2 text-[#6D6D6D]">
            Make & Model
          </button>
        </div>
        <div>
          <button className="font-Regular border rounded-2xl px-5 py-2 text-[#6D6D6D]">
            Sort by: Lowest Price
          </button>
        </div>
        <div className="inline-flex">
          <button className="flex font-Regular border rounded-2xl px-7 py-2 text-[#6D6D6D]">
            <img
              src={sliders}
              alt="sliders.svg"
              style={{ height: "auto" }}
              className="inline-flex py-1 p-2 font-Regular bg-[#FFF] text-xs"
            />
            Filters
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SearchBuyACar;
