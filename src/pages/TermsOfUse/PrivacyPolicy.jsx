import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Docs } from "./Doc";
import Footer from "../../components/Footer/Footer";

export default function TermsOfUse() {
  const { main, others } = Docs;

  return (
    <div>
      <Navbar />
      <div className="bg-[#8C394C] text-center lg:p-24 md:p-18 sm:p-8 p-8">
        <h3 className="font-Bold text-center lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-[#FFF]">
          Bargain Moto Terms and Conditions of Use
        </h3>
      </div>
      <div className="container mx-auto py-16 px-8">
        <div className="pb-6">
          {main.map((element, i) => {
            return (
              <p
                key={i}
                className="font-Regular py-4"
                style={{ textAlign: "justify" }}
              >
                {element}
              </p>
            );
          })}
        </div>
        <div className="pb-6">
          {others.map((para, i) => {
            return (
              <div key={i} className="pb-12">
                <hr className="border-t-2 border-dashed pb-12" />
                <p
                  className="font-SemiBold py-4"
                  style={{ textAlign: "justify" }}
                >
                  {para.title}
                </p>

                {para.paragraphs.map((item, i) => {
                  return (
                    <div key={i}>
                      <p
                        className="font-Regular py-4"
                        style={{ textAlign: "justify" }}
                      >
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
