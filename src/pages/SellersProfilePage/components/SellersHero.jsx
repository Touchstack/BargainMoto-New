import APlus from "../../../assets/images/A-plus-icon.svg";
import VerifiedIcon from "../../../assets/images/verified.svg";
import InspectIcon from "../../../assets/images/inspect.svg";
import Star from "../../../assets/images/star-fill.svg";
const SellersHero = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto text-center lg:py-12 md:py-12 sm:py-6 py-6 ">
        <div className="md:px-12 px-11">
          <button
            className="flex items-center lg:my-8 md:my-8 my-4 font-Regular hover:underline"
            onClick={() => (window.location.href = "/buyacar")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M15.5302 19.4694C15.5999 19.539 15.6552 19.6218 15.6929 19.7128C15.7306 19.8039 15.75 19.9014 15.75 20C15.75 20.0985 15.7306 20.1961 15.6929 20.2872C15.6552 20.3782 15.5999 20.4609 15.5302 20.5306C15.4606 20.6003 15.3778 20.6556 15.2868 20.6933C15.1957 20.731 15.0982 20.7504 14.9996 20.7504C14.9011 20.7504 14.8035 20.731 14.7124 20.6933C14.6214 20.6556 14.5387 20.6003 14.469 20.5306L6.96899 13.0306C6.89926 12.961 6.84394 12.8782 6.80619 12.7872C6.76845 12.6961 6.74902 12.5986 6.74902 12.5C6.74902 12.4014 6.76845 12.3038 6.80619 12.2128C6.84394 12.1217 6.89926 12.039 6.96899 11.9694L14.469 4.46936C14.6097 4.32863 14.8006 4.24957 14.9996 4.24957C15.1986 4.24957 15.3895 4.32863 15.5302 4.46936C15.671 4.6101 15.75 4.80097 15.75 4.99999C15.75 5.19901 15.671 5.38988 15.5302 5.53061L8.55993 12.5L15.5302 19.4694Z"
                fill="#808080"
              />
            </svg>
            <h3 className="tracking-tight text-left text-xl">
              Back to listing
            </h3>
          </button>
          <div className="container mx-auto w-1104 h-208 top-113 left-183 rounded-2xl border border-[#F2F2F2]">
            <h1 className="font-Regular text-[#EC970F] mt-2">Seller</h1>
            <span className="items-start justify start">
              <img
                src={APlus}
                alt="A-plus-icon.svg"
                className="inline-flex mr-8"
              />
            </span>
            <h3 className="inline-flex items center justify-center text-start font-Bold text-[#000000] text-center lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:py-3 md:py-8 py-4">
              APLUS Motors
            </h3>
            <div className="text-[#6D6D6D] flex flex-wrap items-center justify-center gap-3 font-Regular text-center text-md px-4 mb-7">
              <img
                src={VerifiedIcon}
                alt="A-plus-icon.svg"
                className="mb-1 sm:mb-0"
              />
              <span className="mb-1 sm:mb-0">Verified Seller</span>
              <img
                src={Star}
                alt="A-plus-icon.svg"
                className="ml-2 mb-1 sm:mb-0"
              />
              <span className="mb-1 sm:mb-0">Reviews</span>
              <img
                src={InspectIcon}
                alt="A-plus-icon.svg"
                className="ml-2 mb-1 sm:mb-0"
              />
              <span className="mb-1 sm:mb-0">Vehicle Inspected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellersHero;
