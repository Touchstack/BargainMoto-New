import PropTypes from "prop-types";
import { useState } from "react";
import ModalImage from "react-modal-image";
import { Lightbox } from "react-modal-image";
import Spinner from "../Spinner/Spinner";
import InfoTabs from "./InfoTabs";

const VehicleDetails = ({ vehicleData, loading }) => {
  const IMG = `https://bargain-moto.nyc3.digitaloceanspaces.com/${vehicleData?.featured_image}`;
  const [openModal, setOpenModal] = useState(false);
  const [currentImg, setCurrentImg] = useState();
  const additionalImages = vehicleData?.pictures;
  const resultParsed = additionalImages && JSON.parse(additionalImages);
  const splicedImages = resultParsed?.slice(0, 3);

  const openImage = (img) => {
    setCurrentImg(img);
    setOpenModal(true);
  };

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
            <h3 className="tracking-tight text-left text-xl">Back to search</h3>
          </button>

          {openModal && (
            <Lightbox
              small={currentImg}
              large={currentImg}
              medium={currentImg}
              alt=""
              hideZoom={true}
              hideDownload={true}
              onClose={() => setOpenModal(false)}
            />
          )}

          {loading ? (
            <div className="py-8">
              <Spinner />
            </div>
          ) : vehicleData && !loading ? (
            <div className="mx-auto">
              <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col">
                <div
                  onClick={() => openImage(IMG)}
                  className="bg-gray-100 md:h-[600px] h-[400px] lg:w-6/12 lg:mr-4 mb-4 cursor-pointer hover:brightness-50 duration-500"
                  style={{
                    backgroundImage: `url(${IMG})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="flex-col justify-center items-center md:h-[600px] h-[350px] lg:w-3/12 lg:mr-6 mb-4">
                  {splicedImages?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`bg-gray-200 md:h-[178px] h-[100px] cursor-pointer hover:brightness-50 duration-500 ${
                          index === splicedImages?.length - 1
                            ? "mb-0"
                            : "md:mb-8 sm:mb-4 mb-4"
                        }`}
                        onClick={() =>
                          openImage(
                            `https://bargain-moto.nyc3.digitaloceanspaces.com/${item}`
                          )
                        }
                        style={{
                          backgroundImage: `url(${`https://bargain-moto.nyc3.digitaloceanspaces.com/${item}`})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "100%",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    );
                  })}
                </div>
                <div className="flex justify-center md:h-[600px] h-[300px] lg:w-3/12">
                  <div className="bg-white rounded-xl shadow-2xl shadow-slate-300 p-5 text-black text-left self-center w-full">
                    <div className="flex">
                      <h5 className=" text-[#EC970F] font-SemiBold text-base bg-[#FFF8EB] px-4 py-2 my-3 rounded-3xl self-start">
                        {vehicleData?.sale_type === "Fixed Price Sale"
                          ? "Fixed Price"
                          : vehicleData?.sale_type}
                      </h5>
                    </div>
                    <h5 className="mb-1 text-xl font-Regular tracking-tight text-gray-700 truncate hover:underline">
                      {loading
                        ? "loading..."
                        : vehicleData?.year + " " + vehicleData?.name}
                    </h5>
                    <div
                      className={`mb-3 text-sm text-gray-700 font-Regular truncate`}
                    >
                      {loading ? "loading..." : vehicleData?.location}
                    </div>
                    <div className="font-SemiBold tracking-tighter py-1 text-xl hover:underline text-left text-dark">
                      {loading
                        ? "loading..."
                        : "GHS " +
                          Number(vehicleData?.selling_price).toLocaleString(
                            "en-US"
                          )}
                    </div>

                    {/*<PrimaryButton
                      buttonText={"Schedule Test Drive"}
                      className={"my-8 w-full"}
                          />*/}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="font-Bold text-gray-400 lg:text-2xl md:text-2xl sm:text-xl text-xl lg:py-12 md:py-8 py-4 bg-gray-100 rounded-lg">
              No Available Featured Listings
            </p>
          )}
        </div>

        <InfoTabs vehicleData={vehicleData} />
      </div>
    </div>
  );
};

VehicleDetails.propTypes = {
  vehicleData: PropTypes.object,
  loading: PropTypes.bool,
};

VehicleDetails.defaultProps = {
  vehicleData: {},
  loading: "",
};

export default VehicleDetails;
