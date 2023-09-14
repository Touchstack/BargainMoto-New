import React, { useState } from "react";
import Honda from "../../assets/images/Honda-Logo.svg";
import Hyundai from "../../assets/images/Hyundai-Logo.svg";
import MercedezBenz from "../../assets/images/Mercedes-Logo.svg";
import Toyota from "../../assets/images/Toyota-Logo.svg";
import BMW from "../../assets/images/BMW-Logo.svg";
const HomeFavoriteBrands = () => {
  return (
    <div
      className="container mx-auto text-[#191919] text-center lg:py-24 md:py-24 sm:py-16 py-16 md:px-4 px-11
       lg:p-32 md:p-24"
    >
      <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl  lg:py-3 md:py-8 py-4">
        Favourite Brands
      </h3>
      <div className="font-Regular text-[#191919] text-md py-1">
        Explore cars from your favorite brands. Find what you're
        <p>looking for faster.</p>
      </div>
      <div className="py-16">
        <div className="container mx-auto text-center text-dark">
          <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 grid-cols-1 mt-5 gap-8 m-1">
            <div>
              <img
                src={Honda}
                alt="Honda-Logo"
                style={{ height: "66px", width: "112px" }}
                className="img-fluid mx-auto lg:mr-72 md:mx-auto"
              />
            </div>
            <div>
              <img
                src={Hyundai}
                alt="Hyundai-Logo"
                style={{ height: "66px", width: "112px" }}
                className="img-fluid mx-auto lg:mr-72 md:mx-auto"
              />
            </div>
            <div>
              <img
                src={MercedezBenz}
                alt="Mercedes-Logo"
                style={{ height: "66px", width: "112px" }}
                className="img-fluid mx-auto lg:mr-72 md:mx-auto"
              />
            </div>
            <div>
              <img
                src={Toyota}
                alt="Toyota-Logo"
                style={{ height: "66px", width: "112px" }}
                className="img-fluid mx-auto lg:mr-72 md:mx-auto"
              />
            </div>
            <div>
              <img
                src={BMW}
                alt="BMW-Logo"
                style={{ height: "66px", width: "112px" }}
                className="img-fluid mx-auto lg:mr-72 md:mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeFavoriteBrands;
