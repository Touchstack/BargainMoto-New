import Navbar from "../Navbar/Navbar";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import SearchIcon from "../../assets/images/search-2.svg";

const BuyACarHero = () => {
  const [loading, setLoading] = useState(false);
  const [appContext, setAppContext] = useContext(AppContext);
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const conductSearch = async () => {
    if (!value) {
      return;
    }
    setLoading(true);
    setAppContext({
      ...appContext,
      searchText: value,
    });
    setTimeout(() => {
      setLoading(false);
      return navigate(`/vehicles/search/${value}`);
    }, 500);
  };

  // Function to run when Enter is pressed
  const handleEnterKeyDown = (e) => {
    setValue(e?.target?.value);
    if (e.key === "Enter") {
      // Perform your action here
      return conductSearch(e?.target?.value);
    }
  };

  const Spinner = () => {
    return (
      <div className="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-5 h-5 mr-2 text-gray-200 animate-spin fill-[#8C394C]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <Navbar />
      <div className="bg-[#8C394C] text-center lg:p-24 md:p-18 sm:p-8 p-8">
        <h3 className="font-Bold text-center lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-[#FFF]">
          Your New Ride is just a Few clicks Away!
        </h3>
        <form className="flex justify-between items-center mt-12 p-1 text-dark bg-[#FFF] max-w-[500px] mx-auto w-full border rounded-md">
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
              placeholder="Search by brand, model etc"
              name="HONDA"
              required
              disabled={loading}
              className="inline-flex py-2 font-Regular bg-[#FFF] w-200px sm:w-[300px] text-md outline-none"
              onChange={(e) => setValue(e?.target?.value)}
              onKeyDown={handleEnterKeyDown}
            />
          </div>
          <div className="-ml-10">
            <button
              type="button"
              className="font-Bold text-[#5C2E14] bg-[#F3B757] rounded-xl focus:outline-none text-md md:px-7 sm:px-5 px-4 py-2"
              onClick={() => conductSearch()}
              disabled={loading}
            >
              {loading ? <Spinner /> : "Search"}
            </button>
          </div>
          <input type="hidden" name="form-name" value="subscribe" />
        </form>
      </div>
    </div>
  );
};
export default BuyACarHero;
