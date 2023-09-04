import React, { useState } from "react";
const AboutDescriptionSection = () => {
  return (
    <div className="items-center bg-[#FAFAFA] lg:p-32 md:p-24">
      <div className="font-Regular text-xl max-w-[900px]">
        <h3 className="font-Bold text-[#191919] lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 ml-6">
          About Us
        </h3>
        <p className="font-Regular text-[#6D6D6D] lg:text-xl md:text-xl sm:text-lg text-xl">
          Bargain Moto is an online marketplace for private car sales directly
          between buyers and sellers. Our platform is aimed at making the entire
          process around buying and selling your cars, faster and easier.{" "}
        </p>
      </div>
    </div>
  );
};
export default AboutDescriptionSection;
