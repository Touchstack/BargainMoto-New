import React from "react";
import Loyalty from "../../assets/images/Loyalty.svg";
import Frimps from "../../assets/images/Frimps.svg";

const HomeTrustedBy = () => {
  return (
    <div>
      <div className="font-Regular flex justify-center items-center text-[#191919] mt-5">
        Trusted by
      </div>
      <div className="font-Regular flex justify-center items-center lg:flex-row md:flex-row sm:flex-col m-5">
        <img
          src={Loyalty}
          alt="Loyalty.svg"
          style={{ height: "76px", width: "150px" }}
          className="pr-12"
        />
        <img
          src={Frimps}
          alt="Frimps.svg"
          style={{ height: "76px", width: "140px" }}
          className="pl-6"
        />
      </div>
    </div>
  );
};
export default HomeTrustedBy;
