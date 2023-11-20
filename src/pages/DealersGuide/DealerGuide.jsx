import Navbar from "../../components/Navbar/Navbar";
import { Docs } from "./Docs";
import Footer from "../../components/Footer/Footer";

export default function DealersGuide() {
  const { buyer, seller } = Docs;

  return (
    <div>
      <Navbar />
      <div className="bg-[#8C394C] text-center lg:p-24 md:p-18 sm:p-8 p-8">
        <h3 className="font-Bold text-center lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-[#FFF]">
          Buyer and Seller Guide
        </h3>
      </div>
      <div className="container mx-auto py-16 px-8">
        {/* Buyers Guide */}
        <p className="font-SemiBold lg:text-2xl md:text-xl sm:text-xl text-xl py-2">
          {buyer.title}
        </p>
        <p className="font-Regular">{buyer.subTitle}</p>
        <ol className="py-6">
          {buyer.steps.map((element, i) => {
            return (
              <li key={i} className="py-6">
                <p className="font-SemiBold lg:text-xl md:text-xl sm:text-lg text-lg py-2">
                  {element.title}
                </p>

                <p className="font-Regular" style={{ textAlign: "justify" }}>
                  {element.details}
                </p>
              </li>
            );
          })}
        </ol>

        <hr className="border-t-2 border-dashed pb-12" />

        {/* Seller Guide */}
        <p className="font-SemiBold lg:text-2xl md:text-xl sm:text-xl text-xl py-2">
          {seller.title}
        </p>
        <p className="font-Regular">{seller.subTitle}</p>
        <ol className="py-6">
          {seller.steps.map((element, i) => {
            return (
              <li key={i} className="py-6">
                <p className="font-SemiBold lg:text-xl md:text-xl sm:text-lg text-lg py-2">
                  {element.title}
                </p>

                <p className="font-Regular" style={{ textAlign: "justify" }}>
                  {element.details}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
      <Footer />
    </div>
  );
}
