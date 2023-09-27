import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { PolicyDocs } from "./PolicyDocs";
import Footer from "../../components/Footer/Footer";

export default function PrivacyPolicy() {
  const { buyer, seller, Additions } = PolicyDocs;

  return (
    <div>
      <Navbar />
      <div className="bg-[#8C394C] text-center lg:p-24 md:p-18 sm:p-8 p-8">
        <h3 className="font-Bold text-center lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-[#FFF]">
          Bargain Moto Privacy Policy
        </h3>
      </div>
      <div className="container mx-auto py-16 px-8">
        {/* First Section */}
        <p className="font-SemiBold lg:text-2xl md:text-xl sm:text-xl text-xl py-2">
          YOUR CONSENT
        </p>
        <p className="font-Regular pb-12">
          By using our Services, you signify that you agree to the terms of this
          Privacy Policy (“Privacy Policy”).
        </p>

        <p className="font-SemiBold lg:text-2xl md:text-xl sm:text-xl text-xl py-2">
          {buyer.title}
        </p>
        <p className="font-Regular pb-12">{buyer.subTitle}</p>

        <hr className="border-t-2 border-dashed" />

        <ul className="py-6 list-disc">
          <p className="font-SemiBold lg:text-2xl md:text-xl sm:text-xl text-xl py-2">
            WHAT DO WE COLLECT?
          </p>
          {buyer.steps.map((element, i) => {
            return (
              <li key={i} className="py-6">
                {element.title && (
                  <p className="font-SemiBold lg:text-xl md:text-xl sm:text-lg text-lg py-2">
                    {element.title}
                  </p>
                )}

                <p className="font-Regular" style={{ textAlign: "justify" }}>
                  {element.details}
                </p>
              </li>
            );
          })}
        </ul>

        <hr className="border-t-2 border-dashed pb-12" />

        {/* Second Section */}
        <p className="font-SemiBold lg:text-2xl md:text-xl sm:text-xl text-xl py-2">
          {seller.title}
        </p>
        <p className="font-Regular">{seller.subTitle}</p>
        <ul className="py-6 list-disc">
          {seller.steps.map((element, i) => {
            return (
              <li key={i} className="py-4">
                <p className="font-Regular" style={{ textAlign: "justify" }}>
                  {element.details}
                </p>
              </li>
            );
          })}
        </ul>

        <hr className="border-t-2 border-dashed pb-12" />

        {/*Additional Sections*/}
        <ul className="py-6 list-disc">
          {Additions.map((element, i) => {
            return (
              <li key={i} className="py-4">
                <p className="font-SemiBold lg:text-xl md:text-xl sm:text-lg text-lg py-2">
                  {element.title}
                </p>

                <p className="font-Regular" style={{ textAlign: "justify" }}>
                  {element.details}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
