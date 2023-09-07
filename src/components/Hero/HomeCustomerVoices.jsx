import FrameIcon from "../../assets/images/Frame.svg";
import Badge from "../../assets/images/Verified-badge.svg";
import EllipseIcon from "../../assets/images/Ellipse.svg";
import EllipseIcon2 from "../../assets/images/Amina.svg";
const HomeCustomerVoices = () => {
  return (
    <div className="bg-[#FFFDF6] py-40">
      <h3 className="font-Bold text-[#191919] text-center lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:py-3 md:py-8 py-4">
        Customer voices
      </h3>
      <div className="font-Regular text-[#191919] text-center text-md">
        Dont just take our word for it. Hear what our happy customers
        <p>have to say about BargainMoto! </p>
      </div>
      <div className="container mx-auto">
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center  px-4 pt-12 sm:pt-20 text-block text-[#191919]">
          <div className="bg-[#FDFCFB] rounded-lg shadow-2xl w-[304px] h-[257px] lg:mr-5 md:mr-5 md:mb-0 sm:mb-5 mb-5">
            <div className="font-Regular text-[#191919] text-lg mt-4 pl-4 pr-4">
              "I was nervous about buying a car online, but BargainMoto made it
              easy. I found a quality car that fits my budget. Highly
              recommend."
              <p className="inline-flex mt-9 text-base text-[#666]">
                <img
                  src={EllipseIcon}
                  alt="Ellipse"
                  style={{ height: "40px", width: "40px" }}
                  className="img-fluid mx-auto mr-2"
                />
                <span className="text-[#191919]">
                  Dee Nti, <span className="text-[#666]">Verified Seller</span>
                  <div className="flex gap-x-2 h-max">
                    <img
                      src={FrameIcon}
                      alt="Frame"
                      style={{ height: "16px", width: "14px" }}
                      className=""
                    />
                    <img
                      src={FrameIcon}
                      alt="Frame"
                      style={{ height: "16px", width: "14px" }}
                      className=""
                    />
                    <img
                      src={FrameIcon}
                      alt="Frame"
                      style={{ height: "16px", width: "14px" }}
                      className=""
                    />
                    <img
                      src={FrameIcon}
                      alt="Frame"
                      style={{ height: "16px", width: "14px" }}
                      className=""
                    />
                    <img
                      src={FrameIcon}
                      alt="Frame"
                      style={{ height: "16px", width: "14px" }}
                      className=""
                    />
                  </div>
                </span>
                <img
                  src={Badge}
                  alt="Verified-badge"
                  style={{ height: "16px", width: "16px" }}
                  className="img-fluid mx-auto ml-3 mt-1"
                />
              </p>
            </div>
          </div>
          <div className="bg-[#FDFCFB] rounded-lg shadow-2xl w-[304px] h-[257px]">
            <div className="font-Regular text-[#191919] text-lg mt-4 pl-4 pr-4">
              "Great selection, fair prices, and superb customer service.
              BargainMoto is my go-to for all car deals."
              <p className="inline-flex mt-16 text-base text-[#666]">
                <img
                  src={EllipseIcon2}
                  alt="Amina"
                  style={{ height: "40px", width: "40px" }}
                  className="img-fluid mx-auto mr-2"
                />
                <span className="text-[#191919]">
                  Amina, <span className="text-[#666]">Verified Buyer</span>
                  <div className="flex gap-x-2 h-max">
                    <img
                      src={FrameIcon}
                      alt="Frame"
                      style={{ height: "16px", width: "14px" }}
                      className=""
                    />
                    <img
                      src={FrameIcon}
                      alt="Frame"
                      style={{ height: "16px", width: "14px" }}
                      className=""
                    />
                    <img
                      src={FrameIcon}
                      alt="Frame"
                      style={{ height: "16px", width: "14px" }}
                      className=""
                    />
                    <img
                      src={FrameIcon}
                      alt="Frame"
                      style={{ height: "16px", width: "14px" }}
                      className=""
                    />
                    <img
                      src={FrameIcon}
                      alt="Frame"
                      style={{ height: "16px", width: "14px" }}
                      className=""
                    />
                  </div>
                </span>
                <img
                  src={Badge}
                  alt="Verified-badge"
                  style={{ height: "16px", width: "16px" }}
                  className="img-fluid mx-auto ml-3 mt-1"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCustomerVoices;
