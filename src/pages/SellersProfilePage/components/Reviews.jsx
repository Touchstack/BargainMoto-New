import StarRate from "../../../assets/images/star.svg";
import SellerMan from "../../../assets/images/profile-pic.svg";
import SellerWoman from "../../../assets/images/sellers.svg";

const Reviews = () => {
  return (
    <div className="bg-[#FFF] lg:py-30 md:py-26 sm:py-20 py-14">
      <h3 className="font-Bold text-[#000000] text-center lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:py-3 md:py-8 py-4">
        Seller Reviews
      </h3>
      <div className="container mx-auto">
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center gap-8 px-4 pt-12 sm:pt-20 text-block text-[#191919]">
          <div className="bg-[#FEFAF0] rounded-xl w-[350px] h-[400px]">
            <div className="inline-flex mt-10 text-base text-[#666]">
              <img
                src={SellerWoman}
                alt="Amina"
                style={{ height: "40px", width: "40px" }}
                className="img-fluid mx-auto mt-7 ml-3"
              />
              <span className="text-[#262626] text-lg m-4">
                Nana Ama Agyekumwaa
                <div className="flex gap-x-2 h-max items-center">
                  {/* Added 'items-center' */}
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <span className="text-[#6D6D6D]">1 hour ago</span>{" "}
                  {/* Moved inside the 'flex' container */}
                </div>
              </span>
            </div>

            <div className="font-Regular text-[#656565] text-lg pl-16 pr-16">
              The seller was responsive and provided all the information I
              needed. The cars condition matched the photos, and I appreciate
              the flexibility in pricing. Would recommend dealing with this
              seller.
            </div>
          </div>
          <div className="bg-[#FFF6F8] rounded-xl w-[350px] h-[400px]">
            <div className="inline-flex mt-10 text-base text-[#666] ml-1">
              <img
                src={SellerMan}
                alt="Amina"
                style={{ height: "40px", width: "40px" }}
                className="img-fluid mx-auto mt-7 ml-2"
              />
              <span className="text-[#262626] text-lg m-4">
                Prince Boateng
                <div className="flex gap-x-2 h-max items-center">
                  {" "}
                  {/* Added 'items-center' */}
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <span className="text-[#6D6D6D]">30 days ago</span>{" "}
                  {/* Moved inside the 'flex' container */}
                </div>
              </span>
            </div>
            <div className="font-Regular text-[#656565] text-lg pl-16 pr-16">
              While the car itself is great, I had some communication issues
              with the seller regarding the negotiation process. However, I am
              satisfied with the final deal and the vehicles quality.
            </div>
          </div>
          <div className="bg-[#F3FFF6] rounded-xl w-[350px] h-[400px]">
            <div className="inline-flex mt-10 text-base text-[#666] ml-1">
              <img
                src={SellerMan}
                alt="Amina"
                style={{ height: "40px", width: "40px" }}
                className="img-fluid mx-auto mt-7 ml-2"
              />
              <span className="text-[#262626] text-lg m-4">
                Prince Boateng
                <div className="flex gap-x-2 h-max items-center">
                  {" "}
                  {/* Added 'items-center' */}
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <img
                    src={StarRate}
                    alt="Frame"
                    style={{ height: "16px", width: "14px" }}
                    className=""
                  />
                  <span className="text-[#6D6D6D]">30 days ago</span>{" "}
                  {/* Moved inside the 'flex' container */}
                </div>
              </span>
            </div>
            <div className="font-Regular text-[#656565] text-lg pl-16 pr-16">
              While the car itself is great, I had some communication issues
              with the seller regarding the negotiation process. However, I am
              satisfied with the final deal and the vehicles quality.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
