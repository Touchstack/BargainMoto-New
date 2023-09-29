import { useContext, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import debounce from "lodash/debounce";
import { AppContext } from "../../context/AppContext";
import SearchIcon from "../../assets/images/search-2.svg";
import CloseIcon from "../../assets/images/close.svg";
import sliders from "../../assets/images/sliders.svg";
import Mappin from "../../assets/images/map-pin.svg";
import PropTypes from "prop-types";

const SearchPageHero = ({ text }) => {
  const inputRef = useRef(null);
  const [appContext, setAppContext] = useContext(AppContext);
  const debounceFn = debounce(handleDebounceFn, 500);

  function handleDebounceFn(val) {
    setAppContext({
      ...appContext,
      searchText: val,
    });
  }

  const handleInputChange = (e) => {
    debounceFn(e.target.value);
  };

  // Function to run when Enter is pressed
  /*const handleEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      // Perform your action here
      return handleInputChange(e);
    }
  };*/

  const onClearInput = (e) => {
    e.preventDefault();
    debounceFn("");
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear the input value
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <form className="my-12 p-1 text-black bg-[#FFF] max-w-[500px] mx-auto lg:w-full md:w-full sm:w-10/12 w-10/12 border rounded-md">
          <div className="flex">
            <img
              src={SearchIcon}
              alt="search-2.svg"
              style={{ height: "auto" }}
              className="mr-2 p-2"
            />
            <input
              ref={inputRef}
              defaultValue={text}
              type="text"
              id="large-input"
              placeholder="Search by brand, model, colour, etc"
              //name=""
              required
              className="py-2 font-Regular bg-[#FFF] w-full text-md outline-none"
              onChange={handleInputChange}
              // onKeyDown={handleEnterKeyDown}
            />
            <button
              type="button"
              onClick={onClearInput}
              className="hover:scale-110 duration-100"
            >
              <img
                src={CloseIcon}
                alt="closeIcon"
                style={{ height: "auto" }}
                className="mx-4 p-2"
              />
            </button>
          </div>
        </form>
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center overflow-hidden space-x-6 mb-8">
        <div className="font-Regular text-[#EC970F] text-sm text-underline cursor-pointer hover:underline">
          <img
            src={Mappin}
            alt="map-pin.svg"
            className="inline-flex py-1 p-2 font-Regular bg-[#FFF] text-xs md:mb-0 sm:mb-2 mb-2 "
          />
          Current location
        </div>
        <div>
          <button className="font-Regular border rounded-2xl px-5 py-2 text-[#6D6D6D]  md:mb-0 sm:mb-2 mb-2 hover:bg-slate-50">
            Make & Model
          </button>
        </div>
        <div>
          <button className="font-Regular border rounded-2xl px-5 py-2 text-[#6D6D6D]  md:mb-0 sm:mb-2 mb-2 hover:bg-slate-50">
            Sort by: Lowest Price
          </button>
        </div>
        <div className="inline-flex">
          <button className="flex font-Regular border rounded-2xl px-7 py-2 text-[#6D6D6D]  md:mb-0 sm:mb-2 mb-2 hover:bg-slate-50">
            <img
              src={sliders}
              alt="sliders.svg"
              style={{ height: "auto" }}
              className="inline-flex py-1 p-2 font-Regular  text-xs  md:mb-0 sm:mb-2 mb-2"
            />
            Filters
          </button>
        </div>
      </div>
    </div>
  );
};

SearchPageHero.propTypes = {
  text: PropTypes.string,
};

SearchPageHero.defaultProps = {
  text: "",
};

export default SearchPageHero;
